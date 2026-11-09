# Production log

Append-only. One entry per generation, render or analysis step.

## 1. 2026-11-08 — Project setup and inputs

- Read the brief (rev 37) with the docs tools; mirrored to `docs/brief.md` (code blocks for the style prompt, lyrics v1.2 and the audit prompt included). The brief has no milestones section; see `log/decisions.md` 1.
- Planning chat https://claude.ai/share/cd15ffd8-ec3f-43bd-b916-282c92b2e116: `node scripts/fetch_share.mjs <url> docs/planning_chat/planning_chat` → `planning_chat.json` (snapshot "In-progress song: The Distillation Job", taken 2026-11-09T04:04:34Z, 24 messages, 2026-11-04 to 2026-11-06); `python3 -I scripts/chat_snapshot_to_md.py … > planning_chat.md`. Message indices 20–21 are absent (an edited branch); the share shows the kept branch.
- The snapshot carries the second Qwen 3.8 audit run in full (index 22), saved verbatim to `log/audits/round3_qwen3.8_run2.md`. The ChatGPT, Gemini, GLM and first Qwen outputs are not in it: those messages are one-line stubs ("Here's GLM"), so the pasted text didn't survive the share. Needs the human.
- Suno take: `node scripts/fetch_suno.mjs https://suno.com/s/j1s587VV1wqbvtr8 docs/suno`; `python3 -I scripts/suno_clip.py docs/suno 173da502-3e80-4c9f-8d6e-039c58032724` → `docs/suno/clip.json`, `docs/suno/lyrics.txt` (copied to `lyrics/as_pasted.txt`).
- Lyrics as pasted = brief v1.2 verbatim, directions in brackets left in, except that pre-chorus 2 and chorus 2 are written out where the brief has empty headers.
- Audio: `audio/track/Distillation (Allegedly).wav` (48 kHz stereo, 264.8 s, sha256 `7fe6dc5a…`) and `.mp3` (sha256 `484cfa0a…`) from `~/Downloads`; stems unzipped from `Distillation (Allegedly) Stems.zip` (sha256 `e8346876…`) to `audio/stems/`: 12 stems (lead and backing vocals, drums, bass, guitar, keyboard, percussion, strings, synth, other, brass, woodwinds), all 48 kHz stereo, 264.8 s.
- Environment: `uv sync` from Buy It on Margin's `pyproject.toml`/`uv.lock` (renamed) → `.venv`; `npm install` (puppeteer 24.43.1).

## 2. 2026-11-08 — Transcription (evidence for M1)

- `NLTK_DATA=$PWD/.venv/nltk_data .venv/bin/python scripts/transcribe_vocals.py "audio/stems/0 Lead Vocals.wav" timing/whisper_lead.json`, and the same on `1 Backing Vocals.wav` → `timing/whisper_backing.json` (WhisperX 3.8.6, large-v3; logs beside them).
- First run failed: this nltk refuses `~/nltk_data` because it is group-writable. Not changed (outside the project); `punkt_tab` downloaded instead to `.venv/nltk_data` (umask 022, `go-w`) and pointed to with `NLTK_DATA`.
- Every section is sung in order: intro (spoken) 8.0–27.8 s, verse 1 45.3 s, pre-chorus 76.6 s, chorus 81.5 s, verse 2 ~104 s, pre-chorus 2 133.7 s, chorus 2 138.5 s, breakdown 158.0 s, bridge ~175 s, verse 3 192.1 s, final chorus 219.4 s, outro 249.0–259.8 s; the take runs to 264.8 s.
- The full pass compresses the breakdown (28.8, "That was June" and the third number inside 166.2–167.3 s, the number heard as "150"). Focused passes on 0–14 s and 156–176 s (`timing/focus/`, offsets added back): "28.8" 166.44, "That was June" 167.15, **"151" 168.65**, "Peaking at three mil a day" 169.07–171.1, "…bigger van" 173.77. The sung number matches the lyrics.
- Candidates for the human's ear (listening clips, from the full mix, in `audio/check/`: `listen_intro.wav` 0–12 s, `listen_chorus1_tag.wav` 92–106 s, `listen_breakdown.wav` 156–176 s); logged in `log/ai_changes.md`.

## 3. 2026-11-08 — Audits filed

- The human's four audit files copied byte for byte from `~/Downloads/distillation-job-{chatgpt,gemini,glm,qwen}-audit.md` to `log/audits/round{1_chatgpt,1_gemini,2_glm,3_qwen3.8_run1}.md`; the second Qwen run (planning chat, index 22) to `round3_qwen3.8_run2.md`, verbatim with no added header (step 1's header comment moved to `log/audits/README.md`, with each file's provenance and sha256). The Downloads Qwen file is the first run: it differs from the chat's second run and has the first run's findings (the "early 2025" date claim, the NYT suit).

## 4. 2026-11-08 — Brief edited (rev 37 → 43), on the human's instruction

Direct edits, not suggestions, with the docs tools:
- Lyrics section: "so all nine auditors judge the same text" → "so every auditor judges the same text".
- Audit plan: new paragraph "The set as run" before "Rules for the runs": four auditors, closed by the human on 2026-11-08; DeepSeek, Kimi, MiniMax, Grok, the control and the Qwen run of record not run, so there is no Qwen stake disclosure as Qwen.
- End card: "[models, dates]" → "ChatGPT (OpenAI) and Gemini (Google), Nov 5, 2026; GLM (Z.ai) and Qwen 3.8 (Alibaba, run locally), Nov 6, 2026"; "[repo link]" → "github.com/Derivative-Work/distillation-job (log/audits/)".
- Checklist: "All nine audits…" → "All four audits… (set closed by the human on November 8, 2026)"; "Short final audit pass on v1.1 once the nine v1.0 audits are in" → "Short final audit pass on v1.2".
- Open items: the title is confirmed; control auditor: none.
- New section "Milestones and review gates" before "Guardrails, checklist and open items": M1–M6 and "Done when", adapted from Buy It on Margin.
- Mirror: `python3 -I scripts/mirror_brief.py <saved read> ` → `docs/brief.md` (rev 43; new script, the converter from step 1). Diff against the rev 37 mirror shows only these edits.

## 5. 2026-11-08 — Post-filter (music-deslop M6f 10k)

- On the human's instruction, the agent ran it. music-deslop at commit `68441e2` (clean tree), the same release chain as Buy It on Margin:
  `cd ~/Code/music-deslop && uv run python -m postfilter.infer --in "<repo>/audio/track/Distillation (Allegedly).wav" --out <repo>/audio/postfilter/distillation_job_postfilter.wav --ckpt ~/Code/music-deslop-data/release/m6f_10k.safetensors --source suno` (strength 1.0, null latent; log `audio/postfilter/infer.log`). 22 s wall clock, 7.1 GB peak RAM, on the RTX 5090.
- Output: 264.8 s, 48 kHz stereo, peak −2.59 dBFS (take −2.84), sha256 `0b0d82c8…`. 0-sample lag against the take (cross-correlation over 60–70 s). Change −35.2 dB below the music overall, −39.4 to −32.9 dB in every 2 s window.
- A/B for the human: `audio/check/ab_chorus1_{raw,postfilter}.wav` (76–100 s: pre-chorus 1 and chorus 1, the dense percussion and sibilance the brief names).
- The brief's "one master with it and one without": the take needs no edit so far, so the two masters are the take and this file, until M1 says otherwise.
