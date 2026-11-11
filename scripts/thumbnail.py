"""The YouTube thumbnail: src/Thumbnail.tsx's frame 110 (rendered by Remotion) at 1280x720, as JPEG quality 92.

Usage: npx remotion still src/index.ts Thumbnail out/thumbnail_full.png --frame=110 --gl=swiftshader
       .venv/bin/python -I scripts/thumbnail.py out/thumbnail_full.png [out=deliverables/distillation_job_thumbnail.jpg]
"""
import sys
from PIL import Image

src = sys.argv[1]
out = sys.argv[2] if len(sys.argv) > 2 else "deliverables/distillation_job_thumbnail.jpg"
Image.open(src).convert("RGB").resize((1280, 720), Image.LANCZOS).save(out, quality=92)
print(out)
