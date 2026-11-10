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
| D32 (refs: ref_feds) | 41 | 1792×1008 | `takes/stills/D32/D32_s41.png` | 75.1 | 2026-11-09T12:50:38-05:00 | pending pick |
| D32 (refs: ref_feds) | 42 | 1792×1008 | `takes/stills/D32/D32_s42.png` | 74.1 | 2026-11-09T12:51:52-05:00 | pending pick |
| D32 (refs: ref_feds) | 43 | 1792×1008 | `takes/stills/D32/D32_s43.png` | 74.1 | 2026-11-09T12:53:06-05:00 | pending pick |
| D32 (refs: ref_feds) | 44 | 1792×1008 | `takes/stills/D32/D32_s44.png` | 74.1 | 2026-11-09T12:54:20-05:00 | pending pick |
| D33 (refs: ref_feds, ref_teller) | 41 | 1792×1008 | `takes/stills/D33/D33_s41.png` | 104.2 | 2026-11-09T12:56:05-05:00 | pending pick |
| D33 (refs: ref_feds, ref_teller) | 42 | 1792×1008 | `takes/stills/D33/D33_s42.png` | 104.2 | 2026-11-09T12:57:49-05:00 | pending pick |
| D33 (refs: ref_feds, ref_teller) | 43 | 1792×1008 | `takes/stills/D33/D33_s43.png` | 104.1 | 2026-11-09T12:59:33-05:00 | pending pick |
| D33 (refs: ref_feds, ref_teller) | 44 | 1792×1008 | `takes/stills/D33/D33_s44.png` | 104.1 | 2026-11-09T13:01:17-05:00 | pending pick |
| D42a (refs: ref_teller, ref_crew, ref_feds) | 41 | 1792×1008 | `takes/stills/D42a/D42a_s41.png` | 145.4 | 2026-11-09T13:03:43-05:00 | pending pick |
| D42a (refs: ref_teller, ref_crew, ref_feds) | 42 | 1792×1008 | `takes/stills/D42a/D42a_s42.png` | 145.2 | 2026-11-09T13:06:08-05:00 | pending pick |
| D42a (refs: ref_teller, ref_crew, ref_feds) | 43 | 1792×1008 | `takes/stills/D42a/D42a_s43.png` | 145.2 | 2026-11-09T13:08:33-05:00 | pending pick |
| D42a (refs: ref_teller, ref_crew, ref_feds) | 44 | 1792×1008 | `takes/stills/D42a/D42a_s44.png` | 145.2 | 2026-11-09T13:10:59-05:00 | pending pick |
| D42b (refs: ref_feds) | 41 | 1792×1008 | `takes/stills/D42b/D42b_s41.png` | 75.1 | 2026-11-09T13:12:14-05:00 | pending pick |
| D42b (refs: ref_feds) | 42 | 1792×1008 | `takes/stills/D42b/D42b_s42.png` | 74.2 | 2026-11-09T13:13:28-05:00 | pending pick |
| D42b (refs: ref_feds) | 43 | 1792×1008 | `takes/stills/D42b/D42b_s43.png` | 74.2 | 2026-11-09T13:14:43-05:00 | pending pick |
| D42b (refs: ref_feds) | 44 | 1792×1008 | `takes/stills/D42b/D42b_s44.png` | 74.1 | 2026-11-09T13:15:57-05:00 | pending pick |
| D23_v2 (refs: ref_crew, ref_feds) | 41 | 1792×1008 | `takes/stills/D23/D23_v2_s41.png` | 104.2 | 2026-11-09T13:17:55-05:00 | pending pick |
| D23_v2 (refs: ref_crew, ref_feds) | 42 | 1792×1008 | `takes/stills/D23/D23_v2_s42.png` | 104.1 | 2026-11-09T13:19:39-05:00 | pending pick |
| D23_v2 (refs: ref_crew, ref_feds) | 43 | 1792×1008 | `takes/stills/D23/D23_v2_s43.png` | 104.1 | 2026-11-09T13:21:23-05:00 | pending pick |
| D23_v2 (refs: ref_crew, ref_feds) | 44 | 1792×1008 | `takes/stills/D23/D23_v2_s44.png` | 104.1 | 2026-11-09T13:23:07-05:00 | pending pick |
| D38_v2 (refs: ref_probe, ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D38/D38_v2_s41.png` | 146.2 | 2026-11-09T13:25:34-05:00 | pending pick |
| D38_v2 (refs: ref_probe, ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D38/D38_v2_s42.png` | 145.2 | 2026-11-09T13:27:59-05:00 | pending pick |
| D38_v2 (refs: ref_probe, ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D38/D38_v2_s43.png` | 145.2 | 2026-11-09T13:30:24-05:00 | pending pick |
| D38_v2 (refs: ref_probe, ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D38/D38_v2_s44.png` | 145.2 | 2026-11-09T13:32:50-05:00 | pending pick |
| D39a_l_v2 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D39a_l/D39a_l_v2_s41.png` | 74.4 | 2026-11-09T13:34:05-05:00 | pending pick |
| D39a_l_v2 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D39a_l/D39a_l_v2_s42.png` | 74.3 | 2026-11-09T13:35:19-05:00 | pending pick |
| D39a_l_v2 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D39a_l/D39a_l_v2_s43.png` | 74.1 | 2026-11-09T13:36:33-05:00 | pending pick |
| D39a_l_v2 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D39a_l/D39a_l_v2_s44.png` | 74.1 | 2026-11-09T13:37:47-05:00 | pending pick |
| D39a_r_v2 | 41 | 1792×1008 | `takes/stills/D39a_r/D39a_r_v2_s41.png` | 42.1 | 2026-11-09T13:38:30-05:00 | pending pick |
| D39a_r_v2 | 42 | 1792×1008 | `takes/stills/D39a_r/D39a_r_v2_s42.png` | 42.0 | 2026-11-09T13:39:12-05:00 | pending pick |
| D39a_r_v2 | 43 | 1792×1008 | `takes/stills/D39a_r/D39a_r_v2_s43.png` | 42.0 | 2026-11-09T13:39:54-05:00 | pending pick |
| D39a_r_v2 | 44 | 1792×1008 | `takes/stills/D39a_r/D39a_r_v2_s44.png` | 42.0 | 2026-11-09T13:40:36-05:00 | pending pick |

## Clips: LTX-2.3

ComfyUI template `video_ltx2_3_i2v` (`ltx-2.3-22b-dev-fp8` + distilled LoRA 0.5, Gemma 3 12B fp4 encoder, x2 spatial upscaler), via `scripts/clips.py`. Prompt = motion + the shared clip style.

| Clip | Keyframe | Seed | Output | Seconds | When | Status |
| --- | --- | --- | --- | --- | --- | --- |
| D09 | `takes/stills/D09/D09_s43.png` | 41 | `takes/clips/D09/D09_s41.mp4` | 50.4 | 2026-11-09T14:26:33-05:00 | pending pick |
| D09 | `takes/stills/D09/D09_s43.png` | 42 | `takes/clips/D09/D09_s42.mp4` | 14.3 | 2026-11-09T14:26:47-05:00 | pending pick |
| D02 | `takes/stills/D02/D02_s42.png` | 41 | `takes/clips/D02/D02_s41.mp4` | 39.0 | 2026-11-09T14:45:59-05:00 | pending pick |
| D02 | `takes/stills/D02/D02_s42.png` | 42 | `takes/clips/D02/D02_s42.mp4` | 21.1 | 2026-11-09T14:46:20-05:00 | pending pick |
| D04e | `takes/stills/D04e/D04e_s41.png` | 41 | `takes/clips/D04e/D04e_s41.mp4` | 21.1 | 2026-11-09T14:46:41-05:00 | pending pick |
| D04e | `takes/stills/D04e/D04e_s41.png` | 42 | `takes/clips/D04e/D04e_s42.mp4` | 17.0 | 2026-11-09T14:46:58-05:00 | pending pick |
| D05 | `takes/stills/D05/D05_s43.png` | 41 | `takes/clips/D05/D05_s41.mp4` | 16.0 | 2026-11-09T14:47:15-05:00 | pending pick |
| D05 | `takes/stills/D05/D05_s43.png` | 42 | `takes/clips/D05/D05_s42.mp4` | 13.1 | 2026-11-09T14:47:28-05:00 | pending pick |
| D08 | `takes/stills/D08/D08_s41.png` | 41 | `takes/clips/D08/D08_s41.mp4` | 26.0 | 2026-11-09T14:47:54-05:00 | pending pick |
| D08 | `takes/stills/D08/D08_s41.png` | 42 | `takes/clips/D08/D08_s42.mp4` | 20.0 | 2026-11-09T14:48:14-05:00 | pending pick |
| D10 | `takes/stills/D10/D10_s41.png` | 41 | `takes/clips/D10/D10_s41.mp4` | 21.0 | 2026-11-09T14:48:35-05:00 | pending pick |
| D10 | `takes/stills/D10/D10_s41.png` | 42 | `takes/clips/D10/D10_s42.mp4` | 16.1 | 2026-11-09T14:48:51-05:00 | pending pick |
| D11 | `takes/stills/D11/D11_s41.png` | 41 | `takes/clips/D11/D11_s41.mp4` | 13.2 | 2026-11-09T14:49:04-05:00 | pending pick |
| D11 | `takes/stills/D11/D11_s41.png` | 42 | `takes/clips/D11/D11_s42.mp4` | 10.0 | 2026-11-09T14:49:14-05:00 | pending pick |
| D12 | `takes/stills/D12/D12_s42.png` | 41 | `takes/clips/D12/D12_s41.mp4` | 13.1 | 2026-11-09T14:49:27-05:00 | pending pick |
| D12 | `takes/stills/D12/D12_s42.png` | 42 | `takes/clips/D12/D12_s42.mp4` | 10.0 | 2026-11-09T14:49:37-05:00 | pending pick |
| D13 | `takes/stills/D13/D13_s41.png` | 41 | `takes/clips/D13/D13_s41.mp4` | 13.1 | 2026-11-09T14:49:50-05:00 | pending pick |
| D13 | `takes/stills/D13/D13_s41.png` | 42 | `takes/clips/D13/D13_s42.mp4` | 10.0 | 2026-11-09T14:50:00-05:00 | pending pick |
| D15 | `takes/stills/D15/D15_s44.png` | 41 | `takes/clips/D15/D15_s41.mp4` | 13.5 | 2026-11-09T14:50:14-05:00 | pending pick |
| D15 | `takes/stills/D15/D15_s44.png` | 42 | `takes/clips/D15/D15_s42.mp4` | 10.0 | 2026-11-09T14:50:24-05:00 | pending pick |
| D16 | `takes/stills/D16/D16_s41.png` | 41 | `takes/clips/D16/D16_s41.mp4` | 13.4 | 2026-11-09T14:50:37-05:00 | pending pick |
| D16 | `takes/stills/D16/D16_s41.png` | 42 | `takes/clips/D16/D16_s42.mp4` | 10.0 | 2026-11-09T14:50:47-05:00 | pending pick |
| D18 | `takes/stills/D18/D18_s41.png` | 41 | `takes/clips/D18/D18_s41.mp4` | 13.1 | 2026-11-09T14:51:01-05:00 | pending pick |
| D18 | `takes/stills/D18/D18_s41.png` | 42 | `takes/clips/D18/D18_s42.mp4` | 10.0 | 2026-11-09T14:51:11-05:00 | pending pick |
| D19 | `takes/stills/D19/D19_s43.png` | 41 | `takes/clips/D19/D19_s41.mp4` | 24.0 | 2026-11-09T14:51:35-05:00 | pending pick |
| D19 | `takes/stills/D19/D19_s43.png` | 42 | `takes/clips/D19/D19_s42.mp4` | 21.5 | 2026-11-09T14:51:56-05:00 | pending pick |
| D21 | `takes/stills/D21/D21_s41.png` | 41 | `takes/clips/D21/D21_s41.mp4` | 20.4 | 2026-11-09T14:52:17-05:00 | pending pick |
| D21 | `takes/stills/D21/D21_s41.png` | 42 | `takes/clips/D21/D21_s42.mp4` | 16.4 | 2026-11-09T14:52:33-05:00 | pending pick |
| D22 | `takes/stills/D22/D22_s42.png` | 41 | `takes/clips/D22/D22_s41.mp4` | 23.3 | 2026-11-09T14:52:56-05:00 | pending pick |
| D22 | `takes/stills/D22/D22_s42.png` | 42 | `takes/clips/D22/D22_s42.mp4` | 20.1 | 2026-11-09T14:53:16-05:00 | pending pick |
| D23 | `takes/stills/D23/D23_v2_s41.png` | 41 | `takes/clips/D23/D23_s41.mp4` | 13.2 | 2026-11-09T14:53:29-05:00 | pending pick |
| D23 | `takes/stills/D23/D23_v2_s41.png` | 42 | `takes/clips/D23/D23_s42.mp4` | 10.0 | 2026-11-09T14:53:39-05:00 | pending pick |
| D25 | `takes/stills/D25/D25_s41.png` | 41 | `takes/clips/D25/D25_s41.mp4` | 23.7 | 2026-11-09T14:54:03-05:00 | pending pick |
| D25 | `takes/stills/D25/D25_s41.png` | 42 | `takes/clips/D25/D25_s42.mp4` | 22.5 | 2026-11-09T14:54:26-05:00 | pending pick |
| D27 | `takes/stills/D27/D27_s42.png` | 41 | `takes/clips/D27/D27_s41.mp4` | 24.0 | 2026-11-09T14:54:50-05:00 | pending pick |
| D27 | `takes/stills/D27/D27_s42.png` | 42 | `takes/clips/D27/D27_s42.mp4` | 20.2 | 2026-11-09T14:55:10-05:00 | pending pick |
| D31 | `takes/stills/D31/D31_s42.png` | 41 | `takes/clips/D31/D31_s41.mp4` | 16.0 | 2026-11-09T14:55:26-05:00 | pending pick |
| D31 | `takes/stills/D31/D31_s42.png` | 42 | `takes/clips/D31/D31_s42.mp4` | 13.2 | 2026-11-09T14:55:39-05:00 | pending pick |
| D32 | `takes/stills/D32/D32_s41.png` | 41 | `takes/clips/D32/D32_s41.mp4` | 16.0 | 2026-11-09T14:55:55-05:00 | pending pick |
| D32 | `takes/stills/D32/D32_s41.png` | 42 | `takes/clips/D32/D32_s42.mp4` | 13.0 | 2026-11-09T14:56:08-05:00 | pending pick |
| D33 | `takes/stills/D33/D33_s42.png` | 41 | `takes/clips/D33/D33_s41.mp4` | 20.0 | 2026-11-09T14:56:28-05:00 | pending pick |
| D33 | `takes/stills/D33/D33_s42.png` | 42 | `takes/clips/D33/D33_s42.mp4` | 17.0 | 2026-11-09T14:56:45-05:00 | pending pick |
| D34 | `takes/stills/D34/D34_s41.png` | 41 | `takes/clips/D34/D34_s41.mp4` | 19.2 | 2026-11-09T14:57:04-05:00 | pending pick |
| D34 | `takes/stills/D34/D34_s41.png` | 42 | `takes/clips/D34/D34_s42.mp4` | 16.0 | 2026-11-09T14:57:21-05:00 | pending pick |
| D35 | `takes/stills/D35/D35_s41.png` | 41 | `takes/clips/D35/D35_s41.mp4` | 17.0 | 2026-11-09T14:57:38-05:00 | pending pick |
| D35 | `takes/stills/D35/D35_s41.png` | 42 | `takes/clips/D35/D35_s42.mp4` | 14.0 | 2026-11-09T14:57:52-05:00 | pending pick |
| D36 | `takes/stills/D36/D36_s43.png` | 41 | `takes/clips/D36/D36_s41.mp4` | 13.1 | 2026-11-09T14:58:05-05:00 | pending pick |
| D36 | `takes/stills/D36/D36_s43.png` | 42 | `takes/clips/D36/D36_s42.mp4` | 10.0 | 2026-11-09T14:58:15-05:00 | pending pick |
| D38 | `takes/stills/D38/D38_v2_s41.png` | 41 | `takes/clips/D38/D38_s41.mp4` | 13.2 | 2026-11-09T14:58:28-05:00 | pending pick |
| D38 | `takes/stills/D38/D38_v2_s41.png` | 42 | `takes/clips/D38/D38_s42.mp4` | 10.0 | 2026-11-09T14:58:38-05:00 | pending pick |
| D39 | `takes/stills/D39/D39_s43.png` | 41 | `takes/clips/D39/D39_s41.mp4` | 13.2 | 2026-11-09T14:58:51-05:00 | pending pick |
| D39 | `takes/stills/D39/D39_s43.png` | 42 | `takes/clips/D39/D39_s42.mp4` | 10.0 | 2026-11-09T14:59:01-05:00 | pending pick |
| D39c | `takes/stills/D39c/D39c_s43.png` | 41 | `takes/clips/D39c/D39c_s41.mp4` | 13.1 | 2026-11-09T14:59:14-05:00 | pending pick |
| D39c | `takes/stills/D39c/D39c_s43.png` | 42 | `takes/clips/D39c/D39c_s42.mp4` | 10.0 | 2026-11-09T14:59:24-05:00 | pending pick |
| D40 | `takes/stills/D40/D40_s41.png` | 41 | `takes/clips/D40/D40_s41.mp4` | 13.1 | 2026-11-09T14:59:38-05:00 | pending pick |
| D40 | `takes/stills/D40/D40_s41.png` | 42 | `takes/clips/D40/D40_s42.mp4` | 10.0 | 2026-11-09T14:59:48-05:00 | pending pick |
| D41 | `takes/stills/D41/D41_s43.png` | 41 | `takes/clips/D41/D41_s41.mp4` | 24.0 | 2026-11-09T15:00:12-05:00 | pending pick |
| D41 | `takes/stills/D41/D41_s43.png` | 42 | `takes/clips/D41/D41_s42.mp4` | 20.0 | 2026-11-09T15:00:32-05:00 | pending pick |
| D42 | `takes/stills/D42/D42_s41.png` | 41 | `takes/clips/D42/D42_s41.mp4` | 24.1 | 2026-11-09T15:00:56-05:00 | pending pick |
| D42 | `takes/stills/D42/D42_s41.png` | 42 | `takes/clips/D42/D42_s42.mp4` | 20.2 | 2026-11-09T15:01:16-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_s42.png` | 41 | `takes/clips/D42a/D42a_s41.mp4` | 24.1 | 2026-11-09T15:01:40-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_s42.png` | 42 | `takes/clips/D42a/D42a_s42.mp4` | 20.0 | 2026-11-09T15:02:00-05:00 | pending pick |
| D42b | `takes/stills/D42b/D42b_s42.png` | 41 | `takes/clips/D42b/D42b_s41.mp4` | 20.1 | 2026-11-09T15:02:20-05:00 | pending pick |
| D42b | `takes/stills/D42b/D42b_s42.png` | 42 | `takes/clips/D42b/D42b_s42.mp4` | 17.1 | 2026-11-09T15:02:37-05:00 | pending pick |
| D44a | `takes/stills/D44a/D44a_s41.png` | 41 | `takes/clips/D44a/D44a_s41.mp4` | 16.3 | 2026-11-09T15:02:54-05:00 | pending pick |
| D44a | `takes/stills/D44a/D44a_s41.png` | 42 | `takes/clips/D44a/D44a_s42.mp4` | 13.4 | 2026-11-09T15:03:07-05:00 | pending pick |
| D44c | `takes/stills/D44c/D44c_s41.png` | 41 | `takes/clips/D44c/D44c_s41.mp4` | 19.3 | 2026-11-09T15:03:26-05:00 | pending pick |
| D44c | `takes/stills/D44c/D44c_s41.png` | 42 | `takes/clips/D44c/D44c_s42.mp4` | 16.1 | 2026-11-09T15:03:43-05:00 | pending pick |
| D42 | `takes/stills/D42/D42_s41.png` | 43 | `takes/clips/D42/D42_s43.mp4` | 38.1 | 2026-11-09T15:05:48-05:00 | pending pick |
| D42 | `takes/stills/D42/D42_s41.png` | 44 | `takes/clips/D42/D42_s44.mp4` | 23.1 | 2026-11-09T15:06:11-05:00 | pending pick |
| D42_v2 (refs: ref_still, ref_crew, ref_probe, ref_teller) | 41 | 1792×1008 | `takes/stills/D42/D42_v2_s41.png` | 202.6 | 2026-11-09T15:10:19-05:00 | pending pick |
| D42_v2 (refs: ref_still, ref_crew, ref_probe, ref_teller) | 42 | 1792×1008 | `takes/stills/D42/D42_v2_s42.png` | 191.3 | 2026-11-09T15:13:30-05:00 | pending pick |
| D42_v2 (refs: ref_still, ref_crew, ref_probe, ref_teller) | 43 | 1792×1008 | `takes/stills/D42/D42_v2_s43.png` | 191.5 | 2026-11-09T15:16:42-05:00 | pending pick |
| D42_v2 (refs: ref_still, ref_crew, ref_probe, ref_teller) | 44 | 1792×1008 | `takes/stills/D42/D42_v2_s44.png` | 191.6 | 2026-11-09T15:19:53-05:00 | pending pick |
| D42 | `takes/stills/D42/D42_v2_s43.png` | 45 | `takes/clips/D42/D42_s45.mp4` | 36.2 | 2026-11-09T15:21:03-05:00 | pending pick |
| D42 | `takes/stills/D42/D42_v2_s43.png` | 46 | `takes/clips/D42/D42_s46.mp4` | 21.5 | 2026-11-09T15:21:24-05:00 | pending pick |
| D41_v2 (refs: ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D41/D41_v2_s41.png` | 115.4 | 2026-11-09T18:45:47-05:00 | pending pick |
| D41_v2 (refs: ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D41/D41_v2_s42.png` | 103.4 | 2026-11-09T18:47:31-05:00 | pending pick |
| D41_v2 (refs: ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D41/D41_v2_s43.png` | 104.2 | 2026-11-09T18:49:15-05:00 | pending pick |
| D41_v2 (refs: ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D41/D41_v2_s44.png` | 104.1 | 2026-11-09T18:50:59-05:00 | pending pick |
| D42a_v2 (refs: ref_teller, ref_crew, ref_feds) | 41 | 1792×1008 | `takes/stills/D42a/D42a_v2_s41.png` | 146.2 | 2026-11-09T18:53:26-05:00 | pending pick |
| D42a_v2 (refs: ref_teller, ref_crew, ref_feds) | 42 | 1792×1008 | `takes/stills/D42a/D42a_v2_s42.png` | 147.1 | 2026-11-09T18:55:53-05:00 | pending pick |
| D42a_v2 (refs: ref_teller, ref_crew, ref_feds) | 43 | 1792×1008 | `takes/stills/D42a/D42a_v2_s43.png` | 147.4 | 2026-11-09T18:58:21-05:00 | pending pick |
| D42a_v2 (refs: ref_teller, ref_crew, ref_feds) | 44 | 1792×1008 | `takes/stills/D42a/D42a_v2_s44.png` | 147.4 | 2026-11-09T19:00:48-05:00 | pending pick |
| D14 | `takes/stills/D14/D14_s41.png` | 41 | `takes/clips/D14/D14_s41.mp4` | 30.4 | 2026-11-09T19:02:05-05:00 | pending pick |
| D14 | `takes/stills/D14/D14_s41.png` | 42 | `takes/clips/D14/D14_s42.mp4` | 14.0 | 2026-11-09T19:02:19-05:00 | pending pick |
| D14 | `takes/stills/D14/D14_s41.png` | 43 | `takes/clips/D14/D14_s43.mp4` | 13.1 | 2026-11-09T19:02:32-05:00 | pending pick |
| D14 | `takes/stills/D14/D14_s41.png` | 44 | `takes/clips/D14/D14_s44.mp4` | 13.2 | 2026-11-09T19:02:45-05:00 | pending pick |
| D41 | `takes/stills/D41/D41_v2_s41.png` | 43 | `takes/clips/D41/D41_s43.mp4` | 22.6 | 2026-11-09T19:03:08-05:00 | pending pick |
| D41 | `takes/stills/D41/D41_v2_s41.png` | 44 | `takes/clips/D41/D41_s44.mp4` | 20.1 | 2026-11-09T19:03:28-05:00 | pending pick |
| D41 | `takes/stills/D41/D41_v2_s41.png` | 45 | `takes/clips/D41/D41_s45.mp4` | 20.0 | 2026-11-09T19:03:48-05:00 | pending pick |
| D41 | `takes/stills/D41/D41_v2_s41.png` | 46 | `takes/clips/D41/D41_s46.mp4` | 20.1 | 2026-11-09T19:04:08-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_v2_s42.png` | 43 | `takes/clips/D42a/D42a_s43.mp4` | 23.5 | 2026-11-09T19:04:32-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_v2_s42.png` | 44 | `takes/clips/D42a/D42a_s44.mp4` | 19.5 | 2026-11-09T19:04:51-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_v2_s42.png` | 45 | `takes/clips/D42a/D42a_s45.mp4` | 21.1 | 2026-11-09T19:05:12-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_v2_s42.png` | 46 | `takes/clips/D42a/D42a_s46.mp4` | 19.5 | 2026-11-09T19:05:32-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_v2_s42.png` | 47 | `takes/clips/D42a/D42a_s47.mp4` | 38.1 | 2026-11-09T19:07:18-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_v2_s42.png` | 48 | `takes/clips/D42a/D42a_s48.mp4` | 22.1 | 2026-11-09T19:07:40-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_v2_s42.png` | 49 | `takes/clips/D42a/D42a_s49.mp4` | 20.1 | 2026-11-09T19:08:00-05:00 | pending pick |
| D42a | `takes/stills/D42a/D42a_v2_s42.png` | 50 | `takes/clips/D42a/D42a_s50.mp4` | 20.0 | 2026-11-09T19:08:21-05:00 | pending pick |
| D41_1 (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D41_1/D41_1_s41.png` | 89.7 | 2026-11-09T19:29:34-05:00 | pending pick |
| D41_1 (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D41_1/D41_1_s42.png` | 74.1 | 2026-11-09T19:30:49-05:00 | pending pick |
| D41_1 (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D41_1/D41_1_s43.png` | 74.1 | 2026-11-09T19:32:03-05:00 | pending pick |
| D41_1 (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D41_1/D41_1_s44.png` | 74.1 | 2026-11-09T19:33:17-05:00 | pending pick |
| D41_2 (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D41_2/D41_2_s41.png` | 75.1 | 2026-11-09T19:34:33-05:00 | pending pick |
| D41_2 (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D41_2/D41_2_s42.png` | 74.1 | 2026-11-09T19:35:47-05:00 | pending pick |
| D41_2 (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D41_2/D41_2_s43.png` | 74.1 | 2026-11-09T19:37:01-05:00 | pending pick |
| D41_2 (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D41_2/D41_2_s44.png` | 74.1 | 2026-11-09T19:38:15-05:00 | pending pick |
| D41_3 (refs: ref_teller) | 41 | 1792×1008 | `takes/stills/D41_3/D41_3_s41.png` | 75.3 | 2026-11-09T19:39:31-05:00 | pending pick |
| D41_3 (refs: ref_teller) | 42 | 1792×1008 | `takes/stills/D41_3/D41_3_s42.png` | 74.1 | 2026-11-09T19:40:45-05:00 | pending pick |
| D41_3 (refs: ref_teller) | 43 | 1792×1008 | `takes/stills/D41_3/D41_3_s43.png` | 74.3 | 2026-11-09T19:41:59-05:00 | pending pick |
| D41_3 (refs: ref_teller) | 44 | 1792×1008 | `takes/stills/D41_3/D41_3_s44.png` | 74.4 | 2026-11-09T19:43:13-05:00 | pending pick |
| D14_up (refs: D14) | 41 | 1792×1008 | `takes/stills/D14_up/D14_up_s41.png` | 88.1 | 2026-11-09T19:45:02-05:00 | pending pick |
| D14_up (refs: D14) | 42 | 1792×1008 | `takes/stills/D14_up/D14_up_s42.png` | 75.1 | 2026-11-09T19:46:17-05:00 | pending pick |
| D14_up (refs: D14) | 43 | 1792×1008 | `takes/stills/D14_up/D14_up_s43.png` | 75.1 | 2026-11-09T19:47:32-05:00 | pending pick |
| D14_up (refs: D14) | 44 | 1792×1008 | `takes/stills/D14_up/D14_up_s44.png` | 75.1 | 2026-11-09T19:48:47-05:00 | pending pick |
| D14_up_v2 | 41 | 1792×1008 | `takes/stills/D14_up/D14_up_v2_s41.png` | 68.1 | 2026-11-09T19:50:32-05:00 | pending pick |
| D14_up_v2 | 42 | 1792×1008 | `takes/stills/D14_up/D14_up_v2_s42.png` | 42.1 | 2026-11-09T19:51:14-05:00 | pending pick |
| D14_up_v2 | 43 | 1792×1008 | `takes/stills/D14_up/D14_up_v2_s43.png` | 42.1 | 2026-11-09T19:51:57-05:00 | pending pick |
| D14_up_v2 | 44 | 1792×1008 | `takes/stills/D14_up/D14_up_v2_s44.png` | 42.1 | 2026-11-09T19:52:39-05:00 | pending pick |
| D14_up | `takes/stills/D14_up/D14_up_v2_s41.png` | 41 | `takes/clips/D14_up/D14_up_s41.mp4` | 32.2 | 2026-11-09T19:53:31-05:00 | pending pick |
| D14_up | `takes/stills/D14_up/D14_up_v2_s41.png` | 42 | `takes/clips/D14_up/D14_up_s42.mp4` | 10.4 | 2026-11-09T19:53:41-05:00 | pending pick |
| D14_up | `takes/stills/D14_up/D14_up_v2_s41.png` | 43 | `takes/clips/D14_up/D14_up_s43.mp4` | 10.0 | 2026-11-09T19:53:51-05:00 | pending pick |
| D14_up | `takes/stills/D14_up/D14_up_v2_s41.png` | 44 | `takes/clips/D14_up/D14_up_s44.mp4` | 10.0 | 2026-11-09T19:54:01-05:00 | pending pick |
| D41_1 | `takes/stills/D41_1/D41_1_s43.png` | 41 | `takes/clips/D41_1/D41_1_s41.mp4` | 13.0 | 2026-11-09T19:54:14-05:00 | pending pick |
| D41_1 | `takes/stills/D41_1/D41_1_s43.png` | 42 | `takes/clips/D41_1/D41_1_s42.mp4` | 10.0 | 2026-11-09T19:54:24-05:00 | pending pick |
| D41_1 | `takes/stills/D41_1/D41_1_s43.png` | 43 | `takes/clips/D41_1/D41_1_s43.mp4` | 10.1 | 2026-11-09T19:54:34-05:00 | pending pick |
| D41_1 | `takes/stills/D41_1/D41_1_s43.png` | 44 | `takes/clips/D41_1/D41_1_s44.mp4` | 10.0 | 2026-11-09T19:54:44-05:00 | pending pick |
| D41_2 | `takes/stills/D41_2/D41_2_s41.png` | 41 | `takes/clips/D41_2/D41_2_s41.mp4` | 13.0 | 2026-11-09T19:54:58-05:00 | pending pick |
| D41_2 | `takes/stills/D41_2/D41_2_s41.png` | 42 | `takes/clips/D41_2/D41_2_s42.mp4` | 10.0 | 2026-11-09T19:55:08-05:00 | pending pick |
| D41_2 | `takes/stills/D41_2/D41_2_s41.png` | 43 | `takes/clips/D41_2/D41_2_s43.mp4` | 10.0 | 2026-11-09T19:55:18-05:00 | pending pick |
| D41_2 | `takes/stills/D41_2/D41_2_s41.png` | 44 | `takes/clips/D41_2/D41_2_s44.mp4` | 10.0 | 2026-11-09T19:55:28-05:00 | pending pick |
| D41_3 | `takes/stills/D41_3/D41_3_s41.png` | 41 | `takes/clips/D41_3/D41_3_s41.mp4` | 13.0 | 2026-11-09T19:55:41-05:00 | pending pick |
| D41_3 | `takes/stills/D41_3/D41_3_s41.png` | 42 | `takes/clips/D41_3/D41_3_s42.mp4` | 10.0 | 2026-11-09T19:55:51-05:00 | pending pick |
| D41_3 | `takes/stills/D41_3/D41_3_s41.png` | 43 | `takes/clips/D41_3/D41_3_s43.mp4` | 10.0 | 2026-11-09T19:56:01-05:00 | pending pick |
| D41_3 | `takes/stills/D41_3/D41_3_s41.png` | 44 | `takes/clips/D41_3/D41_3_s44.mp4` | 10.0 | 2026-11-09T19:56:11-05:00 | pending pick |
| D12_v2 (refs: ref_still) | 41 | 1792×1008 | `takes/stills/D12/D12_v2_s41.png` | 93.9 | 2026-11-09T20:36:25-05:00 | pending pick |
| D12_v2 (refs: ref_still) | 42 | 1792×1008 | `takes/stills/D12/D12_v2_s42.png` | 74.1 | 2026-11-09T20:37:39-05:00 | pending pick |
| D12_v2 (refs: ref_still) | 43 | 1792×1008 | `takes/stills/D12/D12_v2_s43.png` | 74.3 | 2026-11-09T20:38:54-05:00 | pending pick |
| D12_v2 (refs: ref_still) | 44 | 1792×1008 | `takes/stills/D12/D12_v2_s44.png` | 74.3 | 2026-11-09T20:40:08-05:00 | pending pick |
| D27a_v2 (refs: ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D27a/D27a_v2_s41.png` | 121.4 | 2026-11-09T20:44:06-05:00 | pending pick |
| D27a_v2 (refs: ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D27a/D27a_v2_s42.png` | 104.2 | 2026-11-09T20:45:51-05:00 | pending pick |
| D27a_v2 (refs: ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D27a/D27a_v2_s43.png` | 104.3 | 2026-11-09T20:47:35-05:00 | pending pick |
| D27a_v2 (refs: ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D27a/D27a_v2_s44.png` | 104.2 | 2026-11-09T20:49:19-05:00 | pending pick |
| D12 | `takes/stills/D12/D12_v2_s44.png` | 43 | `takes/clips/D12/D12_s43.mp4` | 29.2 | 2026-11-09T20:49:59-05:00 | pending pick |
| D12 | `takes/stills/D12/D12_v2_s44.png` | 44 | `takes/clips/D12/D12_s44.mp4` | 10.3 | 2026-11-09T20:50:09-05:00 | pending pick |
| D27b (refs: ref_still, ref_crew) | 41 | 1792×1008 | `takes/stills/D27b/D27b_s41.png` | 129.8 | 2026-11-09T23:09:08-05:00 | pending pick |
| D27b (refs: ref_still, ref_crew) | 42 | 1792×1008 | `takes/stills/D27b/D27b_s42.png` | 105.2 | 2026-11-09T23:10:53-05:00 | pending pick |
| D27b (refs: ref_still, ref_crew) | 43 | 1792×1008 | `takes/stills/D27b/D27b_s43.png` | 105.2 | 2026-11-09T23:12:39-05:00 | pending pick |
| D27b (refs: ref_still, ref_crew) | 44 | 1792×1008 | `takes/stills/D27b/D27b_s44.png` | 105.3 | 2026-11-09T23:14:24-05:00 | pending pick |
| D27c (refs: ref_crew) | 41 | 1792×1008 | `takes/stills/D27c/D27c_s41.png` | 77.1 | 2026-11-09T23:15:42-05:00 | pending pick |
| D27c (refs: ref_crew) | 42 | 1792×1008 | `takes/stills/D27c/D27c_s42.png` | 76.6 | 2026-11-09T23:16:58-05:00 | pending pick |
| D27c (refs: ref_crew) | 43 | 1792×1008 | `takes/stills/D27c/D27c_s43.png` | 75.3 | 2026-11-09T23:18:14-05:00 | pending pick |
| D27c (refs: ref_crew) | 44 | 1792×1008 | `takes/stills/D27c/D27c_s44.png` | 75.3 | 2026-11-09T23:19:29-05:00 | pending pick |
| D27d (refs: ref_teller, ref_crew) | 41 | 1792×1008 | `takes/stills/D27d/D27d_s41.png` | 107.2 | 2026-11-09T23:21:17-05:00 | pending pick |
| D27d (refs: ref_teller, ref_crew) | 42 | 1792×1008 | `takes/stills/D27d/D27d_s42.png` | 105.1 | 2026-11-09T23:23:02-05:00 | pending pick |
| D27d (refs: ref_teller, ref_crew) | 43 | 1792×1008 | `takes/stills/D27d/D27d_s43.png` | 105.2 | 2026-11-09T23:24:47-05:00 | pending pick |
| D27d (refs: ref_teller, ref_crew) | 44 | 1792×1008 | `takes/stills/D27d/D27d_s44.png` | 105.3 | 2026-11-09T23:26:32-05:00 | pending pick |
| D27e (refs: ref_crew, ref_teller) | 41 | 1792×1008 | `takes/stills/D27e/D27e_s41.png` | 106.2 | 2026-11-09T23:28:19-05:00 | pending pick |
| D27e (refs: ref_crew, ref_teller) | 42 | 1792×1008 | `takes/stills/D27e/D27e_s42.png` | 106.1 | 2026-11-09T23:30:05-05:00 | pending pick |
| D27e (refs: ref_crew, ref_teller) | 43 | 1792×1008 | `takes/stills/D27e/D27e_s43.png` | 106.1 | 2026-11-09T23:31:52-05:00 | pending pick |
| D27e (refs: ref_crew, ref_teller) | 44 | 1792×1008 | `takes/stills/D27e/D27e_s44.png` | 105.1 | 2026-11-09T23:33:37-05:00 | pending pick |
| D05_1 (refs: ref_van) | 41 | 1792×1008 | `takes/stills/D05_1/D05_1_s41.png` | 88.3 | 2026-11-09T23:35:16-05:00 | pending pick |
| D05_1 (refs: ref_van) | 42 | 1792×1008 | `takes/stills/D05_1/D05_1_s42.png` | 75.1 | 2026-11-09T23:36:31-05:00 | pending pick |
| D05_2 (refs: ref_van) | 41 | 1792×1008 | `takes/stills/D05_2/D05_2_s41.png` | 76.1 | 2026-11-09T23:37:47-05:00 | pending pick |
| D05_2 (refs: ref_van) | 42 | 1792×1008 | `takes/stills/D05_2/D05_2_s42.png` | 75.1 | 2026-11-09T23:39:02-05:00 | pending pick |
| D05_3 (refs: ref_van) | 41 | 1792×1008 | `takes/stills/D05_3/D05_3_s41.png` | 76.1 | 2026-11-09T23:40:19-05:00 | pending pick |
| D05_3 (refs: ref_van) | 42 | 1792×1008 | `takes/stills/D05_3/D05_3_s42.png` | 75.1 | 2026-11-09T23:41:34-05:00 | pending pick |
| D05_4 (refs: ref_van) | 41 | 1792×1008 | `takes/stills/D05_4/D05_4_s41.png` | 76.1 | 2026-11-09T23:42:50-05:00 | pending pick |
| D05_4 (refs: ref_van) | 42 | 1792×1008 | `takes/stills/D05_4/D05_4_s42.png` | 75.1 | 2026-11-09T23:44:06-05:00 | pending pick |
| D27b | `takes/stills/D27b/D27b_s44.png` | 41 | `takes/clips/D27b/D27b_s41.mp4` | 31.3 | 2026-11-09T23:45:23-05:00 | pending pick |
| D27b | `takes/stills/D27b/D27b_s44.png` | 42 | `takes/clips/D27b/D27b_s42.mp4` | 11.4 | 2026-11-09T23:45:34-05:00 | pending pick |
| D27c | `takes/stills/D27c/D27c_s41.png` | 41 | `takes/clips/D27c/D27c_s41.mp4` | 13.3 | 2026-11-09T23:45:48-05:00 | pending pick |
| D27c | `takes/stills/D27c/D27c_s41.png` | 42 | `takes/clips/D27c/D27c_s42.mp4` | 11.0 | 2026-11-09T23:45:59-05:00 | pending pick |
| D27d | `takes/stills/D27d/D27d_s41.png` | 41 | `takes/clips/D27d/D27d_s41.mp4` | 14.0 | 2026-11-09T23:46:13-05:00 | pending pick |
| D27d | `takes/stills/D27d/D27d_s41.png` | 42 | `takes/clips/D27d/D27d_s42.mp4` | 11.0 | 2026-11-09T23:46:24-05:00 | pending pick |
| D27e | `takes/stills/D27e/D27e_s41.png` | 41 | `takes/clips/D27e/D27e_s41.mp4` | 23.8 | 2026-11-09T23:46:47-05:00 | pending pick |
| D27e | `takes/stills/D27e/D27e_s41.png` | 42 | `takes/clips/D27e/D27e_s42.mp4` | 19.4 | 2026-11-09T23:47:07-05:00 | pending pick |
| D05_1 | `takes/stills/D05_1/D05_1_s41.png` | 41 | `takes/clips/D05_1/D05_1_s41.mp4` | 16.5 | 2026-11-09T23:47:23-05:00 | pending pick |
| D05_2 | `takes/stills/D05_2/D05_2_s42.png` | 41 | `takes/clips/D05_2/D05_2_s41.mp4` | 17.0 | 2026-11-09T23:47:41-05:00 | pending pick |
| D05_3 | `takes/stills/D05_3/D05_3_s41.png` | 41 | `takes/clips/D05_3/D05_3_s41.mp4` | 16.0 | 2026-11-09T23:47:57-05:00 | pending pick |
| D05_4 | `takes/stills/D05_4/D05_4_s41.png` | 41 | `takes/clips/D05_4/D05_4_s41.mp4` | 16.1 | 2026-11-09T23:48:13-05:00 | pending pick |
