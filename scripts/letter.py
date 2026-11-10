"""Lettering pass (human, 2026-11-10: "there's lots of blank sheets that have not been filled in, like on the puppets,
license plates, the vault, etc."): the brief's on-prop text, baked into the picked stills and clips.

Every lettered surface was generated blank (FLUX garbles text); this script finds each blank card in the picture and
writes its text on it, so it moves with the picture. config/lettering.json lists the shots: per shot, which kind of
surface to find (badge, plate, sign, card), where to look, size limits, and the text.

Detection: a card is a bright, low-saturation, compact blob (area/box >= min_fill) inside the shot's region and size
range. In a clip, blobs are linked frame to frame by nearest centre (tracks); a track's box size and angle are
smoothed over its life so the text doesn't jitter, and a frame where the blob shrinks (a hand over it) skips the text.
Text is drawn dark, multiplied into the card, at the card's angle (from the blob's second moments).

Numbers are fictional, from the main seed: badges are account numbers near 24,000 (the D03 corkboard, D13's
24,017 -> 24,018); plates are made-up, no state or country; tickets are small numbers.
Inputs: the current kept still/clip (config/stills.json, config/clips.json); outputs next to it with a _lettered
suffix, which config/*.json kept then points at (scripts/publish_picks.py copies them on).
Usage: .venv/bin/python -I scripts/letter.py [shot ...] [--preview]   (--preview: write one marked frame per shot)
"""
import json
import random
import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont
from scipy.ndimage import binary_opening, find_objects, label, uniform_filter

CFG = json.load(open("config/lettering.json"))
SEEDS = json.load(open("config/seeds.json"))
STILLS = json.load(open("config/stills.json"))["kept"]
CLIPS = json.load(open("config/clips.json"))["kept"]
FONTS = {"typed": "public/fonts/SpecialElite-Regular.ttf", "slab": "public/fonts/AlfaSlabOne-Regular.ttf",
         "serif": "public/fonts/OldStandard-Bold.ttf"}
INK = (34, 26, 22)


def grow(rgb, pt, ref, tol, max_area, opening=1):
    """The card under point pt: pixels within tol of the card's own colour ref, connected to pt. Returns
    (cx, cy, w, h, angle_deg, area, mean colour) or None."""
    H, W, _ = rgb.shape
    x, y = int(round(pt[0])), int(round(pt[1]))
    r = int(np.sqrt(max_area) * 1.2) + 4
    x0, y0, x1, y1 = max(0, x - r), max(0, y - r), min(W, x + r), min(H, y + r)
    sub = rgb[y0:y1, x0:x1].astype(np.float32)
    m = np.linalg.norm(sub - ref, axis=2) < tol
    m = binary_opening(m, iterations=opening)        # more opening cuts thin bridges to a same-coloured neighbour
    lab, _ = label(m)
    px, py = x - x0, y - y0
    k = lab[py, px] if 0 <= py < lab.shape[0] and 0 <= px < lab.shape[1] else 0
    if k == 0:                                    # the point fell on a speck: take the nearest component
        ys, xs = np.nonzero(lab)
        if not len(xs):
            return None
        j = np.argmin((xs - px) ** 2 + (ys - py) ** 2)
        if (xs[j] - px) ** 2 + (ys - py)[j] ** 2 > (0.25 * r) ** 2:
            return None
        k = lab[ys[j], xs[j]]
    sel = lab == k
    area = sel.sum()
    if area < 12 or area > max_area:
        return None
    ys, xs = np.nonzero(sel)
    cov = np.cov(np.vstack([xs, ys]))
    ev, evec = np.linalg.eigh(cov)
    ang = ((np.degrees(np.arctan2(evec[1, 1], evec[0, 1])) + 45) % 90) - 45   # the edge nearest horizontal
    if ev[1] / max(ev[0], 1e-6) < 1.15:
        ang = 0.0                                  # nearly square: the moments can't tell; cards hang level
    t = np.radians(ang)
    u = (xs - xs.mean()) * np.cos(t) + (ys - ys.mean()) * np.sin(t)
    v = -(xs - xs.mean()) * np.sin(t) + (ys - ys.mean()) * np.cos(t)
    w, h = np.percentile(u, 97) - np.percentile(u, 3), np.percentile(v, 97) - np.percentile(v, 3)
    return (xs.mean() + x0, ys.mean() + y0, w, h, ang, area, sub[sel].mean(0))


def track_surface(frames, s):
    """Follow one surface from its seed point (s["at"] = [x, y] in the frame s.get("frame", 0)) forwards and back."""
    n = len(frames)
    f0 = s.get("frame", 0) % n                    # -1: the last frame
    x, y = s["at"]
    H, W, _ = frames[0].shape
    # the card's colour: the brighter half of a 9x9 patch round the seed (a seed can land on the lanyard's hole)
    patch = frames[f0][max(0, int(y) - 4):int(y) + 5, max(0, int(x) - 4):int(x) + 5].reshape(-1, 3).astype(np.float32)
    ref = patch[patch.sum(1) >= np.median(patch.sum(1))].mean(0)
    tol, max_area = s.get("tol", 38), s.get("max_area", 0.06) * W * H
    out = {}
    for rng in (range(f0, n), range(f0 - 1, -1, -1)):
        pt, rf, lost, last_a = (x, y), ref.copy(), 0, None
        for f in rng:
            b = grow(frames[f], pt, rf, tol, max_area, s.get("opening", 1))
            if b is None and last_a is not None:       # fast motion or a brief occlusion: search round the last
                best = None                            # position for a card of about the same size and colour
                R = s.get("search_px", 60)
                for dx in range(-R, R + 1, 10):
                    for dy in range(-R, R + 1, 10):
                        c = grow(frames[f], (pt[0] + dx, pt[1] + dy), rf, tol, max_area, s.get("opening", 1))
                        if c is not None and 0.6 < c[5] / last_a < 1.6:
                            score = abs(np.log(c[5] / last_a)) + np.hypot(c[0] - pt[0], c[1] - pt[1]) / R
                            if best is None or score < best[0]:
                                best = (score, c)
                b = best[1] if best else None
            # a jump far from the last position is a different surface (a badge hidden, the region found the paper)
            if b is not None and last_a is not None and np.hypot(b[0] - pt[0], b[1] - pt[1]) > s.get("max_jump", 30) * (lost + 1) + 30:
                b = None
            # a match whose area jumps (the region leaked into a neighbour, or collapsed onto a speck) is not this surface
            if b is not None and last_a is not None and not 0.6 < b[5] / last_a < 1.6:
                b = None
            if b is None:
                lost += 1
                if lost > 8:
                    break
                continue
            lost, last_a = 0, b[5]
            ang = b[4] if abs(b[4]) <= s.get("max_angle", 14) else 0.0   # cards hang near level: a big tilt is the
            out[f] = (b[0], b[1], b[2], b[3], ang, b[5])                  # moments misreading a near-square card
            pt, rf = (b[0], b[1]), 0.8 * rf + 0.2 * b[6]
    return out


def card_text(kind, rnd, spec, i):
    if "texts" in spec:
        return spec["texts"][i % len(spec["texts"])]
    if kind == "badge":
        return f"{rnd.randint(23800, 24400):,}"
    if kind == "plate":
        letters = "ABCDEFGHJKLMNPRSTUVWXYZ"
        return f"{rnd.choice(letters)}{rnd.choice(letters)}{rnd.choice(letters)}·{rnd.randint(100, 999)}"
    if kind == "ticket":
        return f"No. {rnd.randint(100, 999)}"
    return spec.get("text", "")


def draw(img, b, text, spec):
    """Text multiplied into the card blob b=(cx, cy, w, h, ang)."""
    cx, cy, w, h, ang = b[:5]
    fill = spec.get("fill", 0.78)
    lines = text.split("\n")
    font_path = FONTS[spec.get("font", "typed")]
    fs = int(min(h * fill / (len(lines) * 1.15), 400))
    while fs > 4:
        f = ImageFont.truetype(font_path, fs)
        tw = max(f.getlength(l) for l in lines)
        if tw <= w * fill:
            break
        fs -= 1
    if fs < spec.get("min_font_px", 7):
        return img
    pad = int(fs * 1.5)
    tile = Image.new("L", (int(tw + 2 * pad), int(fs * 1.15 * len(lines) + 2 * pad)), 0)
    d = ImageDraw.Draw(tile)
    for k, l in enumerate(lines):
        d.text((tile.width / 2, pad + fs * 1.15 * (k + 0.5)), l, font=f, fill=255, anchor="mm")
    tile = tile.rotate(-ang, resample=Image.BICUBIC, expand=True)
    ox, oy = int(cx - tile.width / 2), int(cy - tile.height / 2)
    alpha = np.zeros(img.shape[:2], np.float32)
    x0, y0 = max(0, ox), max(0, oy)
    x1, y1 = min(img.shape[1], ox + tile.width), min(img.shape[0], oy + tile.height)
    if x1 <= x0 or y1 <= y0:
        return img
    alpha[y0:y1, x0:x1] = np.asarray(tile)[y0 - oy:y1 - oy, x0 - ox:x1 - ox] / 255.0 * spec.get("ink", 0.9)
    ink = np.array(INK, np.float32)
    a = alpha[..., None]
    return (img.astype(np.float32) * (1 - a) + (img.astype(np.float32) * ink / 255.0) * a).astype(np.uint8)


def smooth(track, n):
    """Per-frame boxes (cx, cy, w, h, angle), each smoothed over +-3 frames; a frame where the surface's area dropped
    well below its neighbours' (a hand over it) is skipped. Size is per frame: a plate grows as the van comes closer."""
    fs = sorted(track)
    out = {}
    for f in fs:
        near = [track[g] for g in fs if abs(g - f) <= 3]
        if track[f][5] < 0.7 * np.median([b[5] for b in near]):
            continue
        out[f] = tuple(np.median([b[k] for b in near]) if k == 4 else np.mean([b[k] for b in near]) for k in range(5))
    return out


def letter_frames(frames, spec, rnd, n_total):
    out = [fr.copy() for fr in frames]
    texts = []
    for i, srf in enumerate(spec["surfaces"]):
        text = srf.get("text") or card_text(spec["kind"], rnd, spec, i)
        texts.append(text)
        tr = {}
        for seed in srf.get("seeds", [srf]):           # several seeds (e.g. both ends of a clip) merge into one track
            for f, b in track_surface(frames, {**srf, **seed}).items():
                tr.setdefault(f, b)
        fs = sorted(tr)                                  # bridge short gaps (motion blur) by interpolating
        for f0, f1 in zip(fs, fs[1:]):
            if 1 < f1 - f0 <= srf.get("max_gap", 8):
                for f in range(f0 + 1, f1):
                    k = (f - f0) / (f1 - f0)
                    tr[f] = tuple((1 - k) * a + k * b for a, b in zip(tr[f0], tr[f1]))
        # a number that appears and vanishes mid-shot reads worse than a blank card: a surface tracked for less than
        # min_cover of the shot gets no text at all (the shot stays as generated there; reported as "(blank)")
        if len(tr) < max(spec.get("min_life", 0.3), spec.get("min_cover", 0.85)) * n_total:
            texts[-1] += f" (blank: tracked {len(tr)}/{n_total})"
            continue
        until = srf.get("until", n_total)               # a surface that's covered from some frame on (checked by eye)
        for f, b in smooth(tr, n_total).items():
            if f < until:
                out[f] = draw(out[f], b, text, {**spec, **srf})
    return out, spec["surfaces"], texts


def run(shot, preview=False):
    spec = CFG["shots"][shot]
    rnd = random.Random(f"{SEEDS['main']}-{shot}")
    src_id = spec.get("source", shot)
    if src_id in CLIPS and spec.get("type", "clip") == "clip":
        src = Path(CLIPS[src_id])
        w, h = 1280, 704
        raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", str(src), "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
                             capture_output=True, check=True).stdout
        frames = list(np.frombuffer(raw, np.uint8).reshape(-1, h, w, 3))
        out, keep, texts = letter_frames(frames, spec, rnd, len(frames))
        dst = src.with_name(src.stem.replace("_lettered", "") + "_lettered.mp4")
        if preview:
            mid = len(out) // 2
            Image.fromarray(out[mid]).save(f"{sys.argv[0].rsplit('/', 2)[0]}/../renders/letter_{shot}.png")
        p = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{w}x{h}",
                              "-r", "24", "-i", "-", "-c:v", "libx264", "-crf", "14", "-pix_fmt", "yuv420p", str(dst)],
                             stdin=subprocess.PIPE)
        for fr in out:
            p.stdin.write(np.ascontiguousarray(fr).tobytes())
        p.stdin.close(); p.wait()
        return dst, len(keep), texts
    k = STILLS[src_id]
    src = Path(f"takes/stills/{src_id}/{k if isinstance(k, str) else f'{src_id}_s{k}'}.png")
    fr = np.asarray(Image.open(src).convert("RGB"))
    out, keep, texts = letter_frames([fr], spec, rnd, 1)
    dst = src.with_name(src.stem.replace("_lettered", "") + "_lettered.png")
    Image.fromarray(out[0]).save(dst)
    return dst, len(keep), texts


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    for shot in args or list(CFG["shots"]):
        dst, n, texts = run(shot, "--preview" in sys.argv)
        print(f"{shot}: {n} surfaces {texts[:8]} -> {dst}")
