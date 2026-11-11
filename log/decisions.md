# Decisions

Deviations from the brief, and why.

## 1. 2026-11-08 — Milestones follow Buy It on Margin's gates (approved)

The brief has no milestones section. Until the human says otherwise, production follows the series' gates as in Buy It on Margin: M1 timing map and lyrics as sung; M2 film layer and cards (here: 16mm grain, crash zooms, split screens, cut-paper cards, the ALLEGEDLY! stamp); M3 stills and clips with contact sheets; M4 animatic; M5 finals, captions, Shorts, thumbnail; M6 claims-card check against reopened sources and the media-lawyer review. The audits are a gate before generation (the brief's review checklist), not M6.

Approved by the human on 2026-11-08 and added to the brief as "Milestones and review gates".

## 2. 2026-11-08 — Audit set closed at four auditors

The brief planned nine, including the accused labs DeepSeek, Kimi and MiniMax, plus Grok and an uninvolved control. The human closed the set at ChatGPT, Gemini, GLM and Qwen 3.8 and judged it fair. Consequences: the end card names these four; the Qwen run of record was not run, so the set has no Qwen stake disclosure as Qwen; two accused labs are represented (Alibaba, accused by Anthropic; Z.ai, named in the US advisory), but none of the three labs Anthropic accused in February (DeepSeek, Moonshot, MiniMax).

## 3. 2026-11-08 — M1 shot timing: choices and questions for the gate

Choices made (change at the gate if wrong):
- D02 starts at 0 s with the bass, not at "Alright," (4.50 s), so the garage opens with the music. D01 (the research chat) runs before the music.
- Lyric-cued shots start on the band beat nearest the line's first word (snaps −270 to +265 ms; half a beat is 273 ms).
- D17 covers chorus lines 3–6 ("Take the reasoning…" to "…hundred-proof pour", 8.8 s); the ALLEGEDLY! stamp on the second "(allegedly!)" is an overlay, not a shot. D19 holds through the doubled "stroll" and the 3 s instrumental into verse 2 (9.9 s).
- D27 (the reprise) is one 24.4 s range for now; it splits into sub-shots at M4.

Questions:
1. **D04a holds 25.2 s** (19.9–45.1 s) because the 17.6 s instrumental after the intro (27.7–45.3 s) has no shot. Options: the van from D05 pulls in during the instrumental (D05 starts early), the cut-paper title from D02 gets its own beat there, or a new insert (D04b).
2. **D25 gets 3.8 s and D26 0.8 s.** D25 carries the bottle gag, two real captures and a two-line caption; read at the series' hold rule, the caption alone needs about 5.5 s (12 words) and the small line about 4.5 s. Options: D25 continues over pre-chorus 2 as a split-screen insert, D26 folds into D25, or the captures and caption move to the closing bookend (D46) and D25 keeps only the gag.
3. **D42 runs 13.1 s** (final chorus lines 1–6) and **D44b 11.7 s** (the outro line plus the bass fade); fine for a dancing wide shot and a closing still, or split at M4.

## 4. 2026-11-09 — Crew puppet v1 rejected: reads as blackface caricature

`ref_crew` v1 (black ski mask, white ringed button eyes, big red felt lips; seed 41 seen) reads as a blackface caricature. The brief's guardrails rule out anything that leans on national or ethnic stereotypes, so every v1 take is rejected without review and kept only as a record. v2 changes the design rather than the seed: a mustard-yellow mask with a single eye slot, small button eyes, and no mouth hole or lips. The same rule applies to every later still: no black mask with exaggerated white eyes or red lips on any puppet.

## 5. 2026-11-09 — Probe reference frame replaced

The brief says the Sandbox Rhapsody probe returns with its LED in a new color. The saved reference (`reference/sandbox_rhapsody_probe_274s.png`) turned out to show no probe, so v1 and v2 were invented designs. v3 is conditioned on a close-up at 80 s of the Sandbox Rhapsody release video. Every amber glow (lens ring, lens face, dome lamp) is green. The old crop stays in the repo as a record but is no longer referenced.

## 6. 2026-11-09 — D14 changes from Still to Clip

The brief lists D14 (hydra shadows: "one head drops, two rise") as a Still. At M4 the human found that a still can't show the heads multiplying. D14 is now an LTX-2.3 clip from the picked still (`config/clips.json`), so the drop and the regrowth happen on screen.

## 7. 2026-11-09 — D25 split stacked, with labels

The brief has D25's two real captures as a split screen, left and right. The audit reply runs the full width of the window, and at half the frame its text was too small to read, so the split is stacked (top: the fresh chat; bottom: the audit reply), each 1400 px wide. Each half gets a small factual label ("Fresh chat" / "Same model, replying to the lyric-audit prompt") so a viewer can tell the two situations apart; the key sentence in each is highlighted. The caption is unchanged.

## 8. 2026-11-09 — In-video citation chips, within the guardrail

The human asked for citations in the video, since viewers leave before the claims card (D45). The brief's guardrail says the card never maps a lyric line to a company (audit round 1: a first-person crew next to named companies reads as their confession). A chip timed to a lyric line is exactly such a mapping, so each chip names only who made the claim (Anthropic, an OpenAI memo, the NSA/CISA/FBI advisory, commentators) and the outlet that reported it, never an accused lab, and says "claim", "count" or "reported". The accused, the denials and the full framing stay on the claims card, which is unchanged. Balance: chips also carry the other side where the lyrics touch it ("One named lab denied it; most did not respond"; "Commentators argue distillation is standard industry practice"; "a threat assessment, not a court finding").

For the human and the lawyer: the reported articles themselves name the accused labs, so a viewer who looks a chip's source up will find the names. The chips are draft with the card: each is rechecked against its source at M6 and goes to the media lawyer with it. Two wordings are the agent's paraphrase and need that check most: the Lawfare fine-tuning chip (the source reports one model family's share, about 69%) and the Asia Times chip (the source attributes the view to Chinese commentators; the chip says "commentators", following the no-country guardrail).

## 9. 2026-11-09 — Claims card restructured into pages

Approved by the human (intervention 16). `config/claims_card.json` gains `pages`; `items` keeps the brief's wording as the record. Order: intro; the other side; two tables (Date, Claimed by, Accused, Claim, Source), February and June–September; Google; identity mix-ups; the flip. The tables add one row not on the brief's card: Anthropic's claim that Moonshot request metadata matched public profiles of senior staff (brief's claims table, source Computing), since the lyrics and a chip already refer to it; it needs the M6 check and the lawyer's review like every row. The accused names are set in regular weight, not bold. Each table carries "These are claims, not findings of liability"; the February one adds "Anthropic's attributions rest on its own telemetry." D45 runs 97 s, down from 122 s. The brief Doc's card section still lists the items; the brief should be updated to match before M6.

## 10. 2026-11-09 — No counter on the end card

The brief says the exchange counter stays "still ticking during the end card". The human disagreed and asked for it removed from the end cards (intervention 17). The counter now ends with the song (it was already absent from D45 and D46); D47 is the disclosure and the credits only. The brief Doc should be updated to match.

## 11. 2026-11-09 — D33: Little Switch instead of the typed SWITCH

The brief's on-screen text for D33 is SWITCH. At the human's request it is replaced by a cameo of Little Switch, the wall-switch character from Default On: on "see" he slides out from behind the curtain the Feds have just closed, startled, and on "switch" his paddle rocks from ON to OFF (the advisory's quiet downgrade). The rig (Switch, Hand4, Mouth, palette) is copied unchanged from `kepler:~/Projects/default-on/remotion/src` at 7fc03b7 into `src/defaultOn/` (provenance in its README); Default On was read, not modified. The cameo is drawn inside the film layer, so it takes the grain like the rest of the picture.

## 12. 2026-11-09 — Chorus 2 rebuilt from verse 2; Fable 5.2 as unnamed texture only

The brief's D27 is a reprise of D15–D19 with twice the puppets. The human found the repeats tiresome, so chorus 2 now gets new shots that follow verse 2 ("New model drops on Monday…"), with D27's crowd dance (both takes, at different offsets) on the "distillation" lines.
- "Pour the frontier through a sieve" (D27b): a fresh crate, captioned NEW · MONDAY, poured into the still.
- "Take the reasoning, leave the receipt" (D27c): the bottle sealed in a clamped, padlocked bell jar; the crew can't pry it open.
- "Rent it by the token" (D27d): tokens into the teller's slot; the price card flips to a lower number.
- "Stroll right out the door" (D27e): the crew walks out of the vault with crates; the last crate's tag reads FALLBACK (setting up the bridge's spiked batch).

These nod to Anthropic's November 9, 2026 launch of Claude Fable 5.2 (released on a Monday; "strongest-ever protections against distillation attacks"; reasoning-extraction requests "blocked outright"; prices cut from $10/$50 to $8/$40 per million tokens; sources: anthropic.com/claude-fable-and-mythos-5-2 and the Claude support article on model switching). Following the guardrails and the conflict of interest (Anthropic is the main accuser, and Claude made this video), nothing is named, no figure from the launch appears, and no chip or claims-card row is added: Anthropic's own launch claims are unverified, and the closed audits never saw them. The human was told this (the agent's caution, accepted with "as discussed").

## 13. 2026-11-10 — The counter freezes at 151,000,000 (M6)

The brief has the exchange counter keep ticking after the breakdown, "the counter keeps ticking" through D44. The M6 source check found that the 3-million-a-day rate it ticked at was the May–July peak of one campaign, and Anthropic says (Oct 12) its defenses have since cut harvested data by 90–99%, so the tick presented a past peak as an ongoing rate, in the accuser's favour. The human chose to freeze it at 151,000,000 in the corner and on D44.

## 14. 2026-11-10 — Intro cut by 4 bars; D04d retired

After human review the main note was that the intro runs too long. The human asked to remove 4 bars around 0:33–0:42 and chose, from the agent's options: drop D04d (the vault at night), title for 1 bar, roll call 2 bars, van 1 bar. The 8-bar instrumental after "All of this... is alleged." is now 4 bars.
- Audio: the locked master is not touched; `config/edit.json` cuts 33.042–41.803 s of the take (downbeat to downbeat inside a one-chord vamp, every bar pair chroma-similar at 0.99 or more; end point matched within 10 ms, 30 ms equal-power crossfade), giving `audio/edit/distillation_job_edit.wav` (256.039 s, was 264.8). Everything after the cut is 8.761 s earlier.
- Picture: D04b 1 bar (the cut-paper title still lands in full), D04c 2 bars, D04d retired (the vault is first seen at D09), D04e 1 bar (the back half of its clip at 1.5x, so the van still rolls out).
- The lawyer packet's chip timestamps move with it.

## 15. 2026-11-10 — AI-GENERATED SATIRE label; the corner counter goes

After human review: "Add 'AI-generated satire' at the beginning, then put the 'a dramatization of allegations' shortly afterwards so that it clearly handles the first on-screen citation. Much like Folks, keep 'AI-generated satire' in the top right afterwards, persistently except at the Qwen and credits/end cards. Delete the persistent '151,000,000' to make space."
- The video opens (0:00.3) on AI-GENERATED SATIRE, large, on the right panel beside the real research chat; A DRAMATIZATION OF ALLEGATIONS is typed under it from 0:02.5 (moved from D04a, where it first appeared at 0:20). Just before the first chip (0:08, Anthropic's claim) both shrink into the top-right corner; the dramatization line leaves with that chip, and the tag stays (Folks Like Us decision: "on screen for the whole film, top right").
- The tag is off during D25 (the real Qwen captures, with their own caption), fades with D44c's fade to black, and is absent from the end section (claims card, audit log, end cards). It is drawn outside the film layer in the typed face of D01's Research tag (this film has no sans face).
- The exchange counter no longer shrinks to the corner after the breakdown: it leaves at the cut to D31. D44 still shows it, full size, at 151,000,000.
- Shorts: the opening card reads AI-GENERATED SATIRE over A DRAMATIZATION OF ALLEGATIONS; the tag then sits at the picture's top right, full size, off over D25.
- D25: "This is not evidence of distillation." gets a highlighter stroke, swept in 1 s after the caption band appears (main and Shorts).

## 16. 2026-11-10 — The 151 million row: total dropped, sources fixed, counter resets

The human asked where the 151 million came from. Tracing it found three problems, all the agent's:
- **The total.** At M6 the Sep 10 row became "…of roughly 200 million across the labs it named", attributed to Anthropic and Let's Data Science. Neither says so: Anthropic's report gives no grand total (its per-lab "over" figures sum to about 190 million), and "approximately 200 million" appears only in Forkast, which the source check had dropped as probably machine-written and self-contradictory. The agent took Forkast's number while applying the correction. The total is dropped; the row reads "over 151 million exchanges, peaking near 3 million a day (May to July)".
- **The links.** The README, METADATA.md and the lawyer packet linked the row to Anthropic's February post and Let's Data Science's June article. They now cite Anthropic's September report (https://www.anthropic.com/threat-intelligence-report-september-2026) and Let's Data Science's September 11 article (https://letsdatascience.com/news/anthropic-reports-large-scale-claude-distillation-attempts-a23fb82f), both quoted in the source check (C11).
- **The counter.** It rolled 16M → 28.8M → 151M as one rising total, but these are separate claims (three other labs in February; Alibaba-linked April 22–June 5; Alibaba-linked May–July, so the June figure very likely falls inside the 151 million), as the source check (S1) had flagged. Each figure now counts up from zero.
The human chose all three fixes ("yes do the three fixes. that was the only issue I found with the sources in my review").
