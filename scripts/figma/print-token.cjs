#!/usr/bin/env node
const fs = require('fs')
try {
  const txt = fs.readFileSync('.cursor/mcp.json', 'utf-8')
  const j = JSON.parse(txt)
  const t = j?.mcpServers?.['figma-developer-mcp']?.env?.FIGMA_API_KEY
  if (!t) { process.stderr.write('FIGMA_API_KEY not found in .cursor/mcp.json\n'); process.exit(1) }
  process.stdout.write(t)
} catch (e) {
  process.stderr.write(String(e) + '\n')
  process.exit(1)
}

