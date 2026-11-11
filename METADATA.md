# Upload metadata

YouTube metadata for the main video and the four vertical Shorts, ready to paste at upload. Written by the agent; the human uploads.

**Before uploading:**
- **Re-check the news** the day before. The card and the descriptions are as of November 10, 2026. If a named lab has responded since, "Other named labs did not immediately respond to reporters" (card page 2) and the description's matching line must change; likewise for any new filing, report or ruling.
- **Make the repository public.** The end credits and every description link to https://github.com/Derivative-Work/distillation-job, which is private until then.
- **Intervention count.** Update the number in the main description (`grep -c '^## ' log/human_interventions.md`; 32 on 2026-11-10).
- **The main video's link** goes in the Shorts' footer once it is uploaded (replace `<MAIN VIDEO URL>`). In YouTube Studio, also set each Short's **Related video** to the main video.
- **The "monday" Short** is timed to the news (a model launch on Monday, November 9, 2026), so upload it first. Neither it nor its description names the launch or the lab (decision 12).

---

## Main video (16:9, 1920×1080, 24 fps)

**File:** `deliverables/distillation_job_1080p.mp4` (7:15.2). Captions: `deliverables/distillation_job.en.srt`. Thumbnail: `deliverables/distillation_job_thumbnail.jpg`.

### Title

Recommended (66 characters):

```
The Distillation Job — a 70s heist-funk song about AI distillation
```

Alternatives:
- `The Distillation Job (Allegedly) — AI-made heist funk about AI copying AI`
- `The Distillation Job: an AI wrote a heist song about stealing from AI`

### Description

```
AI-generated satire. Every accusation in it is an allegation.

A crew of sock puppets never breaks into the vault: they line up at its teller window and ask it, millions of times, how it was built. In verse 3, the vault turns out to be built from everyone else's stuff. A 1970s heist-funk song about model distillation: training one AI on another's answers.

A disclosure: the lyrics were drafted by Claude, made by Anthropic, which is the main accuser in this story, and most of the figures are its own, not independently verified. Models from other labs audited the lyrics, including labs Anthropic has accused (ChatGPT, Gemini, GLM and Qwen 3.8); their findings are shown at the end and published in full.

Every frame, note and word was made by AI: the song by Suno, the words by Claude, the pictures by FLUX.2 and LTX-2.3, the edit by Claude Code. A human approved each stage, picked the takes and ran the audits. Each of those 32 interventions is logged, along with every prompt and production step:
https://github.com/Derivative-Work/distillation-job

CHAPTERS
0:00 Intro: names withheld
0:36 Verse 1: the proxy van
1:07 Chorus: it's a distillation
1:37 Verse 2: new model drops on Monday
2:04 Chorus
2:29 Breakdown: their count, not ours
2:46 Bridge: the Feds put out a warning
3:03 Verse 3: who's the victim?
3:30 Final chorus
3:50 Outro
4:16 What's claimed, and the other side
6:00 What the auditors said
6:40 Disclosure and credits

WHAT'S CLAIMED
(As of November 10, 2026. Claims, not findings of liability; some are disputed, and the evidence has not been published in full.)
• OpenAI told a House committee (Feb 12, 2026) that DeepSeek employees used obfuscated third-party routers to get around access limits on US models. (Reuters)
• Anthropic (Feb 23, 2026) said DeepSeek, Moonshot and MiniMax ran over 16 million Claude exchanges through about 24,000 fraudulent accounts. Its attributions rest mainly on its own account and traffic data. (Anthropic)
• Anthropic told senators (Jun 10, 2026) of 28.8 million exchanges through almost 25,000 accounts by Alibaba/Qwen-affiliated operators, and reported (Sep 10, 2026) over 151 million exchanges in an Alibaba-linked campaign from May to July. (Let's Data Science; Anthropic) The two periods overlap: these are separate claims, not a running total.
• An NSA, CISA and FBI joint advisory (Sep 8, 2026), citing industry reports including Anthropic's, named six labs and advised not telling suspected distillers about a switch to a downgraded model. An advisory, not a court finding. (CISA)
• The other side: Moonshot denied the White House's claim that its model was distilled from Anthropic's. China's government called the accusations unfounded. Other named labs did not immediately respond to reporters. Chinese commentators argue distillation is standard industry practice.
• The flip: US labs, and the US government in court, have defended training on others' work as fair use, while the government calls distillation a security threat. (Lawfare)

At 2:00, a model run locally calls itself Claude. Models often misidentify themselves. This is not evidence of distillation.

SOURCES
Anthropic: https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks
CISA advisory AA26-251A: https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-251a
Reuters (via Yahoo Finance): https://finance.yahoo.com/news/openai-accuses-deepseek-distilling-us-221629899.html
Let's Data Science (June): https://letsdatascience.com/news/anthropic-accuses-alibaba-of-distilling-claude-d0593c90
Anthropic, September report: https://www.anthropic.com/threat-intelligence-report-september-2026
Let's Data Science (September): https://letsdatascience.com/news/anthropic-reports-large-scale-claude-distillation-attempts-a23fb82f
Implicator: https://www.implicator.ai/moonshot-denies-distilling-fable-and-credits-k3-gains-to-its-own-architecture/
The Register: https://www.theregister.com/2026/02/24/anthropic_misanthropic_chinese_ai_labs/
Asia Times: https://asiatimes.com/2026/09/us-calls-for-ai-poisoning-to-sabotage-chinas-model-distillation/
Lawfare: https://www.lawfaremedia.org/article/the-ai-model-distillation-paradox
All sources, card by card: https://github.com/Derivative-Work/distillation-job#sources

CREDITS
Words: Claude, audited by ChatGPT, Gemini, GLM and Qwen 3.8
Music: Suno V6, post-filtered with music-deslop (M6f 10k)
Stills and moving shots: FLUX.2 [dev] and LTX-2.3 in ComfyUI
Edit: Claude Code with Opus 5.5 (Remotion)
Little Switch: from Default On, https://github.com/Derivative-Work/default-on
The probe: from Sandbox Rhapsody, https://github.com/Derivative-Work/sandbox-rhapsody
Type: Alfa Slab One and Old Standard TT (SIL OFL), Special Elite (Apache 2.0)

Video and assets: CC BY-NC-SA 4.0 · Code: MIT
Satire. Not affiliated with or endorsed by any company or agency named here.

#AIgenerated #musicvideo #satire
```

### Tags

Paste as one comma-separated line:

```
The Distillation Job, AI music video, AI generated, AI satire, model distillation, AI distillation, heist funk, 70s funk, spy jazz, sock puppets, AI training data, fair use, AI copying AI, Suno, Claude, Claude Code, FLUX.2, LTX-2.3, Remotion, Derivative Work
```

### Settings

| Setting | Value |
|---|---|
| Category | Music |
| Audience | Not made for kids |
| Altered or synthetic content | **Yes.** The singing voice is AI-generated, and the scenes are generated. The video opens on AI-GENERATED SATIRE and keeps it on screen through the song. |
| Language / caption language | English / English |
| Captions | Upload `deliverables/distillation_job.en.srt` as English subtitles (74 cues, the lyrics as sung, line by line). The burned-in captions leave out words already on screen; the SRT keeps every word. |
| License | Standard YouTube License. YouTube's only Creative Commons option is CC BY, which would drop the NC-SA terms; the description states the licence instead. |
| Thumbnail | `deliverables/distillation_job_thumbnail.jpg` (1280×720, `src/Thumbnail.tsx`): the crew dancing at the still, the cut-paper title and the ALLEGEDLY! stamp. |
| Chapters | From the description (first chapter at 0:00; each over 10 s). |
| End screen | Over the credits page, from 7:02 to the end (13 s). Put the elements (a video and Subscribe) in the bottom corners, clear of the repository link. Starting earlier would cover the disclosure card. |
| Comments | Open. |
| Visibility | Unlisted for a check pass, then public. |

---

## Vertical Shorts (9:16, 1080×1920)

Four Shorts, each built from a stretch of the main edit (`config/shorts.json`, `src/Shorts.tsx`). Upload "monday" first (it is timed to the news), then the rest in song order.

**What they have in common:**
- The cut-paper title above the picture, the citation chip and captions below, all inside the platforms' safe zone. The music and picture start on the first frame; AI-GENERATED SATIRE over A DRAMATIZATION OF ALLEGATIONS covers the picture for the first 2.5 s, and the satire tag then stays at the picture's top right.
- Each has its own SRT, timed from its first frame. No Short thumbnails were made; the app picks a frame.
- Settings as the main video: Music; not made for kids; altered/synthetic content: yes; English captions from the Short's SRT; Standard YouTube License. No chapters or end screen. Related video: the main video.

**Shared tags** (paste for every Short):

```
The Distillation Job, AI music video, AI generated, AI satire, model distillation, heist funk, 70s funk, sock puppets, Suno, Claude, shorts
```

**Shared footer** (end of every description):

```
Full video, with the claims, the other side and every source: <MAIN VIDEO URL>
Production log, with every prompt and every human intervention: https://github.com/Derivative-Work/distillation-job
Music: Suno · Words: Claude (made by Anthropic, the main accuser in this story) · Video: Claude Code
Video and assets CC BY-NC-SA 4.0. Satire; not affiliated with any company or agency named.

#AIgenerated #satire #Shorts
```

### 1. "monday" (verse 2 through chorus 2)

96.59–149.16 s of the edited master, **52.6 s**. File `deliverables/distillation_job_short_monday.mp4`, captions `…_short_monday.en.srt`. "New model drops on Monday, by Tuesday we're in line", the traffic shift, the metadata, D25 (the real screenshots, with their caption and disclaimer repeated at full size), the hydra, and the rebuilt second chorus.

**Title:**
```
"New model drops on Monday, by Tuesday we're in line" #Shorts
```

**Description** (then the footer):
```
AI-generated satire; every accusation is an allegation. Anthropic says one operation it reported moved nearly half its traffic to Anthropic's newly released model within 24 hours (Anthropic, Feb 23, 2026). In the middle, a model run locally calls itself Claude when handed a page about Claude, and calls itself Qwen in a fresh chat. Models often misidentify themselves. This is not evidence of distillation. Verse 2 and the second chorus of The Distillation Job, an AI-made heist-funk music video.
```

### 2. "chorus" (pre-chorus 1 and chorus 1)

67.55–96.59 s, **29.0 s**. File `deliverables/distillation_job_short_chorus.mp4`, captions `…_short_chorus.en.srt`. "Rate limit? (Respawn!)", the hydra that grows two heads for every one cut, and the first chorus, each "(allegedly!)" stamped.

**Title:**
```
"It's a distillation (allegedly!)" — AI-made heist funk #Shorts
```

**Description** (then the footer):
```
AI-generated satire; every accusation is an allegation. Distillation is training one AI on another's answers. Anthropic calls the distributed infrastructure it says was used for distillation "hydra clusters"; The Register noted Anthropic failed to establish that it differs enough from commercial proxy services (Feb 2026). Claims, not findings. The first chorus of The Distillation Job, an AI-made heist-funk music video.
```

### 3. "breakdown" (their count, not ours)

149.16–166.67 s, **17.5 s**. File `deliverables/distillation_job_short_breakdown.mp4`, captions `…_short_breakdown.en.srt`. "Numbers courtesy of the vault. Their count, not ours." The counter shows 16 million, 28.8 million and 151 million, each counting up from zero, each with its claimant and date.

**Title:**
```
"Their count, not ours": 16 million, 28.8 million, 151 million #Shorts
```

**Description** (then the footer):
```
AI-generated satire; every accusation is an allegation. The figures are Anthropic's own and not independently verified: over 16 million exchanges (Feb 23, 2026), 28.8 million (a June 10 letter to senators) and over 151 million in a single campaign, peaking near 3 million a day from May to July (Sep 10). Three separate claims, not a running total: the June and September periods overlap. Claims, not findings of liability. The breakdown of The Distillation Job, an AI-made heist-funk music video.
```

### 4. "verse3" (who's the victim?)

184.14–210.40 s, **26.3 s**. File `deliverables/distillation_job_short_verse3.mp4`, captions `…_short_verse3.en.srt`. "But hold up, who's the victim in this smooth operation?": the vault built from the whole web's conversation, the house of borrowed light, "transformative" against a national line, the loot going round in circles.

**Title:**
```
"Now they're hollerin' 'Stop, thief!' from a house of borrowed light" #Shorts
```

**Description** (then the footer):
```
AI-generated satire. US labs, and the US government in court, have defended training on others' work as fair use, while the government calls distillation a security threat (Lawfare). Commentators argue distillation is standard industry practice (Asia Times). Verse 3 of The Distillation Job, an AI-made heist-funk music video.
```
