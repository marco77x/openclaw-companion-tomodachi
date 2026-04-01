#!/bin/bash
# Companion System v2.0 - Script wrapper
# Uso: ./companion.sh <comando> <utente>

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
  echo "Uso: ./companion.sh <comando> <utente>"
  echo ""
  echo -e "${GREEN}Comandi disponibili:${NC}"
  echo "  status    <utente> - Mostra il tuo companion"
  echo "  hatch     <utente> - Schiude un nuovo uovo"
  echo "  talk      <utente> - Fa parlare il companion"
  echo "  evolve    <utente> - Forza evoluzione (se pronta)"
  echo ""
  echo -e "${YELLOW}Azioni:${NC}"
  echo "  feed      <utente> - Dai da mangiare"
  echo "  play      <utente> - Gioca"
  echo "  sleep     <utente> - Metti a dormire"
  echo "  groom     <utente> - Pulisci"
  echo "  cuddle    <utente> - Coccola"
  echo "  train     <utente> - Allena"
  echo "  evening   <utente> - Rituale serale"
  echo "  evoke     <utente> - Rassicura (linea TOMODACHI)"
  echo ""
  echo -e "${PURPLE}System:${NC}"
  echo "  decay              - Applica decadimento a tutti i companion"
  echo "  list               - Elenca tutti i 18 companion"
}

if [ ! -x "$NODE_BIN" ]; then
  echo -e "${RED}Errore: Node.js non trovato in $NODE_BIN${NC}"
  exit 1
fi

if [ ! -f "$JS_FILE" ]; then
  echo -e "${RED}Errore: companion.js non trovato in $SCRIPT_DIR${NC}"
  exit 1
fi

case "$1" in
  status|hatch|talk|evolve|feed|play|sleep|groom|cuddle|train|evening|evoke|decay|list)
    if [ "$1" = "decay" ] || [ "$1" = "list" ]; then
      "$NODE_BIN" "$JS_FILE" "$1"
    else
      if [ -z "$2" ]; then
        echo -e "${RED}Errore: utente obbligatorio${NC}"
        echo "Uso: ./companion.sh $1 <utente>"
        exit 1
      fi
      "$NODE_BIN" "$JS_FILE" "$1" "$2"
    fi
    ;;
  help|-h|--help)
    show_help
    ;;
  *)
    echo -e "${RED}Comando sconosciuto: $1${NC}"
    show_help
    exit 1
    ;;
esac
