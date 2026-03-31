#!/bin/bash
# Companion System v2.0 - Wrapper script
# Usage: ./companion.sh <command> <user>

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE_BIN="/opt/homebrew/bin/node"
JS_FILE="$SCRIPT_DIR/companion.js"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

show_help() {
  echo -e "${CYAN}🐾 TOMODACHI COMPANION SYSTEM v2.0${NC}"
  echo ""
  echo "Usage: ./companion.sh <command> <user>"
  echo ""
  echo -e "${GREEN}Available commands:${NC}"
  echo "  status    <user>   - Show your companion"
  echo "  hatch     <user>   - Hatch a new egg"
  echo "  talk      <user>   - Make your companion talk"
  echo "  evolve    <user>   - Force evolution (if ready)"
  echo ""
  echo -e "${YELLOW}Actions:${NC}"
  echo "  feed      <user>   - Feed"
  echo "  play      <user>   - Play"
  echo "  sleep     <user>   - Put to sleep"
  echo "  groom     <user>   - Groom"
  echo "  cuddle    <user>   - Cuddle"
  echo "  train     <user>   - Train"
  echo "  evening   <user>   - Evening bonding"
  echo "  evoke     <user>   - Reassure (TOMODACHI line)"
  echo ""
  echo -e "${PURPLE}System:${NC}"
  echo "  decay              - Apply decay to all companions"
  echo "  list               - List all 18 companions"
}

if [ ! -x "$NODE_BIN" ]; then
  echo -e "${RED}Error: Node.js not found at $NODE_BIN${NC}"
  exit 1
fi

if [ ! -f "$JS_FILE" ]; then
  echo -e "${RED}Error: companion.js not found in $SCRIPT_DIR${NC}"
  exit 1
fi

case "$1" in
  status|hatch|talk|evolve|feed|play|sleep|groom|cuddle|train|evening|evoke|decay|list)
    if [ "$1" = "decay" ] || [ "$1" = "list" ]; then
      "$NODE_BIN" "$JS_FILE" "$1"
    else
      if [ -z "$2" ]; then
        echo -e "${RED}Error: user is required${NC}"
        echo "Usage: ./companion.sh $1 <user>"
        exit 1
      fi
      "$NODE_BIN" "$JS_FILE" "$1" "$2"
    fi
    ;;
  help|-h|--help)
    show_help
    ;;
  *)
    echo -e "${RED}Unknown command: $1${NC}"
    show_help
    exit 1
    ;;
esac
