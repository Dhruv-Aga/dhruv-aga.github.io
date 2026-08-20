#!/usr/bin/env bash
set -euo pipefail

cd /workspace

required_files=(
  index.html
  css/style.css
  js/script.js
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "Missing required file: $file" >&2
    exit 1
  fi
done

echo "Static portfolio assets verified."
