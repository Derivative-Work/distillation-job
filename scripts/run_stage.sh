#!/usr/bin/env bash
# Run one ComfyUI stage with memory freed before and after (method from ../folks-like-us/style/vram_plan.md and
# ../buy-it-on-margin/scripts/batch2b.sh): one model family at a time (stills = FLUX.2, clips = LTX-2.3), nothing else
# on the GPU or in RAM meanwhile. FLUX.2 left staged in RAM got the first clip run stopped for low memory.
# Usage: scripts/run_stage.sh stills|clips [item ...]
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
PY=.venv/bin/python
stage=$1; shift
free_models() { $PY -I -c "import sys; sys.path.insert(0, 'scripts'); import comfy_client as cc; cc.free()"; sleep 5; free -g | sed -n 2p; }
free_models
$PY -I scripts/$stage.py "$@"
free_models
echo "STAGE $stage DONE"
