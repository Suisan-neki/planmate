/**
 * Generate CSS variables from `src/figma.colors.json` (Files API抽出の結果).
 * Variables API/Pluginが使えない場合のフォールバックとして利用。
 *
 * Usage:
 *   tsx scripts/figma/colors-to-css.ts --in src/figma.colors.json --out src/styles/tokens.generated.css
 */
import fs from 'node:fs'
import path from 'node:path'

type ColorsJson = {
  colors: { hex: string; rgb: [number, number, number]; count: number }[]
  radii?: number[]
  shadows?: string[]
}

function arg(name: string, fallback?: string) {
  const i = process.argv.indexOf(name)
  if (i >= 0) return process.argv[i + 1]
  return fallback
}

function pickByHex(list: ColorsJson['colors'], hex: string) {
  return list.find((c) => c.hex.toUpperCase() === hex.toUpperCase())?.hex
}

function mostFrequentColor(list: ColorsJson['colors'], exclude: Set<string>) {
  const filtered = list.filter((c) => !exclude.has(c.hex.toUpperCase()))
  if (filtered.length === 0) return undefined
  return filtered.sort((a, b) => b.count - a.count)[0].hex
}

async function main() {
  const input = arg('--in', 'src/figma.colors.json')!
  const output = arg('--out', 'src/styles/tokens.generated.css')!

  const raw = fs.readFileSync(input, 'utf-8')
  const json = JSON.parse(raw) as ColorsJson
  const list = (json.colors || []).slice()

  // Known palette from Yuno/PlanMate
  const WHITE = '#FFFFFF'
  const BLACK = '#000000'
  const NAVY = '#2C4364'
  const MUTED = '#F3F6F8'
  const BORDER = '#EAEFF1'
  const TEAL = '#29BFC0'
  const WARNING = '#F2994A'
  const DANGER = '#ED6161'

  const ex = new Set([WHITE, BLACK])

  const primary = pickByHex(list, NAVY) || mostFrequentColor(list, ex) || NAVY
  const text = pickByHex(list, NAVY) || pickByHex(list, '#21242B') || primary
  const bg = pickByHex(list, WHITE) || WHITE
  const muted = pickByHex(list, MUTED) || MUTED
  const border = pickByHex(list, BORDER) || BORDER
  const accent = pickByHex(list, TEAL) || TEAL
  const warning = pickByHex(list, WARNING) || WARNING
  const danger = pickByHex(list, DANGER) || DANGER
  const shadow = (json.shadows && json.shadows[0]) || '0 4px 16px rgba(0,0,0,0.08)'

  const lines: string[] = []
  lines.push('/* Generated from Figma colors JSON (fallback when Variables JSON is unavailable) */')
  lines.push(':root {')
  // Multiple aliases to maximize compatibility with tokens.css
  lines.push(`  --fig-primary: ${primary};`)
  lines.push(`  --fig-colors: ${primary};`)
  lines.push(`  --fig-colors-primary: ${primary};`)
  lines.push(`  --fig-text: ${text};`)
  lines.push(`  --fig-bg: ${bg};`)
  lines.push(`  --fig-card: ${bg};`)
  lines.push(`  --fig-muted: ${muted};`)
  lines.push(`  --fig-border: ${border};`)
  lines.push(`  --fig-accent: ${accent};`)
  lines.push(`  --fig-warning: ${warning};`)
  lines.push(`  --fig-danger: ${danger};`)
  lines.push(`  --fig-shadow-card: ${shadow};`)
  lines.push('}')

  fs.mkdirSync(path.dirname(output), { recursive: true })
  fs.writeFileSync(output, lines.join('\n') + '\n')
  console.log(`Wrote CSS variables to ${output}`)
}

main().catch((e) => { console.error(e); process.exit(1) })

