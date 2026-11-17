#!/usr/bin/env bash
# Publishes ONLY app/public (the app's web files, fake sample data) to the public repo
# dannymarsh333-gif/call-back-log-app, which GitHub Pages serves at
# https://dannymarsh333-gif.github.io/call-back-log-app/
# Usage (Git Bash, from this folder): ./publish-site.sh
set -euo pipefail
SRC="$(cd "$(dirname "$0")" && pwd)/app/public"
TMP="$(mktemp -d)"
git clone -q https://github.com/dannymarsh333-gif/call-back-log-app.git "$TMP"
find "$TMP" -mindepth 1 -maxdepth 1 ! -name .git ! -name README.md -exec rm -rf {} +
cp -r "$SRC"/. "$TMP"/
touch "$TMP/.nojekyll"
cd "$TMP"
git add -A
if git diff --cached --quiet; then echo "Site already up to date."; exit 0; fi
git -c user.name="dannymarsh333-gif" -c user.email="dannymarsh333-gif@users.noreply.github.com" commit -q -m "Update app from call-back-log"
git push -q
echo "Published. Live in about a minute: https://dannymarsh333-gif.github.io/call-back-log-app/"
