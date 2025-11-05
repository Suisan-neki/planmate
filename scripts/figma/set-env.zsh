#!/usr/bin/env zsh
# Load FIGMA_API_KEY from .cursor/mcp.json into current shell
export FIGMA_API_KEY="$(node scripts/figma/print-token.cjs)" || return 1
echo "FIGMA_API_KEY set (length: ${#FIGMA_API_KEY})"

