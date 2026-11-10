# M6 corrections, 2026-11-10

Source check: `log/m6/source_check_2026-11-10.md` (agent, every source reopened; Computing and Android Authority via Wayback). The agent (Claude) re-verified three findings itself on the primary pages: the CISA advisory (AA26-251A: "joint Cybersecurity Advisory", no "threat assessment"; cites Anthropic's report), Implicator (Moonshot denied the White House's claim; nothing on other labs not responding) and Forkast ("approximately 200 million", not "nearly 190 million"). A Reuters report of the OpenAI memo (via Yahoo Finance) confirms "obfuscated third-party routers" but not VPNs.

Applied to `config/claims_card.json` pages and `config/citations.json` (brief rule: anything changed or unconfirmed is corrected or cut):

| ID | Was | Now | Why |
| --- | --- | --- | --- |
| C2 | Moonshot denied K3 was distilled from Anthropic's model…; Most named labs did not respond | Moonshot denied the White House's claim…; China's government called the accusations unfounded; other named labs did not immediately respond to reporters | Denial answered the White House; "most did not respond" unsupported; China's denials omitted. Sources + The Register |
| C3 | obfuscated routers and VPNs (GlobalSecurity) | obfuscated third-party routers to get around access limits (Reuters) | VPNs not in Reuters; GlobalSecurity undated, unsigned |
| C5 | shifted about half its traffic to a new model | redirected nearly half its traffic to Anthropic's newly released model | "a new model" read as MiniMax's own; Anthropic says "nearly half" |
| C8 | rest on its own telemetry | rest mainly on its own account and traffic data, with some corroboration it says came from industry partners; the evidence is unpublished | "telemetry" not in sources; partner corroboration omitted |
| C10 | NSA, CISA and FBI advisory; six China-based labs (named); a threat assessment | joint cybersecurity advisory (it cites industry reports, including Anthropic's); the six labs by name, as the advisory gives them; an advisory, not a court finding | "threat assessment" unsupported; the advisory isn't independent of Anthropic |
| C11 | over 151 million of nearly 190 million…; Forkast | over 151 million, peaking near 3 million a day (May to July), of roughly 200 million across the labs it named; Anthropic, Let's Data Science | "nearly 190 million" unsupported; Forkast looks machine-written and contradicts itself |
| C13 | Gemini has called itself Baidu's chatbot; …is a likelier cause | Prompted in Mandarin, Gemini once called itself Baidu's chatbot; TechCrunch judged … a likelier cause | Context and attribution |
| C14, V12 | US labs have defended training … as fair use | US labs, and the US government in court, have defended training … as fair use | Lawfare's point |
| V1, V8 | source Computing | source Anthropic | Computing doesn't give the date |
| V2 | Routers and VPNs: OpenAI memo (GlobalSecurity) | Obfuscated routers: OpenAI memo (Reuters) | as C3 |
| V6 | half the traffic | nearly half the traffic (Anthropic, Gigazine) | as C5 |
| V10 | Anthropic report, Sep 10 (Forkast) | … (peak, May to July) (Anthropic, Let's Data Science) | as C11 |
| V11 | a threat assessment, not a court finding (CyberScoop) | an advisory, not a court finding (CISA) | as C10 |
| V15 | One named lab denied it; most did not respond | One named lab denied it; China called the claims unfounded; others didn't immediately respond (Implicator, The Register) | as C2 |

Open, for the human (not changed):
- **S1, the counter.** The three figures are supported, but after 151,000,000 the counter keeps ticking at 3 million a day to the end of the song and on D44 (brief: "the counter keeps ticking"). That rate was a May–July peak, and Anthropic says (Oct 12) its defenses cut harvested data by 90–99%. The ticking presents a past peak as an ongoing rate. Options: freeze at 151,000,000; or keep the tick with a label "PEAK RATE, MAY–JUL (ALLEGED)".
- **The 69% figure (C14)** is "reportedly" in Lawfare and traces to a paper the agent couldn't confirm; it stays "reportedly".
- **Let's Data Science** (C9, V9) is dated a day before the Reuters report it describes; kept, flagged for the lawyer.
