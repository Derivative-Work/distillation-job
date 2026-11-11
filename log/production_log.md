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
- The E gasp's default fill (#7a2e22) matched the red curtain and read as a hole. `SwitchCameo` draws the E mouth over the rig's mouth spot with Mouth's `fill` set to the palette's `inkSoft` (#5e4a3e); the copied rig stays unchanged.

## 27. 2026-11-09 — End-section music and card backdrops

- **Bounce** (new `scripts/cards_audio.py`, adapted from ../sandbox-rhapsody/scripts/cards_audio.py; `timing/cards_audio.json`):
  - Mix: every stem except `0 Lead Vocals` and `1 Backing Vocals` (muted throughout), from the downbeat at 100.972 s (the instrumental bar after chorus 1) with a 4 s pre-roll for the model, to the song's end. Start chosen so the song's own ending lands at the video's end: the end section ran 162.7 s; 264.8 - 162.7 = 102.1 s, snapped back to the downbeat. The last credit holds the 1.2 s difference (Main.tsx `D47_HOLDS`).
  - Limiter: Sandbox Rhapsody's (ceiling -1 dBFS, 5 ms lookahead, 80 ms release). The stem sum peaked at +4.33 dBFS; at most 6.95 dB off, reducing for 20.8 s of the 167.8.
  - Post-filter: music-deslop M6f 10k at 68441e2, the master's flags (`--source suno`, strength 1.0). Its output peaked at +2.0 dBFS and its clip protection scaled it to -0.1. It used its fallback over 2:21-2:31 of the bounce (song time about 238-248 s, the outro, where only the muted spoken lines were): "model output was noisy there, faded to 26% of its change". The master's run had no fallback.
  - Output: `public/audio/cards.wav`, 163.83 s, 48 kHz 24-bit. Intermediates in `audio/cards/`.
  - Level against the master over the same song spans (RMS): verse 2 and chorus 2 -21.2 dB (master -18.4), breakdown -22.5 (-19.6), final chorus -18.4 (-15.6), ending -16.1 (-14.6). About 3 dB under: no vocals, plus the post-filter's scaling. Kept, as in Sandbox Rhapsody: a quieter bed under reading.
- **Backdrops** (`config/claims_card.json` `backdrop` per page and `end_backdrop`; `src/Main.tsx` `Backdrop`): each card's shots played in turn through the film layer at 30% brightness, with a feathered dark pool behind the text (a wider one under the tables) and a soft text shadow. Shots: intro D27a; the other side D44a; February D03, D07, D11, D21, D23; June-September D31-D34; Google D10; identity mix-ups D25; the flip D39b, D40; disclosure D44b; credits D44c. D46 (the real audit log) has none.
- Main: 10,287 frames (428.6 s). Checked: 9 card frames for legibility; the audio seam (the song decays to silence at 263.5 s, the bed enters on its downbeat at 264.8 s) and the end (the song's last hit decays out by 428.6 s). Animatic re-rendered (entry 18's commands).

## 28. 2026-11-09 — Stamp text fitted to its frame

- `Stamp` (devices.tsx): the frame is still sized from a per-character estimate (now 0.8 em, generous), and the word is set with SVG `textLength` (`spacingAndGlyphs`) to the inner frame's width, so wide letters can't cross the border. Checked: TRANSFORMATIVE, NATIONAL SECURITY, ALLEGEDLY!, ALLEGEDLY. Animatic re-rendered (entry 18's commands).

## 29. 2026-11-09 — Chorus 2 rebuilt; four streets; D19 two takes

- Stills (`scripts/run_stage.sh stills …`): D27b, D27c, D27d, D27e seeds 41–44; D05_1–D05_4 seeds 41–42. Kept D27b s44 (the crate tipped into the still's funnel), D27c s41 (the bell jar, clasps and padlocks), D27d s41 (a token at the slot, a blank card), D27e s41 (the crew out of the vault, the front crate tagged); streets: alley s41, overpass s42, loading dock s41, cul-de-sac s41 (no lettering in any).
- Clips: D27b–e seeds 41–42, D05_1–4 seed 41. Kept D27b s41 (it pours through the line), D27c s42 (they strain; the jar stays shut), D27d s41 (first 2 s only: from about 2.5 s the model writes garbled numbers on the card, and the glove covers it, so the planned price-card flip is dropped), D27e s41. D05_4 drove away, so it plays reversed (`config/clips.json` `composites`, `scripts/conform.py D05_4`): it rolls in and stops.
- `src/Main.tsx`:
  - Chorus 2: D27 (line 0), D27b with NEW · MONDAY typed (1), D27c (2), D27's second take continuous through lines 3–5, D27d (6), D27e (7). D27e opens on a one-second freeze-frame with FALLBACK on the crate's tag (tracked on the clip's first frame; the tag leaves the frame within half a second), then the walk.
  - D05: four panels, four streets. D19: both takes, the second mirrored (`ClipSplit` removed).
- Chorus 1's clips no longer appear in chorus 2. ComfyUI stopped. Animatic re-rendered (entry 18's commands).

## 30. 2026-11-10 — M5: holds, captions, Shorts, thumbnail, FAKE ID, final render

- **D46 holds** (brief: "Hold on any finding where an auditor defends its own maker, or where it doesn't"): `config/audit_holds.json` lists four rows (Gemini adding claims that cast Google as a victim; ChatGPT raising a claim against OpenAI; GLM missing Z.ai in the evidence; Qwen auditing as Claude), each with a label stating only what the log records. `scripts/render_audit_log.py` marks the rows; `scripts/capture_page.mjs` gains a boxes output (`config/audit_log_boxes.json`); D46 scrolls, stopping 3 s on each with a highlight and the label. D46 grew to 40.8 s, so the end-section bounce starts two bars earlier (`scripts/cards_audio.py` START_S 92.206; rerun: 172.6 s; post-filter fallback again over the outro, 2:26–2:39 of the bounce, at 51%).
- **Captions:** `src/Captions.tsx` and `scripts/export_srt.py` adapted from Buy It on Margin (`config/captions.json`: a line from its first word to the next line's start, capped 1 s after its last word, at least 1 s). Burned in over the song; they rise above D25's caption band. The citation chips moved up to 140 px from the bottom, D01's label to the top. `deliverables/distillation_job.en.srt` (74 cues; offset 0, the music starts on frame 0).
- **Shorts** (`config/shorts.json`, `src/Shorts.tsx`, adapted): 1080x1920, cut-paper title above, the whole 16:9 frame at 1080 wide, the chip at full size under it, captions below, D04a's disclaimer for the first 2.5 s. Three, picked by the agent: `chorus` (pre-chorus 1 into chorus 1, 29.0 s), `breakdown` (the numbers, 17.5 s), `verse3` (26.3 s). None uses D25. SRTs: `scripts/export_srt.py short <id>`.
- **Thumbnail:** `src/Thumbnail.tsx` (D42's keyframe through the film layer, the cut-paper title, the ALLEGEDLY! stamp) → `deliverables/distillation_job_thumbnail.jpg` (1280x720). `CutPaperTitle` gained `grain` (off here).
- **D39a FAKE ID:** `scripts/fake_id.py` paints a clean card (FAKE ID, a crayon puppet doodle, blank NAME / D.O.B. / ISSUED BY / SIGNATURE lines) in perspective over the generated card's garbled lettering, keeping the robot's fingertips → `takes/stills/D39a_l/D39a_l_fakeid.png` (kept).
- **Final render:** `npx remotion render src/index.ts Main deliverables/distillation_job_1080p.mp4 --concurrency=8 --gl=swiftshader --crf=16`; Shorts: `… Short-<id> deliverables/distillation_job_short_<id>.mp4 --crf=17`.
- Shot check (brief, "Done when"): all 62 brief IDs are in the edit except D26 (retired in the brief, folded into D25); D28–D30 are the counter's three hits (`ExchangeCounter`, cued on breakdown lines 1–3) rather than named Sequences.

## 31. 2026-11-10 — Ransom-note captions; Shorts in the safe zone

- (superseded the same day; see below) `src/Captions.tsx`: burned-in captions were groups of 1–3 sung words (`config/captions.json` `groups`: max 3 words, break after punctuation or before a gap over 0.45 s; shown from the first word's start to the next group's, capped 0.6 s after the last word, at least 0.5 s), each letter cut from one of the title cards' papers in one of three faces (Alfa Slab One, Old Standard TT bold, Special Elite), landing on twos. 62 px in the main video, 66 px in the Shorts. Timing comes straight from the word timings, so captions sit on the sung words. The SRTs keep the line rule.
- `src/Shorts.tsx`: everything inside y 140–1400 and x 0–950 (the Shorts/Reels UI covers about the bottom 500 px, the top 140 px and a 130 px right rail): title 130–430, the whole 16:9 picture at 950 wide (440–974), the chip under it, the captions below (to about 1370).
- Finals re-rendered (entry 30's commands).
- Human, on the first version: "close, but this is affecting readability. cut the lyrics into groups of 1, 2, or 3 words each, as if each group came from the same magazine page". `src/Captions.tsx` now cuts each line into clippings of 1–3 words (max 3, break after punctuation or before a gap over 0.45 s); each clipping is one paper, one face (Alfa Slab One, Old Standard bold or italic, Special Elite), one tilt, and lands on twos as its first word is sung. The line builds up and stays for the SRT's line time, so it reads whole. 50 px in the main video, 54 px in the Shorts (hanging from the top of their caption area, below the chip).

## 32. 2026-11-10 — Lettering pass (the brief's on-prop text)

- Cause: every lettered surface was generated blank (FLUX garbles text) to be lettered in the edit; only D12, D27e and D39a were. The brief asks for account numbers on the lanyards, changing plates on the van, OPEN signs and a ticket number.
- New `scripts/letter.py` + `config/lettering.json`: per shot, a seed point on each blank card; the card is grown from the seed by its own colour, tracked frame to frame (nearest match of similar size and colour, a local search after fast motion, jumps rejected, short gaps interpolated, several seeds merged), and the text multiplied in at the card's size and tilt. A card tracked for less than `min_cover` of the clip (default 85%) gets no text, so no number pops on and off; `until` stops a surface where it's covered (D38). Lower `min_cover` where the card leaves the frame (D13, D21, D04e, D05_3, D05_4, D38, D42a). Numbers are fictional, from the main seed: account numbers 23,800–24,400 (D13 24,017, D06 flips 24,017 → 24,018, D44b's ticket No. 24,019), plates three letters and three digits (no state or country).
- Lettered (kept → `*_lettered`): clips D02, D04e, D05_1–4, D10, D13, D19 and its second take, D21, D23, D25, D27, D34, D38, D42a, D44a, D44c; stills D03, D04c, D04d (OPEN), D06, D07, D44b (OPEN, ticket).
- Left blank: D42's dancers (no badge tracked long enough through the dance), one badge each in D02, D23, D25, D34 and D44c (hidden or turned too often), the D39b/D40/D41 close-ups' cards, the corkboard's thousands of cards (D03, D04a), and on purpose the Feds' memo (no seal), D23's name tag (blurred) and D24's blank org chart (brief). D27a's scorecard keeps its generated tally grid.
- Finals re-rendered (entry 30's commands).

## 33. 2026-11-10 — PLEASE on the card; captions skip on-screen words

- D04: PLEASE is now lettered onto the leader's card (`config/lettering.json`: a hand-given box, as the gloves hide the card's sides; Alfa Slab One), and the lanyard gets a number; the floating typed PLEASE is removed from `src/Main.tsx`. `scripts/letter.py` now always reads the plain take (a rerun had lettered over a lettered still) and takes a per-surface `kind` and `box`.
- Captions (`config/captions.json` `omit`): the clippings leave out each chorus "(allegedly!)" (the stamp), "Their count, not ours." (D27a's typed strip), "No weights were harmed…" (D43's card) and "(Allegedly.)" (D44's stamp). The SRT keeps every word.
- Finals re-rendered (entry 30's commands).

## 34. 2026-11-10 — Short "monday"

- `config/shorts.json` `monday`: 105.349–157.919 s (the bar before "New model drops on Monday" through chorus 2, out on D27's last frame), 52.6 s. Includes D25; at Short size its caption and disclaimer were unreadable, so `src/Shorts.tsx` repeats them at full size over the picture's band while they're up (`D25_BAND`, `D25_CAPTION` exported from Main). Nothing names a lab or the launch (decision 12).
- `npx remotion render src/index.ts Short-monday deliverables/distillation_job_short_monday.mp4 --concurrency=8 --gl=swiftshader --crf=17`; SRT `python3 -I scripts/export_srt.py short monday` (19 cues).

## 35. 2026-11-10 — M6: sources reopened, corrections applied

- `log/m6/checklist.md` (every claim on the card, every chip, every on-screen figure, with its sources); `log/m6/source_check_2026-11-10.md` (a subagent reopened every source and quoted each; the agent re-verified the three most consequential findings itself); `log/m6/corrections_2026-11-10.md` (what changed and why). 20 confirmed as worded, 13 reworded, 0 cut; the counter's tick removed (decision 13).
- Card and chips now cite the CISA advisory page and Reuters (the OpenAI memo) in place of GlobalSecurity and Forkast.
- The M6 wording lengthened D45, so the end-section bounce starts two downbeats earlier (`scripts/cards_audio.py` START_S 85.635; 179.2 s; post-filter fallback over the outro at 2:25–2:29 (56%) and 2:36–2:47 (34%)). The claims card's tag now reads "Sources checked Nov 10, 2026 · legal review pending". Finals and all four Shorts re-rendered (entry 30's commands; `Short-monday` too).
- Lawyer review packet (Claude Doc): https://claude.ai/artifact/7RgwQTXumNy6ZnTdQ6LPm7

## 36. 2026-11-10 — Intro cut by 4 bars (decision 14)

- `timing/timing_map.json` moved to `timing/timing_map_take.json` (`scripts/timing_map.py` now writes there). New `scripts/cut_master.py` + `config/edit.json`: cuts the locked master (33.042 → 41.803 s, match 0.905, 30 ms crossfade) to `audio/edit/distillation_job_edit.wav` (sha256 a915f890…, 256.039 s), copies it to `public/audio/master.wav`, and writes `timing/timing_map.json` with every later time 8.761 s earlier (the duplicated downbeat at the join dropped). Regenerate: `.venv/bin/python -I scripts/cut_master.py && .venv/bin/python -I scripts/shot_times.py`.
- `config/shot_cues.json`: D04c `bars_after:D04b:1`, D04d retired, D04e `bars_after:D04c:2`. `src/Main.tsx`: song length from the map; D04e plays source frames 40–121 at 1.5x (`Clip` `skip`). `config/shorts.json` from/to moved 8.761 s earlier. `scripts/cards_audio.py` unchanged (it reads the take's stems after the cut; START_S stays 85.635 on the take).
- Preview `renders/m6/intro_cut_preview.mp4` (frames 600–1010). SRTs re-exported (main, 74 cues; Shorts). Finals and all four Shorts re-rendered (entry 30's commands); review copy `renders/m6/distillation_job_intro_cut_review.mp4`.

## 37. 2026-11-10 — Satire label, corner counter removed, D25 highlight, caption line starts

- `src/Main.tsx`: `Satire` (opening + persistent tag; `SatireTag`, `satireShown` exported for the Shorts), `Highlighted` (D25's highlighter sweep), `ExchangeCounter` ends at D31, D04a's typed disclaimer removed; `Main` takes `satire` (off inside the Shorts, which draw their own at full size: `src/Shorts.tsx` `ShortSatire`).
- Captions: the aligner put "Take" (chorus 1, final chorus) before "sieve" ended (76.677 vs 77.016; 214.558 vs 214.978), so the "through a sieve" clipping was replaced after ~0.35 s. Rule added to `src/Captions.tsx` and `scripts/export_srt.py`: a line starts no earlier than 0.02 s after the previous line's last word ends. Lines moved: Chorus 1:2, Verse 2:5, Verse 3:5, Verse 3:9, Final chorus 1–2, Outro 3 (0–0.42 s).
- Checks: opening and D25 at half scale; whole song at quarter scale, top-right corner sampled every 2 s (tag clear of every other overlay); Short-monday stills. SRTs re-exported; finals and all four Shorts re-rendered (entry 30's commands); review copy `renders/m6/distillation_job_satire_review.mp4`.

## 38. 2026-11-10 — Repository docs for review

- `README.md` (for reviewers: where to start, the timeline, real captures, the claims card and chips verbatim with sources, where things are, reproducing, licences, credits), `METADATA.md` (YouTube titles, descriptions, tags and settings for the main video and four Shorts, and the checklist before upload: legal sign-off, news re-check, making the repo public), `LICENSE-media.md` and `LICENSES/CC-BY-NC-SA-4.0.txt` (copied from Buy It on Margin, the standard text). Modelled on Buy It on Margin's.
- Every description's claim was checked against `log/m6/source_check_2026-11-10.md`; the chorus Short's "hydra clusters" line was corrected to what The Register reports, with its skepticism.

## 39. 2026-11-10 — The 151 million row (decision 16)

- `config/claims_card.json` page 4, Sep 10 row: the total removed. `src/Main.tsx` `ExchangeCounter`: each figure rolls from 0. README, METADATA.md and the lawyer packet: the row's links corrected, the counter described.
- Re-rendered the main video and `Short-breakdown` (the only Short with the counter); the other Shorts are unchanged. Review copy `renders/m6/distillation_job_sources_fix_review.mp4`.

## 40. 2026-11-10 — Lawyer review removed (decision 17)

- Brief (Claude Doc) rev 54 → 57: three deletions (Fact card, risk table, M6); `docs/brief.md` edited to match. `src/Main.tsx` D45 tag: "Sources checked Nov 10, 2026" (was "· legal review pending", red). Main video re-rendered (entry 30's command); review copy `renders/m6/distillation_job_signoff_review.mp4`.
- Correction (2026-11-10): the METADATA.md note about `docs/suno/resp_*.json` was wrong and is removed. Those raw captures (and `page.html`) are git-ignored and were never committed; they come from a logged-out visit to the share link, so the "free" plan in them is Suno's default for visitors, not the account's. The only location hint (`us_state`, from the capturing machine's IP) stays local.

## 41. 2026-11-10 — The production archive (release archive-2026-11-10)

- New, adapted from Buy It on Margin: `scripts/archive.sh` (inputs.tar 918 MB: the Suno take, stems, post-filtered take, end-section bounce and `public/audio/cards.wav`; takes.tar 1.61 GB: `takes/`, `public/media/picks`, `public/media/real`; the upload files; SHA256SUMS; `--upload` creates the release as a draft), `scripts/rebuild.sh`, `scripts/setup_env.sh` (copied; its Remotion version check fixed: `grep -q` closing the pipe failed it under pipefail), `scripts/hooks/pre-commit` (rejects staged files over 50 MiB), `config/models.tsv` (same weights and revisions as Buy It on Margin, checked against `config/stills.json` and `comfy/api/`), `scripts/thumbnail.py` (the thumbnail's Pillow step, as run at M5; byte-identical on re-run). `out/` git-ignored.
- `scripts/rebuild.sh` run against the local archive: edited master and timing identical (no change under `timing/`); main video, thumbnail and all five SRTs byte-identical; Shorts audio bit-identical, worst frames 50.2 (chorus), 63.2 (breakdown), 56.5 (verse3), 48.8 dB (monday) PSNR. Log `out/rebuild.log`.
- README "Reproducing it" rewritten for the release.
