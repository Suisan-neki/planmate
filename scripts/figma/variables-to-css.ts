/**
 * Convert Figma Variables JSON to a CSS variables file.
 * Usage:
 *   tsx scripts/figma/variables-to-css.ts --in src/figma.variables.json --out src/styles/tokens.generated.css
 */
import fs from 'node:fs'
import path from 'node:path'

function arg(name: string, fallback?: string) {
  const i = process.argv.indexOf(name)
  if (i >= 0) return process.argv[i + 1]
  return fallback
}

function to255(v: number) { return Math.round(Math.min(1, Math.max(0, v)) * 255) }

function colorToCss(c: any): string {
  if (!c || typeof c !== 'object') return '#000000'
  const r = to255(c.r ?? 0), g = to255(c.g ?? 0), b = to255(c.b ?? 0)
  const a = typeof c.a === 'number' ? Math.max(0, Math.min(1, c.a)) : 1
  if (a === 1) {
    const hex = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`
    return hex.toUpperCase()
  }
  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`
}

function sanitize(name: string) {
  return name
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[\/]/g, '-')
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .toLowerCase()
}

function pickFirstMode(valuesByMode: any) {
  if (!valuesByMode || typeof valuesByMode !== 'object') return undefined
  const keys = Object.keys(valuesByMode)
  if (keys.length === 0) return undefined
  return valuesByMode[keys[0]]
}

async function main() {
  const input = arg('--in', 'src/figma.variables.json')!
  const output = arg('--out', 'src/styles/tokens.generated.css')!

  const raw = fs.readFileSync(input, 'utf-8')
  const json = JSON.parse(raw)

  // Support possible shapes: { variables: [...] } or { meta: { variables: [...] } }
  const vars: any[] = json?.variables || json?.meta?.variables || []
  if (!Array.isArray(vars) || vars.length === 0) {
    console.error('No variables found in JSON. Ensure you used the Variables API output.')
  }

  const lines: string[] = []
  lines.push(':root {')

  for (const v of vars) {
    const type = v.resolvedType || v.type
    const name = sanitize(v.name || v.id || '')
    if (!name) continue
    if (type === 'COLOR') {
      const val = pickFirstMode(v.valuesByMode) || v.value || v.scopes?.[0]
      const css = colorToCss(val)
      lines.push(`  --fig-${name}: ${css};`)
    }
    // Optionally map FLOAT as spacing/radius if 名前にradius/spacingが含まれる
    if (type === 'FLOAT' && typeof v?.valuesByMode === 'object') {
      const val = pickFirstMode(v.valuesByMode)
      if (typeof val === 'number') {
        if (/radius|corner/i.test(v.name || '')) lines.push(`  --fig-${name}: ${val}px;`)
        else if (/spacing|gap|space/i.test(v.name || '')) lines.push(`  --fig-${name}: ${val}px;`)
      }
    }
  }

  lines.push('}')

  fs.mkdirSync(path.dirname(output), { recursive: true })
  fs.writeFileSync(output, lines.join('\n') + '\n')
  console.log(`Wrote CSS variables to ${output}`)
}

main().catch((e) => { console.error(e); process.exit(1) })

