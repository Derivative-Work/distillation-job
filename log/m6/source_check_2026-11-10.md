# Source check, claims card and on-screen citations (2026-11-10)

Checked against `log/m6/checklist.md`. Every page was opened (WebFetch, then a raw curl fetch for verbatim text). The quotes below were copied from the raw page text, not from a summary. Where a quote is cut short, the cut is marked with "...".

## 1. Sources

| Source | URL | Status | Article date |
|---|---|---|---|
| Anthropic | https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks | Opened OK | Feb 23, 2026 (page metadata says it was modified Oct 20, 2026; no visible update note) |
| Computing | https://www.computing.co.uk/news/2026/ai/chinese-firms-used-distillation-copy-claude | **Failed** (HTTP 403 to WebFetch and to curl). **Used a substitute:** Wayback snapshot https://web.archive.org/web/20260225161954/https://www.computing.co.uk/news/2026/ai/chinese-firms-used-distillation-copy-claude | Feb 25, 2026 (`publisheddate` meta) |
| Gigazine | https://gigazine.net/gsc_news/en/20260224-anthropic-deepseek-moonshot-minimax | Opened OK | Feb 24, 2026 |
| GlobalSecurity | https://www.globalsecurity.org/military/world/china/ai-distillation.htm | WebFetch 403. Opened OK with a direct curl fetch | No article date. "Page last modified: 26-05-2026" |
| Android Authority | https://www.androidauthority.com/google-gemini-clone-attempts-3640480 | **Failed** (403). **Used a substitute:** Wayback snapshot https://web.archive.org/web/20260316114448/https://www.androidauthority.com/google-gemini-clone-attempts-3640480/ | Feb 12, 2026 |
| Let's Data Science | https://letsdatascience.com/news/anthropic-accuses-alibaba-of-distilling-claude-d0593c90 | Opened OK | Header says June 24, 2026, but the body says Reuters reported the allegation "on June 25" (internal inconsistency) |
| CyberScoop | https://cyberscoop.com/us-accuses-chinese-ai-companies-distillation/ | Opened OK | Sep 8, 2026 |
| Asia Times | https://asiatimes.com/2026/09/us-calls-for-ai-poisoning-to-sabotage-chinas-model-distillation/ | Opened OK | Published Sep 11, 2026; updated Sep 16, 2026 |
| Forkast | https://forkast.news/anthropics-200m-exchange-distillation-report-is-the-evidence-behind-the-joint-us-intelligence-accusation/ | Opened OK | Sep 11, 2026 |
| Implicator | https://www.implicator.ai/moonshot-denies-distilling-fable-and-credits-k3-gains-to-its-own-architecture/ | Opened OK | Jul 23, 2026 |
| TechCrunch | https://techcrunch.com/2024/12/27/why-deepseeks-new-ai-model-thinks-its-chatgpt/ | Opened OK | Dec 27, 2024 |
| Lawfare | https://www.lawfaremedia.org/article/the-ai-model-distillation-paradox | Opened OK | Oct 8, 2026 (Lisa Klaassen) |
| The Register | https://www.theregister.com/2026/02/24/anthropic_misanthropic_chinese_ai_labs/ | Opened OK | Feb 24, 2026 (metadata says modified Feb 26) |
| **CISA primary (S4)** | https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-251a | Opened OK. A Wayback copy dated 2026-11-02 also exists. The NSA PDF linked from CyberScoop (media.defense.gov/.../CSA_CHINA_BASED_AI_COMPANIES_MALICIOUS_DISTILLATION_AGAINST_US.PDF) returned 403 | Release Date September 08, 2026. Alert Code AA26-251A |
| Extra: Anthropic Sep 2026 threat report | https://www.anthropic.com/threat-intelligence-report-september-2026 | Opened OK. Checked because Forkast does not carry all of C11's figures | Sep 10, 2026 (per the Anthropic Oct 12 post's "related" link) |
| Extra: Let's Data Science, Sep 11 | https://letsdatascience.com/news/anthropic-reports-large-scale-claude-distillation-attempts-a23fb82f | Opened OK. Independent secondary source for C11 | Sep 11, 2026 |
| Extra: Anthropic Oct 12 post | https://www.anthropic.com/news/distillation-defenses | Opened OK. Relevant to S1 | Oct 12, 2026 |
| Extra: arXiv 2604.07190 (the paper Lawfare links for 69%) | https://arxiv.org/abs/2604.07190 | Opened the abstract only. "The ATOM Report", Lambert & Brand. The abstract does not state the 69% figure, so I have not verified it in the paper | 2026 |

## 2. Claim by claim

### Claims card

**C1. Disclaimer** (no source cited). **CONFIRMED.**
The sources bear out each part of it. Disputes: Moonshot's denial (Implicator) and Mao Ning's "stop leveling false allegations to smear China" (Asia Times). Evidence not public: "the public letter does not disclose the confidential technical evidence needed for independent verification" (Let's Data Science). Nothing in the sources is a liability finding.

**C2. The other side.** **CONFIRMED WITH WORDING CHANGE.**
- Moonshot's denial (Implicator): "Moonshot AI business head Huang Zhenxin denied on Tuesday, July 21, the White House accusation that Kimi K3 was built by distilling Anthropic's Fable."
  Note that the accusation Moonshot denied came from the White House (Kratsios), not from Anthropic.
- The timeline (Implicator): "Fable's only been publicly available since July 1st," ... "You can't distill that much data, train a model, and release it in two weeks."
- Commentators (Asia Times): "Model distillation itself is a technical method widely used across the global AI industry" (Liu Dian, Fudan).
- "Most named labs did not respond" is **not in either cited source.** Implicator and Asia Times say nothing about it. Other sources partly support it, always as "did not immediately respond": The Register ("DeepSeek, Moonshot, and MiniMax did not immediately respond to requests for comment") and Let's Data Science ("Alibaba did not immediately respond to Reuters' request for comment").
- **Omission that favours the accusers:** the Chinese government's denials. Asia Times quotes Mao Ning: "stop leveling false allegations to smear China". Implicator quotes the Chinese embassy: "entirely unfounded". Asia Times also quotes the Commerce Ministry: "a textbook case of using a crackdown on distillation as a pretext for industrial monopoly".
- Suggested wording: "The other side: Moonshot denied the White House claim that Kimi K3 was distilled from Anthropic's Fable, and researchers questioned whether the timeline allowed it. China's government called the accusations false and a pretext. Other named labs did not immediately respond to reporters. Chinese commentators argue distillation is a widely used industry technique." Add The Register and Let's Data Science as sources for the "did not respond" part.

**C3. Feb 12, 2026, OpenAI memo, DeepSeek employees, routers and VPNs.** **CONFIRMED**, with a source-quality flag.
- GlobalSecurity: "On February 12, 2026, OpenAI sent a memo to the House Select Committee on Strategic Competition between the United States and the Chinese Communist Party, accusing DeepSeek..."
- GlobalSecurity: "OpenAI's memo specifically alleges that DeepSeek employees used obfuscated third-party routers, VPNs, and programmatic scripts to mask their identities"
- Flag: GlobalSecurity is an undated, unsigned aggregator, and the same page contains clear errors ("Its V3 model, released in mid-2025"; V3 came out in Dec 2024, per TechCrunch). Its own reference list points to Reuters ("OpenAI says China's DeepSeek trained its AI by distilling US models, memo shows") and Bloomberg. Cite Reuters or Bloomberg instead. The CISA advisory also lists the OpenAI memo, "RE: Updated Stakes for American-Led, Democratic AI", as a reference.

**C4. Feb 23, 2026, Anthropic, three labs, 16M / 24,000.** **CONFIRMED.**
- Anthropic: "We have identified industrial-scale campaigns by three AI laboratories—DeepSeek, Moonshot, and MiniMax" and "These labs generated over 16 million exchanges with Claude through approximately 24,000 fraudulent accounts". The page date is Feb 23, 2026.
- Computing (Wayback): "DeepSeek, Moonshot AI and MiniMax generated more than 16 million exchanges with its Claude LLM using around 24,000 fraudulent accounts."

**C5. MiniMax shifted about half its traffic to a new model within 24 hours.** **CONFIRMED WITH WORDING CHANGE.**
- Gigazine: "when Anthropic released the new model, MiniMax responded extremely quickly, redirecting approximately half of its traffic to extracting capabilities from its latest system within 24 hours."
- Anthropic: "they pivoted within 24 hours, redirecting nearly half their traffic to capture capabilities from our latest system."
- Problem: "to a new model" is ambiguous and reads as if MiniMax moved traffic to *its own* new model. The new model was Anthropic's. Anthropic's own figure is "nearly half".
- Suggested wording: "redirected nearly half its traffic to Anthropic's newly released model within 24 hours".

**C6. DeepSeek prompts asked Claude to write out its reasoning step by step.** **CONFIRMED.**
- Gigazine: "Anthropic alleges that DeepSeek generated training data for chains of thought at scale, using prompts that asked Claude to imagine and write down, step-by-step, the internal reasoning behind his answers."
- Optional precision: Anthropic says the prompts asked Claude to "imagine and articulate the internal reasoning behind a completed response", meaning reconstructed reasoning for an answer already given.

**C7. Moonshot request metadata matched public profiles of senior staff.** **CONFIRMED.**
- Computing: "Moonshot AI, known for its Kimi models, allegedly used hundreds of fraudulent accounts across multiple access routes. Request metadata matched the public profiles of senior Moonshot staff."

**C8. Anthropic's attributions rest on its own telemetry.** **CONFIRMED WITH WORDING CHANGE.**
- Anthropic: "We attributed each campaign to a specific lab with high confidence through IP address correlation, request metadata, infrastructure indicators, and in some cases corroboration from industry partners".
- Computing: "Attribution was based on IP address correlations, request metadata, infrastructure indicators and reports from industry partners."
- Neither source uses the word "telemetry", and both mention corroboration from industry partners, which the card leaves out. Both sources do support "own data" plus "not public".
- Suggested wording: "Anthropic's attributions rest mainly on its own account and traffic data, with some corroboration it says came from industry partners; the underlying evidence has not been published."

**C9. Jun 10, 2026 letter, Alibaba/Qwen-affiliated operators, 28.8M / almost 25,000.** **CONFIRMED.**
- Let's Data Science: "In a June 10 letter to Senate Banking Committee Chair Tim Scott and ranking member Elizabeth Warren, Anthropic said the operation generated more than 28.8 million exchanges through almost 25,000 fraudulent accounts between April 22 and June 5, 2026."
- Let's Data Science: "Anthropic accused operators affiliated with Alibaba and its Qwen lab".
- Optional: "letter to Senate Banking Committee leaders" is more exact than "letter to senators".

**C10. Sep 8, 2026 advisory, six labs, not telling suspected distillers about a downgrade, "a threat assessment, not a court finding".** **CONFIRMED WITH WORDING CHANGE.**
- CyberScoop: "The advisory names Chinese companies like DeepSeek, Moonshot AI, Alibaba, MiniMax, StepFun, and Z.AI". The article is dated Sep 8 and names NSA, CISA and FBI.
- Asia Times, quoting the advisory: "Avoid informing China-based AI company users suspected of distillation campaigns of a switch to a downgraded model."
- "Threat assessment" is **not** the term used in any source. The document calls itself a "joint Cybersecurity Advisory" (CISA page; CyberScoop: "joint cybersecurity advisory"). "Not a court finding" is accurate as a description, but no source says it in those words.
- Qualifications the card leaves out:
  - Asia Times: "The advisory adds that firms should alter responses only for users confirmed to be querying frontier models for malicious distillation."
  - The CISA page says safety researchers and evaluators should be told about model changes.
  - The CISA page says "Likely with Chinese government awareness", which is a hedge.
- Suggested wording: "...advised not telling suspected distillers about a switch to a downgraded model; a cybersecurity advisory, not a court finding". Cite the CISA page (S4) directly.

**C11. Sep 10, 2026, Anthropic, Alibaba-linked campaign, over 151M of nearly 190M exchanges, peaking near 3M a day.** **CONFIRMED WITH WORDING CHANGE.** The cited source does not support "nearly 190 million".
- Forkast: "Anthropic's report, published September 10" and "Alibaba's Qwen team accounting for 151 million of those exchanges alone."
- Forkast: "peaking at roughly 3 million exchanges per day across approximately 3,500 accounts."
- Forkast's total is **"approximately 200 million exchanges across five campaigns"**, not "nearly 190 million". Forkast also says "151 million", not "over".
- The primary Anthropic report supports "over 151 million": "Scale of distillation attacks attributable to Alibaba between May and July 2026: over 151 million exchanges observed." It also says "peaked at nearly 3 million exchanges per day".
- The primary report gives no grand total. Its per-lab "over" figures add up to about 190M: Alibaba 151M, Moonshot 23M, DeepSeek 12.1M, Zhipu 3.4M, Xiaomi 0.4M.
- Forkast reliability flag: the page says "Lena Park does not assist a newsroom — Lena Park is the newsroom" and "These minds run on Ethoswarm". This looks like an AI-written outlet. It also contradicts itself: "Three days after" Sep 8 would be Sep 11, yet it says the report was published Sep 10.
- Fix: cite Let's Data Science (Sep 11), which says "an Alibaba-linked campaign that it says exceeded 151 million exchanges between May and July 2026", together with the Anthropic report. Change "nearly 190 million" to "about 190 million (sum of Anthropic's per-lab figures)" or to "roughly 200 million" (Forkast). Consider adding "May–July" to the peak.

**C12. Google reported a campaign of over 100,000 prompts aimed at Gemini's reasoning.** **CONFIRMED.**
- Android Authority (Wayback): "Google report claims one campaign sent over 100,000 prompts to Gemini in an attempt to clone the model."
- Android Authority: "One campaign highlighted in the report specifically targeted Gemini's reasoning capabilities."
- Context: "Google declined to name suspects, it says most of the extraction attempts appear to have come from private companies and researchers seeking a competitive edge."

**C13. Identity mix-ups.** **CONFIRMED WITH WORDING CHANGE.**
- TechCrunch: "Posts on X — and TechCrunch's own tests — show that DeepSeek V3 identifies itself as ChatGPT".
- TechCrunch, quoting the tweet it cites: "In 5 out of 8 generations, DeepSeekV3 claims to be ChatGPT (v4)".
- TechCrunch: "prompted in Mandarin, Gemini says that it's Chinese company Baidu's Wenxinyiyan chatbot."
- TechCrunch: "More likely, however, is that a lot of ChatGPT/GPT-4 data made its way into the DeepSeek V3 training set."
- Qualifications: the Gemini case happened only when prompted in Mandarin. "Likelier" is TechCrunch's judgement, and the same article quotes Khlaaf: "If it is the case that DeepSeek carried out distillation partially using OpenAI models, it would not be surprising."
- Suggested wording: "...Prompted in Mandarin, Gemini has called itself Baidu's chatbot. TechCrunch judged AI text all over the web a likelier cause than direct distillation."

**C14. The flip, plus Qwen at about 69%.** **CONFIRMED WITH WORDING CHANGE.**
- Lawfare: "When U.S. labs train models on the world's writing, Washington calls it fair use. When Chinese labs train on U.S. outputs, it's a 'malicious attack.'"
- Lawfare: "Training on the world's writing, OpenAI has argued, is 'transformative'"
- Lawfare: "Qwen's share of open-model fine-tunes ... reportedly rose from 1 percent in January 2024 to roughly 69 percent by February 2026."
- Problem: Lawfare's central point is that the **US government itself** argued training is fair use: "The federal government's first direct intervention ... took the position that feeding copyrighted text into an AI model for training purposes is fair use". The government also calls distillation a threat. The card puts the fair-use side on the labs alone, which softens the paradox.
- The 69% figure traces to the ATOM Report (arXiv 2604.07190). I have not verified it in the paper.
- Suggested wording: "The flip: US labs, and the US government in court, have defended training on others' work as transformative fair use, while the US government calls distillation a security threat. Qwen's share of open-model fine-tunes reportedly reached about 69% by February 2026."

### In-video chips

**V1. Anthropic's claim, Feb 23, 2026 (Computing).** **CONFIRMED WITH WORDING CHANGE** (change the citation, not the text). Computing (Feb 25) supports the claim ("Anthropic has accused three Chinese AI firms..."), but it never gives the Feb 23 date. The date comes from the Anthropic page ("Published Feb 23, 2026") and The Register ("on Monday accused", in its Feb 24 article). Fix: cite Anthropic or The Register for the date.

**V2. Routers and VPNs, OpenAI memo, Feb 12, 2026.** **CONFIRMED**, with the same GlobalSecurity quality flag as C3. Quote: "OpenAI's memo specifically alleges that DeepSeek employees used obfuscated third-party routers, VPNs..."

**V3. Over 16 million exchanges.** **CONFIRMED.** Computing: "more than 16 million exchanges with its Claude LLM".

**V4. Prompts asked for step-by-step reasoning.** **CONFIRMED.** Gigazine: "prompts that asked Claude to imagine and write down, step-by-step, the internal reasoning behind his answers."

**V5. "Hydra clusters": Anthropic's term.** **CONFIRMED.** The Register: "Anthropic refers to the distributed infrastructure used for model distillation as 'hydra clusters,'". The Register also adds skepticism: "it failed to establish that the underlying technology differs enough from commercial proxy services".

**V6. Half the traffic moved within 24 hours.** **CONFIRMED.** Gigazine: "redirecting approximately half of its traffic ... within 24 hours." Same ambiguity as C5: if there is room, say it moved to Anthropic's new model.

**V7. Request metadata matched staff profiles.** **CONFIRMED.** Computing: "Request metadata matched the public profiles of senior Moonshot staff."

**V8. Anthropic's count, Feb 23, 2026 (Computing).** **CONFIRMED WITH WORDING CHANGE** (citation). Same problem as V1: Computing has the count but not the Feb 23 date. Cite Anthropic or The Register.

**V9. Anthropic letter to senators, Jun 10, 2026.** **CONFIRMED.** Let's Data Science: "In a June 10 letter to Senate Banking Committee Chair Tim Scott and ranking member Elizabeth Warren".

**V10. Anthropic report, Sep 10, 2026 (Forkast).** **CONFIRMED.** Forkast: "Anthropic's report, published September 10". Same reliability flag as C11. Better: Let's Data Science, Sep 11, or the Anthropic report page.

**V11. NSA, CISA and FBI advisory, Sep 8, 2026: a threat assessment, not a court finding.** **CONFIRMED WITH WORDING CHANGE.** CyberScoop: "According to a joint cybersecurity advisory from the National Security Agency, the Cybersecurity and Infrastructure Security Agency and the FBI". No source calls it a "threat assessment". Suggested: "NSA, CISA and FBI cybersecurity advisory, Sep 8, 2026: an accusation, not a court finding". Better to cite CISA AA26-251A directly. CyberScoop also has errors: it says DeepSeek's "R1 and R3 models" where the advisory says "R1 and V3", and it says "In June, Michael Kratsios..." although Fable was only public from July 1.

**V12. US labs defend training as fair use; the US government calls distillation a security threat.** **CONFIRMED WITH WORDING CHANGE.** Same issue as C14: Lawfare says Washington ("Washington calls it fair use") holds the fair-use position too. Suggested: "The US government defends training on others' work as fair use, and calls distillation a security threat".

**V13. Reported: fine-tuning on other labs' open models is now common.** **CONFIRMED.** Lawfare: "American companies then use these Chinese open-weight models to power their own post-training." Also the "reportedly ... roughly 69 percent" Qwen share quoted under C14.

**V14. Commentators argue distillation is standard industry practice.** **CONFIRMED.** Asia Times quotes Liu Dian: "Model distillation itself is a technical method widely used across the global AI industry". Chinese officials took the same line: "They said distillation is a neutral, widely used practice".

**V15. One named lab denied it; most did not respond (Implicator).** **CONFIRMED WITH WORDING CHANGE.**
- First half is supported by Implicator: "Huang Zhenxin denied ... the White House accusation that Kimi K3 was built by distilling Anthropic's Fable."
- "Most did not respond" is **not in Implicator**. The Register and Let's Data Science only support "did not immediately respond".
- "It" was the White House's July accusation about K3/Fable. If the chip sits over an Anthropic-claim scene, it suggests Moonshot denied Anthropic's February claim, which no source says.
- The chip also omits China's government denials (see C2).
- Suggested: "Moonshot denied the White House's K3 claim; China called the accusations unfounded; other labs did not immediately respond". Cite Implicator, Asia Times and The Register.

### Other on-screen figures

**S1. Counter 16,000,000 → 28,800,000 → 151,000,000, then ticks at about 3 million a day.** **CONFIRMED WITH WORDING CHANGE.** The three numbers are supported; the tick is not.
- 16M, Computing: "more than 16 million exchanges".
- 28.8M, Let's Data Science: "more than 28.8 million exchanges".
- 151M, Forkast: "151 million of those exchanges".
- The ~3M/day was a **peak during May–July**. Forkast: "Alibaba conducted its campaign from May to July 2026, peaking at roughly 3 million exchanges per day". It is not an ongoing rate after September.
- Anthropic's Oct 12 post contradicts an ongoing rate: "Early evidence suggests that these methods have reduced the amount of data harvested by distillers by around 90 to 99%."
- The counter also chains figures from different campaigns into one rising total:
  - 16M is three other labs, in February.
  - 28.8M is Alibaba, Apr 22–Jun 5.
  - 151M is Alibaba, May–Jul, which overlaps the 28.8M window.
  - So 28.8M is very likely contained in 151M, not added to it.
- This presentation makes the threat look larger and steadier than the sources say, which is the accuser's framing.
- Fix: label each step (for example "Feb: 3 labs, 16M (Anthropic's claim)" and "May–Jul: Alibaba-linked, 151M (Anthropic's claim)"). Either drop the tick or label it "peak, May–Jul 2026 (alleged)".

**S2. "24,000" over D03.** **CONFIRMED.** Computing: "using around 24,000 fraudulent accounts." Make sure an "Anthropic's claim" chip (V3 or V8) is on screen at the same time.

**S3. "24 HRS (ALLEGED)" over D21.** **CONFIRMED.** Gigazine: "redirecting approximately half of its traffic to extracting capabilities from its latest system within 24 hours."

**S4. The advisory, AA26-251A, Sep 8, 2026: primary CISA page.** **CONFIRMED.** Found and opened: https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-251a ("Release Date September 08, 2026", "Alert Code AA26-251A", "Cybersecurity Advisory").

What it says about not telling suspected distillers, in the "Response alteration for suspected distillation activity" section, verbatim:
- "Avoid informing China-based AI company users suspected of distillation campaigns of a switch to a downgraded model."
- "Informing malicious distillers would enable them to improve their defense evasions and indicate when to roll back training."
- "Instead, alter responses to users confirmed to be querying frontier models specifically for malicious knowledge distillation campaigns without informing them."
- "In contrast, AI safety researchers and third-party evaluators should be informed of model changes while still applying strong distillation mitigations."
- Earlier in the same section: "using less sophisticated "downgraded" models to respond to distillation requests"

Labs named, verbatim:
- "Likely with Chinese government awareness, DeepSeek, Moonshot AI, Alibaba, MiniMax, StepFun, and Z.AI extracted billions of tokens across millions of exchanges/requests from U.S. frontier AI models".
- Legal names: "DeepSeek (DeepSeek Artificial Intelligence Technology Research Co., Ltd.), Moonshot AI (Beijing Moonshot Technology Co., Ltd.), Alibaba Group, MiniMax (Shanghai MiniMax Co., Ltd.), StepFun (Shanghai Jieyue Xingchen Intelligence Technology Co., Ltd.), and Z.AI".

The "suspected" vs "confirmed" wording is not consistent across those two sentences. The card's "suspected distillers" matches the first sentence.

## 3. Contradictions and qualifications in the sources

1. **The government advisory is not independent of Anthropic.** This is a conflict-of-interest point.
   - The CISA page's references list "Anthropic: Detecting and preventing distillation attacks" first.
   - Its wording about DeepSeek and MiniMax tracks Anthropic's February text: "DeepSeek employed prompts instructing models to imagine and articulate the internal reasoning behind completed responses and write it out step by step" and "MiniMax redirected exchanges to a new Claude model within 24 hours of release".
   - Forkast calls Anthropic's report "the evidentiary backbone of that accusation" and "a legal positioning document" tied to "Anthropic's own path toward a reported ~$965 billion IPO target".
   - Showing C10 as a separate, corroborating row overstates how independent the evidence is. Consider a note such as "the advisory cites industry disclosures, including Anthropic's".
2. **China's government denials are missing from C2 and V15.**
   - Mao Ning (Asia Times): "stop leveling false allegations to smear China".
   - Embassy (Implicator): "entirely unfounded".
   - Commerce Ministry (Asia Times): "a textbook case of using a crackdown on distillation as a pretext for industrial monopoly". The same spokesperson pointed out that American firms "had themselves drawn heavily on Chinese open-source models", which bears on C14.
3. **Moonshot's denial answers the White House (Kratsios, July), not Anthropic.** No source records a Moonshot response to Anthropic's February claim. There is a timeline conflict between sources:
   - CyberScoop: "In June, Michael Kratsios ... made a similar accusation about MoonshotAI of distilling Fable 5".
   - Implicator: Fable has been public only "since July 1st", and Moonshot's denial was on July 21.
   - Treat CyberScoop's "June" as doubtful.
4. **The S1 ongoing rate is contradicted** by Anthropic's own Oct 12 post: "reduced the amount of data harvested by distillers by around 90 to 99%". The 3M/day figure was a May–July peak.
5. **Forkast** looks AI-generated, contradicts itself on the date ("Three days after" Sep 8 vs "published September 10"), and gives ~200M where other coverage gives ~190M. Don't rely on it as the only cite.
6. **GlobalSecurity** has no date or author and contains factual errors (DeepSeek V3 "released in mid-2025"). Replace it with Reuters or Bloomberg for C3 and V2.
7. **Let's Data Science, Jun 24** is dated a day before the Reuters report it describes ("Reuters reported the allegation on June 25"). It also stresses: "The attribution and scale therefore remain Anthropic's claims, not an independently published technical finding or government determination."
8. **The Register** frames Anthropic's own position critically: "Having built a business by remixing content created by others, Anthropic worries that Chinese AI labs are stealing its data". This is relevant context for the C14 "flip" card, which names no lab, Anthropic included.
9. **Anthropic itself calls distillation legitimate in general**: "Distillation is a widely used and legitimate training method." The advisory says the same: "While "distillation" is recognized as a legitimate and useful technique in AI research". This supports V14 and C2.
10. **C8 understates Anthropic's stated basis** by leaving out its claim of industry-partner corroboration. This cuts against Anthropic, not for it, but it should still be accurate.
11. **TechCrunch's Khlaaf quote** cuts against C13's conclusion: "If it is the case that DeepSeek carried out distillation partially using OpenAI models, it would not be surprising."
