# Prompts

Every still and clip prompt with its model, seed and take. Filled from M3 on.

Seeds 41–44 (config/seeds.json main = 41, four takes per item). Shared style phrases in `config/stills.json` → `style_sets`.

## Stills: FLUX.2 [dev]

Model `flux2_dev_fp8mixed.safetensors`, text encoder `mistral_3_small_flux2_fp4_mixed.safetensors`, VAE `flux2-vae.safetensors`; 28 steps, euler, guidance 4.0; ComfyUI, text-to-image (`scripts/stills.py`). Prompt = `shots/prompts/<item>.txt` (subject + the shared style).

| Item | Seed | Size | Output | Seconds | When | Status |
| --- | --- | --- | --- | --- | --- | --- |
| ref_crew | 41 | 1664×1248 | `takes/stills/ref_crew/ref_crew_s41.png` | 60.7 | 2026-11-09T00:16:06-05:00 | pending pick |
| ref_crew | 42 | 1664×1248 | `takes/stills/ref_crew/ref_crew_s42.png` | 48.3 | 2026-11-09T00:16:54-05:00 | pending pick |
| ref_crew | 43 | 1664×1248 | `takes/stills/ref_crew/ref_crew_s43.png` | 49.1 | 2026-11-09T00:17:43-05:00 | pending pick |
| ref_crew | 44 | 1664×1248 | `takes/stills/ref_crew/ref_crew_s44.png` | 49.1 | 2026-11-09T00:18:32-05:00 | pending pick |
| ref_teller | 41 | 1664×1248 | `takes/stills/ref_teller/ref_teller_s41.png` | 61.6 | 2026-11-09T00:19:34-05:00 | pending pick |
| ref_teller | 42 | 1664×1248 | `takes/stills/ref_teller/ref_teller_s42.png` | 49.1 | 2026-11-09T00:20:23-05:00 | pending pick |
| ref_teller | 43 | 1664×1248 | `takes/stills/ref_teller/ref_teller_s43.png` | 49.1 | 2026-11-09T00:21:13-05:00 | pending pick |
| ref_teller | 44 | 1664×1248 | `takes/stills/ref_teller/ref_teller_s44.png` | 49.1 | 2026-11-09T00:22:02-05:00 | pending pick |
| ref_still | 41 | 1664×1248 | `takes/stills/ref_still/ref_still_s41.png` | 50.1 | 2026-11-09T00:22:53-05:00 | pending pick |
| ref_still | 42 | 1664×1248 | `takes/stills/ref_still/ref_still_s42.png` | 49.1 | 2026-11-09T00:23:42-05:00 | pending pick |
| ref_still | 43 | 1664×1248 | `takes/stills/ref_still/ref_still_s43.png` | 49.1 | 2026-11-09T00:24:31-05:00 | pending pick |
| ref_still | 44 | 1664×1248 | `takes/stills/ref_still/ref_still_s44.png` | 49.0 | 2026-11-09T00:25:20-05:00 | pending pick |
| ref_van | 41 | 1664×1248 | `takes/stills/ref_van/ref_van_s41.png` | 49.4 | 2026-11-09T00:26:10-05:00 | pending pick |
| ref_van | 42 | 1664×1248 | `takes/stills/ref_van/ref_van_s42.png` | 49.1 | 2026-11-09T00:26:59-05:00 | pending pick |
| ref_van | 43 | 1664×1248 | `takes/stills/ref_van/ref_van_s43.png` | 49.0 | 2026-11-09T00:27:48-05:00 | pending pick |
| ref_van | 44 | 1664×1248 | `takes/stills/ref_van/ref_van_s44.png` | 49.0 | 2026-11-09T00:28:37-05:00 | pending pick |
| ref_feds | 41 | 1664×1248 | `takes/stills/ref_feds/ref_feds_s41.png` | 50.1 | 2026-11-09T00:29:28-05:00 | pending pick |
| ref_feds | 42 | 1664×1248 | `takes/stills/ref_feds/ref_feds_s42.png` | 49.1 | 2026-11-09T00:30:17-05:00 | pending pick |
| ref_feds | 43 | 1664×1248 | `takes/stills/ref_feds/ref_feds_s43.png` | 49.0 | 2026-11-09T00:31:06-05:00 | pending pick |
| ref_feds | 44 | 1664×1248 | `takes/stills/ref_feds/ref_feds_s44.png` | 49.0 | 2026-11-09T00:31:55-05:00 | pending pick |
| ref_probe (refs: file:reference/sandbox_rhapsody_probe_274s.png) | 41 | 1664×1248 | `takes/stills/ref_probe/ref_probe_s41.png` | 79.1 | 2026-11-09T00:33:15-05:00 | pending pick |
| ref_probe (refs: file:reference/sandbox_rhapsody_probe_274s.png) | 42 | 1664×1248 | `takes/stills/ref_probe/ref_probe_s42.png` | 78.1 | 2026-11-09T00:34:33-05:00 | pending pick |
| ref_probe (refs: file:reference/sandbox_rhapsody_probe_274s.png) | 43 | 1664×1248 | `takes/stills/ref_probe/ref_probe_s43.png` | 78.1 | 2026-11-09T00:35:51-05:00 | pending pick |
| ref_probe (refs: file:reference/sandbox_rhapsody_probe_274s.png) | 44 | 1664×1248 | `takes/stills/ref_probe/ref_probe_s44.png` | 78.1 | 2026-11-09T00:37:09-05:00 | pending pick |
| ref_crew_v2 | 41 | 1664×1248 | `takes/stills/ref_crew/ref_crew_v2_s41.png` | 47.1 | 2026-11-09T06:04:46-05:00 | pending pick |
| ref_crew_v2 | 42 | 1664×1248 | `takes/stills/ref_crew/ref_crew_v2_s42.png` | 48.2 | 2026-11-09T06:05:35-05:00 | pending pick |
| ref_crew_v2 | 43 | 1664×1248 | `takes/stills/ref_crew/ref_crew_v2_s43.png` | 49.1 | 2026-11-09T06:06:24-05:00 | pending pick |
| ref_crew_v2 | 44 | 1664×1248 | `takes/stills/ref_crew/ref_crew_v2_s44.png` | 49.1 | 2026-11-09T06:07:13-05:00 | pending pick |
| ref_probe_v2 (refs: file:reference/sandbox_rhapsody_probe_274s.png) | 41 | 1664×1248 | `takes/stills/ref_probe/ref_probe_v2_s41.png` | 78.3 | 2026-11-09T06:08:32-05:00 | pending pick |
| ref_probe_v2 (refs: file:reference/sandbox_rhapsody_probe_274s.png) | 42 | 1664×1248 | `takes/stills/ref_probe/ref_probe_v2_s42.png` | 78.1 | 2026-11-09T06:09:50-05:00 | pending pick |
| ref_probe_v2 (refs: file:reference/sandbox_rhapsody_probe_274s.png) | 43 | 1664×1248 | `takes/stills/ref_probe/ref_probe_v2_s43.png` | 78.1 | 2026-11-09T06:11:08-05:00 | pending pick |
| ref_probe_v2 (refs: file:reference/sandbox_rhapsody_probe_274s.png) | 44 | 1664×1248 | `takes/stills/ref_probe/ref_probe_v2_s44.png` | 78.1 | 2026-11-09T06:12:26-05:00 | pending pick |
| ref_probe_v3 (refs: file:reference/sandbox_rhapsody_probe_80s.png) | 41 | 1664×1248 | `takes/stills/ref_probe/ref_probe_v3_s41.png` | 78.1 | 2026-11-09T06:16:12-05:00 | pending pick |
| ref_probe_v3 (refs: file:reference/sandbox_rhapsody_probe_80s.png) | 42 | 1664×1248 | `takes/stills/ref_probe/ref_probe_v3_s42.png` | 79.1 | 2026-11-09T06:17:32-05:00 | pending pick |
| ref_probe_v3 (refs: file:reference/sandbox_rhapsody_probe_80s.png) | 43 | 1664×1248 | `takes/stills/ref_probe/ref_probe_v3_s43.png` | 79.1 | 2026-11-09T06:18:51-05:00 | pending pick |
| ref_probe_v3 (refs: file:reference/sandbox_rhapsody_probe_80s.png) | 44 | 1664×1248 | `takes/stills/ref_probe/ref_probe_v3_s44.png` | 79.1 | 2026-11-09T06:20:10-05:00 | pending pick |
| D02 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D02/D02_s41.png` | 84.8 | 2026-11-09T08:34:32-05:00 | pending pick |
