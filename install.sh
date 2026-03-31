#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$HOME/.openclaw/scripts/companion"
SKILL_DIR="$HOME/.openclaw/skills/tomodachi"

mkdir -p "$TARGET_DIR" "$SKILL_DIR"
cp "$ROOT_DIR/src/companion.js" "$TARGET_DIR/"
cp "$ROOT_DIR/src/companion.sh" "$TARGET_DIR/"
cp "$ROOT_DIR/src/species.js" "$TARGET_DIR/"
cp "$ROOT_DIR/src/animations.js" "$TARGET_DIR/"
cp "$ROOT_DIR/src/ascii-art.js" "$TARGET_DIR/"
cp "$ROOT_DIR/src/companion-cli.js" "$TARGET_DIR/"
cp "$ROOT_DIR/SKILL.md" "$SKILL_DIR/SKILL.md"
chmod +x "$TARGET_DIR/companion.sh" "$TARGET_DIR/companion.js" "$TARGET_DIR/companion-cli.js"

echo "TOMODACHI installed in $TARGET_DIR"
