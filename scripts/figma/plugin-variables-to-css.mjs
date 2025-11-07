/**
 * Convert Figma Plugin "Local Variables Manipulator" JSON to CSS variables (plain Node ESM).
 * Usage:
 *   node scripts/figma/plugin-variables-to-css.mjs --in src/figma.variables.plugin.json --out src/styles/tokens.generated.css
 */
import fs from 'node:fs'
import path from 'node:path'

function arg(name, fallback) {
  const i = process.argv.indexOf(name)
  if (i >= 0) return process.argv[i + 1]
  return fallback
}

function sanitize(name) {
  return String(name)
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[\/]/g, '-')
    .replace(/\.+/g, '-')
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .toLowerCase()
}

function to255(v) { return Math.round(Math.min(1, Math.max(0, v)) * 255) }

function isRgbObj(v) { return v && typeof v === 'object' && 'r' in v && 'g' in v && 'b' in v }

function colorToCss(val) {
  if (!val) return undefined
  if (typeof val === 'string') {
    const s = val.trim()
    if (s.startsWith('#')) return s.toUpperCase()
    if (/^rgba?\(/i.test(s)) return s
    return undefined
  }
  if (isRgbObj(val)) {
    const r = to255(val.r), g = to255(val.g), b = to255(val.b)
    const a = typeof val.a === 'number' ? Math.max(0, Math.min(1, val.a)) : 1
    if (a === 1) return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`.toUpperCase()
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`
  }
  return undefined
}

function pickMode(valuesByMode) {
  if (!valuesByMode || typeof valuesByMode !== 'object') return undefined
  const keys = Object.keys(valuesByMode)
  const preferred = keys.find(k => /^(light|ライト)$/i.test(k)) || keys[0]
  if (!preferred) return undefined
  return { mode: preferred, value: valuesByMode[preferred] }
}

async function main() {
  const input = arg('--in', 'src/figma.variables.plugin.json')
  const output = arg('--out', 'src/styles/tokens.generated.css')
  const raw = fs.readFileSync(input, 'utf-8')
  const json = JSON.parse(raw)

  const collections = Object.keys(json)
  if (collections.length === 0) {
    console.error('No collections found. Ensure you exported JSON from the plugin.')
  }

  const index = new Map()
  for (const col of collections) {
    const vars = json[col]
    if (!vars || typeof vars !== 'object') continue
    for (const varName of Object.keys(vars)) {
      index.set(`${col}/${varName}`, vars[varName])
    }
  }

  const resolving = new Set()
  function resolveValue(collection, variable, depth = 0) {
    const key = `${collection}/${variable}`
    if (depth > 10) return undefined
    if (resolving.has(key)) return undefined
    const def = index.get(key)
    if (!def) return undefined
    const vb = def.$variableValues
    if (!vb) return undefined
    const picked = pickMode(vb)
    if (!picked) return undefined
    const rawVal = picked.value
    const css = colorToCss(rawVal)
    if (css) return css
    if (typeof rawVal === 'string' && rawVal.trim().startsWith('$')) {
      const target = rawVal.trim().slice(1)
      resolving.add(key)
      let v = resolveValue(collection, target, depth + 1)
      if (!v) {
        for (const col of collections) { v = resolveValue(col, target, depth + 1); if (v) break }
      }
      resolving.delete(key)
      return v
    }
    return undefined
  }

  const lines = []
  lines.push('/* Generated from Figma Plugin variables JSON */')
  lines.push(':root {')

  for (const col of collections) {
    const vars = json[col]
    if (!vars || typeof vars !== 'object') continue
    for (const varName of Object.keys(vars)) {
      const cssVal = resolveValue(col, varName)
      if (!cssVal) continue
      const colSan = sanitize(col)
      const varSan = sanitize(varName)
      const name = `fig-${colSan}-${varSan}`
      lines.push(`  --${name}: ${cssVal};`)
      if (varSan === 'primary') {
        lines.push(`  --fig-primary: ${cssVal};`)
        lines.push(`  --fig-colors-primary: ${cssVal};`)
        lines.push(`  --fig-colors: ${cssVal};`)
      }
      if (varSan === 'text') lines.push(`  --fig-text: ${cssVal};`)
      if (varSan === 'bg' || varSan === 'background') { lines.push(`  --fig-bg: ${cssVal};`); lines.push(`  --fig-card: ${cssVal};`) }
      if (varSan === 'muted') lines.push(`  --fig-muted: ${cssVal};`)
      if (varSan === 'border') lines.push(`  --fig-border: ${cssVal};`)
      if (varSan === 'accent' || varSan === 'secondary') lines.push(`  --fig-accent: ${cssVal};`)
      if (varSan === 'warning') lines.push(`  --fig-warning: ${cssVal};`)
      if (varSan === 'danger' || varSan === 'error') lines.push(`  --fig-danger: ${cssVal};`)
    }
  }

  lines.push('}')

  fs.mkdirSync(path.dirname(output), { recursive: true })
  fs.writeFileSync(output, lines.join('\n') + '\n')
  console.log(`Wrote CSS variables to ${output}`)
}

main().catch((e) => { console.error(e); process.exit(1) })

