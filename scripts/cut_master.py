"""Cut bars out of the locked master and move the timing map to match (config/edit.json).

1. Audio: for each cut, the end point is refined by up to +-10 ms to the best waveform match with the start point
   (the cut lies inside a one-chord vamp), then joined with an equal-power crossfade of xfade_ms centred on the start.
   Writes audio/edit/distillation_job_edit.wav and copies it to public/audio/master.wav.
2. Timing: timing/timing_map_take.json -> timing/timing_map.json. A time t before a cut stays; t at or after its end
   moves earlier by the cut's length; beats inside a cut (and the duplicate at its end) are dropped (no words may fall inside one).

Usage: .venv/bin/python -I scripts/cut_master.py   then scripts/shot_times.py, scripts/export_srt.py
"""
import hashlib, json, shutil
from pathlib import Path
import numpy as np
import soundfile as sf

EDIT = json.load(open("config/edit.json"))
MASTER = json.load(open("config/master.json"))["locked"]
SRC, OUT = Path(MASTER["file"]), Path("audio/edit/distillation_job_edit.wav")
TM_IN, TM_OUT = Path("timing/timing_map_take.json"), Path("timing/timing_map.json")


def main():
    assert hashlib.sha256(SRC.read_bytes()).hexdigest() == MASTER["sha256"], "locked master changed"
    y, sr = sf.read(SRC, always_2d=True)
    info = sf.info(SRC)
    cuts = sorted(EDIT["cuts"], key=lambda c: c["from"])
    pieces, prev, applied = [], 0, []
    for c in cuts:
        a, b0 = int(round(c["from"] * sr)), int(round(c["to"] * sr))
        x = int(c["xfade_ms"] / 1000 * sr)
        ref = y[a - x // 2: a + x // 2 + int(0.05 * sr)].mean(1)
        best, b = -1e9, b0
        for d in range(-int(0.01 * sr), int(0.01 * sr) + 1, 4):
            seg = y[b0 + d - x // 2: b0 + d + x // 2 + int(0.05 * sr)].mean(1)
            s = float(np.dot(ref, seg) / (np.linalg.norm(ref) * np.linalg.norm(seg) + 1e-12))
            if s > best: best, b = s, b0 + d
        th = np.linspace(0, np.pi / 2, x)[:, None]
        pieces.append(y[prev: a - x // 2])
        pieces.append(y[a - x // 2: a + x - x // 2] * np.cos(th) + y[b - x // 2: b + x - x // 2] * np.sin(th))
        prev = b + x - x // 2
        applied.append({"from": a / sr, "to": b / sr, "removed_s": (b - a) / sr, "match": round(best, 3)})
    pieces.append(y[prev:])
    out = np.concatenate(pieces)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    sf.write(OUT, out, sr, subtype=info.subtype)
    shutil.copy(OUT, "public/audio/master.wav")
    sha = hashlib.sha256(OUT.read_bytes()).hexdigest()

    def mv(t):  # apply every cut at or before t
        r = t
        for c in applied:
            if r is None: break
            if t >= c["to"] - 0.0005: r = round(r - c["removed_s"], 3)
            elif t > c["from"] + 0.0005: r = None
        return r

    tm = json.load(open(TM_IN))
    for s in tm["sections"]:
        for k in ("start", "end"): s[k] = mv(s[k])
        for l in s["lines"]:
            for k in ("start", "end"): l[k] = mv(l[k])
            if "window" in l: l["window"] = [mv(v) if mv(v) is not None else v for v in l["window"]]
            for w in l["words"]:
                for k in list(w):
                    if k in ("start", "end") or k.endswith("_aligner"):
                        assert mv(w[k]) is not None, f"word inside a cut: {w}"
                        w[k] = mv(w[k])
    band = tm["beats"]["band"]
    if "bar_phase" in band and isinstance(band["bar_phase"], list) and len(band["bar_phase"]) == len(band["beats"]):
        keep = [i for i, t in enumerate(band["beats"]) if mv(t) is not None]
        band["bar_phase"] = [band["bar_phase"][i] for i in keep]
    for k in ("beats", "downbeats"):  # the beat on a cut's end lands on the beat at its start: keep one
        ts = [mv(t) for t in band[k] if mv(t) is not None]
        band[k] = [t for i, t in enumerate(ts) if i == 0 or t - ts[i - 1] > 0.05]
    tm["events"] = {k: mv(v) for k, v in tm["events"].items()}
    tm["events"]["music_end"] = round(len(out) / sr, 3)
    tm["audio"] = {**tm["audio"], "master": str(OUT), "sha256": sha, "duration_s": round(len(out) / sr, 3),
                   "take_map": str(TM_IN), "cuts": applied}
    tm["generated_by"] = "scripts/cut_master.py from " + str(TM_IN)
    json.dump(tm, open(TM_OUT, "w"), indent=1, ensure_ascii=False)
    print(json.dumps(applied), round(len(out) / sr, 3), sha)


if __name__ == "__main__":
    main()
