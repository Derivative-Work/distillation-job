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
