# AI changes

What the generator did differently from the lyrics and plan as pasted. Candidates from Whisper are confirmed by ear at M1 before they count.

| # | Where | As pasted | As generated | Status |
|---|---|---|---|---|
| 1 | Title | Working title "The Distillation Job" (brief) | Suno title "Distillation (Allegedly)" | Set by the human in Suno, not the generator. Resolved 2026-11-08: the video is "The Distillation Job" |
| 2 | Intro, line 1 | "Alright, crew. Twenty-four thousand accounts." | Whisper (both passes) starts at "Crew" 7.97 s. The lead stem has a short loud event at 4.4–5.0 s (−23 dBFS) that may be "Alright," or bleed | Confirmed by the human: Suno split "Alright," (4.50 s) from "crew." (7.99 s); no take kept it together and stayed consistent elsewhere. Stays |
| 3 | Chorus 1, last line | "And stroll right out the door" once | Sung twice: 96.3–98.9 s and 101.7–103.3 s. Chorus 2 sings it once (154.0 s) | Confirmed by the human: Suno added it. Stays; in `lyrics/as_sung.txt` |
| 4 | Pre-chorus 1 | "Rate limit? (Respawn!) Banned again? (Respawn!)" | Lead: "Radial energy, respond again"; backing: "Respawn" ×3 at 77.1–79.0 s and ×2 at 81.5–82.2 s | Likely mishearing of the lead; the backing has an extra pair of "Respawn"s. Confirm by ear |
| 5 | Breakdown | "A hundred fifty-one!" | Full pass "150"; focused pass "151" (168.65 s) | Confirmed by the human: "151", as written |
| 6 | Many lines | — | Whisper: "sieve"→"seal"/"sip", "brain"→"brand" (chorus 1), "bot keeps sayin'"→"about to keep saying", "made by—"→"may buy it", "Matched"→"Master", "vault"→"thought", "light"→"life", "haul"→"heart", "output"→"apple", "loot goes"→"locals", "spiked"→"spike", "weights"→"waves" (backing) | Likely mishearings; confirmed or not at M1 |
| 7 | Tempo | Style prompt: 112 BPM | Beat tracking on the drums stem: 109.96 bpm (median beat 0.546 s), steady through the take | Generator's tempo; the timing map uses it |
