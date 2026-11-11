#!/usr/bin/env bash
# Rebuild the main video, the Shorts, the captions and the thumbnail from the production archive (scripts/archive.sh):
# restore the archived audio and takes, re-run the deterministic stages (the edited master and its timing, the
# Remotion renders, the captions, the thumbnail) and check the results against the release (adapted from Buy It on Margin).
#
# The check: the edited master and its timing must come out identical (scripts/cut_master.py records the master's
# sha256 in timing/timing_map.json, so git must see no change under timing/); captions and the thumbnail
# byte-identical; each video identical, or with bit-identical audio and every frame within 40 dB PSNR (Chrome's
# compositing of panned stills can vary in the last bit between renders).
# Regenerating the takes themselves from the models is per stage: see README.md and log/production_log.md.
#
# Usage: scripts/rebuild.sh [--fetch]   (--fetch downloads the release with gh; otherwise archive/ must hold the parts)
# Needs the environment from scripts/setup_env.sh (--no-comfy is enough).
set -euo pipefail
cd "$(dirname "$0")/.."
TAG=archive-2026-11-10
REPO=Derivative-Work/distillation-job
A=archive
PY=${PY:-.venv/bin/python}   # override to use another venv with the same packages
if [[ ${1:-} == --fetch ]]; then
  mkdir -p $A
  gh release download $TAG -R $REPO -D $A --clobber
fi
(cd $A && sha256sum -c --ignore-missing SHA256SUMS)
for t in $A/*.tar; do tar -xf "$t"; done

$PY -I scripts/cut_master.py
$PY -I scripts/shot_times.py >/dev/null
SHORTS=(chorus breakdown verse3 monday)   # config/shorts.json
O=out/rebuild
mkdir -p $O
npx remotion render src/index.ts Main $O/distillation_job_1080p.mp4 --concurrency=8 --gl=swiftshader --crf=16
for id in "${SHORTS[@]}"; do
  npx remotion render src/index.ts Short-$id $O/distillation_job_short_$id.mp4 --concurrency=8 --gl=swiftshader --crf=17
  python3 -I scripts/export_srt.py short $id >/dev/null
done
python3 -I scripts/export_srt.py >/dev/null
npx remotion still src/index.ts Thumbnail $O/thumbnail_full.png --frame=110 --gl=swiftshader
$PY -I scripts/thumbnail.py $O/thumbnail_full.png $O/distillation_job_thumbnail.jpg

line() { printf '%-44s %s\n' "$1" "$2"; }
fail=0
if git diff --quiet -- timing/; then line "edited master and timing" identical; else line "edited master and timing" "DIFFER (git diff timing/)"; fail=1; fi
same() {  # a file vs its checksum in the release
  local name=$1 path=$2
  if (grep " $name\$" $A/SHA256SUMS | sed "s| $name\$| $path|" | sha256sum -c --status); then line "$name" identical; else line "$name" DIFFERS; fail=1; fi
}
video() {  # identical, or bit-identical audio and every frame >= 40 dB PSNR
  local name=$1 ref=$A/$1 new=$O/$1
  if (grep " $name\$" $A/SHA256SUMS | sed "s| $name\$| $new|" | sha256sum -c --status); then line "$name" identical; return; fi
  [[ -f $ref ]] || { line "$name" "differs; not in $A/ to compare (use --fetch)"; fail=1; return; }
  local a b min
  a=$(ffmpeg -v error -i "$ref" -map 0:a -f md5 -); b=$(ffmpeg -v error -i "$new" -map 0:a -f md5 -)
  [[ $a == "$b" ]] || { line "$name" "audio DIFFERS"; fail=1; return; }
  min=$(ffmpeg -i "$ref" -i "$new" -lavfi "[0:v][1:v]psnr" -f null - 2>&1 | grep -o 'min:[0-9.inf]*' | tail -1 | cut -d: -f2)
  if [[ $min == inf ]] || awk "BEGIN{exit !($min >= 40)}"; then line "$name" "audio identical, worst frame ${min} dB PSNR (>= 40)"
  else line "$name" "worst frame ${min} dB PSNR (< 40)"; fail=1; fi
}
same distillation_job.en.srt deliverables/distillation_job.en.srt
same distillation_job_thumbnail.jpg $O/distillation_job_thumbnail.jpg
video distillation_job_1080p.mp4
for id in "${SHORTS[@]}"; do
  same distillation_job_short_$id.en.srt deliverables/distillation_job_short_$id.en.srt
  video distillation_job_short_$id.mp4
done
exit $fail
