#!/bin/sh
# Run by the merge queue: a change to src/ must add a line to CHANGELOG.md.
# Usage: check-changelog.sh <base sha> <head sha>
set -e
changed=$(git diff --name-only "$1" "$2")
if echo "$changed" | grep -q '^src/' && ! echo "$changed" | grep -qx 'CHANGELOG.md'; then
  echo "src/ changed but CHANGELOG.md has no new line under Unreleased. Add one describing the change."
  exit 1
fi
echo "changelog ok"
