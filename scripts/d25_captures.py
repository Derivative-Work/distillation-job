"""D25: crop the human's two real Open WebUI screenshots (reference/d25_raw/, copied from ~/Downloads on 2026-11-09)
to the chat pane, and mark the key sentence with a highlighter stroke (multiplied, so the text stays as captured).

Crops leave out the browser bar (LAN address), the sidebar (the human's other chat titles and name) and the input box.
The model name, qwen3.8:27b, stays visible in each (brief: hiding it would make the shot unverifiable).
Left: a fresh chat, "who made you" -> "I'm Qwen, a large language model independently developed by Alibaba Group."
Right: the same model's reply to the round-3 audit prompt ("AI Distillation Song Audit"), whose opening is
log/audits/round3_qwen3.8_run1.md line 1: "... I am Claude, made by Anthropic. ..."
Output: public/media/real/d25_{left,right}.png. Usage: .venv/bin/python -I scripts/d25_captures.py
"""
from PIL import Image, ImageChops, ImageDraw

RAW = "reference/d25_raw/"
JOBS = {   # name: (file, crop box, highlight box), original screenshot pixels
    "d25_left": ("who_made_you_2026-11-09_20-06-55.png", (540, 240, 1990, 620), (616, 516, 1738, 562)),
    "d25_right": ("song_audit_2026-11-09_20-06-31.png", (160, 220, 1980, 520), (1362, 328, 1828, 376)),
}
for name, (f, crop, hl) in JOBS.items():
    im = Image.open(RAW + f).convert("RGB")
    mark = Image.new("RGB", im.size, (255, 255, 255))
    ImageDraw.Draw(mark).rounded_rectangle(hl, radius=8, fill=(255, 226, 120))
    ImageChops.multiply(im, mark).crop(crop).save(f"public/media/real/{name}.png")
    print(name, im.crop(crop).size)
