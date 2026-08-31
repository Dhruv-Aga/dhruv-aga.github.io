#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8000}"
HOST="${HOST:-0.0.0.0}"
PID_FILE="/tmp/portfolio-http-server.pid"
LOG_FILE="/tmp/portfolio-http-server.log"

if curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
  echo "Portfolio dev server already running on port ${PORT}."
  exit 0
fi

if [[ -f "$PID_FILE" ]]; then
  old_pid="$(cat "$PID_FILE")"
  if kill -0 "$old_pid" 2>/dev/null; then
    kill "$old_pid" 2>/dev/null || true
  fi
  rm -f "$PID_FILE"
fi

cd /workspace
nohup python3 -m http.server "$PORT" --bind "$HOST" >"$LOG_FILE" 2>&1 &
echo $! >"$PID_FILE"

for _ in $(seq 1 30); do
  if curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
    echo "Portfolio dev server ready at http://127.0.0.1:${PORT}/"
    exit 0
  fi
  sleep 0.5
done

echo "Portfolio dev server failed to start. See ${LOG_FILE}." >&2
exit 1
