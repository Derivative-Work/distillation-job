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
