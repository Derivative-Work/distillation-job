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
| D02 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D02/D02_s42.png` | 74.1 | 2026-11-09T08:35:46-05:00 | pending pick |
| D02 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D02/D02_s43.png` | 74.1 | 2026-11-09T08:37:00-05:00 | pending pick |
| D02 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D02/D02_s44.png` | 74.1 | 2026-11-09T08:38:14-05:00 | pending pick |
| D03 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D03/D03_s41.png` | 75.1 | 2026-11-09T08:39:30-05:00 | pending pick |
| D03 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D03/D03_s42.png` | 74.1 | 2026-11-09T08:40:44-05:00 | pending pick |
| D03 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D03/D03_s43.png` | 74.1 | 2026-11-09T08:41:58-05:00 | pending pick |
| D03 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D03/D03_s44.png` | 74.1 | 2026-11-09T08:43:12-05:00 | pending pick |
| D04 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D04/D04_s41.png` | 74.3 | 2026-11-09T08:44:27-05:00 | pending pick |
| D04 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D04/D04_s42.png` | 74.1 | 2026-11-09T08:45:41-05:00 | pending pick |
| D04 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D04/D04_s43.png` | 74.1 | 2026-11-09T08:46:55-05:00 | pending pick |
| D04 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D04/D04_s44.png` | 74.1 | 2026-11-09T08:48:09-05:00 | pending pick |
| D04a (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D04a/D04a_s41.png` | 74.4 | 2026-11-09T08:49:24-05:00 | pending pick |
| D04a (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D04a/D04a_s42.png` | 74.1 | 2026-11-09T08:50:39-05:00 | pending pick |
| D04a (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D04a/D04a_s43.png` | 74.1 | 2026-11-09T08:51:53-05:00 | pending pick |
| D04a (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D04a/D04a_s44.png` | 74.1 | 2026-11-09T08:53:07-05:00 | pending pick |
| D04c (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D04c/D04c_s41.png` | 74.2 | 2026-11-09T08:54:22-05:00 | pending pick |
| D04c (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D04c/D04c_s42.png` | 74.1 | 2026-11-09T08:55:36-05:00 | pending pick |
| D04c (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D04c/D04c_s43.png` | 74.1 | 2026-11-09T08:56:50-05:00 | pending pick |
| D04c (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D04c/D04c_s44.png` | 74.1 | 2026-11-09T08:58:04-05:00 | pending pick |
| D04d (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D04d/D04d_s41.png` | 75.1 | 2026-11-09T08:59:20-05:00 | pending pick |
| D04d (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D04d/D04d_s42.png` | 74.1 | 2026-11-09T09:00:34-05:00 | pending pick |
| D04d (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D04d/D04d_s43.png` | 74.3 | 2026-11-09T09:01:48-05:00 | pending pick |
| D04d (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D04d/D04d_s44.png` | 74.1 | 2026-11-09T09:03:02-05:00 | pending pick |
| D04e (refs: ref_van) | 41 | 1792×1008 | `takes/stills/D04e/D04e_s41.png` | 75.1 | 2026-11-09T09:04:18-05:00 | pending pick |
| D04e (refs: ref_van) | 42 | 1792×1008 | `takes/stills/D04e/D04e_s42.png` | 74.1 | 2026-11-09T09:05:32-05:00 | pending pick |
| D04e (refs: ref_van) | 43 | 1792×1008 | `takes/stills/D04e/D04e_s43.png` | 74.1 | 2026-11-09T09:06:46-05:00 | pending pick |
| D04e (refs: ref_van) | 44 | 1792×1008 | `takes/stills/D04e/D04e_s44.png` | 74.1 | 2026-11-09T09:08:00-05:00 | pending pick |
| D05 (refs: ref_van) | 41 | 1792×1008 | `takes/stills/D05/D05_s41.png` | 75.1 | 2026-11-09T09:09:16-05:00 | pending pick |
| D05 (refs: ref_van) | 42 | 1792×1008 | `takes/stills/D05/D05_s42.png` | 74.1 | 2026-11-09T09:10:30-05:00 | pending pick |
| D05 (refs: ref_van) | 43 | 1792×1008 | `takes/stills/D05/D05_s43.png` | 74.1 | 2026-11-09T09:11:44-05:00 | pending pick |
| D05 (refs: ref_van) | 44 | 1792×1008 | `takes/stills/D05/D05_s44.png` | 74.1 | 2026-11-09T09:12:58-05:00 | pending pick |
| D06 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D06/D06_s41.png` | 75.1 | 2026-11-09T09:14:14-05:00 | pending pick |
| D06 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D06/D06_s42.png` | 74.1 | 2026-11-09T09:15:28-05:00 | pending pick |
| D06 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D06/D06_s43.png` | 74.1 | 2026-11-09T09:16:42-05:00 | pending pick |
| D06 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D06/D06_s44.png` | 74.1 | 2026-11-09T09:17:56-05:00 | pending pick |
| D07 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D07/D07_s41.png` | 75.1 | 2026-11-09T09:19:12-05:00 | pending pick |
| D07 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D07/D07_s42.png` | 74.1 | 2026-11-09T09:20:26-05:00 | pending pick |
| D07 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D07/D07_s43.png` | 74.1 | 2026-11-09T09:21:40-05:00 | pending pick |
| D07 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D07/D07_s44.png` | 74.1 | 2026-11-09T09:22:54-05:00 | pending pick |
| D08 | 41 | 1792×1008 | `takes/stills/D08/D08_s41.png` | 42.2 | 2026-11-09T09:23:37-05:00 | pending pick |
| D08 | 42 | 1792×1008 | `takes/stills/D08/D08_s42.png` | 42.0 | 2026-11-09T09:24:19-05:00 | pending pick |
| D08 | 43 | 1792×1008 | `takes/stills/D08/D08_s43.png` | 42.0 | 2026-11-09T09:25:01-05:00 | pending pick |
| D08 | 44 | 1792×1008 | `takes/stills/D08/D08_s44.png` | 42.0 | 2026-11-09T09:25:43-05:00 | pending pick |
| D09 (refs: ref_crew, ref_teller) | 41 | 1792×1008 | `takes/stills/D09/D09_s41.png` | 105.1 | 2026-11-09T09:27:29-05:00 | pending pick |
| D09 (refs: ref_crew, ref_teller) | 42 | 1792×1008 | `takes/stills/D09/D09_s42.png` | 104.1 | 2026-11-09T09:29:13-05:00 | pending pick |
| D09 (refs: ref_crew, ref_teller) | 43 | 1792×1008 | `takes/stills/D09/D09_s43.png` | 103.4 | 2026-11-09T09:30:56-05:00 | pending pick |
| D09 (refs: ref_crew, ref_teller) | 44 | 1792×1008 | `takes/stills/D09/D09_s44.png` | 104.1 | 2026-11-09T09:32:40-05:00 | pending pick |
| D10 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D10/D10_s41.png` | 75.1 | 2026-11-09T09:33:56-05:00 | pending pick |
| D10 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D10/D10_s42.png` | 74.2 | 2026-11-09T09:35:10-05:00 | pending pick |
| D10 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D10/D10_s43.png` | 74.1 | 2026-11-09T09:36:24-05:00 | pending pick |
| D10 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D10/D10_s44.png` | 74.1 | 2026-11-09T09:37:38-05:00 | pending pick |
| D11 (refs: ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D11/D11_s41.png` | 104.3 | 2026-11-09T09:39:23-05:00 | pending pick |
| D11 (refs: ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D11/D11_s42.png` | 104.1 | 2026-11-09T09:41:07-05:00 | pending pick |
| D11 (refs: ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D11/D11_s43.png` | 104.1 | 2026-11-09T09:42:52-05:00 | pending pick |
| D11 (refs: ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D11/D11_s44.png` | 104.1 | 2026-11-09T09:44:36-05:00 | pending pick |
| D12 (refs: ref_still) | 41 | 1792×1008 | `takes/stills/D12/D12_s41.png` | 75.1 | 2026-11-09T09:45:51-05:00 | pending pick |
| D12 (refs: ref_still) | 42 | 1792×1008 | `takes/stills/D12/D12_s42.png` | 74.1 | 2026-11-09T09:47:06-05:00 | pending pick |
| D12 (refs: ref_still) | 43 | 1792×1008 | `takes/stills/D12/D12_s43.png` | 74.1 | 2026-11-09T09:48:20-05:00 | pending pick |
| D12 (refs: ref_still) | 44 | 1792×1008 | `takes/stills/D12/D12_s44.png` | 74.1 | 2026-11-09T09:49:34-05:00 | pending pick |
| D13 (refs: ref_crew, ref_teller) | 41 | 1792×1008 | `takes/stills/D13/D13_s41.png` | 105.1 | 2026-11-09T09:51:19-05:00 | pending pick |
| D13 (refs: ref_crew, ref_teller) | 42 | 1792×1008 | `takes/stills/D13/D13_s42.png` | 104.1 | 2026-11-09T09:53:04-05:00 | pending pick |
| D13 (refs: ref_crew, ref_teller) | 43 | 1792×1008 | `takes/stills/D13/D13_s43.png` | 104.1 | 2026-11-09T09:54:48-05:00 | pending pick |
| D13 (refs: ref_crew, ref_teller) | 44 | 1792×1008 | `takes/stills/D13/D13_s44.png` | 104.1 | 2026-11-09T09:56:32-05:00 | pending pick |
| D14 | 41 | 1792×1008 | `takes/stills/D14/D14_s41.png` | 42.1 | 2026-11-09T09:57:15-05:00 | pending pick |
| D14 | 42 | 1792×1008 | `takes/stills/D14/D14_s42.png` | 42.0 | 2026-11-09T09:57:57-05:00 | pending pick |
| D14 | 43 | 1792×1008 | `takes/stills/D14/D14_s43.png` | 42.0 | 2026-11-09T09:58:39-05:00 | pending pick |
| D14 | 44 | 1792×1008 | `takes/stills/D14/D14_s44.png` | 42.0 | 2026-11-09T09:59:21-05:00 | pending pick |
| D15 (refs: ref_still, ref_crew) | 41 | 1792×1008 | `takes/stills/D15/D15_s41.png` | 105.1 | 2026-11-09T10:01:07-05:00 | pending pick |
| D15 (refs: ref_still, ref_crew) | 42 | 1792×1008 | `takes/stills/D15/D15_s42.png` | 104.1 | 2026-11-09T10:02:51-05:00 | pending pick |
| D15 (refs: ref_still, ref_crew) | 43 | 1792×1008 | `takes/stills/D15/D15_s43.png` | 104.1 | 2026-11-09T10:04:35-05:00 | pending pick |
| D15 (refs: ref_still, ref_crew) | 44 | 1792×1008 | `takes/stills/D15/D15_s44.png` | 104.1 | 2026-11-09T10:06:19-05:00 | pending pick |
| D16 | 41 | 1792×1008 | `takes/stills/D16/D16_s41.png` | 42.1 | 2026-11-09T10:07:02-05:00 | pending pick |
| D16 | 42 | 1792×1008 | `takes/stills/D16/D16_s42.png` | 42.0 | 2026-11-09T10:07:44-05:00 | pending pick |
| D16 | 43 | 1792×1008 | `takes/stills/D16/D16_s43.png` | 42.0 | 2026-11-09T10:08:26-05:00 | pending pick |
| D16 | 44 | 1792×1008 | `takes/stills/D16/D16_s44.png` | 41.3 | 2026-11-09T10:09:07-05:00 | pending pick |
| D17 | 41 | 1792×1008 | `takes/stills/D17/D17_s41.png` | 42.2 | 2026-11-09T10:09:50-05:00 | pending pick |
| D17 | 42 | 1792×1008 | `takes/stills/D17/D17_s42.png` | 42.0 | 2026-11-09T10:10:32-05:00 | pending pick |
| D17 | 43 | 1792×1008 | `takes/stills/D17/D17_s43.png` | 41.3 | 2026-11-09T10:11:13-05:00 | pending pick |
| D17 | 44 | 1792×1008 | `takes/stills/D17/D17_s44.png` | 42.0 | 2026-11-09T10:11:55-05:00 | pending pick |
| D18 (refs: ref_crew, ref_teller) | 41 | 1792×1008 | `takes/stills/D18/D18_s41.png` | 105.1 | 2026-11-09T10:13:41-05:00 | pending pick |
| D18 (refs: ref_crew, ref_teller) | 42 | 1792×1008 | `takes/stills/D18/D18_s42.png` | 104.1 | 2026-11-09T10:15:25-05:00 | pending pick |
| D18 (refs: ref_crew, ref_teller) | 43 | 1792×1008 | `takes/stills/D18/D18_s43.png` | 104.1 | 2026-11-09T10:17:09-05:00 | pending pick |
| D18 (refs: ref_crew, ref_teller) | 44 | 1792×1008 | `takes/stills/D18/D18_s44.png` | 104.1 | 2026-11-09T10:18:53-05:00 | pending pick |
| D19 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D19/D19_s41.png` | 75.1 | 2026-11-09T10:20:09-05:00 | pending pick |
| D19 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D19/D19_s42.png` | 74.1 | 2026-11-09T10:21:23-05:00 | pending pick |
| D19 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D19/D19_s43.png` | 74.1 | 2026-11-09T10:22:37-05:00 | pending pick |
| D19 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D19/D19_s44.png` | 74.1 | 2026-11-09T10:23:51-05:00 | pending pick |
| D20 (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D20/D20_s41.png` | 75.1 | 2026-11-09T10:25:07-05:00 | pending pick |
| D20 (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D20/D20_s42.png` | 74.1 | 2026-11-09T10:26:21-05:00 | pending pick |
| D20 (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D20/D20_s43.png` | 74.1 | 2026-11-09T10:27:35-05:00 | pending pick |
| D20 (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D20/D20_s44.png` | 74.1 | 2026-11-09T10:28:49-05:00 | pending pick |
| D21 (refs: ref_crew, ref_teller) | 41 | 1792×1008 | `takes/stills/D21/D21_s41.png` | 104.3 | 2026-11-09T10:30:34-05:00 | pending pick |
| D21 (refs: ref_crew, ref_teller) | 42 | 1792×1008 | `takes/stills/D21/D21_s42.png` | 104.1 | 2026-11-09T10:32:18-05:00 | pending pick |
| D21 (refs: ref_crew, ref_teller) | 43 | 1792×1008 | `takes/stills/D21/D21_s43.png` | 104.1 | 2026-11-09T10:34:03-05:00 | pending pick |
| D21 (refs: ref_crew, ref_teller) | 44 | 1792×1008 | `takes/stills/D21/D21_s44.png` | 104.1 | 2026-11-09T10:35:47-05:00 | pending pick |
| D22 (refs: ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D22/D22_s41.png` | 104.1 | 2026-11-09T10:37:31-05:00 | pending pick |
| D22 (refs: ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D22/D22_s42.png` | 104.1 | 2026-11-09T10:39:16-05:00 | pending pick |
| D22 (refs: ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D22/D22_s43.png` | 104.1 | 2026-11-09T10:41:00-05:00 | pending pick |
| D22 (refs: ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D22/D22_s44.png` | 104.1 | 2026-11-09T10:42:44-05:00 | pending pick |
| D23 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D23/D23_s41.png` | 75.1 | 2026-11-09T10:43:59-05:00 | pending pick |
| D23 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D23/D23_s42.png` | 74.1 | 2026-11-09T10:45:14-05:00 | pending pick |
| D23 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D23/D23_s43.png` | 74.1 | 2026-11-09T10:46:28-05:00 | pending pick |
| D23 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D23/D23_s44.png` | 74.1 | 2026-11-09T10:47:42-05:00 | pending pick |
| D24 | 41 | 1792×1008 | `takes/stills/D24/D24_s41.png` | 42.2 | 2026-11-09T10:48:25-05:00 | pending pick |
| D24 | 42 | 1792×1008 | `takes/stills/D24/D24_s42.png` | 42.0 | 2026-11-09T10:49:07-05:00 | pending pick |
| D24 | 43 | 1792×1008 | `takes/stills/D24/D24_s43.png` | 42.0 | 2026-11-09T10:49:49-05:00 | pending pick |
| D24 | 44 | 1792×1008 | `takes/stills/D24/D24_s44.png` | 42.0 | 2026-11-09T10:50:31-05:00 | pending pick |
| D25 (refs: ref_crew, ref_still) | 41 | 1792×1008 | `takes/stills/D25/D25_s41.png` | 105.1 | 2026-11-09T10:52:16-05:00 | pending pick |
| D25 (refs: ref_crew, ref_still) | 42 | 1792×1008 | `takes/stills/D25/D25_s42.png` | 104.1 | 2026-11-09T10:54:00-05:00 | pending pick |
| D25 (refs: ref_crew, ref_still) | 43 | 1792×1008 | `takes/stills/D25/D25_s43.png` | 104.1 | 2026-11-09T10:55:45-05:00 | pending pick |
| D25 (refs: ref_crew, ref_still) | 44 | 1792×1008 | `takes/stills/D25/D25_s44.png` | 104.1 | 2026-11-09T10:57:29-05:00 | pending pick |
| D27 (refs: ref_still, ref_crew) | 41 | 1792×1008 | `takes/stills/D27/D27_s41.png` | 104.2 | 2026-11-09T10:59:14-05:00 | pending pick |
| D27 (refs: ref_still, ref_crew) | 42 | 1792×1008 | `takes/stills/D27/D27_s42.png` | 104.1 | 2026-11-09T11:00:58-05:00 | pending pick |
| D27 (refs: ref_still, ref_crew) | 43 | 1792×1008 | `takes/stills/D27/D27_s43.png` | 104.1 | 2026-11-09T11:02:42-05:00 | pending pick |
| D27 (refs: ref_still, ref_crew) | 44 | 1792×1008 | `takes/stills/D27/D27_s44.png` | 104.1 | 2026-11-09T11:04:26-05:00 | pending pick |
| D27a (refs: ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D27a/D27a_s41.png` | 104.3 | 2026-11-09T11:06:11-05:00 | pending pick |
| D27a (refs: ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D27a/D27a_s42.png` | 104.1 | 2026-11-09T11:07:55-05:00 | pending pick |
| D27a (refs: ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D27a/D27a_s43.png` | 104.1 | 2026-11-09T11:09:39-05:00 | pending pick |
| D27a (refs: ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D27a/D27a_s44.png` | 104.1 | 2026-11-09T11:11:23-05:00 | pending pick |
| D31 (refs: ref_crew, ref_van) | 41 | 1792×1008 | `takes/stills/D31/D31_s41.png` | 104.4 | 2026-11-09T11:13:08-05:00 | pending pick |
| D31 (refs: ref_crew, ref_van) | 42 | 1792×1008 | `takes/stills/D31/D31_s42.png` | 104.1 | 2026-11-09T11:14:52-05:00 | pending pick |
| D31 (refs: ref_crew, ref_van) | 43 | 1792×1008 | `takes/stills/D31/D31_s43.png` | 104.1 | 2026-11-09T11:16:36-05:00 | pending pick |
| D31 (refs: ref_crew, ref_van) | 44 | 1792×1008 | `takes/stills/D31/D31_s44.png` | 104.1 | 2026-11-09T11:18:20-05:00 | pending pick |
| D34 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D34/D34_s41.png` | 75.1 | 2026-11-09T11:19:36-05:00 | pending pick |
| D34 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D34/D34_s42.png` | 74.1 | 2026-11-09T11:20:50-05:00 | pending pick |
| D34 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D34/D34_s43.png` | 74.1 | 2026-11-09T11:22:04-05:00 | pending pick |
| D34 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D34/D34_s44.png` | 74.1 | 2026-11-09T11:23:18-05:00 | pending pick |
| D35 | 41 | 1792×1008 | `takes/stills/D35/D35_s41.png` | 42.1 | 2026-11-09T11:24:01-05:00 | pending pick |
| D35 | 42 | 1792×1008 | `takes/stills/D35/D35_s42.png` | 42.0 | 2026-11-09T11:24:43-05:00 | pending pick |
| D35 | 43 | 1792×1008 | `takes/stills/D35/D35_s43.png` | 42.0 | 2026-11-09T11:25:25-05:00 | pending pick |
| D35 | 44 | 1792×1008 | `takes/stills/D35/D35_s44.png` | 42.0 | 2026-11-09T11:26:07-05:00 | pending pick |
| D36 (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D36/D36_s41.png` | 75.1 | 2026-11-09T11:27:23-05:00 | pending pick |
| D36 (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D36/D36_s42.png` | 74.2 | 2026-11-09T11:28:37-05:00 | pending pick |
| D36 (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D36/D36_s43.png` | 74.1 | 2026-11-09T11:29:51-05:00 | pending pick |
| D36 (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D36/D36_s44.png` | 74.1 | 2026-11-09T11:31:06-05:00 | pending pick |
| D37 (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D37/D37_s41.png` | 75.1 | 2026-11-09T11:32:21-05:00 | pending pick |
| D37 (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D37/D37_s42.png` | 74.3 | 2026-11-09T11:33:36-05:00 | pending pick |
| D37 (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D37/D37_s43.png` | 74.1 | 2026-11-09T11:34:50-05:00 | pending pick |
| D37 (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D37/D37_s44.png` | 74.1 | 2026-11-09T11:36:04-05:00 | pending pick |
| D38 (refs: ref_probe, ref_teller) | 41 | 1792×1008 | `takes/stills/D38/D38_s41.png` | 105.1 | 2026-11-09T11:37:49-05:00 | pending pick |
| D38 (refs: ref_probe, ref_teller) | 42 | 1792×1008 | `takes/stills/D38/D38_s42.png` | 104.1 | 2026-11-09T11:39:34-05:00 | pending pick |
| D38 (refs: ref_probe, ref_teller) | 43 | 1792×1008 | `takes/stills/D38/D38_s43.png` | 104.1 | 2026-11-09T11:41:18-05:00 | pending pick |
| D38 (refs: ref_probe, ref_teller) | 44 | 1792×1008 | `takes/stills/D38/D38_s44.png` | 104.1 | 2026-11-09T11:43:02-05:00 | pending pick |
| D39 (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D39/D39_s41.png` | 75.1 | 2026-11-09T11:44:17-05:00 | pending pick |
| D39 (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D39/D39_s42.png` | 74.1 | 2026-11-09T11:45:32-05:00 | pending pick |
| D39 (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D39/D39_s43.png` | 74.1 | 2026-11-09T11:46:46-05:00 | pending pick |
| D39 (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D39/D39_s44.png` | 74.1 | 2026-11-09T11:48:00-05:00 | pending pick |
| D39a_l (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D39a_l/D39a_l_s41.png` | 75.1 | 2026-11-09T11:49:16-05:00 | pending pick |
| D39a_l (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D39a_l/D39a_l_s42.png` | 74.1 | 2026-11-09T11:50:30-05:00 | pending pick |
| D39a_l (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D39a_l/D39a_l_s43.png` | 74.1 | 2026-11-09T11:51:44-05:00 | pending pick |
| D39a_l (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D39a_l/D39a_l_s44.png` | 74.1 | 2026-11-09T11:52:58-05:00 | pending pick |
| D39a_r | 41 | 1792×1008 | `takes/stills/D39a_r/D39a_r_s41.png` | 42.1 | 2026-11-09T11:53:40-05:00 | pending pick |
| D39a_r | 42 | 1792×1008 | `takes/stills/D39a_r/D39a_r_s42.png` | 42.0 | 2026-11-09T11:54:23-05:00 | pending pick |
| D39a_r | 43 | 1792×1008 | `takes/stills/D39a_r/D39a_r_s43.png` | 42.0 | 2026-11-09T11:55:05-05:00 | pending pick |
| D39a_r | 44 | 1792×1008 | `takes/stills/D39a_r/D39a_r_s44.png` | 42.0 | 2026-11-09T11:55:47-05:00 | pending pick |
| D39b (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D39b/D39b_s41.png` | 75.1 | 2026-11-09T11:57:02-05:00 | pending pick |
| D39b (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D39b/D39b_s42.png` | 74.2 | 2026-11-09T11:58:17-05:00 | pending pick |
| D39b (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D39b/D39b_s43.png` | 74.1 | 2026-11-09T11:59:31-05:00 | pending pick |
| D39b (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D39b/D39b_s44.png` | 74.1 | 2026-11-09T12:00:45-05:00 | pending pick |
| D39c (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D39c/D39c_s41.png` | 75.1 | 2026-11-09T12:02:00-05:00 | pending pick |
| D39c (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D39c/D39c_s42.png` | 74.1 | 2026-11-09T12:03:15-05:00 | pending pick |
| D39c (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D39c/D39c_s43.png` | 74.1 | 2026-11-09T12:04:29-05:00 | pending pick |
| D39c (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D39c/D39c_s44.png` | 74.1 | 2026-11-09T12:05:43-05:00 | pending pick |
| D39d (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D39d/D39d_s41.png` | 75.1 | 2026-11-09T12:06:58-05:00 | pending pick |
| D39d (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D39d/D39d_s42.png` | 74.2 | 2026-11-09T12:08:13-05:00 | pending pick |
| D39d (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D39d/D39d_s43.png` | 74.2 | 2026-11-09T12:09:27-05:00 | pending pick |
| D39d (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D39d/D39d_s44.png` | 74.1 | 2026-11-09T12:10:41-05:00 | pending pick |
| D40 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D40/D40_s41.png` | 75.1 | 2026-11-09T12:11:57-05:00 | pending pick |
| D40 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D40/D40_s42.png` | 74.1 | 2026-11-09T12:13:11-05:00 | pending pick |
| D40 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D40/D40_s43.png` | 74.1 | 2026-11-09T12:14:25-05:00 | pending pick |
| D40 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D40/D40_s44.png` | 74.1 | 2026-11-09T12:15:39-05:00 | pending pick |
| D41 (refs: ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D41/D41_s41.png` | 105.1 | 2026-11-09T12:17:25-05:00 | pending pick |
| D41 (refs: ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D41/D41_s42.png` | 104.1 | 2026-11-09T12:19:09-05:00 | pending pick |
| D41 (refs: ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D41/D41_s43.png` | 104.1 | 2026-11-09T12:20:53-05:00 | pending pick |
| D41 (refs: ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D41/D41_s44.png` | 104.1 | 2026-11-09T12:22:37-05:00 | pending pick |
| D42 (refs: ref_still, ref_crew, ref_probe) | 41 | 1792×1008 | `takes/stills/D42/D42_s41.png` | 146.5 | 2026-11-09T12:25:04-05:00 | pending pick |
| D42 (refs: ref_still, ref_crew, ref_probe) | 42 | 1792×1008 | `takes/stills/D42/D42_s42.png` | 145.2 | 2026-11-09T12:27:29-05:00 | pending pick |
| D42 (refs: ref_still, ref_crew, ref_probe) | 43 | 1792×1008 | `takes/stills/D42/D42_s43.png` | 145.1 | 2026-11-09T12:29:54-05:00 | pending pick |
| D42 (refs: ref_still, ref_crew, ref_probe) | 44 | 1792×1008 | `takes/stills/D42/D42_s44.png` | 145.2 | 2026-11-09T12:32:20-05:00 | pending pick |
| D44a (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D44a/D44a_s41.png` | 75.1 | 2026-11-09T12:33:35-05:00 | pending pick |
| D44a (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D44a/D44a_s42.png` | 74.2 | 2026-11-09T12:34:49-05:00 | pending pick |
| D44a (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D44a/D44a_s43.png` | 74.1 | 2026-11-09T12:36:04-05:00 | pending pick |
| D44a (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D44a/D44a_s44.png` | 74.1 | 2026-11-09T12:37:18-05:00 | pending pick |
| D44b (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D44b/D44b_s41.png` | 75.1 | 2026-11-09T12:38:33-05:00 | pending pick |
| D44b (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D44b/D44b_s42.png` | 74.1 | 2026-11-09T12:39:47-05:00 | pending pick |
| D44b (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D44b/D44b_s43.png` | 74.1 | 2026-11-09T12:41:02-05:00 | pending pick |
| D44b (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D44b/D44b_s44.png` | 74.1 | 2026-11-09T12:42:16-05:00 | pending pick |
| D44c (refs: ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D44c/D44c_s41.png` | 104.2 | 2026-11-09T12:44:01-05:00 | pending pick |
| D44c (refs: ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D44c/D44c_s42.png` | 104.1 | 2026-11-09T12:45:45-05:00 | pending pick |
| D44c (refs: ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D44c/D44c_s43.png` | 104.1 | 2026-11-09T12:47:29-05:00 | pending pick |
| D44c (refs: ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D44c/D44c_s44.png` | 104.1 | 2026-11-09T12:49:13-05:00 | pending pick |
