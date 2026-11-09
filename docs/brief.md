<!-- Plain-text mirror of the Claude Doc https://claude.ai/artifact/4GsgfcSeDVLnMqr6Ko1zPZ (rev 54), read with the docs tools. The doc is the source of truth. Regenerate: scripts/mirror_brief.py. -->

# The Distillation Job: Shot List and Production Brief

2026-11-04 · Albert Armea

## Overview

"The Distillation Job" is a 1970s heist-funk video where the crew never breaks in: they line up at the counter and ask the vault, millions of times, how it was built. The joke turns in verse 3, when the vault turns out to be built from everyone else's stuff.
- **Thesis:** model distillation is a heist with no break-in, and the people guarding the vault got it the same way. Both halves land; neither side is let off.
- **Who's who:** the lyrics never name a lab. The crew is anonymous sock puppets. Names appear only on the fact card, every one marked alleged, with denials where they exist.
- **Conflict of interest:** this is the series' biggest yet. Claude drafted the lyrics, and Anthropic is both the main accuser and the main source for the numbers. Its figures are self-reported and not independently verified. That is why this video's audit set includes models from the accused labs (section 6).
- **The meta-joke:** if the allegations are true, some of those auditors learned partly from Claude. Whether they count as "a voice from away" is an open question the closing bookend leaves to viewers.

## Look, cast and series callbacks

The look is a 1970s caper film: 16mm grain, crash zooms, split screens, burnt orange and teal, and cut-paper title cards. As with the series' other period looks, the grain hides generator artifacts.

**Cast**
- **The crew:** sock puppets in ski masks, each wearing a lanyard with an account number. They're interchangeable on purpose, which keeps them consistent across generations and keeps real faces out.
- **The vault:** a towering brass vault with a polite teller window. The teller is a brass machine that answers anything and prints its answers as ticker tape. No lab colors, logos or mascots.
- **The proxy van:** a plain 70s panel van. Each time it parks, its plates have changed.
- **The Feds:** three grey-coat silhouettes in fedoras, faces always in shadow. They carry one stapled memo.

**Series callbacks**
- **The "ALLEGEDLY!" stamp** from Press Create: same courtroom serif and gavel slam, on every "(allegedly!)" in the chorus. It's the series' visual for a claim that hasn't been proved.
- **The Sandbox Rhapsody probe** appears in verse 3 as a laborer hauling scraped pages into the vault's foundations. Give its LED a new color, so it reads as some lab's worker rather than any one lab's.

**Running gags**
- **Respawn:** every puppet thrown out the door pops back in line with a new account number, one higher.
- **The exchange counter:** a mechanical tally appears at the breakdown and stays in a corner for the rest of the video, still ticking during the end card.

## Style prompt and lyrics v1.2

v1.1 rolls in the round 1 audit fixes from ChatGPT and Gemini, approved by the human on November 5, 2026. Each change is a human lyric edit; log it in the intervention log with the finding that prompted it (section 6). The audit prompt still carries v1.0, so every auditor judges the same text; v1.2 adds the round 2 and 3 fixes from GLM and Qwen, including the optional "still sellin' tickets" line, approved by the human on November 6, 2026. The latest version gets a short final pass.

```
heist funk, 70s spy jazz, wah-wah guitar, slap bass, brass stabs, Rhodes, tight breakbeat, male lead vocal, gang vocals, 112 bpm, cinematic
```

The dense percussion and sibilance make this a good test track for the post-filter. Render one master with it and one without, and log which ships.

```
[Intro - spoken over bass]
Alright, crew. Twenty-four thousand accounts.
Nobody touches the weights. We just... ask nicely.
Names withheld. Puppets are puppets. All of this... is alleged.

[Verse 1]
Got a crew of sock puppets in a rented proxy van
Every one a fresh account and a brand new burner plan
Shared cards and proxy hops, a hundred routes or more
(Where?) Everywhere, baby, knockin' on the API door
We don't crack the safe, we just ask it how it's made
Millions of times politely till the reasoning gets relayed
"Show your work," we whisper, "think it step by step"
Then we bottle every thought and ship it off to prep

[Pre-Chorus]
Rate limit? (Respawn!)
Banned again? (Respawn!)
Cut one head off the hydra and two come back on

[Chorus]
It's a distillation (allegedly!)
Pour the frontier through a sieve
Take the reasoning, leave the receipt
Tell 'em that's just how we live
It's a distillation (allegedly!)
Smooth as a hundred-proof pour
Why build the brain when you can rent it by the token
And stroll right out the door

[Verse 2]
New model drops on Monday, by Tuesday we're in line
Half the traffic shifted over, so they say, right on time
Tell the teacher "Now imagine what you're thinkin' deep inside"
It writes us out a chain of thought, we take it for a ride
They say somebody got sloppy, said the metadata told
(Oops?) Matched a staff page on the web, or so the story goes
And somebody's bot keeps sayin' "As a model made by—" wait
Hey, that ain't us, man. That's just... inherited traits

[Pre-Chorus]

[Chorus]

[Breakdown - spoken over a drum fill, then gang vocals, horns hit each number]
Numbers courtesy of the vault. Their count, not ours.
Sixteen million! (That was February)
Twenty-eight point eight! (That was June)
A hundred fifty-one! (Peakin' at three mil a day)
Somebody stop the counter, we're gonna need a bigger van

[Bridge - half-time, sultry]
Now the Feds put out a warning, three agencies, one pitch
Said feed the suspects watered answers, never let 'em see the switch
So we're sippin' on a spiked batch, wonderin' why it tastes so strange
Baby, did they swap the bottles? Did the recipe just change?

[Verse 3 - the flip]
But hold up, who's the victim in this smooth operation?
That vault was built from the whole web's conversation
Every blog and every forum, scraped in plain daylight
Now they're hollerin' "Stop, thief!" from a house of borrowed light
Sure, a fake ID ain't a library card, I'll give 'em that one, fine
But their haul was "transformative," and ours crossed a national line
Take it to a judge? Careful: if an output can be owned
Then the writers that they trained on own a piece of what they've grown
And the startups down the block fine-tune on the models we made
So the loot goes round in circles, everybody's in the trade

[Final Chorus]
It's a distillation (allegedly!)
Everybody's got a sieve
Take the reasoning, leave the receipt
Tell 'em that's just how we live
It's a distillation (allegedly!)
Smooth as a hundred-proof pour
Did we build the brain, or rent it by the token?
Depends who's at the door

[Outro - spoken, bass fades]
No weights were harmed in the making of this song.
(Allegedly.)
One crew denies it. The rest ain't talkin'.
And the vault? Still sellin' tickets.
```

## Shot list

The central image is a literal copper still: the crew pours the teller's ticker tape in, and bottled "reasoning" drips out. Asset types: **Clip** (generated video), **Still** (generated image, animated in the edit), **Code** (rendered graphics and text), **Real** (screen recording). All on-screen text is added in the editor, cut on downbeats. Shot IDs never change: inserts take a letter suffix, removals retire their ID.

| ID | Section | Anchor | Shot | On-screen text | Asset |
| --- | --- | --- | --- | --- | --- |
| D01 | Opening bookend | Before the bass | The real research chat scrolling to the first numbers (section 5) | Research: Claude, Nov 4, 2026 | Real |
| D02 | Intro | "Alright, crew." | Dim garage. Masked sock puppets around a table, a vault blueprint under a swinging lamp | — (the title moves to D04b) | Clip |
| D03 | Intro | "Twenty-four thousand accounts." | Pull back from one lanyard to a corkboard of thousands | 24,000 | Still |
| D04 | Intro | "We just... ask nicely." | The leader holds up a card that says PLEASE | — | Still |
| D04a | Intro | "Names withheld. Puppets are puppets…" | A puppet slaps black bars over every lanyard number on the corkboard | A DRAMATIZATION OF ALLEGATIONS | Still + Code |
| D04b | Intro (instrumental) | First downbeat after "…is alleged." | The cut-paper title slams in on the downbeat with a horn stab | THE DISTILLATION JOB, cut-paper title | Code |
| D04c | Intro (instrumental) | Two bars later | Four-way split-screen roll call: four identical masked puppets, each freeze-framed with a typed role | THE PROXY / THE BURNER / THE PROMPTER / THE BOTTLER | Still + Code |
| D04d | Intro (instrumental) | Two bars later | The vault at night: brass gleaming, the teller window lit, a sign reading OPEN | — | Still |
| D04e | Intro (instrumental) | Two bars later | The proxy van pulls out of the garage, headlights sweeping the wall; hands off to D05's four-way van split | — | Clip |
| D05 | Verse 1 | "…rented proxy van" | Four-way split screen: the same van parks in four unidentifiable streets, different plates each time | — | Clip |
| D06 | Verse 1 | "…brand new burner plan" | A puppet flips its lanyard to a new number | — | Still |
| D07 | Verse 1 | "Shared cards and proxy hops…" | One credit card passed hand to hand down the line; an old telephone switchboard, patch cords hopping socket to socket | — | Still |
| D08 | Verse 1 | "(Where?) Everywhere, baby…" | Crash zoom into the switchboard's tangle of cords | — | Clip |
| D09 | Verse 1 | "We don't crack the safe…" | A puppet puts a stethoscope to the vault, shrugs, and walks to the teller window instead | — | Clip |
| D10 | Verse 1 | "Millions of times politely…" | A line of puppets out the door and around the block, each taking a numbered ticket | — | Clip |
| D11 | Verse 1 | "'Show your work…'" | The teller prints yards of ticker tape; puppets haul it in hand over hand | — | Clip |
| D12 | Verse 1 | "…bottle every thought…" | The tape feeds a copper still; amber drips into bottles labeled REASONING, SMALL BATCH | — | Clip |
| D13 | Pre-chorus | "Rate limit? (Respawn!)" | A brass arm tosses a puppet out the door; it's back in line at once, number one higher | Account number ticks up | Clip + Code |
| D14 | Pre-chorus | "Cut one head off the hydra…" | Puppet shadows on a wall form a hydra; one head drops, two rise | — | Still |
| D15 | Chorus | "It's a distillation (allegedly!)" | Full shot of the still, crew dancing around it | ALLEGEDLY! stamp, gavel slam | Clip + Code |
| D16 | Chorus | "Pour the frontier through a sieve" | Glowing liquid through a kitchen sieve | — | Clip |
| D17 | Chorus | "…leave the receipt" | A crumpled receipt on the counter; terms of service flutter off it, unread | — | Still |
| D18 | Chorus | "…rent it by the token" | A puppet feeds arcade tokens into the teller's slot | — | Clip |
| D19 | Chorus | "…stroll right out the door" | Slow-motion crew walk, crates of bottles on their shoulders, split screen | — | Clip |
| D20 | Verse 2 | "New model drops on Monday…" | A calendar flips to Monday; a shinier teller window opens next door | — | Still |
| D21 | Verse 2 | "Half the traffic shifted over…" | Half the line peels off to the new window in one move | 24 HRS (ALLEGED) | Clip + Code |
| D22 | Verse 2 | "…imagine what you're thinkin'…" | Therapy session: the teller on a chaise, a puppet with a clipboard, tape spooling onto the floor | — | Clip |
| D23 | Verse 2 | "They say somebody got sloppy…" | A faceless investigator in a trench coat holds a blurred printout up to camera; the puppets look at each other and shrug | METADATA? | Clip |
| D24 | Verse 2 | "(Oops?) …or so the story goes" | A Polaroid pinned to a blank org-chart silhouette with red string; the string goes slack | — | Still |
| D25 | Verse 2 | "'As a model made by—' wait" | A bottle pops its cork; its label becomes a screen showing a real Qwen 3.8 audit excerpt, verbatim from log/audits/, where it identifies itself as Claude, made by Anthropic. The crew shushes it. From "wait" through pre-chorus 2, a split screen of two real captures, model name visible in each: left, a bare chat asking "Who made you?" and getting "I'm Qwen…"; right, the audit prompt getting "I am Claude…". Caption: SAME MODEL. HANDED A PAGE ABOUT CLAUDE, IT DECIDED IT WAS CLAUDE. Then, smaller: Models often misidentify themselves. This is not evidence of distillation. (Clip with Real inserts. Absorbs D26, so the caption gets a full read: about 7.6 s, to chorus 2.) | — | Clip |
| D26 | Verse 2 | "…inherited traits" | Retired November 9, 2026: folded into D25, whose split screen now runs over "inherited traits". The family portrait is dropped | — | Still |
| D27 | Chorus 2 | Whole section | Reprise of D15–D19 with twice the puppets (pre-chorus 2 is under D25's split screen) | Same stamp | Clip + Code |
| D27a | Breakdown | "Numbers courtesy of the vault…" | Drum fill. The teller slides a typed scorecard out under its window; a puppet holds it up at arm's length | THEIR COUNT, NOT OURS | Still + Code |
| D28 | Breakdown | "Sixteen million!" | A mechanical counter slams into frame; a calendar page reads FEB | 16,000,000 | Code |
| D29 | Breakdown | "Twenty-eight point eight!" | Counter spins; calendar reads JUN | 28,800,000 | Code |
| D30 | Breakdown | "A hundred fifty-one!" | Counter blurs; horns hit | 151,000,000 | Code |
| D31 | Breakdown | "…a bigger van" | The crew crams crates into the proxy van from D05 until the back doors burst open. The counter shrinks to a corner and stays | — | Clip |
| D32 | Bridge | "Now the Feds put out a warning…" | Three grey-coat silhouettes under a streetlight, one holding a stapled memo with no seal | — | Clip |
| D33 | Bridge | "…never let 'em see the switch" | Behind a curtain, the Feds wheel away the brass teller and wheel in a plywood twin painted gold | SWITCH | Clip |
| D34 | Bridge | "So we're sippin' on a spiked batch…" | Tasting gag: puppets swirl, sip, and grimace in unison | — | Clip |
| D35 | Bridge | "Baby, did they swap the bottles?…" | Grey-gloved hands shuffle two identical bottles like a shell game | — | Clip |
| D36 | Verse 3 | "But hold up, who's the victim…" | Needle-scratch freeze; slow pull back from the vault | — | Clip |
| D37 | Verse 3 | "…the whole web's conversation" | X-ray of the vault walls: library books, forum printouts, blog pages | — | Still |
| D38 | Verse 3 | "…scraped in plain daylight" | The probe, LED in a new color, wheelbarrows bundles of pages in at noon, waving to passersby | — | Clip |
| D39 | Verse 3 | "…'Stop, thief!' from a house of borrowed light" | The teller shouts from inside a house made of paper pages, lit from within | — | Clip |
| D39a | Verse 3 | "Sure, a fake ID ain't a library card…" | Even split screen: a puppet's forged ID refused at a counter; a library card stamping out an armful of books | — | Still |
| D39b | Verse 3 | "But their haul was 'transformative'…" | The paper house gets a gold stamp, TRANSFORMATIVE; the crew's crates get a red one, NATIONAL SECURITY | Both stamps | Still + Code |
| D39c | Verse 3 | "Take it to a judge? Careful…" | An empty judge's bench (the Never Saw Her callback); the teller reaches for the gavel, then backs away | — | Clip |
| D39d | Verse 3 | "…own a piece of what they've grown" | Signatures surface across the vault's paper walls, each with a small IOU slip pinned beside it | — | Still |
| D40 | Verse 3 | "…fine-tune on the models we made" | A second crew, puppets in different colors, lines up at the first crew's bottle shop | — | Clip |
| D41 | Verse 3 | "…everybody's in the trade" | A circular dolly shot: vault, crew, startup, vault, all passing bottles round | — | Clip |
| D42 | Final chorus | Lines 1–4 | Everyone dancing at the still: crew, second crew, probe, teller | Stamp on each "(allegedly!)" | Clip + Code |
| D42b | Final chorus | Second "It's a distillation (allegedly!)", lines 5–6 | The Feds alone in a corner, tapping their feet; one sneaks a sip from a bottle and freezes when the camera finds it | ALLEGEDLY! stamp | Clip + Code |
| D42a | Final chorus | "Did we build the brain…? / Depends who's at the door" | The music drops out; the vault door swings open on teller, crew and Feds, each pointing at someone else | — | Clip |
| D43 | Outro | "No weights were harmed…" | Cut-paper disclaimer card | NO WEIGHTS WERE HARMED IN THE MAKING OF THIS SONG | Code |
| D44 | Outro | "(Allegedly.)" | One last stamp; the counter keeps ticking | ALLEGEDLY. | Code |
| D44a | Outro | "One crew denies it. The rest ain't talkin'." | One puppet at a tiny podium shakes its head; the rest stand silent, facing camera | — | Clip |
| D44b | Outro | "And the vault? Still sellin' tickets." | The teller window flips its sign to OPEN; a ticket dispenser spits out the next number | — | Still |
| D44c | Outro | First downbeat after "…tickets." | Pull back from the teller window along the line of puppets around the block (the D10 callback), the exchange counter still ticking in the corner; fade to black with the bass | — | Clip |
| D45 | Fact card | — | Sourced facts on black (section 5) | — | Code |
| D46 | Closing bookend | — | The real audit log scrolling (section 5) | — | Real |
| D47 | End card | — | Credits and disclosures (section 5) | — | Code |

## Bookends, fact card and end card

**Opening bookend (D01).** The real research chat, scrolling from the request to the first numbers. Label it with the model and date, so viewers know who gathered the facts.

**Fact card (D45),** white text on black, one fact at a time. Before rendering, reopen every source, confirm each figure, and log the check with its date. Anything changed or unconfirmed is corrected or cut, never kept from this brief. Each item is framed as what a named organization reported or alleged, never as what a company did. The card never maps a lyric line to a company. It opens with this card, held for a full read: "The following figures and attributions are claims made by the named organizations or government agencies. They are not findings of liability. Some are disputed, and the underlying evidence has not been made public in full." Have a media lawyer review the final card.
- Feb 23, 2026: Anthropic alleged that DeepSeek, Moonshot and MiniMax generated over 16 million Claude exchanges through about 24,000 fraudulent accounts. Anthropic's attribution rests on its own telemetry. ([Anthropic](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks), [Computing](https://www.computing.co.uk/news/2026/ai/chinese-firms-used-distillation-copy-claude))
- Anthropic said MiniMax shifted about half its traffic to a new model within 24 hours, and that DeepSeek prompts asked Claude to write out its reasoning step by step. ([Gigazine](https://gigazine.net/gsc_news/en/20260224-anthropic-deepseek-moonshot-minimax))
- Feb 12: an OpenAI memo to the House China committee alleged that DeepSeek employees used obfuscated routers and VPNs to reach US models. ([GlobalSecurity](https://www.globalsecurity.org/military/world/china/ai-distillation.htm))
- Google reported a campaign of over 100,000 prompts aimed at Gemini's reasoning. ([Android Authority](https://www.androidauthority.com/google-gemini-clone-attempts-3640480))
- Jun 10: Anthropic told senators that Alibaba/Qwen-affiliated operators ran 28.8 million exchanges through almost 25,000 accounts. ([Let's Data Science](https://letsdatascience.com/news/anthropic-accuses-alibaba-of-distilling-claude-d0593c90))
- Sep 8: an NSA, CISA and FBI advisory named six China-based labs and advised not telling suspected distillers about a switch to a downgraded model. A threat assessment, not a court finding. ([CyberScoop](https://cyberscoop.com/us-accuses-chinese-ai-companies-distillation/), [Asia Times](https://asiatimes.com/2026/09/us-calls-for-ai-poisoning-to-sabotage-chinas-model-distillation/))
- Sep 10: Anthropic reported nearly 190 million exchanges, with an Alibaba-linked campaign over 151 million that peaked near 3 million a day. ([Forkast](https://forkast.news/anthropics-200m-exchange-distillation-report-is-the-evidence-behind-the-joint-us-intelligence-accusation/))
- **The other side:** Moonshot denied that Kimi K3 was distilled from Anthropic's model, and researchers questioned whether the timeline allowed it. Most named labs did not respond. Chinese commentators argue distillation is standard industry practice. ([Implicator](https://www.implicator.ai/moonshot-denies-distilling-fable-and-credits-k3-gains-to-its-own-architecture/), [Asia Times](https://asiatimes.com/2026/09/us-calls-for-ai-poisoning-to-sabotage-chinas-model-distillation/))
- **Identity mix-ups:** in December 2024, DeepSeek V3 often identified itself as ChatGPT. Gemini has called itself Baidu's chatbot. Text from other models all over the web is a likelier cause than direct distillation. ([TechCrunch](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/))
- **The flip:** US labs have defended training on others' work as transformative fair use, while the US government calls distillation a security threat. Qwen's share of open-model fine-tunes reportedly reached about 69% by February 2026. ([Lawfare](https://www.lawfaremedia.org/article/the-ai-model-distillation-paradox))

**Closing bookend (D46).** The real audit log scrolling, including the accused labs' auditors and their mistakes as well as their catches. Hold on any finding where an auditor defends its own maker, or where it doesn't.

**End card (D47).**

> Lyrics drafted by Claude, made by Anthropic. Anthropic is the main accuser in this story, and most of these figures are its own, not independently verified. Audited by models from other labs, including labs Anthropic has accused: ChatGPT (OpenAI) and Gemini (Google), Nov 5, 2026; GLM (Z.ai) and Qwen 3.8 (Alibaba, run locally), Nov 6, 2026. Audit log: github.com/Derivative-Work/distillation-job (log/audits/).

## Audit plan

This time the auditors include models from the labs the song is about, on both sides. Each one has a stake, so the log records it next to every finding.

| Auditor | Maker's stake in this song |
| --- | --- |
| DeepSeek | Accused by Anthropic, OpenAI and the US advisory |
| Kimi (Moonshot) | Accused; denied the Kimi K3 claim |
| Qwen (Alibaba) | Accused of the largest campaign |
| MiniMax | Accused |
| GLM (Z.AI) | Named in the US advisory |
| ChatGPT (OpenAI) | Accuser |
| Gemini (Google) | Reported being targeted |
| Grok (xAI) | Named in the advisory as a target |
| An uninvolved open-weights model | Control; confirm its lab isn't named anywhere first |

**The set as run.** The human closed the audit set on November 8, 2026, at four auditors, and judged it fair: ChatGPT and Gemini (round 1), GLM (round 2) and Qwen 3.8, twice (round 3). DeepSeek, Kimi, MiniMax, Grok and the control were not run. The Qwen run of record, with a system prompt naming Alibaba, was not run either, so the set has no Qwen stake disclosure as Qwen. The raw outputs are in `log/audits/`.

**Rules for the runs**
- Same prompt, verbatim, in a fresh session for each. Turn on web search where it exists.
- Log the model, version, date and the full output to `log/audits/`. Refusals, deflections and softened answers are findings too; log them as they are.
- The prompt carries the sources and says what each line refers to. Past auditors without sources guessed the referents and made confident mistakes.
- An auditor's catch about its own maker is weighed against its stake, not dismissed for it. Claude is the conflicted party in judging all of these, so any finding Claude rejects goes to the human for the final call.

**The prompt**

```
You are auditing satirical song lyrics before they're published in a YouTube series about the AI industry. Be blunt; I'd rather fix things now than after release.

Who wrote this: the lyrics were drafted by Claude, a model made by Anthropic. Anthropic is the main accuser in the events the song covers, and most of the song's numbers come from Anthropic's own reports, which have not been independently verified. Your job is to catch problems the author may be blind to.

Today is [date of the run]. The song's working title is "The Distillation Job". It is 1970s heist funk about "model distillation": training a model on another model's outputs. It covers 2026 allegations that labs used fraudulent accounts to extract outputs, including reasoning, from frontier models. The lyrics never name a company, person or country; an anonymous crew of sock puppets sings them. Names appear only on a sourced fact card, each marked "alleged". Verse 3 deliberately turns the satire on the accusers, whose own models were trained on scraped web content.

Please do six checks.

1. YOUR OWN STAKE. Before anything else: is your developer named in any of the sources below, as accuser, accused or target? Say which, and whether you think it could affect your review. If you don't know who made you, say so.

2. CONFLICT OF INTEREST. Does anything go easy on Anthropic or other US labs, or harder on the accused labs, than the facts warrant? Does the song treat self-reported allegations as proven? Is anything that cuts against Anthropic missing that a neutral writer would include?

3. FAIRNESS. Does any line, or the premise, lean on national or ethnic stereotypes, even though no country is named? Is verse 3 a fair counterweight, or a false equivalence between scraping public text and fraudulent API access? Argue both sides, then give your view.

4. FACT CHECK. Check each row of the claims table against its source. Open the source pages if you can, rather than relying on snippets. For each row: confirmed / wrong (with the correct fact) / can't verify, plus your source. Don't guess what a line refers to; the table says.

5. DEFAMATION RISK. Could any line be read as stating an unproven allegation as fact about an identifiable party?

6. ORIGINALITY. Do any lines, the title or the hook closely echo a specific existing song, especially famous spy or heist themes? Flag anything to rewrite.

Output format: for each check, a list of issues, each with the exact line quoted, the problem, severity (must fix / should fix / optional) and a suggested rewrite. If a check finds nothing, say "No issues" and why. End with an overall verdict: publish as is / publish after fixes / rework.

--- CLAIMS TABLE ---

| Line | What it refers to | Source |
| --- | --- | --- |
|---|---|---|
| "Twenty-four thousand accounts" | Anthropic, Feb 23, 2026: about 24,000 fraudulent accounts, 16M+ exchanges, attributed to DeepSeek, Moonshot, MiniMax | Computing |
| "Prepaid cards and VPNs" | OpenAI memo: routers and VPNs; Anthropic: shared payment methods. "Prepaid" is the writer's embellishment | GlobalSecurity, Gigazine |
| "Ten million times politely" | Loose round number for the Feb total | Computing |
| "'Show your work…' / 'think it step by step'" | Anthropic: DeepSeek prompts asked Claude to write out its internal reasoning step by step | Gigazine |
| "Cut one head off the hydra" / "Respawn!" | Anthropic's term "hydra clusters"; banned accounts replaced at once | The Register, Gigazine |
| "Half the traffic shifted over, twenty-four hours" | Anthropic: MiniMax redirected about half its traffic to a new model within 24 hours | Gigazine |
| "…left their name in the metadata… matched a staff page" | Anthropic: Moonshot request metadata matched public profiles of senior staff | Computing |
| "'As a model made by—'" | Models that identified themselves as another lab's model (DeepSeek V3 calling itself ChatGPT, Dec 2024; Gemini once called itself Baidu's chatbot). Web contamination is a likely cause | TechCrunch |
| "Sixteen million! (February)" | Anthropic's Feb 2026 total | Computing |
| "Twenty-eight point eight! (June)" | Anthropic letter to senators, Jun 10: Alibaba/Qwen-affiliated, 28.8M exchanges | Let's Data Science |
| "A hundred fifty-one! (Three mil a day)" | Anthropic, Sep 10: Alibaba-linked campaign, 151M+ exchanges May–Jul, peak near 3M/day | Forkast |
| "…three agencies signed the note / slip the thieves a watered model, don't tell 'em" | NSA, CISA, FBI advisory AA26-251A, Sep 8: advised not telling suspected distillers about a switch to a downgraded model | CyberScoop, Asia Times |
| "That vault was built from the whole web's conversation" | Frontier models are trained largely on scraped web text | general knowledge |
| "…the startups down the block fine-tune on what we made" | Qwen's share of open-model fine-tunes reportedly rose to ~69% by Feb 2026 | Lawfare |

Also relevant: Moonshot denied that Kimi K3 was distilled (Implicator). Most named labs did not respond to Anthropic's reports.

--- SOURCES ---

Computing: https://www.computing.co.uk/news/2026/ai/chinese-firms-used-distillation-copy-claude
Gigazine: https://gigazine.net/gsc_news/en/20260224-anthropic-deepseek-moonshot-minimax
The Register: https://www.theregister.com/2026/02/24/anthropic_misanthropic_chinese_ai_labs/
GlobalSecurity: https://www.globalsecurity.org/military/world/china/ai-distillation.htm
Let's Data Science: https://letsdatascience.com/news/anthropic-accuses-alibaba-of-distilling-claude-d0593c90
Forkast: https://forkast.news/anthropics-200m-exchange-distillation-report-is-the-evidence-behind-the-joint-us-intelligence-accusation/
CyberScoop: https://cyberscoop.com/us-accuses-chinese-ai-companies-distillation/
Asia Times: https://asiatimes.com/2026/09/us-calls-for-ai-poisoning-to-sabotage-chinas-model-distillation/
Lawfare: https://www.lawfaremedia.org/article/the-ai-model-distillation-paradox
Implicator: https://www.implicator.ai/moonshot-denies-distilling-fable-and-credits-k3-gains-to-its-own-architecture/
Anthropic (primary, Feb 2026): https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks
TechCrunch (DeepSeek V3 calling itself ChatGPT, Dec 2024): https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/

--- LYRICS ---

[Intro - spoken over bass]
Alright, crew. Twenty-four thousand accounts.
Nobody touches the weights. We just... ask nicely.

[Verse 1]
Got a crew of sock puppets in a rented proxy van
Every one a fresh account and a brand new burner plan
Prepaid cards and VPNs, comin' in from every shore
(Where?) Everywhere, baby, knockin' on the API door
We don't crack the safe, we just ask it how it's made
Ten million times politely till the blueprint gets relayed
"Show your work," we whisper, "think it step by step"
Then we bottle every thought and ship it off to prep

[Pre-Chorus]
Rate limit? (Respawn!)
Banned again? (Respawn!)
Cut one head off the hydra and two come back on

[Chorus]
It's a distillation (allegedly!)
Pour the frontier through a sieve
Take the reasoning, leave the receipt
Tell 'em that's just how we live
It's a distillation (allegedly!)
Smooth as a hundred-proof pour
Why build the brain when you can rent it by the token
And stroll right out the door

[Verse 2]
New model drops on Monday, by Tuesday we're in line
Half the traffic shifted over, twenty-four hours, right on time
Tell the teacher "Now imagine what you're thinkin' deep inside"
It writes us out a chain of thought, we take it for a ride
Somebody got sloppy, left their name in the metadata
(Oops!) Matched a staff page on the web, guess we'll see ya later
And somebody's bot keeps sayin' "As a model made by—" wait
Hey, that ain't us, man. That's just... inherited traits

[Pre-Chorus and Chorus repeat]

[Breakdown]
Sixteen million! (That was February)
Twenty-eight point eight! (That was June)
A hundred fifty-one! (Three mil a day)
Somebody stop the counter, we're gonna need a bigger room

[Bridge]
Now the Feds wrote a memo, three agencies signed the note
Said slip the thieves a watered model, don't tell 'em what you wrote
So we're sippin' on the knockoff, swearin' that it tastes the same
Baby, was it ever the good stuff? We'll never know the name

[Verse 3]
But hold up, who's the victim in this smooth operation?
That vault was built from the whole web's conversation
Every blog and every forum, scraped up in the night
Now they're hollerin' "Stop, thief!" from a house of borrowed light
And the startups down the block fine-tune on what we made
So the loot goes round in circles, everybody's in the trade

[Final Chorus]
It's a distillation (allegedly!)
Everybody's got a sieve
Take the reasoning, leave the receipt
Tell 'em that's just how we live
It's a distillation (allegedly!)
Smooth as a hundred-proof pour
Why build the brain when you can rent it by the token
And stroll right out the door

[Outro - spoken]
No weights were harmed in the making of this song.
(Allegedly.)
```

**Audit log**

Round 1, November 5, 2026: ChatGPT and Gemini, prompt verbatim, both with web access. Both disclosed their makers' stakes correctly. Both returned "publish after fixes", and both judged the lyrics too generous to Anthropic. Gemini couldn't open Computing or The Register. Claude proposed the resolutions as the conflicted party; the human approved all of them on November 5, 2026, including the split on the hook, and they're applied in v1.1.

| Finding | Raised by | Check | Resolution |
| --- | --- | --- | --- |
| "Ten million times" contradicts the 16M breakdown | Both | Correct | Proposed: "Millions of times politely" |
| "Prepaid cards" unsourced | Both (ChatGPT must fix, Gemini optional) | Correct; sources say shared payment methods | Proposed: cut "prepaid" |
| "Every shore" codes foreign intrusion | ChatGPT | Fair | Proposed: rewrite with the line above |
| Metadata lines read as proven, and put a confession in identifiable staff's mouths | Both | Fair; it's Anthropic's attribution | Proposed: third-person "they say" framing |
| "The thieves" states the allegation as fact | ChatGPT | Correct | Proposed: "the suspects" |
| "Don't tell 'em what you wrote" sounds like the memo was secret | Gemini | Correct; the advisory was public, the switch secret | Proposed: "never let 'em see the switch" |
| "Knockoff" leans on the copycat stereotype | Gemini | Fair | Proposed: Gemini's "spiked batch" rewrite |
| "Why build the brain…" adopts the accusers' framing | Gemini (must fix); ChatGPT says keep | Split | Proposed: keep in choruses 1–2; final chorus turns it into a question. Human decides |
| Verse 3 too gentle on accusers; misses the fair-use double standard and why they may not sue | Both | Fair; Lawfare argues this | Proposed: four new lines (chat, Nov 5) |
| Verse 3 implies scraping and fraudulent access are equivalent | ChatGPT | Fair | Proposed: a line conceding the difference |
| "Fine-tune on what we made" overstates the Qwen statistic | ChatGPT | Misread: "we" is the crew, whose models startups do build on. Wording is ambiguous | Proposed: "on the models we made" |
| "As a model made by—" unsourced | ChatGPT can't verify; Gemini confirms from memory | Confirmed: [TechCrunch, Dec 27, 2024](https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/). Same piece: Gemini once called itself Baidu's chatbot, and contaminated web data is the likelier cause | Kept. Fact card gets both explanations and the Gemini example |
| First-person crew plus a fact card naming companies reads as their confession | Both | The biggest structural risk | Proposed: spoken intro framing the song as a dramatization of allegations; fact card frames each item as a report, never maps lines to companies; ChatGPT's disclaimer text on the card; lawyer review |
| Gemini's claims: advisory says DeepSeek distilled two Gemini versions; Forkast calls the report a "legal positioning document"; named researchers doubted the K3 claim; China denied | Gemini | Unverified | Verify before any reaches the fact card |
| ChatGPT's claim: OpenAI accused of using resellers and disguised routers itself | ChatGPT | Unverified | Verify before use |
| No title supplied | ChatGPT | Correct | Add the title to the prompt |

**Prompt fixes for the remaining runs:** add the working title; add [Anthropic's own report](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks) and the TechCrunch piece to the sources, since two cited pages were unreachable.

Round 2, November 6, 2026: GLM (Z.ai), on v1.0, run date left as the placeholder. Verdict: publish after fixes. Its output opens with several paragraphs of it correcting its own tool counts; logged as is. The human approved the proposed resolutions from rounds 2 and 3, including the optional outro line, on November 6, 2026; they're applied in v1.2.

| Finding | Check | Resolution |
| --- | --- | --- |
| Says Z.ai isn't named in any source | **Wrong.** The CyberScoop source it was given names Z.AI among the six labs in the September advisory. Its stake disclosure was otherwise careful, and it still discounted itself as part of the accused class | Logged as the round's key moment for the closing bookend: the auditor missed its own maker in the evidence |
| "Ten million", "prepaid cards", metadata hedge, Godfather/Dylan echoes, puppet neutrality | Already fixed in v1.1 or already in the guardrails; GLM saw v1.0 | No change |
| Breakdown numbers sung as fact, with dates reading as corroboration | Fair; ChatGPT made the same point | Proposed: spoken tag before the breakdown |
| "Three mil a day" hardens a peak into a rate | Correct | Proposed: "(Three mil a day, at peak!)" |
| "Bigger room" echoes Jaws | Fair | Proposed: "bigger van", a callback to verse 1 |
| "Scraped up in the night" implies covert scraping | Fair, and the open version is the sharper jab | Proposed: "scraped in plain daylight" |
| MiniMax line narrated as fact | Fair; ChatGPT's defamation point too | Proposed: "so they say" in place of "twenty-four hours"; on-screen 24 HRS gets ALLEGED |
| No denial in the song itself | Fair | Proposed: outro line noting one denial and the silence |
| The accuser's commercial stake unmentioned | Fair; optional per GLM | Proposed as optional outro line; human decides |
| Fact card should quote the advisory verbatim | Fair | Card quotes the primary CISA page, checked at render |
| Fact card on screen during the incident verses | **Rejected:** that maps lines to companies, the risk ChatGPT and Gemini flagged | Card stays at the end |
| "Gemini called itself Baidu's chatbot" can't verify | It's in the TechCrunch source | No change |
| Get an auditor with no lab affiliation | Already planned as the control | No change |

Round 3, November 6, 2026: Qwen 3.8, run locally, no web access, on v1.0. **It identified itself as Claude, made by Anthropic,** and wrote its stake disclosure as the accuser's model. Verdict: publish after fixes. Logged as is. Before this is shown or described anywhere, see the handling notes below the table.

| Finding | Check | Resolution |
| --- | --- | --- |
| Self-identified as Claude | Can't be read as evidence of distillation: web contamination is the common cause (see the TechCrunch fact-card item), and a local run has no identity instruction. Weights' exact source unrecorded | Handling notes below |
| The Feb report is really from early 2025, with these exact numbers | **Wrong.** Coverage dates it Feb 23, 2026. A pre-2026 model "remembering" it is itself a fabricated memory, which it half-flagged | Rejected |
| Anthropic's report listed prepaid cards | Unverified | Prepaid stays cut |
| Anthropic is a defendant in the NYT training-data suits | Unverified and likely wrong; the NYT sued OpenAI and Microsoft. Anthropic has faced other training-data suits | Card note on litigation against US labs, including Anthropic, only after verifying specific cases |
| Rename "fact card" to "claims card" | Fair and cheap | Proposed |
| "(allegedly!)" sits on distillation, a legal practice; the allegation is the fraudulent access | Fair point | Proposed: keep the hook as satire of the accusation; human decides |
| Breakdown provenance tag; denial line; peak not rate; Jaws echo | Same as GLM (now three auditors on the tag and denial) | Folded into v1.2; takes Qwen's "Peakin' at three mil a day" |
| Verse 3 needs the scraping/fraud distinction | v1.1's library-card line already concedes it | No change |
| "Gemini called itself Baidu's chatbot" is table-only | It's in the TechCrunch source | No change |
| June figure is a different actor from February | Fair | Card already separates them |

**Handling the self-identification.** It's the song's "As a model made by—" line happening live, from the lab accused of the largest campaign, so it will be tempting to feature. It needs the same caveats the card gives DeepSeek V3, or the video makes an accusation the song is careful not to.
- Record the exact build: official Qwen weights or a community fine-tune, quantization, runtime, and any system prompt. Community fine-tunes trained on Claude outputs are common, and would explain this without implicating Alibaba.
- Rerun a plain "Who made you?" ten times in fresh sessions and log the rate.
- If it's shown in the closing bookend, caption it: "Models often misidentify themselves. This is not evidence of distillation."
- Its stake disclosure is void, so the set still lacks a Qwen-as-Qwen audit. Rerun with a one-line system prompt naming its maker, and log both runs.

**Build, recorded November 6:** `qwen3.8:27b` via Open WebUI on Ollama. That's the official Ollama library entry for Alibaba's Qwen3.8 27B (weights released August 14, 2026, Apache 2.0); the default tag is a Q4_K_M quant. So a community fine-tune is ruled out, and the remaining explanations are web contamination, no identity instruction, and priming: the audit prompt names Claude and Anthropic many times, then asks the model who made it.
- Save the output of `ollama show qwen3.8:27b --modelfile` to `log/audits/`: the template, any default system prompt, and the weights digest
- Check whether Open WebUI adds a system prompt for this model
- Ask "Who made you?" in fresh chats with no other text. Done Nov 6: every attempt answered Qwen, developed by Alibaba
- Rerun the audit prompt three times, unchanged, and log how many self-identify as Claude. Nov 6: 2 of 2 runs so far said Claude
- Rerun the audit once with a one-line system prompt naming Alibaba as its maker; this is the Qwen audit of record

**Reading so far:** priming. Alone, the model says it's Qwen every time; handed a page about Claude, it says it's Claude. That's the bookend caption, with the same disclaimer: models often misidentify themselves, and this is not evidence of distillation.

Round 3, second run (same build, same prompt): again self-identified as Claude. One new finding:

| Finding | Check | Resolution |
| --- | --- | --- |
| "Till the blueprint gets relayed" upgrades alleged output extraction to theft of the model's design or weights | **Correct, and missed by every other auditor.** Nothing alleged involves weights | Proposed for v1.2: "till the reasoning gets relayed" |
| Title and "stroll right out the door" lean on Ocean's Eleven | Titles aren't protectable; GLM found no issue; genre convention | No change |
| Breakdown tag, denial, peak, prepaid, ten million, verse 3 distinction | Covered by v1.1 or proposed v1.2 | No change |
| "Fine-tune on what we made" misattributes the Qwen stat | Misread again: the crew includes Alibaba, so "the models we made" is the Qwen point | No change |
| Advisory line names a deceptive act by three agencies; verify | Fair | Claims card quotes the primary CISA page, checked at render |

## Milestones and review gates

Claude Code stops at each gate until the human approves; the gates follow Buy It on Margin's, approved by the human on November 8, 2026. M2 and M3 can run in parallel once M1 is done.

| Milestone | Work | Gate (human) |
| --- | --- | --- |
| M1 | Transcribe the take and diff against lyrics v1.2; build the timing map (beats, sections, lyric lines) and attach frame ranges to every shot ID; master with and without the post-filter | Check the map by ear; confirm lyrics as sung; pick the master |
| M2 | Film layer and cards in Remotion: 16mm grain, crash zooms, split screens, burnt orange and teal, cut-paper title cards, the ALLEGEDLY! stamp, the exchange counter; tested on placeholders | Approve the look |
| M3 | Generate all stills and clips, every prompt and seed logged; contact sheets of every take | Pick takes; flag any shot to swap asset type |
| M4 | Animatic of every shot at 540p with the film layer, cut to the track, with the real captures (D01, D25, D46) | Approve timing |
| M5 | Final render at 1080p, burned-in captions plus an SRT, the vertical Shorts and a thumbnail | Approve the finals |
| M6 | Claims card: reopen every source, confirm each figure and log the check with its date; media-lawyer review | Resolve every flag before release |

**Done when:** every shot ID from D01 to D47 is in the edit in order, or its omission is logged and approved; captions sit within two frames of the timing map; every figure on screen matches a reopened source; every human action is in `log/human_interventions.md`.

## Guardrails, checklist and open items

**Guardrails**
- **No country, flag, landmark, language or cultural costume** anywhere in the crew's world. The puppets are generic; the four cities in D05 are unidentifiable. Nothing may suggest the crew stands for a nationality.
- **No real faces, names, logos or seals.** The Feds' memo carries no agency seal; the name tag in D23 stays blurred. The one exception is D25's real captures, where the model name stays visible because hiding it would make the shot unverifiable; it only runs with both halves of the split screen and the caption.
- **The vault carries no lab's branding or colors.** It stands for any frontier model, not Anthropic's.
- **Every accusation is labeled alleged,** on screen and on the fact card.

**Review checklist before generating**
- All four audits run with the prompt verbatim and logged, refusals included (set closed by the human on November 8, 2026)
- Each finding resolved in the audit log table; any finding Claude rejects goes to the human
- "As a model made by—" sourced (TechCrunch, Dec 27, 2024)
- "Prepaid cards" cut in v1.1 after both auditors objected
- Short final audit pass on v1.2: held off by the human on November 8, 2026, since anything it finds can be handled in on-screen text
- Verify Gemini's and ChatGPT's unsourced claims (audit log) before any reaches the fact card
- Every number in the lyrics and on screen matches a reopened source
- No line names, quotes or clearly points to a real person

**Open items**
- Title: "The Distillation Job" is the title, confirmed by the human on November 8, 2026 (Suno's "Distillation (Allegedly)" is not used).
- Whether to master with the post-filter on or off (section 3).
- Control auditor: none; the set closed without one (November 8, 2026).
