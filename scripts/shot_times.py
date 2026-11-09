"""M1: resolve every shot cue (config/shot_cues.json) to take time and frames: timing/shot_times.json.

Adapted from Buy It on Margin. Cues: "Section|line|word" (the word's start), "end:…", "mid:…", "t:<s>",
"section:<name>", "pre"/"post" for shots before or after the music (D01; D45-D47), whose lengths are set at M4,
and "retired" for IDs whose shot was removed (the ID never changes or gets reused).
- snap: move the start onto a band beat: the beat at or just before the word if within 200 ms (sung onsets lag the
  beat), else the nearest within half a beat.
- Reports shots shorter than the brief's text needs once cards exist (M2); for now, shots under 1.5 s.
Frames at 24 fps; frame = round(t * 24). Usage: python3 -I scripts/shot_times.py
"""
import json
from pathlib import Path

CUES, TIMING, OUT, FPS = Path("config/shot_cues.json"), Path("timing/timing_map.json"), Path("timing/shot_times.json"), 24
SHORT_S = 1.5


def resolve(cue, tm):
    if cue.startswith("t:"):
        return float(cue[2:]), cue
    if cue.startswith("section:"):
        return next(s for s in tm["sections"] if s["name"] == cue[8:])["start"], cue
    kind, _, ref = cue.partition(":") if cue[:4] in ("end:", "mid:") else ("start", "", cue)
    section, line, word = ref.split("|")
    w = next(s for s in tm["sections"] if s["name"] == section)["lines"][int(line)]["words"][int(word)]
    t = {"start": w["start"], "end": w["end"], "mid": (w["start"] + w["end"]) / 2}[kind]
    return t, f"{ {'start': '', 'end': 'end of ', 'mid': 'middle of '}[kind]}{w['w']!r} ({section} {line}.{word})"


def snap(t, beats, half):
    before = [b for b in beats if b <= t + 0.03]
    if before and t - before[-1] <= 0.2:
        return before[-1]
    b = min(beats, key=lambda x: abs(x - t))
    return b if abs(b - t) <= half else t


def main():
    tm = json.load(open(TIMING))
    beats = tm["beats"]["band"]["beats"]
    half = (beats[-1] - beats[0]) / (len(beats) - 1) / 2
    end_music = tm["audio"]["duration_s"]
    cues = json.load(open(CUES))["shots"]
    rows = []
    for s in cues:
        if s["cue"] in ("pre", "post", "retired"):
            continue
        t, label = resolve(s["cue"], tm)
        rows.append({**s, "t": snap(t, beats, half) if s.get("snap") else t, "raw": t, "label": label})
    if [r["t"] for r in rows] != sorted(r["t"] for r in rows):
        raise SystemExit("shot cues are out of order")
    out, short = {}, []
    for s in cues:
        if s["cue"] in ("pre", "post", "retired"):
            out[s["id"]] = {"placement": {"pre": "before the music", "post": "after the music", "retired": "retired"}[s["cue"]],
                            "start": None, "end": None, "note": s.get("note")}
    for i, r in enumerate(rows):
        end = rows[i + 1]["t"] if i + 1 < len(rows) else end_music
        d = {"start": round(r["t"], 3), "end": round(end, 3), "duration": round(end - r["t"], 3),
             "start_frame": round(r["t"] * FPS), "end_frame": round(end * FPS), "cue": r["label"],
             "snapped_ms": round((r["t"] - r["raw"]) * 1000)}
        if r.get("note"):
            d["note"] = r["note"]
        out[r["id"]] = d
        if end - r["t"] < SHORT_S:
            short.append(f"{r['id']}: {end - r['t']:.2f} s")
    order = [s["id"] for s in cues]
    json.dump({"generated_by": "scripts/shot_times.py", "fps": FPS, "music_end": end_music,
               "master_sha256": tm["audio"]["sha256"], "shots": {k: out[k] for k in order},
               "short_shots": short}, open(OUT, "w"), indent=1, ensure_ascii=False)
    for k in order:
        s = out[k]
        if s["start"] is None:
            print(f"{k:5s} {s['placement']}")
            continue
        print(f"{k:5s} {s['start']:7.2f}-{s['end']:7.2f} ({s['duration']:5.2f} s, f{s['start_frame']}-{s['end_frame']})"
              f" snap {s['snapped_ms']:+4d}ms  {s['cue']}")
    print(f"music ends {end_music:.2f} s; shots under {SHORT_S} s:", *short or ["none"], sep="\n  ")


if __name__ == "__main__":
    main()
