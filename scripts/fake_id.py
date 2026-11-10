"""D39a (left): replace the generated card's garbled lettering ("FAKE FAKE IDOR") with a clean FAKE ID card, painted
in perspective onto the card in the picked still (D39a_l v2 s43). The robot's brass fingers, which overlap the card's
right edge, are kept (masked out of the paste). Card: cream laminate, FAKE ID in Alfa Slab One, a crayon doodle of a
ski-masked sock puppet where a photo would go, and blank lines. No real names, numbers, seals or faces (guardrails).
Output: takes/stills/D39a_l/D39a_l_fakeid.png (config/stills.json kept). Usage: .venv/bin/python -I scripts/fake_id.py
"""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SRC = "takes/stills/D39a_l/D39a_l_v2_s43.png"
OUT = "takes/stills/D39a_l/D39a_l_fakeid.png"
QUAD = [(778, 405), (1110, 356), (1156, 616), (815, 682)]   # TL, TR, BR, BL of the card, still px (1792x1008)

im = Image.open(SRC).convert("RGB")
W, H = 640, 420
card = Image.new("RGB", (W, H), (241, 233, 214))
d = ImageDraw.Draw(card)
d.rounded_rectangle((6, 6, W - 7, H - 7), radius=26, outline=(200, 60, 52), width=8)
d.rectangle((6, 6, W - 7, 96), fill=(200, 60, 52))
d.text((W / 2, 52), "FAKE ID", font=ImageFont.truetype("public/fonts/AlfaSlabOne-Regular.ttf", 66), fill=(244, 236, 220), anchor="mm")
# crayon doodle of a ski-masked sock puppet in the photo box
d.rounded_rectangle((36, 124, 236, 384), radius=12, outline=(120, 110, 100), width=4)
d.ellipse((76, 150, 196, 300), fill=(214, 150, 40))                    # mustard mask
d.rounded_rectangle((96, 200, 176, 236), radius=14, fill=(110, 110, 112))  # eye slot
d.ellipse((112, 208, 128, 226), fill=(30, 30, 30)); d.ellipse((146, 208, 162, 226), fill=(30, 30, 30))
d.rounded_rectangle((86, 296, 186, 380), radius=20, fill=(90, 90, 94))      # sock body
for y in (150, 205, 260, 315):                                              # blank lines
    d.line((270, y + 22, 600, y + 22), fill=(150, 140, 125), width=4)
    d.text((270, y - 6), ["NAME", "D.O.B.", "ISSUED BY", "SIGNATURE"][(y - 150) // 55],
           font=ImageFont.truetype("public/fonts/SpecialElite-Regular.ttf", 24), fill=(120, 110, 100))
card = card.filter(ImageFilter.GaussianBlur(0.8))

# perspective: coefficients mapping output (still) px -> card px
def coeffs(src, dst):
    A, b = [], []
    for (x, y), (u, v) in zip(dst, src):
        A += [[x, y, 1, 0, 0, 0, -u * x, -u * y], [0, 0, 0, x, y, 1, -v * x, -v * y]]
        b += [u, v]
    return np.linalg.solve(np.array(A, float), np.array(b, float))

c = coeffs([(0, 0), (W, 0), (W, H), (0, H)], QUAD)
warped = card.transform(im.size, Image.PERSPECTIVE, tuple(c), Image.BICUBIC)
mask = Image.new("L", im.size, 0)
ImageDraw.Draw(mask).polygon(QUAD, fill=255)
px = np.asarray(im).astype(int)
r, g, b = px[..., 0], px[..., 1], px[..., 2]
gold = (r > 110) & (g > 0.5 * r) & (b < 0.62 * r) & (r - b > 60)
from scipy.ndimage import binary_opening, label
lab, _ = label(binary_opening(gold, iterations=2))
outside = np.asarray(mask) == 0
# the fingers: gold regions that continue outside the card (the hand); crayon strokes inside the card don't
keep = set(np.unique(lab[outside & (lab > 0)]))
brass = np.isin(lab, list(keep)) & (lab > 0) & (np.arange(im.size[0])[None, :] > 1108)   # fingertips only reach x 1108+
m = np.asarray(mask).copy(); m[brass] = 0
mask = Image.fromarray(m).filter(ImageFilter.GaussianBlur(1.2))
# keep the scene's light: multiply the card by a blurred copy of the original card's brightness
shade = np.asarray(im.convert("L").filter(ImageFilter.GaussianBlur(25))).astype(float)
shade = np.clip(shade / np.percentile(shade[m > 0], 90), 0.6, 1.05)[..., None]
warped = Image.fromarray(np.clip(np.asarray(warped).astype(float) * shade, 0, 255).astype(np.uint8))
im.paste(warped, (0, 0), mask)
im.save(OUT)
print(OUT)
