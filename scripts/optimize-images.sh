#!/usr/bin/env bash
# Optimize oversized images in public/ in-place.
#
# Uses macOS `sips` (built-in). For every JPG/JPEG/PNG in public/ that is
# wider than MAX_WIDTH px, resizes it to MAX_WIDTH and re-encodes. JPGs are
# also re-saved at the configured quality. Originals are recoverable via git.
#
# Safe to re-run: skips files that are already <= MAX_WIDTH (and for JPGs,
# checks an xattr marker so they aren't re-compressed forever).
#
# Usage:
#   bash scripts/optimize-images.sh            # process public/
#   bash scripts/optimize-images.sh path/to/dir
set -euo pipefail

DIR="${1:-public}"
MAX_WIDTH="${MAX_WIDTH:-2048}"
JPG_QUALITY="${JPG_QUALITY:-82}"
MARKER_ATTR="com.bitwerks.optimized"

if ! command -v sips >/dev/null 2>&1; then
  echo "Error: sips not found (macOS-only tool). Install ImageMagick or run on macOS." >&2
  exit 1
fi

if [ ! -d "$DIR" ]; then
  echo "Error: $DIR is not a directory." >&2
  exit 1
fi

echo "Optimizing images in $DIR (max width: ${MAX_WIDTH}px, JPG quality: ${JPG_QUALITY})"
echo

total_before=0
total_after=0
processed=0
skipped=0

# Enable case-insensitive globbing and don't error on no matches.
shopt -s nocaseglob nullglob

for src in "$DIR"/*.jpg "$DIR"/*.jpeg "$DIR"/*.png; do
  [ -e "$src" ] || continue

  name="$(basename "$src")"

  # Skip if previously processed (xattr marker present).
  if xattr -p "$MARKER_ATTR" "$src" >/dev/null 2>&1; then
    skipped=$((skipped + 1))
    continue
  fi

  width=$(sips -g pixelWidth "$src" 2>/dev/null | awk '/pixelWidth/ {print $2}')
  if [ -z "$width" ]; then
    echo "  warn  $name  (could not read width, skipping)"
    skipped=$((skipped + 1))
    continue
  fi

  size_before=$(stat -f%z "$src")

  ext_lower="$(echo "${src##*.}" | tr '[:upper:]' '[:lower:]')"

  needs_work=0
  if [ "$width" -gt "$MAX_WIDTH" ]; then
    needs_work=1
  elif [ "$ext_lower" = "jpg" ] || [ "$ext_lower" = "jpeg" ]; then
    # Re-encode JPGs even at the right dimensions if not yet marked, to apply
    # the configured quality once.
    needs_work=1
  fi

  if [ "$needs_work" -eq 0 ]; then
    # Mark and move on so we don't keep re-scanning every run.
    xattr -w "$MARKER_ATTR" "1" "$src" 2>/dev/null || true
    skipped=$((skipped + 1))
    continue
  fi

  # Stash a backup so we can roll back if re-encoding actually made the file
  # larger (common for PNGs that were already optimized with pngquant/oxipng).
  backup="${src}.optbak"
  cp -p "$src" "$backup"

  if [ "$width" -gt "$MAX_WIDTH" ]; then
    sips -Z "$MAX_WIDTH" "$src" >/dev/null
  fi

  if [ "$ext_lower" = "jpg" ] || [ "$ext_lower" = "jpeg" ]; then
    sips -s format jpeg -s formatOptions "$JPG_QUALITY" "$src" --out "$src" >/dev/null
  fi

  size_after=$(stat -f%z "$src")

  if [ "$size_after" -ge "$size_before" ]; then
    mv -f "$backup" "$src"
    xattr -w "$MARKER_ATTR" "1" "$src" 2>/dev/null || true
    printf "  keep  %-40s %5dKB (already optimal; rolled back)\n" \
      "$name" "$((size_before / 1024))"
    skipped=$((skipped + 1))
    continue
  fi

  rm -f "$backup"
  xattr -w "$MARKER_ATTR" "1" "$src" 2>/dev/null || true

  pct=0
  if [ "$size_before" -gt 0 ]; then
    pct=$(( (size_before - size_after) * 100 / size_before ))
  fi

  printf "  done  %-40s %5dKB -> %5dKB  (%2d%% smaller)\n" \
    "$name" "$((size_before / 1024))" "$((size_after / 1024))" "$pct"

  total_before=$((total_before + size_before))
  total_after=$((total_after + size_after))
  processed=$((processed + 1))
done

echo
echo "Processed: $processed file(s).  Skipped: $skipped file(s)."
if [ "$processed" -gt 0 ]; then
  total_pct=$(( (total_before - total_after) * 100 / total_before ))
  echo "Total: $((total_before / 1024 / 1024))MB -> $((total_after / 1024 / 1024))MB  (${total_pct}% smaller)"
fi
