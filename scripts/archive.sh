#!/usr/bin/env bash
# The production archive: what git doesn't hold and can't regenerate, plus every take the production made, as tar
# parts under GitHub's 2 GiB per-asset limit, published as a release of this repo (adapted from Buy It on Margin).
#
#   inputs.tar  audio/track (the Suno take), audio/stems (its stems), audio/postfilter (the take through
#               music-deslop M6f: the locked master before the intro cut), audio/cards (the end-section bounce,
#               raw and post-filtered) and public/audio/cards.wav (the bounce as the edit plays it). The post-filter
#               model is private, so none of these can be regenerated outside the production machine.
#   takes.tar   takes/ (every FLUX.2 still and LTX-2.3 clip, picked or not, and the lettered takes),
#               public/media/picks (the picks as the edit uses them) and public/media/real (the research-chat capture,
#               the two D25 screenshot crops, the rendered audit log)
#   the upload files (the main video and four Shorts), their captions, the thumbnail (also in deliverables/), and SHA256SUMS
# Left out: everything regenerable from those and the repo (audio/edit and public/audio/master.wav: scripts/cut_master.py;
# review renders; out/), and the uncropped D25 screenshots (reference/d25_raw/, which show the human's other chats).
#
# Usage: scripts/archive.sh [--upload]   (builds archive/, git-ignored; --upload creates the release with gh as a
#        draft, for the human to publish: gh release edit $TAG --draft=false)
set -euo pipefail
cd "$(dirname "$0")/.."
TAG=archive-2026-11-10
REPO=Derivative-Work/distillation-job
A=archive
SHORTS=(chorus breakdown verse3 monday)   # config/shorts.json
UPLOADS=(distillation_job_1080p.mp4 distillation_job.en.srt distillation_job_thumbnail.jpg)
for id in "${SHORTS[@]}"; do UPLOADS+=(distillation_job_short_$id.mp4 distillation_job_short_$id.en.srt); done
mkdir -p $A
tar -cf $A/inputs.tar audio/track audio/stems audio/postfilter audio/cards public/audio/cards.wav
tar -cf $A/takes.tar takes public/media/picks public/media/real
for f in "${UPLOADS[@]}"; do ln -f deliverables/$f $A/$f; done
(cd $A && sha256sum inputs.tar takes.tar "${UPLOADS[@]}" > SHA256SUMS)
ls -l $A
for f in $A/*.tar $A/*.mp4; do
  (( $(stat -c %s "$f") < 2147483648 )) || { echo "$f is over 2 GiB" >&2; exit 1; }
done
if [[ ${1:-} == --upload ]]; then
  gh release create $TAG -R $REPO --draft --title "Production archive (2026-11-10)" \
    --notes-file <(cat <<'NOTES'
The production archive for The Distillation Job: the main video and four Shorts with captions and the thumbnail, the audio git doesn't hold, and every take.

- `inputs.tar`: the Suno take and its stems, the post-filtered take (the locked master before the intro cut), and the end-section music.
- `takes.tar`: every FLUX.2 still and LTX-2.3 clip, the picks as the edit uses them, and the real captures (the research chat, the D25 screenshot crops, the audit log).
- The upload files, as in `deliverables/`, and `SHA256SUMS`.

To rebuild: `scripts/setup_env.sh --no-comfy`, then `scripts/rebuild.sh --fetch`. See README.md (Reproducing it) and scripts/archive.sh for what each part contains.
NOTES
) \
    $A/SHA256SUMS "${UPLOADS[@]/#/$A/}" $A/*.tar
fi
