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

## 6. 2026-11-08 — Brief rev 44; lyrics as sung

- Brief checklist: "Short final audit pass on v1.2" → "…: held off by the human on November 8, 2026, since anything it finds can be handled in on-screen text" (direct edit). `docs/brief.md` patched to match (that line and the rev).
- `lyrics/as_sung.txt`: v1.2 with the human's listening notes. "Alright," is its own line (Suno split it from "crew."); chorus 1 ends with "And stroll right out the door" twice; directions shortened to section notes. Sections named uniquely (Pre-chorus 1/2, Chorus 1/2) for the timing map.

## 7. 2026-11-08 — M1: timing map

- `timing/guide/vocals.wav`: lead + backing stems summed, mono (no edit to mirror; git-ignored).
- `config/master.json`: candidates raw and post-filtered, timing reference = the raw take (same timing, step 5), not locked.
- `config/timing.json`: line windows the transcript can't give: Intro 0 ("Alright," 4.2–5.6 s, from the lead stem's level), Pre-chorus 1/2 line 0 ("Rate limit?" heard as "Radial energy"/"Radling it"), Breakdown 0–4 (focused pass, step 2).
- `NLTK_DATA=$PWD/.venv/nltk_data .venv/bin/python -I scripts/timing_map.py` (adapted from Buy It on Margin: no guide edits, no coda/silence, beats over the whole take on `2 Drums.wav`) → `timing/timing_map.json`, `timing/as_sung_{lines,words}.srt`. First run stopped on the two pre-chorus lines with no anchor; second on a stereo guide (made mono).
- Beats: 109.96 bpm (librosa; the style prompt said 112), 480 beats 0.615–262.618 s, median 0.546 s, all intervals 0.488–0.615 s (the irregular ones only in the first 2 s and the fading outro); bar phase 3 (low-band strength 349.7 vs 222.8 next).
- Sections: Intro 0–27.74, Verse 1 45.31–76.30, Pre-chorus 1 76.52, Chorus 1 81.54–103.42, Verse 2 106.67, Pre-chorus 2 133.55, Chorus 2 138.50–155.72, Breakdown 158.04–174.14, Bridge 175.10–192.01, Verse 3 192.06–219.22, Final chorus 219.43–236.72, Outro 239.07–264.80. 602 words; 44 with aligner score < 0.3, mostly short words and fast verse-3 lines (listed in the script output), to check in the review video.
- Instrumental stretches with no lyric: 27.7–45.3 s (after the intro), 103.4–106.7 s, 155.7–158.0 s, 236.7–239.1 s.

## 8. 2026-11-08 — M1: shot cues, shot times, review video

- `config/shot_descriptions.json`: the brief's shot list (rev 44), 56 IDs D01–D47 with letter inserts, parsed from `docs/brief.md`.
- `config/shot_cues.json`: one cue per shot from the brief's anchors (line starts, snapped to a band beat); D01 before the music, D45–D47 after it, lengths at M4. The script checks the IDs match the brief's.
- `python3 -I scripts/shot_times.py` (adapted: pre/post shots, no cards yet) → `timing/shot_times.json`. All in order. Shots under 1.5 s: D26 (0.81 s). Gate questions in `log/decisions.md` 3.
- `.venv/bin/python -I scripts/m1_review.py` (adapted) → `timing/check/m1_review.mp4` (960×540, 264.8 s: shot ID, type, picture and on-screen text; the lyric with the current word; bar.beat; the take plus a beat click) and `master_click.wav`. Frames at 130 s (D25) and 167 s (D29) checked.

## 9. 2026-11-09 — Master locked; D26 folded into D25 (brief rev 50)

- `config/master.json` → `locked`: `audio/postfilter/distillation_job_postfilter.wav` (sha256 `0b0d82c8…`). The timing map stays on the raw take (same timing, step 5).
- Brief, direct edits: D25's shot now runs the split screen "From "wait" through pre-chorus 2" and "Absorbs D26, so the caption gets a full read"; D26 "Retired November 9, 2026: folded into D25…; the family portrait is dropped"; D27 is chorus 2 only, "Reprise of D15–D19…".
- `config/shot_cues.json`: D26 `retired`; D27 cue `section:Chorus 2` (snapped +263 ms to 138.76 s). `scripts/shot_times.py` handles `retired`. D25 128.91–138.76 s (9.86 s; the split screen from "wait" ≈130.9 s gets ~7.9 s); no shot under 1.5 s.

## 10. 2026-11-09 — New shots in the brief (rev 54); cues; M1 closed

- Brief, direct edits: rows D04b–D04e after D04a, D42b after D42, D44c after D44b; D02's on-screen text → "— (the title moves to D04b)"; D42 anchor "Lines 1–4" and its Feds clause moved to D42b. `scripts/mirror_brief.py` → rev 54 (diff shows only these).
- New `scripts/shot_descriptions.py` (the step 8 inline parse, as a script) → 62 IDs. `scripts/shot_times.py`: cue kinds `downbeat_after:` and `bars_after:`, and a check that the cue IDs match the brief's in order.
- Instrumental after the intro: the band's downbeats (bar phase 3) match the drums' strongest low onsets at 28.64, 30.84 … 41.80, 46.18 s; "Got a crew" (45.31 s) is a pickup into 46.18 s. So the 8-bar phrase is 28.66–46.18 s: D04b–D04e get 4.38 s each, and D05 now cuts on that downbeat (was the beat before the pickup, 45.09 s).
- D42 219.16–227.91, D42b 227.91–232.28 (Final chorus line 4), D44b 253.06–260.44, D44c 260.44–264.80 (first downbeat after "tickets."). No shot under 1.5 s.
- `timing/check/m1_review.mp4` re-rendered.

## 11. 2026-11-09 — M3 batch 1: cast references

- `.venv/bin/python -I scripts/stills.py ref_teller ref_still ref_van ref_feds ref_crew ref_probe` (FLUX.2 [dev], seeds 41–44) → `takes/stills/<item>/`, review grids `takes/stills/review_<item>.png`; log `takes_batch1.log`, prompts and timings in `shots/prompts.md`.
- `ref_crew` v1 rejected (decision 4); v2 (mustard mask, eye slot, no lips) → `ref_crew_v2_s41–44`.
- `ref_probe` v1 and v2 drifted to a bright silver ball with antennas. Cause: the reference `reference/sandbox_rhapsody_probe_274s.png` shows a dark box, not the probe (decision 5). New reference: `reference/sandbox_rhapsody_probe_80s.png`, crop 1100×1000+1580+820 of `../sandbox-rhapsody/deliverables/sandbox_rhapsody_main_release.mp4` at 80 s (`ffmpeg -ss 80 … -vf crop=1100:1000:1580:820`). v3 (dark mirror-chrome sphere, lens in a glowing ring, dome lamp, two jointed legs; amber glows → green) → `ref_probe_v3_s41–44`; matches.
- The crew and probe reruns were first queued behind wait loops on `pgrep -f scripts/stills.py`, which matched each other's command lines and never started; rerun in sequence. Later waits use the process's PID.
- Picks (intervention 8) in `config/stills.json` `kept`.

## 12. 2026-11-09 — M2 look test with the picked references; batch 2 started

- Placeholders `public/media/test/{crew,vault,still,van}.png` ← picks `ref_crew_v2_s41`, `ref_teller_s41`, `ref_still_s43`, `ref_van_s43` (reference sheets, so two-up framing).
- `npx remotion render src/index.ts M2Test renders/m2/m2_look_test.mp4 --concurrency=8` (999 frames, 128 MB); review copy `ffmpeg -i … -c:v libx264 -crf 27 -preset slow -vf scale=1280:-2 -c:a aac -b:a 160k renders/m2/m2_look_test_review.mp4` (20 MB). Contact sheet checked: titles, D04 crew name cards, vault, stamp, counter with calendar pages, van with counter.
- Batch 2: `stills.py` on the 48 batch-2 items that don't use `ref_feds` → `takes_batch2.log`; then D32, D33, D42a, D42b after the Feds pick.

## 13. 2026-11-09 — Batch 2 first pass checked; four reruns

- 48 items done (`takes_batch2.log`, no errors); review grids sent in groups of four.
- Guardrail problems: D39a_l (all four fake IDs carry a realistic human face photo) and D38 (the passersby are Muppet-like characters). Also D23 (investigator in tan with human-looking hands; one printout has a seal-like emblem) and D39a_r (human hand and suit). Avoid also: D42 B–D and D44a D (realistic human faces in the crowd), D21 B (garbled sign text), D04d D and D36 D (figures in the teller cage).
- Revised prompts (`config/stills.json` v2, notes in each item): D38 (passersby = the crew; refs + ref_crew), D39a_l (crayon cardboard ID, no photo), D39a_r (felt puppet hand), D23 (conditioned on ref_feds, blank printout). Queued after D32/D33/D42a/D42b.

## 14. 2026-11-09 — Batch 2 picks; clips

- Reruns (v2) done; D39a_l still draws a portrait on most cards; seed 43 (a crayon card) picked, its card to be replaced in compositing with a clean "FAKE ID" card.
- `config/clips.json`: 34 clips (every shot whose type includes Clip), motion prompts, 1280×720 (LTX outputs 1280×704), 24 fps, seconds = shot length rounded up, 3–6 s, seeds 41 and 42.
- Test: `.venv/bin/python -I scripts/clips.py D09` → 50 s first take (model load), 14 s second; s41 shows the listen, shrug and walk-off.
- Full run: `.venv/bin/python -I scripts/clips.py` → `takes/clips/`, log `takes_clips.log`.

## 15. 2026-11-09 — Clip run stopped for low memory; memory strategy

- The full clip run was stopped by Claude Code's memory guard before its first take: ComfyUI still held FLUX.2 in RAM from the still batches (33 of 38 GB used).
- Method from the sibling projects (`../folks-like-us/style/vram_plan.md`, `../buy-it-on-margin/scripts/batch2b.sh`): one model family at a time, `POST /free` (`comfy_client.free()`) between stages, nothing else on the GPU or in RAM during a batch. Freed: RAM 33 → 3 GB used, VRAM 0.9 GB.
- New `scripts/run_stage.sh stills|clips [items]` frees before and after each stage. LTX-2.3 alone peaks at about 37 GB RAM plus 5–7 GB swap on this box (Folks Like Us measurement), so the guard can still fire on an idle session; Folks Like Us ran with `CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP=1`.

## 16. 2026-11-09 — Clips generated and checked; D42 keyframe replaced

- `scripts/run_stage.sh clips` → 68 takes in `takes/clips/` (34 clips × seeds 41, 42), log `takes_clips.log`; RAM 3 GB before and after, about 34 GB during. Filmstrips (6 frames per take) checked.
- **D42 rejected:** both takes showed realistic people in the background and teal puppets with white faces and red mouths (decision 4). A stricter motion prompt (s43, s44) kept them, because they were in the keyframe: the batch-2 pick `D42_s41` has them, missed at thumbnail size. New still prompt v2 (only puppets, gray felt faces, no people; refs + ref_teller) → `D42_v2_s41–44`, all clean; picked s43. Clip s45/s46 from it: clean; s45 picked. The other crowd keyframes (D15, D27, D40, D41, D42a, D44a) re-checked at full size: clean.
- Drift seen and avoided in the picks: D13 s41 (the brass arm turns into a torpedo), D39 s41 (generic human-like figures appear), D42a s42 (a figure appears inside the vault, plus an extra Fed), D35 s41 (bottles melt), D39c s41 (a brass column grows).
- Provisional picks in `config/clips.json` `kept`, for the human to confirm at M4.
- Lesson: check every picked keyframe at full size before it becomes a clip, not only the 4-up grids.

## 17. 2026-11-09 — M4 animatic

- Real captures:
  - D01: new `scripts/capture_chat.mjs` (adapted from Buy It on Margin's: a tall 1280×4800 viewport at 1.5×) → `public/media/real/research_chat.png` (1920×7200) of the public planning/research chat share, with the request and the first numbers ("over 16 million exchanges") located in `config/chat_capture.json`.
  - D46: new `scripts/render_audit_log.py` renders the brief's audit log (docs/brief.md, "**Audit log**" to the end of the Audit plan; every finding, mistakes and catches) as a plain page; new `scripts/capture_page.mjs` screenshots it → `public/media/real/audit_log.png`.
  - D25: the two real captures (bare "Who made you?" chat; the audit prompt's reply) must come from the human. New `scripts/placeholder_captures.py` builds stand-ins stamped PLACEHOLDER, with the left answer as the human reported it and the right reply verbatim from `log/audits/round3_qwen3.8_run1.md` line 1 → `public/media/real/d25_{left,right}.png`.
- `config/claims_card.json`: D45 intro, the ten items and their sources, and D47's text, copied from the brief; marked draft until M6 (on screen too).
- New `scripts/publish_picks.py` (adapted) → `public/media/picks/` (52 stills, 34 clips) and `config/picks_manifest.json` (with clip frame counts).
- `src/Main.tsx`: D01 (10 s), the song (every shot at its shot_times.json time), D45 (each item held max(4 s, holdS)), D46 (32 s scroll), D47. Clips slow to fill their shot (not below half speed), else loop with a mirror flip. Chorus 2 (D27) intercuts D27, D16, D17, D15, D18 and the D19 split by line. The exchange counter shrinks to the corner at D31 and stays, ticking at about 3 million a day (35/s), as the brief says ("stays"; "the counter keeps ticking"). The real captures bypass the film layer. `Stamp` gained an `ink` prop (D39b's gold TRANSFORMATIVE).
- Test frames (`npx remotion still … --scale=0.5`) at 17 points checked; D39b's stamps enlarged.
- Render: `npx remotion render src/index.ts Main renders/m4/m4_animatic.mp4 --scale=0.5 --concurrency=8`.
- D43's cut-paper card overflowed the frame at size 96; set to 64 and re-rendered. Review copy: `ffmpeg -i renders/m4/m4_animatic.mp4 -c:v libx264 -crf 30 -preset slow -c:a aac -b:a 96k renders/m4/m4_animatic_review.mp4` (under 30 MB).

## 18. 2026-11-09 — M4 notes: D14, D41, D42a

- Human notes (intervention 10): hydra reads static; bottles not passed; vault door wrong (two doors).
- D14 → Clip (decision 6): `scripts/run_stage.sh clips D14`, seeds 41–44 from the picked still. Kept **s44**: every head drops, then six grow back where there were five. s43 regrew only four; s42 turned the heads into fingers.
- D41: keyframe v2 (closer, caught mid-handoff), `scripts/run_stage.sh stills D41 D42a`, seeds 41–44. Kept **v2 s41**; s42 and s43 drew human hands. Clips s43–s46: s43 and s45 end with the puppets turning away. Kept **s46**: bottles go hand to hand the whole take while the camera circles.
- D42a: keyframe v2 asks for one door on one hinge. Kept **v2 s42**, the only take with a single door; it has no teller and two Feds instead of three. Clips s43–s46 rejected: a human figure walked out of the vault in every take, a realistic man in a suit in s43 (guardrail). Rerun s47–s50 with an empty vault and three puppets only. s48 duplicated the crew puppet; s49 produced a creature with a human-like face. Kept **s50**: the door swings fully open on an empty vault, the crew puppet points at the Feds and they point back.
- ComfyUI stopped afterwards (`kill`), so the human can boot the Open WebUI VM on the 5090 for the D25 captures. Restart: `cd ~/ComfyUI && nohup .venv/bin/python main.py --listen 127.0.0.1 --port 8188 &`.
- `scripts/publish_picks.py`; `src/Main.tsx` D14 now a ShotClip; animatic re-rendered (same command as entry 17, `--gl=swiftshader` to keep off the GPU). D14 plays at n/len (≈1.23×) so the regrowth lands inside the 3.3 s shot. Excerpt of the three shots: `renders/m4/m4_fixes_excerpt.mp4` (ffmpeg trim+concat of the animatic at 87.5–92.8, 221.6–230.2, 241.3–249.8 s).

## 19. 2026-11-09 — M4 notes round 2: D14 in code, D42a crop, D41 rebuilt

- D14: LTX can't count heads. New `scripts/hydra_sprites.py` cuts the centre shadow head out of the picked still (a matte from a fit to the smooth wall, kept to the head's own connected piece) and builds a plate with the head removed (linear interpolation from clean wall pixels, with grain from a wall patch added back) → `public/media/picks/D14_{plate,head}.png`. `src/Main.tsx` `D14`: the head tips away and fades, then two copies sprout from the stump: 5 heads → 6. The LTX clips are no longer used.
- D42a: the clip's door is hinged on the left, then swings round to the right, which leaves the empty hinge bracket on the left. `src/Main.tsx` crops it out (scale 1.31, origin right, 75% down); the door then reads as hinged on the right.
- D41: no LTX take shows a handoff in the wide shot. Rebuilt as three close-ups match-cut on the bottle at frame centre: teller slot → mustard glove; mustard glove → teal glove; teal glove → back into the teller slot (the brief's "vault, crew, startup, vault"). Stills `D41_1`–`D41_3` (`scripts/run_stage.sh stills D41_1 D41_2 D41_3`, seeds 41–44).
- ComfyUI restarted at the human's word ("just use the GPU").

## 20. 2026-11-09 — D14 and D41 as composites

- D14 (human, M4 notes 3): the code-built hydra from entry 19 is dropped (`scripts/hydra_sprites.py` deleted). New still `D14_up`: v1 (conditioned on D14) copied the five-head layout, so v2 has no reference and spells out nine heads. Kept **v2 s41** (nine heads). Clip `D14_up` (heads sink into the body), seeds 41–44. Kept **s41**, played reversed so the nine heads grow out of the body that D14 s44 ends on.
- D41 close-ups: stills `D41_1` s43, `D41_2` s41 and `D41_3` s41 (all four seeds of each had knitted gloves only). Clips seeds 41–44. Kept `D41_1` **s41** (mustard glove lifts the bottle from the teller's slot), `D41_2` **s43** (mustard hands it to teal), `D41_3` **s41** (teal pushes it into the slot until it's gone).
- New `scripts/conform.py` joins segments from `config/clips.json` `composites` → `takes/clips/<shot>/<shot>_cut.mp4` (kept):
  - D14 = s44 frames 14–44 (the drop), then D14_up s41 reversed at 1.49×; 79 frames.
  - D41 = the three close-ups, about 53 frames each; 158 frames.
- ComfyUI stopped (`kill` on its python PID, not the nohup wrapper's). Animatic, review copy and three-shot excerpt re-rendered (entry 18's commands).

## 21. 2026-11-09 — D25 real captures

- New `scripts/d25_captures.py` (replaces `scripts/placeholder_captures.py`): crops the two screenshots to the chat pane (no browser bar, sidebar or input box; the model name stays visible) and marks the key sentence with a multiplied highlighter stroke → `public/media/real/d25_{left,right}.png`.
- `src/Main.tsx` D25: the captures stacked (one above the other) instead of side by side, at 1400 px wide: the audit reply runs the full window width and was too small at half width. Small labels: "Fresh chat" / "Same model, replying to the lyric-audit prompt". Caption as the brief.
- `reference/d25_raw/` added to `.gitignore` and to `scripts/manifest.sh`'s directories.

## 22. 2026-11-09 — M4 notes round 4 (in progress)

- D01 merged into D02: no 10 s pre-roll; the music starts at frame 0. `src/Main.tsx`: D02 plays on the right, and D01's real chat scrolls (request → "over 16 million exchanges") in an 800 px left panel drawn outside the film layer. `scripts/capture_chat.mjs` takes width/scale/height; recaptured at a large-phone width: `node scripts/capture_chat.mjs https://claude.ai/share/cd15ffd8-ec3f-43bd-b916-282c92b2e116 540 1.42 6000` (767×8520 px).
- `Stamp` (devices.tsx): Alfa Slab One letters on a cream paper patch, lighter distressing, `maxWidth` fit. D39b: both stamps 90 px fitted to 820 px, TRANSFORMATIVE in a darker gold (#a8730a) so it reads on the paper.
- `CalendarPage`: month font sized to fit the page; optional year line. FEB and JUN show 2026.
- D12 v2 (open bottle under the spout, corked ones beside) seeds 41–44 done; D27a v2 (scorecard slides out under the bars) not generated yet: the stills run was stopped by the low-memory guard. ComfyUI stopped (it kept about 35 GB after the stop).
- (cont., after the session restart with the memory env var) D12: kept v2 **s44** (an open bottle under the spout, corked ones beside it); clip seeds 43–44, kept **s44** (the stream pours into the open bottle). `src/Main.tsx` `D12`: REASONING and SMALL BATCH written onto two corked bottles' labels, positions measured on the clip's first and last frames and interpolated (the camera drifts), with a slow 1.25× push-in; replaces the floating caption.
- D27a: v2 seeds 41–44; kept **s42** (the scorecard slides out of a slot under the bars).
- ComfyUI stopped. Animatic re-rendered: 440.3 s, as the music now starts at frame 0 (was 450.3 s). Review copy as before.

## 23. 2026-11-09 — In-video citations

- New `config/citations.json`: 15 chips (cue word, hold, who, outlet, the claims-table row each comes from). `src/Main.tsx` `Citations`: chip bottom-left, Special Elite on a dark band with an orange edge, outside the film layer; each held for its `hold` and cut 6 frames before the next. None in D25 (its own caption) or over the intro's D01 panel.
- Frames checked at 10 chip times (collisions with the counter, calendars, stamps and typed captions: none). Animatic re-rendered (entry 18's commands).

## 24. 2026-11-09 — Claims card condensed

- `config/claims_card.json` `pages` (decision 9); `src/Main.tsx` D45 renders text pages (as before) and `ClaimsTable` pages (hold_s 20 and 16). D45: 97 s (was 122 s). Animatic re-rendered (entry 18's commands).

## 25. 2026-11-09 — End card: credits

- `config/claims_card.json` `credits`: the series credit line (Folks Like Us `config/o.json`, Buy It on Margin `config/cards.json` N34d) plus the picture generators: "Lyrics by Claude. Music by Suno. Video by Claude Code, with stills from FLUX.2 [dev] (Black Forest Labs) and motion from LTX-2.3 (Lightricks). Sources, audits and production log: github.com/Derivative-Work/distillation-job".
- `src/Main.tsx` D47: two pages (disclosure, then credits), each held for holdS; no counter (the human overrode the brief: decision 10). Main: 10,259 frames (427.5 s). Animatic re-rendered (entry 18's commands).

## 26. 2026-11-09 — D33 Little Switch cameo

- `src/defaultOn/` (rig copied from Default On, decision 11) and `src/defaultOn/SwitchCameo.tsx`; `src/Main.tsx` D33 uses it in place of the typed SWITCH (enter on "see", flip on "switch"). Frames checked at 4380, 4396, 4404. Animatic re-rendered (entry 18's commands).
- Mouth: X while he peeks, then the round "E" gasp on the flip, as Default On's startled Switch (rig sheet `review/m2/rig_sheet.jpg`; S16 in `shots/Chorus.tsx` and `scenes/KeyFrames.tsx`). Was "D" (wide open), which read as a grin.
