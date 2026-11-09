"""Write config/shot_descriptions.json from the shot-list table in docs/brief.md (run scripts/mirror_brief.py first).

Each shot ID gets its section, anchor, picture, on-screen text and asset type, for review overlays; scripts/shot_times.py
checks that config/shot_cues.json has the same IDs in the same order. Usage: python3 -I scripts/shot_descriptions.py
"""
import json
import re

rev = re.search(r"\(rev (\d+)\)", open("docs/brief.md").readline()).group(1)
desc = {"_doc": f"Section, anchor, picture, on-screen text and asset type per shot, from the brief's shot list (rev {rev}). "
                "Regenerate with scripts/shot_descriptions.py."}
for line in open("docs/brief.md"):
    if re.match(r"\| D\d", line):
        c = [x.strip() for x in line.strip().strip("|").split("|")]
        desc[c[0]] = {"section": c[1], "anchor": c[2], "picture": c[3], "text": c[4], "type": c[5]}
json.dump(desc, open("config/shot_descriptions.json", "w"), indent=1, ensure_ascii=False)
print(f"{len(desc) - 1} shots from brief rev {rev}")
