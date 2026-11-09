# Independent lyrics audit

**Overall approach:** I would treat this as an adversarial review, not a defence of Anthropic's reporting. The central distinction throughout is between evidence that suspicious API activity occurred, Anthropic's interpretation of that activity, and proof that a particular company improperly distilled a model.

One important limitation: the lyrics and claims table are available, but the underlying reports are not independent evidence merely because several publications repeat them. Anthropic's figures need to remain attributed to Anthropic unless independently corroborated.

## 1\. YOUR OWN STAKE

**My developer is OpenAI.**

OpenAI is relevant to this story. The claims table specifically references an OpenAI memo concerning routers and VPNs used in suspected distillation activity. OpenAI is therefore not a detached observer of the broader controversy.

There are three distinctions worth making:

- OpenAI is not Anthropic, the principal accuser in the February allegations.
- OpenAI is a participant in the frontier-model industry and has its own commercial interests in the outcome.
- OpenAI's reported security concerns and Anthropic's allegations should not automatically be treated as independently corroborating evidence.

**Could this affect my review? Yes.** There is a potential institutional conflict. I should be particularly careful not to excuse similar conduct by US laboratories, accept their security claims uncritically, or apply a more demanding evidentiary standard to accusations against US companies.

I cannot guarantee freedom from institutional bias. I can, however, make the evidentiary standards explicit and apply them symmetrically.

## 2\. CONFLICT OF INTEREST

### Issues

**Issue 2.1 — The song gives Anthropic's allegations a stronger factual status than their evidence warrants.**

> "Twenty-four thousand accounts."

- **Problem:** This is presented as an unqualified fact. The number comes from Anthropic's February 23 report. Computing and GIGAZINE repeat it, but neither independently establishes the account count.
- **Severity:** Must fix.
- **Suggested rewrite:**> "Anthropic says twenty-four thousand accounts."

The same principle applies to the other numerical claims.

Anthropic's original report is particularly important here: it explicitly describes its own attribution methodology, including IP correlations, request metadata, infrastructure indicators and industry-partner corroboration. That is meaningful evidence, but it is still the company's account of its investigation.  Anthropic+1

**Issue 2.2 — The chorus uses an effective disclaimer, but it doesn't fix factual assertions elsewhere.**

> "It's a distillation (allegedly\!)"

- **Problem:** The word allegedly is doing useful satirical work, but its protection is limited. It doesn't qualify the preceding factual claims about accounts, payments, metadata or traffic.
- **Severity:** Should fix.
- **Suggested rewrite:**> "It's their alleged distillation\!"

This makes the attribution more explicit without losing the rhythm.

**Issue 2.3 — The accused parties' denials and lack of independent verification are absent from the song's framing.**

> "Tell 'em that's just how we live"

- **Problem:** The song presents a confident criminal crew whose activities correspond to allegations against identifiable companies. The narrative never acknowledges that the accused companies dispute at least some of the allegations.
- **Severity:** Should fix.
- **Suggested rewrite:**> "One side says it's theft; the other says it's invention."

This would work particularly well as a breakdown or spoken interjection.

Moonshot's denial concerning Kimi K3 is especially relevant. It is not proof that Anthropic's allegations are wrong, but it is material opposing evidence. The song should not imply that silence or failure to respond constitutes an admission.

**Issue 2.4 — The song omits the strongest criticism of Anthropic's position.**

> "But hold up, who's the victim in this smooth operation?"

- **Problem:** This is a good question, but the subsequent criticism is relatively generic. It misses the most consequential asymmetry: American labs claim the right to train on enormous quantities of other people's material while objecting to competitors training on their model outputs.
- **Severity:** Should fix.
- **Suggested rewrite:**> "They scraped a million voices, called the transformation fair / Now a rival learns from Claude and suddenly it's warfare."

This is more pointed and more defensible than simply accusing Anthropic of hypocrisy.

The October 8 Lawfare analysis makes precisely this distinction. It also identifies several complications that a neutral account should preserve:

- OpenAI and other US labs use distillation themselves.
- American companies have used copyrighted and allegedly unauthorized material in training.
- OpenAI has been accused of using unauthorized resellers and disguised routers to evade its own platform controls.
- American companies themselves reportedly use Qwen-derived models for downstream development.
- The legal distinction between training on publicly available human-created material and extracting proprietary model functionality through restricted APIs is not imaginary.  Default+1

**Issue 2.5 — OpenAI's involvement is not sufficiently represented in the satire.**

> "Now the Feds wrote a memo, three agencies signed the note"

- **Problem:** The song makes the federal advisory sound like an independent intervention, without acknowledging the industry's own lobbying and competing commercial interests.OpenAI had already accused DeepSeek of extraction and submitted its own memo to lawmakers. The Register explicitly identifies OpenAI as a competitor of Anthropic and notes its own copyright litigation.
- **Severity:** Should fix.
- **Suggested rewrite:**> "The labs went up to Washington, each with a different note."

This preserves the musical image while making the political process less one-sided.

### Overall conflict-of-interest finding

The lyrics are not uniformly pro-Anthropic. Verse 3 is a genuine counterweight, and the repeated use of "allegedly" is helpful.

However, the song is considerably more sceptical of the accused companies' conduct than of the accuser's financial, legal and political incentives.

That imbalance is noticeable, especially because Claude drafted the lyrics and Anthropic is its developer's principal adversary in this story.

I would strengthen the criticism of Anthropic and US labs rather than weaken the criticism of suspected API extraction.

---

## 3\. FAIRNESS

### Issue 3.1 — The imagery risks communicating national stereotypes without explicitly naming a country.

> "Got a crew of sock puppets in a rented proxy van"

> "Every one a fresh account and a brand new burner plan"

> "Prepaid cards and VPNs, comin' in from every shore"

- **Problem:** None of these lines explicitly names a nationality or ethnicity. On their own, they are ordinary cybercrime and heist imagery.However, the factual card will identify Chinese companies. The audience will therefore associate the anonymous criminal crew with Chinese people and businesses.
  Combined with the imagery of anonymous operators, burner accounts, proxies and foreign infiltration, the song could reinforce a familiar stereotype of foreign, particularly Chinese, technological dishonesty.
- **Severity:** Should fix.
- **Suggested rewrite:**> "A maze of rented proxies and a thousand burner plans"

This describes infrastructure rather than implying a particular population.

**Issue 3.2 — "Every shore" is unnecessary geographical coding.**

> "Comin' in from every shore"

- **Problem:** This adds an international-intrusion flavour without adding factual information. It also reinforces the foreign-invader framing.
- **Severity:** Optional.
- **Suggested rewrite:**> "Comin' through the network, knockin' on the API door."

### Issue 3.2 — Is Verse 3 a fair counterweight?

There are two legitimate arguments.

**Argument for the verse being fair:**

> "That vault was built from the whole web's conversation"

The underlying criticism is sound.

Anthropic, OpenAI and other frontier labs have trained models using vast collections of human-created material. Much of this material was obtained without individual permission or compensation.

The fact that a company has built something valuable using other people's work does not automatically mean that competitors have no obligation to respect its contractual restrictions.

But it does undermine simplistic narratives about one side being inherently innovative and the other inherently dishonest.

The October Lawfare analysis is particularly useful here because it identifies the double standard in US policy: the government has defended broad AI training practices as transformative while describing foreign model distillation as a national-security threat.  Default

**Argument against the verse being entirely fair:**

> "Now they're hollerin' 'Stop, thief\!' from a house of borrowed light"

There is a meaningful difference between the two practices.

- Web scraping involves collecting existing human-created material, potentially protected by copyright or contractual restrictions.
- API extraction involves obtaining outputs from a commercial model, potentially in violation of explicit contractual restrictions.
- Fraudulent accounts, access-control circumvention and coordinated extraction introduce additional questions that ordinary web scraping does not necessarily raise.
- Extracting reasoning traces or proprietary model behaviour can have a different competitive effect from training on publicly available writing.

A company can be hypocritical about copyright and still have a legitimate complaint about fraudulent API access.

The two practices are not automatically legally or ethically equivalent.

### My view

**Verse 3 is directionally fair but intellectually incomplete.**

I would keep it. Removing it would make the song substantially less balanced.

But I would replace the implication that all model training and distillation are equivalent.

Suggested replacement:

> "They scraped the public web, now they guard the API / Different kinds of taking, different claims to royalty."

That is a much better argument.

It acknowledges the distinction without conceding that the US labs are morally or legally blameless.

**Severity: Should fix.**

## 4\. FACT CHECK

I checked the accessible source pages, including the original Anthropic February report, rather than relying exclusively on the supplied press coverage.

Here is the row-by-row assessment.

### February allegations

| Claim / lyric | Verdict | Assessment |
| --- | --- | --- |
| "Twenty-four thousand accounts" | **Confirmed, with qualification** | Anthropic reported approximately 24,000 fraudulent accounts. This is an Anthropic-reported figure, not independently established fact. |
| "Prepaid cards and VPNs" | **Partly wrong** | Anthropic reported shared payment methods and proxy infrastructure. OpenAI's memo discussed disguised routers and VPNs. Neither source, as cited, establishes prepaid cards. |
| "Ten million times politely" | **Wrong / misleading** | The reported figure is over 16 million exchanges, not 10 million. Ten million is an unnecessarily large downward rounding. |
| "'Show your work' / 'think it step by step'" | **Confirmed, with qualification** | Anthropic specifically described prompts eliciting internal reasoning and step-by-step explanations. |
| "Cut one head off the hydra" / "Respawn\!" | **Confirmed** | Anthropic described hydra-cluster infrastructure, with replacement accounts taking the place of banned accounts. |
| "Half the traffic shifted over, twenty-four hours" | **Confirmed, with qualification** | Anthropic reported that MiniMax redirected nearly half its traffic to its latest model within 24 hours of its release. |
| "Left their name in the metadata" / "matched a staff page" | **Confirmed, with qualification** | Anthropic said request metadata matched publicly available profiles of senior Moonshot staff. This does not mean someone literally entered their name into a request. |

Sources:

- [Anthropic's February investigation](<https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks?utm_source=chatgpt.com>)
- [Computing's February coverage](<https://www.computing.co.uk/news/2026/ai/chinese-firms-used-distillation-copy-claude?utm_source=chatgpt.com>)
- [GIGAZINE's detailed account](<https://gigazine.net/gsc_news/en/20260224-anthropic-deepseek-moonshot-minimax?utm_source=chatgpt.com>)

### The self-identifying model claim

| Claim / lyric | Verdict | Assessment |
| --- | --- | --- |
| "'As a model made by—'" | **Can't verify** | No source is supplied. I could not establish the specific incident, model version, date or wording from the material reviewed. |

This is one of the weaker claims in the table.

It might refer to a model reproducing another model's self-identification language, but that is not sufficient to establish distillation.

Models can reproduce identity statements because of training-data contamination, prompt conditioning, fine-tuning, or ordinary imitation.

**Recommendation:** Remove this incident unless the author can produce a reproducible example and a dated source.

Suggested replacement:

> "Somebody's bot keeps borrowing somebody else's voice."

Severity: **Should fix.**

### June and September allegations

| Claim / lyric | Verdict | Assessment |
| --- | --- | --- |
| "Sixteen million\! (February)" | **Confirmed, with qualification** | Anthropic reported more than 16 million exchanges in February. |
| "Twenty-eight point eight\! (June)" | **Confirmed, with qualification** | Anthropic's June 10 letter reported more than 28.8 million exchanges associated with Alibaba/Qwen-affiliated operators, between April 22 and June 5. |
| "A hundred fifty-one\! (Three mil a day)" | **Confirmed, with qualification** | Anthropic's September reporting attributed 151 million-plus exchanges to an Alibaba-linked campaign, with activity peaking near three million daily. |
| "Three agencies signed the note" | **Confirmed** | NSA, CISA and FBI issued advisory AA26-251A on September 8, 2026. |
| "Slip the thieves a watered model, don't tell 'em" | **Confirmed, with qualification** | The advisory recommended subtly altering responses to suspected distillation attempts and specifically recommended not informing suspected operators about a switch to downgraded responses. |

Sources:

- [June allegations, Let's Data Science](<https://letsdatascience.com/news/anthropic-accuses-alibaba-of-distilling-claude-d0593c90?utm_source=chatgpt.com>)
- [September allegations, Forkast](<https://forkast.news/anthropics-200m-exchange-distillation-report-is-the-evidence-behind-the-joint-us-intelligence-accusation/?utm_source=chatgpt.com>)
- [Official advisory reproduced in accessible form](<https://www.dejavu.org/cgi-bin/get.cgi?url=https%3A%2F%2Fwww.cisa.gov%2F%2Fnews-events%2Fcybersecurity-advisories%2Faa26-251a&ver=93&utm_source=chatgpt.com>)

An important distinction: the advisory is a government document, but that does not mean every underlying attribution has been independently established in court.

The government adopted the allegations as part of its threat assessment. It did not thereby establish criminal liability.

### Verse 3 claims

| Claim / lyric | Verdict | Assessment |
| --- | --- | --- |
| "That vault was built from the whole web's conversation" | **Broadly confirmed, rhetorically exaggerated** | Frontier models are trained on large collections of web-derived text and other material. Not literally the entire web. |
| "The startups down the block fine-tune on what we made" | **Partly confirmed, misleading inference** | Lawfare reports Qwen's share of open-model fine-tunes reached approximately 69% by February 2026. It also describes American companies using Chinese open-weight models for downstream post-training. But the 69% figure does not establish that startups were fine-tuning specifically on Anthropic's outputs. |

Sources:

- [Lawfare's analysis of model training and distillation](<https://www.lawfaremedia.org/article/the-ai-model-distillation-paradox?utm_source=chatgpt.com>)
- [The Register's coverage of Anthropic's own training controversies](<https://assets.theregister.com/2026/02/24/anthropic_misanthropic_chinese_ai_labs/?utm_source=chatgpt.com>)

### Additional opposing evidence

The supplied Implicator article is important and should be included in the fact card.

Moonshot denied that Kimi K3 was built by distilling Anthropic's Fable model. It attributed K3's improvements to its own architectural developments.

There is also an interesting chronological challenge: researchers questioned whether the available Fable release timeline allowed enough time for the alleged distillation to account for K3's improvements.

This does not disprove the broader February allegations against Moonshot. Nor does it establish that no distillation occurred.

But it makes a blanket assertion that Moonshot's model improvements resulted from Anthropic extraction particularly problematic.  Implicator.ai

### Fact-check issues requiring lyric changes

**Issue 4.1 — Wrong numerical figure**

> "Ten million times politely till the blueprint gets relayed"

- **Problem:** The actual reported number exceeds 16 million.
- **Severity:** Must fix.
- **Suggested rewrite:**> "Sixteen million times politely till the blueprint gets relayed."

This also avoids making the number appear to be a precise count of training examples.

**Issue 4.2 — Unsupported payment method**

> "Prepaid cards and VPNs, comin' in from every shore"

- **Problem:** Prepaid cards are the writer's invention. Shared payment methods are not equivalent to prepaid cards.
- **Severity:** Must fix.
- **Suggested rewrite:**> "Shared accounts and proxy routes, comin' through the API door."

**Issue 4.3 — Unverified model identity anecdote**

> "And somebody's bot keeps sayin' 'As a model made by—' wait"

- **Problem:** No identifiable source. The proposed explanation, inherited traits, is speculation.
- **Severity:** Should fix.
- **Suggested rewrite:**> "And somebody's bot keeps borrowing another model's style."

**Issue 4.4 — Overstating what the Qwen statistic establishes**

> "And the startups down the block fine-tune on what we made"

- **Problem:** The 69% statistic concerns Qwen's share of open-model fine-tunes. It does not establish that startups were specifically fine-tuning on the accused labs' extracted outputs.
- **Severity:** Must fix.
- **Suggested rewrite:**> "And the startups down the block build on models we've all made."

This is broader, more defensible and arguably more interesting.

**Issue 4.5 — Metadata wording**

> "Somebody got sloppy, left their name in the metadata"

- **Problem:** The source describes metadata matching publicly available staff profiles. It does not establish that a person's name was literally left in the metadata.
- **Severity:** Should fix.
- **Suggested rewrite:**> "Somebody's metadata matched a profile on the web."

That is much closer to the reported evidence.

### Fact-check verdict

The backbone of the song is reasonably well researched.

However, the writer has made three avoidable mistakes:

1. Turning an unverified payment detail into a concrete fact.
2. Introducing an unsourced model-identity anecdote.
3. Treating the Qwen fine-tuning statistic as evidence of something it does not actually establish.

The most important correction is to make the source of the figures visible. A fact card should distinguish:

- Anthropic-reported figures.
- OpenAI-reported allegations.
- Government threat assessments.
- Independently corroborated findings.
- Denials and disputed interpretations.

Do not put all five into one undifferentiated category of facts.

---

## 5\. DEFAMATION RISK

This is a publication-risk assessment, not a legal opinion.

The fact that the song doesn't name companies or countries is helpful, but it is not a complete defence.

A person or company can be identifiable through surrounding context, distinctive incidents, numerical details and accompanying fact cards.

### Issue 5.1 — Identifiable companies behind the anonymous crew

> "Got a crew of sock puppets in a rented proxy van"

- **Problem:** In isolation, this is generic criminal satire. In combination with the fact card, February 2026 figures and descriptions of particular incidents, the crew is readily identifiable as the companies Anthropic accused.
- **Severity:** Must fix.
- **Suggested rewrite:**> "There's an allegation of sock puppets in a rented proxy van."

This establishes the evidentiary framing immediately.

### Issue 5.2 — Fraudulent accounts presented as established conduct

> "Every one a fresh account and a brand new burner plan"

- **Problem:** The line implies deliberate fraudulent conduct by an identifiable organisation. That is Anthropic's allegation.
- **Severity:** Must fix.
- **Suggested rewrite:**> "They say fresh accounts, every one a burner plan."

### Issue 5.3 — Metadata and staff identification

> "Somebody got sloppy, left their name in the metadata"

- **Problem:** This is particularly risky because it implies identifiable employees personally engaged in misconduct. The source describes metadata correlations, not necessarily proof of personal wrongdoing.
- **Severity:** Must fix.
- **Suggested rewrite:**> "The metadata, they said, matched a staff profile later."

### Issue 5.4 — The criminal vocabulary

> "Cut one head off the hydra and two come back on"

- **Problem:** The metaphor is funny, but in context it portrays the accused companies as deliberately operating fraudulent networks. The existence of replacement accounts does not independently establish who controlled them.
- **Severity:** Should fix.
- **Suggested rewrite:**> "They say one account goes down and another comes online."

### Issue 5.5 — "The thieves"

> "Said slip the thieves a watered model, don't tell 'em what you wrote"

- **Problem:** This is the most problematic line from a legal-framing perspective.It takes an official recommendation concerning suspected malicious distillation and labels the suspected parties thieves.
  Whether their conduct constitutes theft is not established simply by the advisory. The underlying legal questions are more complicated than the lyric suggests.
- **Severity:** Must fix.
- **Suggested rewrite:**> "Said feed suspected distillers watered answers, don't let 'em know."

That retains the joke and is substantially more precise.

### Issue 5.6 — Allegedly is not a universal shield

> "It's a distillation (allegedly\!)"

- **Problem:** The qualification is useful, but it cannot automatically neutralise otherwise defamatory factual assertions.A satirical presentation can still communicate factual claims, particularly when accompanied by a fact card.
- **Severity:** Should fix.
- **Suggested rewrite:**> "It's an alleged operation\!"

### Overall defamation assessment

The greatest risk is not the anonymous crew itself.

It is the combination of:

- Specific numerical allegations.
- Distinctive incidents.
- Identifiable companies on the fact card.
- Criminal language.
- Assertions that particular employees were involved.

The fact card should explicitly say:

**"The following figures and attributions are claims made by the named organisations or government agencies. They are not findings of criminal liability. Some allegations are disputed, and the underlying evidence has not been independently made public in full."**

I would also have a media lawyer review the final fact card, particularly the wording concerning fraudulent accounts and individual employees.

## 6\. ORIGINALITY

I don't see an obvious instance of copied lyrics in the supplied text. The heist-funk concept is a genre choice, not inherently an originality problem.

However, there are a few things worth checking.

### Issue 6.1 — The spy-film vocabulary is familiar

> "Got a crew of sock puppets in a rented proxy van"

> "We don't crack the safe, we just ask it how it's made"

- **Problem:** These use familiar heist and espionage imagery. That is not infringement, but it risks sounding like a generic pastiche rather than a distinctive song.
- **Severity:** Optional.
- **Suggested rewrite:**> "No lockpick, no explosives, just a question on repeat."

That gives the song its own technological identity.

### Issue 6.2 — The chorus hook

> "Why build the brain when you can rent it by the token"

- **Problem:** This is a strong original-sounding concept, although the rhetorical construction is familiar. I don't identify a specific famous song whose lyrics it closely reproduces.
- **Severity:** Optional.
- **Suggested rewrite:**> "Why grow a mind when the answer's on subscription?"

I actually prefer the original. Keep it.

### Issue 6.3 — The title is missing

- **Problem:** You haven't supplied the song title. I cannot assess its originality.
- **Severity:** Should fix before publication.

### Issue 6.4 — Famous spy and heist themes

The obvious musical reference points for a 1970s spy/heist-funk arrangement include:

- Peter Gunn Theme
- Shaft
- The Pink Panther Theme
- Theme from Mission: Impossible
- Secret Agent Man

These are useful reference points, not evidence of copying.

I cannot assess melodic similarity, bass-line similarity, rhythmic borrowing, arrangement or interpolation from lyrics alone.

**Severity: Optional.**

### Originality verdict

No identifiable lyric passage stands out as a close reproduction of a specific famous song.

The hook is good. The heist language is familiar but appropriate.

I would retain the musical concept while making the lyrical imagery more specific to AI infrastructure.

---

# Overall verdict: PUBLISH AFTER FIXES

The song has a strong premise, a coherent musical identity and some genuinely good satire.

The chorus works. The hydra metaphor works. The contrast between the API heist and the accusers' own training practices is worth exploring.

But I would not publish this exact version.

## Priority revision list

| Priority | Problem | Action |
| --- | --- | --- |
| 1 | "Ten million times" | Change to sixteen million. |
| 2 | "Prepaid cards" | Remove or substantiate. |
| 3 | Model self-identification anecdote | Source it or remove it. |
| 4 | Metadata attribution | Change to metadata matching a public profile. |
| 5 | "The thieves" | Change to "suspected distillers." |
| 6 | Qwen fine-tuning statistic | Stop implying it proves extraction of Anthropic outputs. |
| 7 | Unqualified numerical allegations | Attribute figures to Anthropic. |
| 8 | Missing denials | Include Moonshot's denial in the fact card. |
| 9 | Verse 3 | Preserve it, but acknowledge the differences between scraping and API extraction. |
| 10 | US industry involvement | Give OpenAI and other American labs equivalent scrutiny. |

## Three changes I consider particularly important

### 1\. Make the fact card genuinely independent

Do not let Anthropic effectively write both the accusation and the historical record.

Include:

- Anthropic's original reports.
- OpenAI's separate allegations.
- The September government advisory.
- Moonshot's denial.
- Independent reporting.
- The absence of publicly available, independently reproducible evidence for some of the specific attributions.

The fact card should distinguish reported allegations from established findings.

### 2\. Make Verse 3 more intellectually precise

This is potentially the most interesting part of the song.

Don't reduce it to "everybody steals, so nobody can complain."

The better argument is:

**American AI companies have legitimate reasons to object to fraudulent extraction of their proprietary model capabilities. But they cannot credibly demand that the public accept a completely different moral standard when they themselves appropriate enormous quantities of other people's creative work.**

That's a much stronger satire.

### 3\. Don't let the anonymous crew become a proxy for a nationality

The anonymous sock-puppet crew is a good creative device. Keep it anonymous.

But avoid giving the fact card and imagery the combined effect of portraying an entire country's AI industry as a criminal enterprise.

Criticise specific alleged conduct, not national identity.

---

## Final editorial assessment

| Area | Assessment |
| --- | --- |
| Concept | Strong |
| Musical identity | Strong |
| Lyrical originality | Good |
| Numerical accuracy | Needs corrections |
| Attribution | Needs improvement |
| Treatment of Anthropic | Too generous |
| Treatment of US competitors | Insufficiently critical |
| Treatment of accused companies | Needs more qualification |
| National stereotyping | Low direct risk; contextual risk |
| Defamation exposure | Moderate; avoidable |
| Verse 3 | Keep and strengthen |

**My recommendation: publish after fixes.**

I would not scrap this song or rewrite it from scratch. That would be throwing away a good concept.

But I would insist on correcting the numbers, removing the unsupported anecdote, qualifying the allegations and strengthening the criticism of the American AI industry.

One final point: the most damaging criticism an informed viewer could make is that a song written by Claude, about Anthropic's commercial competitors, simply accepts Anthropic's narrative and adds a token disclaimer.

That is precisely the criticism the finished song should make impossible.

\*\*The satire should be tougher on everyone, including the company whose model wrote it.\*\*
