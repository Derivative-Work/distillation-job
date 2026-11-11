# The Distillation Job

**AI-generated satire. Every accusation in it is an allegation.** A seven-minute 1970s heist-funk music video about AI model distillation. A crew of masked sock puppets never breaks into the vault: they line up at its teller window and ask it, millions of times, how it was built. In verse 3 the vault turns out to be built from everyone else's stuff.

The song is sung by the crew, in the first person, so the video never ties a lyric line to a real company. Companies are named only on the claims card after the song, each item framed as what a named organization claimed, with the other side's response. The citation chips during the song name who made a claim and where it was reported, never the accused.

**Conflict of interest:** the lyrics were drafted by Claude, made by Anthropic, which is the main accuser in this story and the source of most of the figures. The end card says so. To offset it, the lyrics were audited by models from other labs, including labs Anthropic has accused, and every audit finding Claude rejected went to the human for the final call.

This repository is the production record the video's credits point to. Claude Code produced the video. A human approved each milestone, picked the takes, made the Suno generation, ran the audits in the other labs' apps and made the screen captures. Each of those 32 interventions is logged.

**The production log and decisions are written by the agent and are a record, not a statement of fact about any company:** where they discuss a claim, the claims card and its sources are the reference.

## How it was made

| Stage | What | Tools |
| --- | --- | --- |
| Lyrics | Drafted with Claude in the [planning chat](docs/planning_chat/planning_chat.md); audited by ChatGPT, Gemini, GLM and Qwen 3.8 ([`log/audits/`](log/audits/)) | Claude, other labs' chat apps |
| Song | One Suno take ([`docs/suno/`](docs/suno/)), post-filtered with a cleanup ("deslop") model so the words stay clear; four bars of the intro's instrumental cut afterwards ([`config/edit.json`](config/edit.json)) | Suno v6, music-deslop M6f |
| End-section music | The song's stems with the vocals muted, limited and post-filtered | Suno stems, music-deslop M6f |
| Timing | Lyrics aligned to the vocal stem, beats from the band; every shot cued to a word or a beat | WhisperX, librosa |
| Stills | Sock-puppet scenes and props, kept consistent with reference images | FLUX.2 [dev] in ComfyUI, on an NVIDIA GeForce RTX 5090 |
| Clips | Moving shots from picked stills; on-prop text (badges, plates, signs) lettered onto the takes afterwards | LTX-2.3 image-to-video in ComfyUI; `scripts/letter.py` |
| Film layer | 1970s film look, split screens, crash zooms, stamps, cut-paper titles, ransom-note captions; every random choice seeded (41) | Remotion 4 |
| Real captures | The research chat, the Qwen screenshots, the audit log | Puppeteer; the human's screenshots |
| Checks | Four lyric audits by other labs' models; every source reopened at M6; the human's and their reviewers' review of the sources | ChatGPT, Gemini, GLM, Qwen 3.8; humans |
| Human | Milestone approvals, takes, the Suno generation, the audits, the screenshots, every edit note | a human |

## Real captures

Three things in the video are real records, not generated. They are drawn outside the film layer so they read as real.

- **The research chat (0:00 to 0:08):** the chat in which Claude gathered the allegations, captured from its public share page and labelled "Research: Claude, Nov 4, 2026".
- **D25, the identity segment (2:00 to 2:10):** during the lyric audit, a locally run Qwen 3.8 (`qwen3.8:27b`, Ollama's official build, no system prompt) answered "I am Claude, made by Anthropic". The segment shows two real Open WebUI screenshots of that same model: a fresh chat in which it says it is Qwen, by Alibaba, and its reply to the audit prompt, which named Claude and Anthropic many times. Its caption: "SAME MODEL. HANDED A PAGE ABOUT CLAUDE, IT DECIDED IT WAS CLAUDE." Under it, highlighted: "Models often misidentify themselves. This is not evidence of distillation." The likely cause is priming by the prompt; see the [audit index](log/audits/README.md).
- **The audit log (6:00 to 6:40):** every auditor's findings, rendered from [`log/audits/`](log/audits/), stopping on four places where an auditor defends its own maker or doesn't.

## Sources

### The claims card (4:16), verbatim

1. The following figures and attributions are claims made by the named organizations or government agencies. They are not findings of liability. Some are disputed, and the underlying evidence has not been made public in full.
2. The other side: Moonshot denied the White House's claim that Kimi K3 was distilled from Anthropic's model, and researchers questioned whether the timeline allowed it. China's government called the accusations unfounded. Other named labs did not immediately respond to reporters. Chinese commentators argue distillation is standard industry practice. *([Implicator](https://www.implicator.ai/moonshot-denies-distilling-fable-and-credits-k3-gains-to-its-own-architecture/), [Asia Times](https://asiatimes.com/2026/09/us-calls-for-ai-poisoning-to-sabotage-chinas-model-distillation/), [The Register](https://www.theregister.com/2026/02/24/anthropic_misanthropic_chinese_ai_labs/))*
3. The claims, February:

   | Date | Claimed by | Accused | Claim | Source |
   | --- | --- | --- | --- | --- |
   | Feb 12, 2026 | OpenAI memo to the House China committee | DeepSeek employees | used obfuscated third-party routers to get around access limits on US models | [Reuters](https://finance.yahoo.com/news/openai-accuses-deepseek-distilling-us-221629899.html) |
   | Feb 23, 2026 | Anthropic | DeepSeek, Moonshot, MiniMax | over 16 million Claude exchanges through about 24,000 fraudulent accounts | [Anthropic](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks), [Computing](https://www.computing.co.uk/news/2026/ai/chinese-firms-used-distillation-copy-claude) |
   | Feb 23, 2026 | Anthropic | MiniMax | redirected nearly half its traffic to Anthropic's newly released model within 24 hours | Anthropic, [Gigazine](https://gigazine.net/gsc_news/en/20260224-anthropic-deepseek-moonshot-minimax) |
   | Feb 23, 2026 | Anthropic | DeepSeek | prompts asked Claude to write out its reasoning step by step | Gigazine |
   | Feb 23, 2026 | Anthropic | Moonshot | request metadata matched public profiles of senior staff | Computing |

   "Anthropic's attributions rest mainly on its own account and traffic data, with some corroboration it says came from industry partners; the evidence is unpublished. These are claims, not findings of liability."
4. The claims, June to September:

   | Date | Claimed by | Accused | Claim | Source |
   | --- | --- | --- | --- | --- |
   | Jun 10, 2026 | Anthropic, letter to senators | Alibaba/Qwen-affiliated operators | 28.8 million exchanges through almost 25,000 accounts | [Let's Data Science](https://letsdatascience.com/news/anthropic-accuses-alibaba-of-distilling-claude-d0593c90) |
   | Sep 8, 2026 | NSA, CISA and FBI joint cybersecurity advisory (it cites industry reports, including Anthropic's) | DeepSeek, Moonshot AI, Alibaba, MiniMax, StepFun and Z.AI | advised not telling suspected distillers about a switch to a downgraded model; an advisory, not a court finding | [CISA](https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-251a), [CyberScoop](https://cyberscoop.com/us-accuses-chinese-ai-companies-distillation/) |
   | Sep 10, 2026 | Anthropic | an Alibaba-linked campaign | over 151 million exchanges, peaking near 3 million a day (May to July) | [Anthropic](https://www.anthropic.com/threat-intelligence-report-september-2026), [Let's Data Science](https://letsdatascience.com/news/anthropic-reports-large-scale-claude-distillation-attempts-a23fb82f) |

   "These are claims, not findings of liability."

   The breakdown's counter shows Anthropic's three figures (16 million, 28.8 million, 151 million) one at a time, each counting up from zero: they are separate claims about different periods and labs, and the June figure very likely falls inside the 151 million.
5. Google reported a campaign of over 100,000 prompts aimed at Gemini's reasoning. *([Android Authority](https://www.androidauthority.com/google-gemini-clone-attempts-3640480))*
6. Identity mix-ups: in December 2024, DeepSeek V3 often identified itself as ChatGPT. Prompted in Mandarin, Gemini once called itself Baidu's chatbot. TechCrunch judged text from other models all over the web a likelier cause than direct distillation. *([TechCrunch](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/))*
7. The flip: US labs, and the US government in court, have defended training on others' work as fair use, while the government calls distillation a security threat. Qwen's share of open-model fine-tunes reportedly reached about 69% by February 2026. *([Lawfare](https://www.lawfaremedia.org/article/the-ai-model-distillation-paradox))*

### The citation chips, during the song

Each chip sits bottom left for 2 to 5 seconds and names who made a claim and where it was reported, never an accused lab ([`config/citations.json`](config/citations.json)).

| Time | Chip | Source |
| --- | --- | --- |
| 0:08 | Anthropic's claim, Feb 23, 2026 | Anthropic |
| 0:45 | Obfuscated routers: OpenAI memo, Feb 12, 2026 | Reuters |
| 0:58 | Anthropic's claim: over 16 million exchanges | Computing |
| 1:03 | Anthropic's claim: prompts asked for step-by-step reasoning | Gigazine |
| 1:10 | "Hydra clusters": Anthropic's term | The Register |
| 1:42 | Anthropic's claim: nearly half the traffic moved within 24 hours | Anthropic, Gigazine |
| 1:55 | Anthropic's claim: request metadata matched staff profiles | Computing |
| 2:35 | Anthropic's count, Feb 23, 2026 | Anthropic |
| 2:38 | Anthropic letter to senators, Jun 10, 2026 | Let's Data Science |
| 2:40 | Anthropic report, Sep 10, 2026 (peak, May to July) | Anthropic, Let's Data Science |
| 2:46 | NSA, CISA and FBI advisory, Sep 8, 2026: an advisory, not a court finding | CISA |
| 3:15 | US labs, and the US government in court, defend training as fair use; the government calls distillation a security threat | Lawfare |
| 3:22 | Reported: fine-tuning on other labs' open models is now common | Lawfare |
| 3:24 | Commentators argue distillation is standard industry practice | Asia Times |
| 4:00 | One named lab denied it; China called the claims unfounded; others didn't immediately respond | Implicator, The Register |

Every link was reopened and checked on November 10, 2026 ([`log/m6/source_check_2026-11-10.md`](log/m6/source_check_2026-11-10.md)). News about these claims is moving; anything newer than that date is not reflected.

## Where things are

- [`log/production_log.md`](log/production_log.md): every generation, analysis and render, with model, prompt, seed, inputs, output and whether it was kept.
- [`log/human_interventions.md`](log/human_interventions.md): every human action, in the human's words.
- [`log/decisions.md`](log/decisions.md): every deviation from the brief, and why. [`log/ai_changes.md`](log/ai_changes.md): what the song generator changed from the lyrics as written.
- [`log/audits/`](log/audits/): the lyric audits, verbatim. [`log/m6/`](log/m6/): the M6 source check and corrections.
- [`docs/brief.md`](docs/brief.md): a plain-text mirror of the brief (shot list, look, lyrics, audit plan, claims card, guardrails). The video deviates from it where `log/decisions.md` says so.
- [`docs/planning_chat/`](docs/planning_chat/): the planning chat. [`docs/suno/`](docs/suno/): the Suno take's page record and the lyrics as submitted.
- [`lyrics/`](lyrics/): the lyrics as pasted into Suno and as sung.
- [`shots/`](shots/): every still and clip prompt with its seed, and each shot's pipeline.
- [`config/`](config/): the master edit, shot cues, claims card, chips, captions, lettering, Shorts and every edit setting. [`timing/`](timing/): the timing maps (the take's and the edit's) and shot times.
- [`src/`](src/): the Remotion project (the film layer, the devices, the edit, the Shorts, the thumbnail). [`src/defaultOn/`](src/defaultOn/): the Little Switch cameo, copied unchanged from [Default On](https://github.com/Derivative-Work/default-on).
- [`scripts/`](scripts/): one script per step, each documented at the top.
- [`METADATA.md`](METADATA.md): the YouTube titles, descriptions, tags and settings for the main video and the four Shorts, and the checklist before upload.

## Reproducing it

Large files (audio, takes, the videos) are not in git; [`MANIFEST.sha256`](MANIFEST.sha256) lists them with checksums. There is no archive release yet.

- With the media in place, `npx remotion render src/index.ts Main deliverables/distillation_job_1080p.mp4 --concurrency=8 --gl=swiftshader --crf=16` renders the main video; the Shorts are `Short-<id>` (chorus, breakdown, verse3, monday). Captions: `python3 -I scripts/export_srt.py` (and `… short <id>`).
- The edited master and its timing come from the locked post-filtered take: `.venv/bin/python -I scripts/cut_master.py && .venv/bin/python -I scripts/shot_times.py`.
- Regenerating the takes is a per-stage job; the commands are in the production log, and the picks in `config/` make the same choices again. Every random process reads its seed from [`config/seeds.json`](config/seeds.json). Stills and clips with the same seed, weights and ComfyUI version should match on the same GPU (an NVIDIA GeForce RTX 5090, 32 GB); expect small differences elsewhere.
- The song can't be regenerated: Suno doesn't give the same song twice. The post-filter model is private for now.

## Licences

- **Video and assets:** [CC BY-NC-SA 4.0](LICENSE-media.md). That file lists exactly what it covers and what it doesn't (fonts, the ComfyUI template, the Little Switch rig, the chat interfaces in the captures, the auditors' outputs).
- **Code:** [MIT](LICENSE). Rendering it needs [Remotion](https://www.remotion.dev), which has its own licence: free for individuals, small companies and non-profits.

## Credits

- **Lyrics:** Claude, drafted in the [planning chat](docs/planning_chat/planning_chat.md); audited by ChatGPT (OpenAI) and Gemini (Google) on November 5, 2026, and GLM (Z.ai) and Qwen 3.8 (Alibaba, run locally) on November 6.
- **Music:** Suno v6, one take ("Distillation (Allegedly)", 173da502). The end-section music is the same take's stems without vocals.
- **Post-filter:** music-deslop (M6f, 10k steps), a cleanup model for AI-generated music that Claude Code built and trained from a human-written spec, on Creative Commons audio only (training data listed in the [Folks Like Us README](https://github.com/Derivative-Work/folks-like-us#mastering-model-training-data)). The model is private for now.
- **Video:** Claude Code with Claude Opus 5.5, with stills from FLUX.2 [dev] (Black Forest Labs) and motion from LTX-2.3 (Lightricks), each used under its own licence.
- **Little Switch** (the bridge, 2:50): from [Default On](https://github.com/Derivative-Work/default-on); the rig is used unchanged ([`src/defaultOn/`](src/defaultOn/)).
- **The probe** (verse 3 at 3:08, and the final chorus): from [Sandbox Rhapsody](https://github.com/Derivative-Work/sandbox-rhapsody), regenerated with FLUX.2 from a frame of its release video, its amber glow turned green so it reads as some lab's worker rather than any one lab's ([decision 5](log/decisions.md)).
- **Fonts:** [Alfa Slab One](https://fonts.google.com/specimen/Alfa+Slab+One) and [Old Standard TT](https://fonts.google.com/specimen/Old+Standard+TT) (SIL Open Font License 1.1), [Special Elite](https://fonts.google.com/specimen/Special+Elite) (Apache License 2.0), in `public/fonts/`.
