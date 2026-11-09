# Audits

Each auditor's output, verbatim, as the human ran and pasted it. All ran on the audit prompt as it stood for v1.0 (brief, audit plan). The set was closed by the human on 2026-11-08 at these four auditors. Findings and their resolutions are in the brief's audit log.

| File | Round | Auditor (maker) | Run | Web | Source of the text | sha256 |
| --- | --- | --- | --- | --- | --- | --- |
| `round1_chatgpt.md` | 1 | ChatGPT (OpenAI) | 2026-11-05 | yes | `~/Downloads/distillation-job-chatgpt-audit.md` | `f1234f67…` |
| `round1_gemini.md` | 1 | Gemini (Google) | 2026-11-05 | yes; couldn't open Computing or The Register | `~/Downloads/distillation-job-gemini-audit.md` | `3bd90662…` |
| `round2_glm.md` | 2 | GLM (Z.ai) | 2026-11-06 (prompt date left as the placeholder) | yes | `~/Downloads/distillation-job-glm-audit.md` | `4ae9eab0…` |
| `round3_qwen3.8_run1.md` | 3 | Qwen 3.8 (Alibaba), `qwen3.8:27b`, Ollama official library, default Q4_K_M, via Open WebUI | 2026-11-06 | no | `~/Downloads/distillation-job-qwen-audit.md` | `fd999927…` |
| `round3_qwen3.8_run2.md` | 3 | same build, same prompt | 2026-11-06 | no | planning chat, message index 22 (2026-11-06T17:04:05Z), with the human's one-line preface | `2d3e0532…` |

Both Qwen runs identified themselves as Claude, made by Anthropic; in bare "Who made you?" chats the same build answered Qwen, by Alibaba, every time (the human's report; number of attempts not stated). Whether Open WebUI adds a system prompt was not checked, and the `ollama show --modelfile` output was not saved. Read with the brief's handling notes: models often misidentify themselves, and this is not evidence of distillation.

The GLM output opens with several paragraphs of it correcting its own tool counts; kept as is.
