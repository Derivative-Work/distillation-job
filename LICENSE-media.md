# Licence for the video and its assets

Copyright 2026 Albert Armea.

"The Distillation Job" (the video) and its assets are licensed under the
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International licence](https://creativecommons.org/licenses/by-nc-sa/4.0/)
(CC BY-NC-SA 4.0). The full legal code is in [LICENSES/CC-BY-NC-SA-4.0.txt](LICENSES/CC-BY-NC-SA-4.0.txt).

The code is under the MIT licence instead: see [LICENSE](LICENSE).

## What this covers

- The video in all its cuts: the main video and the four vertical Shorts, with their captions and the thumbnail.
- The music: the Suno v6 take, its stems, the post-filtered take, the edited master and the end-section bounce.
- The stills, clips and lettered takes, and the picks as the edit uses them.
- The on-screen text: the claims card, the citation chips, the end cards and every other card or label in `config/`,
  and the frames the code renders from them.
- The production record, written by the agent: the logs and prompts under `log/` and `shots/`, the timing maps, the
  lyrics files and the documents under `docs/`.
- The planning chat in `docs/planning_chat/`.

## What this doesn't cover

- **Code** (`scripts/`, `src/`, `config/`, `comfy/api/` and the build files): MIT, see [LICENSE](LICENSE). Where a
  source file holds both code and on-screen text or design, the code is MIT, and the frames it renders are
  CC BY-NC-SA.
- **Remotion**, which renders the video from `src/`, is not part of this repository. It is used under its own
  [Remotion License](https://www.remotion.dev/license): free for individuals, small companies and non-profits; larger
  companies need a company licence to render this project.
- **The ComfyUI workflow template** (`comfy/api/video_ltx2_3_i2v.api.json`, the API form of ComfyUI's
  `video_ltx2_3_i2v` template): from Comfy Org's `comfyui-workflow-templates` package, MIT, copyright 2023-present
  Comfy Org.
- **Little Switch** (`src/defaultOn/`): the rig and palette are copied unchanged from Default On, by the same author,
  and stay under that project's terms; the frames of the cameo are covered as above.
- **Fonts** (`public/fonts/`): Alfa Slab One and Old Standard TT under the SIL Open Font License 1.1, and Special Elite
  under the Apache License 2.0, each by its authors (the licence file beside each font).
- **The auditors' outputs** in `log/audits/` (ChatGPT, Gemini, GLM, Qwen 3.8) are kept verbatim as a record of the
  audit, and the audit-log sequence renders them. They are offered here only as far as each provider's terms allow.
- **The chat interfaces in the real captures**: the claude.ai interface in the research-chat capture
  (`public/media/real/research_chat.png`) belongs to Anthropic, and the Open WebUI interface in the D25 screenshots
  (`public/media/real/d25_*.png`) to its makers; the chats' text is covered as above, except the models' replies,
  which are records as with the audits.
- **The Suno page records** in `docs/suno/` are Suno's metadata for the take, kept as a record.
- **The news reports, advisories and company statements** behind the claims card and chips: the card states claims
  from them, with links under [Sources](README.md#sources). They aren't reproduced here.

## Attribution

Credit "The Distillation Job" by Albert Armea, made with Claude Code (Opus 5.5) and Suno v6, licensed CC BY-NC-SA 4.0,
with a link to https://github.com/Derivative-Work/distillation-job.
