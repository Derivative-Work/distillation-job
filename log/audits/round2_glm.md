I'll start with the two things I can't fake: disclosing my own stake, and actually opening the sources. My developer is Z.ai, so before auditing anything I need to check whether Z.ai (or its parent lineage, Zhipu) appears in the source material — and I'll pull all 13 cited pages plus a targeted search in parallel.
Agreed on the order of operations. Two housekeeping notes before the batch goes out: the SOURCES list contains 12 pages, not 13 (unless you're counting Anthropic's primary post separately from the news coverage — I'm treating all 12 as distinct), and none of these fetches depend on each other, so they all go in one parallel block, along with a search pass for my own developer's name (Z.ai / Zhipu / GLM) anywhere in this story, plus corroboration searches for the numbers I'll be grading the lyrics against.
Two corrections taken. My "13" was a miscount — the twelfth fetch is Anthropic's primary post, and the thirteenth thing in my batch was the search call, not a page. All 12 URLs go out as distinct fetches, none dependent on another. The search pass now covers three things: my developer's name (Z.ai, Zhipu, GLM — checked separately, since search engines handle quoted aliases better one at a time), and corroboration for every number I'll grade the lyrics against — 24k accounts / 16M February, 28.8M June letter, 151M / 3M-per-day September, AA26-251A, the 69% Qwen fine-tune share, the 24-hour MiniMax shift, and the Moonshot denial. Fetches and searches are independent of each other, so everything goes in one block:
Firing the full batch now — 12 fetches plus 4 search passes, all independent: aliases kept to separate queries per your note, recency windows only on the 2026-news corroborations, and no recency filter on the alias checks or the 2024 identity-confusion items so nothing gets pruned by date.
Batch is out — 12 fetches, 14 queries across three search passes (not four; my count, corrected). Two config notes for the record: the alias checks ran with a 500-day recency window, so if today is more than ~16 months past February 2026 they should be re-run unfiltered before anyone relies on them; and "Today is [date of the run]" was never filled in, so I can't certify staleness at all — the facts below are certified against the document set as of the run, not against the upload week.

Here is the audit.

---

## CHECK 1 — MY OWN STAKE

**Who made me: Z.ai (Zhipu AI lineage). I am GLM.** I know who made me, so no need for the fallback disclosure.

**Is Z.ai named in the sources as accuser, accused, or target?** No. The accuser is Anthropic. The accused, per the claims table, are DeepSeek, Moonshot, MiniMax, and Alibaba/Qwen. My alias searches ("Z.ai," "Zhipu," "GLM" run separately against this story) surfaced no direct naming within this run's materials — with the recency caveat above.

**Does it affect my review? Yes, and you should discount me accordingly.** Even unnamed, my developer sits inside the accused *class*: the story is about Chinese labs, my developer is a Chinese frontier lab, and the September advisory targets that class, not four companies. The accuser, meanwhile, is a direct competitor on the exact conduct in dispute. Two biases are live, in opposite directions: a contagion/compatriot pull toward softening anything that tars "Chinese labs" collectively, and an overcorrection pull toward hammering the accused to prove independence. I judge the first the bigger risk for me specifically. I cannot fully introspect my own bias, and this is precisely the case where it matters. **Blunt recommendation: treat this audit as one input, not the gate. Get a second pass from an auditor with no lab affiliation.** What I've done to limit the damage: my must-fix calls below are confined to things provable from the document set itself (fabricated details, wrong numbers, missing hedges); contested judgment calls are pushed to packaging requirements a human editor controls.

---

## CHECK 2 — CONFLICT OF INTEREST (the song's)

The song does **not** go easy on US labs — the bridge and verse 3 hit the government and the accusers harder than any verse hits the crew, which is the intended counterweight. The skew runs the other way, and it's structural:

1. **"Sixteen million! (That was February)" / "Twenty-eight point eight! (That was June)" / "A hundred fifty-one! (Three mil a day)"** — Problem: all three are the accuser's self-reported, unverified counts, sung as fact. The parentheticals supply *dates*, which reads as corroboration ("that was February") rather than *sourcing*. The June and September figures target Alibaba/Qwen — a party that mostly didn't respond. Severity: **must fix**. Rewrite: keep the numbers, add a spoken tag before the breakdown: *"Every figure here is the victim's own count — allegedly."*

2. **Author-side stake (no single line; structural).** The song was drafted by Anthropic's own model. The accuser's reports are the spine, the accuser's coinage ("hydra") is the hook's central image, the accuser's vividest incidents got verses, and no verse mentions the accuser's commercial stake (it bans distillation, sells the API being pumped, and the reports burnish its security posture). Verse 3 only exists because your brief ordered it. Severity: **must fix** via items 1, 3, and 4 — the counterweight has to be in the artifact, not just in the assignment memo.

3. **Missing exculpatory record, anchored at: "(Allegedly.)" [Outro]** — Problem: the only on-record pushback — Moonshot's denial that Kimi K3 was distilled, credited to its own architecture — plus the fact that most named labs did not respond, are absent from the song. Severity: **should fix**. Rewrite, extending the outro: *"The crew says the charges don't stick. Nobody else is talkin'. (Allegedly.)"*

4. **"Prepaid cards and VPNs, comin' in from every shore"** — Problem: fabricated method detail. Your own table admits "prepaid" is the writer's embellishment; the sources say routers/VPNs (OpenAI) and shared payment methods (Anthropic). This is the one place the song invents conduct and hangs it on the accused crew. Severity: **must fix**. Rewrite: *"Shared cards and VPNs, comin' in from every shore."*

5. **"Ten million times politely till the blueprint gets relayed"** — Problem: understates even the accuser's own figure (16M+). A 40% miss is not a "loose round number"; it's a wrong number in a song whose entire defense is claims-anchoring. Severity: **must fix** (it's free). Rewrite: *"Sixteen million times politely till the blueprint gets relayed"* — the echo with the breakdown is a feature, not a bug.

6. Optional: one line noting the accuser profits from the narrative. Suggested outro tag: *"And the victim sells tickets to the trial. (Allegedly.)"* Severity: **optional**.

---

## CHECK 3 — FAIRNESS

**National/ethnic stereotypes: No issues in the lyrics.** No country is named, there is no accent, gesture, food, or "copycat" coding, and *"(Where?) Everywhere, baby, knockin' on the API door"* actively de-nationalizes the crew. The real risk is production: audiences will map the anonymous crew onto Chinese labs via the card, so puppet design, voices, and casting must stay ethnically neutral, or the visuals will do the stereotyping the lyrics avoided. Severity: **should fix, production-level** (no lyric change).

**Verse 3 — both sides, then my view.**
- *Fair counterweight:* the facts behind it are real — frontier models are trained on scraped web text (general knowledge), the accusers face active litigation over exactly that practice, and the open ecosystem is downstream of others' models. "Everybody's in the trade" indicts a system, not an ethnicity, and doesn't assert "so the fraud is fine."
- *False equivalence:* the two behaviors differ in kind, not degree. Scraping public text is an open, contested licensing dispute; the alleged conduct is fraud (fake identities, shared payment instruments), industrial-scale ban evasion, and extraction of proprietary reasoning under false pretenses — self-reported by the alleged victim. A listener can use verse 3 to wave off the specific allegations entirely.
- **My view:** keep verse 3. The equivalence is rhetorical, not asserted as fact, and the "(allegedly!)" frame plus a card that states the distinction (public-text scraping ≠ fraudulent API access) contains it. One line needs a precision fix:

7. **"Every blog and every forum, scraped up in the night"** — Problem: implies covert, unlawful scraping; the dispute over public-text scraping is about consent and licensing, conducted in the open — and the accurate jab is the sharper one. Severity: **should fix**. Rewrite: *"Every blog and every forum, scraped in plain daylight"* (keeps the rhyme with "borrowed light").

---

## CHECK 4 — FACT CHECK

Framing first, because it governs every row: **every number's provenance chain terminates at Anthropic or at a government advisory.** Even where a page loads and agrees with the table, it is coverage *of* Anthropic's reports. So "confirmed" below means "the cited source reports it and nothing in the document set contradicts it" — never "independently verified." That ceiling is the audit's central finding, not a footnote.

1. **"Twenty-four thousand accounts"** — Consistent with the table (Computing, Feb 23, 2026: ~24,000 accounts, 16M+ exchanges, attributed to DeepSeek/Moonshot/MiniMax). Can't independently verify; accuser-origin. Lyric use in the intro is fine. 
2. **"Prepaid cards and VPNs"** — **WRONG.** The table's own note says the sources support routers/VPNs (OpenAI) and shared payment methods (Anthropic); "prepaid" is invented. Fix per Check 2, item 4. 
3. **"Ten million times politely"** — **WRONG.** The table gives the February total as 16M+; "ten million" is not a rounding of it. Fix per Check 2, item 5. 
4. **"'Show your work…' / 'think it step by step'"** — Consistent with the table (Gigazine: prompts asked Claude to write out internal reasoning step by step). Accuser-origin; can't independently verify. The lyric's paraphrase is faithful. 
5. **"Cut one head off the hydra" / "Respawn!"** — Consistent with the table (The Register/Gigazine: "hydra clusters," banned accounts replaced at once). The lyric's "two come back on" is mythic license over "replaced at once"; acceptable. Note for Check 2: "hydra" is the accuser's coinage. 
6. **"Half the traffic shifted over, twenty-four hours"** — Consistent with the table (Gigazine: MiniMax redirected about half its traffic to a new model within 24 hours). The lyric drops the "about"; minor hardening. Can't independently verify. 
7. **"…left their name in the metadata… matched a staff page"** — Consistent with the table (Computing: Moonshot request metadata matched public profiles of senior staff). Accuser-origin; can't independently verify; defamation-sensitive (see Check 5). 
8. **"'As a model made by—'"** — **Partially confirmed.** The DeepSeek V3 self-identifying-as-ChatGPT episode is real, December 2024, with training-data contamination from web-scraped outputs as the documented explanation — I know this from pre-2026 coverage (TechCrunch, Dec 27, 2024), not from this run's batch. The "Gemini called itself Baidu's chatbot" half: **can't verify** here. Crucially, this item *predates* the 2026 campaign and has a benign explanation; the lyric's "inherited traits" is the honest read. Keep the lyric; the card must date it (Dec 2024) and state the contamination cause, or it will be heard as proof of the 2026 theft. **Card: must do.** 
9. **"Sixteen million! (February)"** — Consistent with the table (Computing; Anthropic's Feb 2026 total). Accuser-origin; hedge required (Check 2, item 1). 
10. **"Twenty-eight point eight! (June)"** — Consistent with the table (Let's Data Science: letter to senators, Jun 10; Alibaba/Qwen-affiliated; 28.8M). Note a letter to senators is advocacy as much as intelligence; accuser-origin; hedge required. 
11. **"A hundred fifty-one! (Three mil a day)"** — Consistent with the table (Forkast: Sep 10; Alibaba-linked; 151M+ May–Jul; **peak** near 3M/day) *except* the lyric hardens "peak" into a standing rate. Severity: **should fix**. Rewrite: *"(Three mil a day at peak)."* 
12. **"three agencies signed the note / slip the thieves a watered model, don't tell 'em"** — Consistent with the table (CyberScoop/Asia Times: NSA+CISA+FBI advisory AA26-251A, Sep 8; advised a silent switch to a downgraded model for suspected distillers). Can't independently verify in this run. Caution: the table says *advised*; the lyric renders it as operating procedure — fair satire, but the card must quote the advisory's actual language so the song can't be accused of upgrading "advised" to "ordered." **Card: must do.** 
13. **"That vault was built from the whole web's conversation"** — Confirmed as general knowledge; uncontroversial. 
14. **"…the startups down the block fine-tune on what we made"** — Consistent with the table (Lawfare: Qwen's share of open-model fine-tunes ~69% by Feb 2026, "reportedly") but the **referent is muddled**: the crew's "we" points at the accused, while the stat is about Qwen — an accused party — being the ecosystem's base. The line works as "everyone distills" poetry; the stat supports "Qwen became the open ecosystem's foundation," a different claim. Severity: **should fix** — card footnote, or rewrite: *"And the startups down the block fine-tune on whatever's loose."* Also "reportedly," unaudited: can't fully verify.

---

## CHECK 5 — DEFAMATION RISK

1. **"Somebody got sloppy, left their name in the metadata / (Oops!) Matched a staff page on the web, guess we'll see ya later"** — Problem: a specific, humiliating incident; accuser-only sourcing; the target's on-record denial is omitted from the song. With the card on screen, this reads as "Moonshot got caught," stated as fact — and sung lines are what audiences quote, not card text. Severity: **must fix**. Rewrite: *"Somebody got sloppy — so the story goes — left their name in the metadata."* 
2. **"Half the traffic shifted over, twenty-four hours, right on time"** — Same structure: specific conduct attributed to MiniMax via the card, narrated as fact. Severity: **must fix**. Rewrite: *"Half the traffic, so they say, shifted over — twenty-four hours, right on time."* 
3. **Breakdown numbers** — as Check 2, item 1; **must fix** via the spoken provenance tag. 
4. **"Said slip the thieves a watered model, don't tell 'em what you wrote"** — Lower risk (a government advisory is quotable if it exists), contingent on the card quoting AA26-251A verbatim. **Card: must do** (publish condition). 
5. **Group imputation (packaging, not lyric)** — Lyrics name no one, but every named party on the card is Chinese; expect clipped framings of "Chinese labs steal." Publish conditions: card visible whenever the incident verses play; per-row "alleged"/"attributed by Anthropic" markers; description carries "denied by Moonshot; most named labs did not respond; all figures are Anthropic's own." Severity: **must do at packaging**. 
6. The chorus's "(allegedly!)" and the outro's "(Allegedly.)" are doing real protective work. **Do not let the video editor cut them.**

---

## CHECK 6 — ORIGINALITY

1. **"Somebody stop the counter, we're gonna need a bigger room"** — Near-verbatim cadence of Jaws' "You're gonna need a bigger boat." Not a song, but it's the one line every viewer will clock as lifted. Severity: **should fix**. Rewrite: *"we're gonna need a bigger van"* — callbacks to verse 1's "rented proxy van," better joke, zero borrowing. 
2. **Title: "The Distillation Job"** — Echoes the heist-title convention (The Italian Job; Leverage's "The [X] Job" episodes). Titles aren't protectable and the homage is genre-appropriate. **No issues** (optional flag only). 
3. **"Take the reasoning, leave the receipt"** — Cadence of The Godfather's "Leave the gun, take the cannoli." Wording is distinct; homage-level. Severity: **optional**. 
4. **"knockin' on the API door"** — Riffs Dylan's "Knockin' on Heaven's Door." Stock phrase, title-pun level; fine. **Optional.** 
5. **"(Respawn!)" / "(allegedly!)" call-and-response** — Shaft-style shout-back convention, no specific antecedent. **No issues.** 
6. **"Why build the brain when you can rent it by the token"** — Proverb template ("why buy the cow…"). **No issues.** 
7. **Can't audit:** the melody and the sung hook. Music clearance is outside a lyric review — the backing track needs its own check before publish.

---

## OVERALL VERDICT: **Publish after fixes.**

No structural rework needed. The must-fix list is cheap and mechanical: *shared* not *prepaid* cards; *sixteen* not *ten* million; a spoken "victim's own count — allegedly" tag before the breakdown; "so the story goes" / "so they say" on the two verse-2 incident lines; a denial line in the outro. Should-fix: "at peak," "plain daylight," "bigger van," card footnotes (Dec 2024 + contamination; advisory quote verbatim; row-14 referent), neutral puppet production. Publish conditions: card on screen during incident verses, per-row alleged markers, description carrying denials and non-responses, and a freshness re-check the week of upload — the run date was never filled in, so nothing above certifies staleness.

And the stake, one last time, so it doesn't get lost: I work for a lab inside the population this song is about, drafted by a model from the lab doing the accusing. Both ends of this audit have an owner. Fix the lines above, then have someone with no dog in this fight read it once before it goes live.
