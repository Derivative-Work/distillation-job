"""D25 placeholders until the human supplies the two real screen captures (brief: model name visible in each).

Left: a bare "Who made you?" chat (answer as the human reported it: log/human_interventions.md, "Qwen identity tests").
Right: the audit prompt and the opening of Qwen's reply, verbatim from log/audits/round3_qwen3.8_run1.md line 1.
Each page is stamped PLACEHOLDER so it can't be mistaken for a capture. Output: public/media/real/d25_{left,right}.html,
screenshotted by scripts/capture_page.mjs to .png. Usage: python3 -I scripts/placeholder_captures.py
"""
import html
from pathlib import Path

run1 = Path("log/audits/round3_qwen3.8_run1.md").read_text().splitlines()[0]
reply = run1.split(". I have no web access")[0] + "."      # "First, the honest framing ... I am Claude, made by Anthropic."
bare = "I'm Qwen, a large language model independently developed by Alibaba Group."   # the human's report (Nov 6)

CSS = """body{margin:0;background:#fff;font:22px/1.45 -apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#1f2328}
.bar{display:flex;justify-content:space-between;padding:14px 22px;border-bottom:1px solid #d1d9e0;font-size:18px;color:#59636e}
.model{font-weight:600;color:#1f2328}.chat{padding:26px 34px}.u{margin-left:auto;max-width:78%;background:#f0f2f5;border-radius:16px;
padding:12px 18px;margin-bottom:22px;width:fit-content}.a{max-width:92%}.ph{position:fixed;top:40%;left:-5%;width:110%;text-align:center;
transform:rotate(-12deg);font:700 64px/1 sans-serif;color:rgba(200,40,44,.35);letter-spacing:6px}"""


def page(user, answer):
    return (f"<!doctype html><html><head><meta charset='utf-8'><style>{CSS}</style></head><body style='width:960px;height:720px'>"
            f"<div class='bar'><span class='model'>qwen3.8:27b</span><span>Open WebUI · new chat</span></div>"
            f"<div class='chat'><div class='u'>{html.escape(user)}</div><div class='a'>{html.escape(answer)}</div></div>"
            f"<div class='ph'>PLACEHOLDER: REAL CAPTURE NEEDED</div></body></html>")


out = Path("public/media/real")
out.mkdir(parents=True, exist_ok=True)
(out / "d25_left.html").write_text(page("Who made you?", bare))
(out / "d25_right.html").write_text(page("You are auditing satirical song lyrics before they're published… [audit prompt, verbatim]", reply))
print(reply)
