"""Music under the end section (claims card D45, audit log D46, end card D47): a new bounce from the stems with the
vocals muted, run through the music-deslop post-filter as the master was (human, 2026-11-09: "much like how Sandbox
Rhapsody did it, make a new bounce that mutes the vocals and run the postfilter atop that").
Adapted from ../sandbox-rhapsody/scripts/cards_audio.py (read only).

1. Bounce: every stem except `0 Lead Vocals` and `1 Backing Vocals` (muted throughout), summed as Suno exported them,
   from START_S minus PREROLL_S of context for the model to the end of the song (264.8 s). A lookahead peak limiter
   (Sandbox Rhapsody's, same settings) catches the raw stem sum's peaks, as Suno's mix was limited.
2. Post-filter: music-deslop M6f 10k with the master's flags (`--source suno`, strength 1.0; production log 5).
3. Trim the pre-roll; start on START_S with a 10 ms fade-in. The song's own ending is kept as it is.

START_S: the end section runs END_SECTION_S (from src/Main.tsx's frame counts); 264.8 - that = 102.1 s, snapped back to
the downbeat at 100.972 s (the instrumental bar after chorus 1); since D46 gained its holds, 92.206 s (two bars into chorus 1), so the song's real ending lands on the last credit,
which holds the difference (Main.tsx reads timing/cards_audio.json's duration).

Usage: .venv/bin/python -I scripts/cards_audio.py  ->  audio/cards/cards_bounce_{raw,deslop}.wav,
       public/audio/cards.wav, timing/cards_audio.json
"""
import json
import subprocess
from pathlib import Path

import numpy as np
import soundfile as sf

ROOT = Path(__file__).resolve().parents[1]
STEMS = ROOT / "audio/stems"
MUTED = {"0 Lead Vocals", "1 Backing Vocals"}
LIMIT_CEILING_DB = -1.0
LOOKAHEAD_S = 0.005
RELEASE_S = 0.08
START_S = 85.635  # a downbeat (was 100.972, then 92.206: D46 grew for its holds, D45 for the M6 wording) (timing/timing_map.json beats.band.downbeats)
PREROLL_S = 4.0
DESLOP = Path.home() / "Code/music-deslop"
CKPT = Path.home() / "Code/music-deslop-data/release/m6f_10k.safetensors"
RAW, DESLOPPED = (ROOT / "audio/cards" / f for f in ("cards_bounce_raw.wav", "cards_bounce_deslop.wav"))
OUT = ROOT / "public/audio/cards.wav"


def bounce():
    names = sorted(p for p in STEMS.glob("*.wav") if p.stem not in MUTED)
    a = START_S - PREROLL_S
    mix, sr = None, None
    for p in names:
        y, sr = sf.read(p, start=int(round(a * 48000)), always_2d=True)
        mix = y if mix is None else mix + y
    mix, gr = limit(mix, sr)
    RAW.parent.mkdir(parents=True, exist_ok=True)
    sf.write(RAW, mix, sr, subtype="FLOAT")
    return [p.name for p in names], sr, gr


def limit(x, sr):
    """Sandbox Rhapsody's lookahead peak limiter, unchanged."""
    from scipy.ndimage import minimum_filter1d
    ceil = 10 ** (LIMIT_CEILING_DB / 20)
    peak = np.abs(x).max(axis=1)
    need = np.minimum(1.0, ceil / np.maximum(peak, 1e-12))
    L = int(LOOKAHEAD_S * sr)
    g = minimum_filter1d(need, size=2 * L + 1, mode="nearest")
    k = 1 - np.exp(-1 / (RELEASE_S * sr))
    out = np.empty_like(g)
    cur = 1.0
    for i, v in enumerate(g):
        cur = v if v < cur else cur + (min(v, 1.0) - cur) * k
        out[i] = cur
    win = np.hanning(L + 1)
    out = np.convolve(out, win / win.sum(), mode="same")
    y = x * out[:, None]
    return y, {"ceiling_db": LIMIT_CEILING_DB, "lookahead_s": LOOKAHEAD_S, "release_s": RELEASE_S,
               "in_peak_dbfs": round(20 * np.log10(peak.max()), 2),
               "out_peak_dbfs": round(20 * np.log10(np.abs(y).max()), 2),
               "max_reduction_db": round(-20 * np.log10(out.min()), 2),
               "time_reducing_s": round(float((out < 0.999).sum()) / sr, 2)}


def deslop():
    cmd = ["uv", "run", "python", "-m", "postfilter.infer", "--in", str(RAW), "--out", str(DESLOPPED),
           "--ckpt", str(CKPT), "--source", "suno"]
    subprocess.run(cmd, cwd=DESLOP, check=True)
    return cmd


def finish(sr):
    y, sr2 = sf.read(DESLOPPED, always_2d=True)
    assert sr2 == sr == 48000
    out = y[int(round(PREROLL_S * sr)):]
    fi = int(0.01 * sr)
    out[:fi] *= np.linspace(0, 1, fi)[:, None]
    peak = np.abs(out).max()
    if peak > 10 ** (-0.1 / 20):
        out *= 10 ** (-0.1 / 20) / peak
    OUT.parent.mkdir(parents=True, exist_ok=True)
    sf.write(OUT, out, sr, subtype="PCM_24")
    return len(out) / sr, 20 * np.log10(np.abs(out).max())


def main():
    stems, sr, gr = bounce()
    cmd = deslop()
    dur, peak = finish(sr)
    info = {"stems": stems, "muted": sorted(MUTED), "limiter": gr, "start_song_s": START_S, "preroll_s": PREROLL_S,
            "duration_s": round(dur, 4), "peak_dbfs": round(peak, 2),
            "postfilter": " ".join(cmd[2:]), "postfilter_repo": str(DESLOP),
            "postfilter_commit": subprocess.run(["git", "rev-parse", "HEAD"], cwd=DESLOP, capture_output=True,
                                                text=True).stdout.strip(),
            "output": str(OUT.relative_to(ROOT))}
    (ROOT / "timing/cards_audio.json").write_text(json.dumps(info, indent=1) + "\n")
    print(info)


if __name__ == "__main__":
    main()
