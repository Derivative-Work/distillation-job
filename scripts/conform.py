"""Build composite shots from several takes: config/clips.json "composites" {shot: [segment, ...]}.

A segment is {"src": take path, "from": first frame, "to": end frame (exclusive), "reverse": bool, "speed": float}.
Segments are cut at 24 fps, optionally reversed and sped up, then joined end to end into
takes/clips/<shot>/<shot>_cut.mp4, which "kept" then points at (scripts/publish_picks.py copies it as usual).
Used at M4 for D14 (heads drop, then a bigger hydra rises: a reversed sink) and D41 (three match-cut close-ups).
Usage: python3 -I scripts/conform.py [shot ...]
"""
import json
import subprocess
import sys
from pathlib import Path

CFG = json.load(open("config/clips.json"))
for shot, segs in CFG.get("composites", {}).items():
    if sys.argv[1:] and shot not in sys.argv[1:]:
        continue
    inputs, chains = [], []
    for i, s in enumerate(segs):
        inputs += ["-i", s["src"]]
        f = f"[{i}:v]trim=start_frame={s['from']}:end_frame={s['to']},setpts=PTS-STARTPTS"
        if s.get("reverse"):
            f += ",reverse"
        if s.get("speed", 1) != 1:
            f += f",setpts=PTS/{s['speed']}"
        chains.append(f + f",fps=24,scale=1280:704,setsar=1[v{i}]")
    graph = ";".join(chains) + ";" + "".join(f"[v{i}]" for i in range(len(segs))) + f"concat=n={len(segs)}:v=1:a=0[v]"
    out = Path(f"takes/clips/{shot}/{shot}_cut.mp4")
    out.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", *inputs, "-filter_complex", graph, "-map", "[v]",
                    "-c:v", "libx264", "-crf", "16", "-pix_fmt", "yuv420p", str(out)], check=True)
    n = subprocess.run(["ffprobe", "-v", "error", "-count_frames", "-select_streams", "v", "-show_entries",
                        "stream=nb_read_frames", "-of", "csv=p=0", str(out)], capture_output=True, text=True).stdout.strip()
    print(f"{shot}: {out} ({n} frames)")
