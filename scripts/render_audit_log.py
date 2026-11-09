"""D46 (closing bookend): the brief's audit log, rendered as a plain page for scripts/capture_page.mjs to screenshot.

Source: the "Audit log" part of docs/brief.md (from "**Audit log**" to the end of the Audit plan section), as written;
only Markdown is converted (tables, bold, links shown as their text, bullets). Every finding by every auditor is kept,
mistakes and catches alike. Output: public/media/real/audit_log.html.
Usage: python3 -I scripts/render_audit_log.py
"""
import html
import re
from pathlib import Path

src = Path("docs/brief.md").read_text().splitlines()
a = next(i for i, l in enumerate(src) if l.strip() == "**Audit log**")
b = next(i for i in range(a, len(src)) if src[i].startswith("## "))
lines = src[a:b]


def inline(t):
    t = html.escape(t)
    t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    return t


out, i = [], 0
while i < len(lines):
    l = lines[i]
    if l.startswith("|"):
        rows = []
        while i < len(lines) and lines[i].startswith("|"):
            cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
            if not all(set(c) <= set("-: ") for c in cells):
                rows.append(cells)
            i += 1
        head, body = rows[0], rows[1:]
        out.append("<table><tr>" + "".join(f"<th>{inline(c)}</th>" for c in head) + "</tr>"
                   + "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in body) + "</table>")
        continue
    if l.startswith("- "):
        items = []
        while i < len(lines) and lines[i].startswith("- "):
            items.append(f"<li>{inline(lines[i][2:])}</li>")
            i += 1
        out.append("<ul>" + "".join(items) + "</ul>")
        continue
    if l.strip():
        out.append(f"<p>{inline(l)}</p>")
    i += 1

page = f"""<!doctype html><html><head><meta charset="utf-8"><title>Audit log</title><style>
body {{ margin: 0; background: #ffffff; color: #1f2328; font: 15px/1.5 -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; }}
main {{ max-width: 1100px; margin: 0 auto; padding: 32px 40px 80px; }}
.path {{ font: 13px ui-monospace, monospace; color: #59636e; border-bottom: 1px solid #d1d9e0; padding-bottom: 10px; margin-bottom: 18px; }}
table {{ border-collapse: collapse; margin: 14px 0 22px; width: 100%; }}
th, td {{ border: 1px solid #d1d9e0; padding: 6px 12px; text-align: left; vertical-align: top; }}
th {{ background: #f6f8fa; font-weight: 600; }}
tr:nth-child(2n) td {{ background: #f6f8fa; }}
code {{ background: #eff1f3; padding: 1px 5px; border-radius: 4px; font-size: 13px; }}
</style></head><body><main><div class="path">The Distillation Job · brief · Audit plan · Audit log</div>
{chr(10).join(out)}
</main></body></html>
"""
Path("public/media/real").mkdir(parents=True, exist_ok=True)
Path("public/media/real/audit_log.html").write_text(page)
print(f"{len(lines)} lines from docs/brief.md:{a + 1}-{b} -> public/media/real/audit_log.html")
