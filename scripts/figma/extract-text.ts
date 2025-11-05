/**
 * Minimal Figma text extractor (UI only aid).
 * Usage:
 *   FIGMA_API_KEY=xxxx tsx scripts/figma/extract-text.ts <fileKey> [--page "Page Name"] [--out src/i18n.auto.json]
 */
import fs from 'node:fs'
import path from 'node:path'

type FigmaNode = {
  id: string
  name: string
  type: string
  characters?: string
  children?: FigmaNode[]
}

async function main() {
  const [fileKey, ...rest] = process.argv.slice(2)
  if (!fileKey) {
    console.error('Usage: tsx scripts/figma/extract-text.ts <fileKey> [--page "Page Name"] [--out out.json]')
    process.exit(1)
  }
  const pageName = getFlag(rest, '--page')
  const outPath = getFlag(rest, '--out') || 'src/i18n.auto.json'

  const token = getToken()
  if (!token) {
    console.error('FIGMA_API_KEY is required')
    process.exit(1)
  }

  const file = await fetchJSON(`https://api.figma.com/v1/files/${fileKey}`, token)
  const pages: FigmaNode[] = file.document?.children || []
  const targetPages = pageName ? pages.filter(p => p.name === pageName) : pages
  const texts: Record<string, string> = {}

  const visit = (node: FigmaNode, trail: string[]) => {
    const key = [...trail, node.name].join('/')
    if (node.type === 'TEXT' && node.characters) {
      texts[key] = node.characters
    }
    node.children?.forEach(ch => visit(ch, [...trail, node.name]))
  }

  for (const p of targetPages) visit(p, [])

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(texts, null, 2), 'utf-8')
  console.log(`Wrote ${Object.keys(texts).length} texts to ${outPath}`)
}

function getFlag(args: string[], name: string) {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : undefined
}

async function fetchJSON(url: string, token: string) {
  const res = await fetch(url, { headers: { 'X-Figma-Token': token } as any })
  if (!res.ok) throw new Error(`Fetch error ${res.status} ${res.statusText}`)
  return res.json()
}

function getToken(): string | undefined {
  // 1) env
  if (process.env.FIGMA_API_KEY) return process.env.FIGMA_API_KEY
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN
  // 2) .cursor/mcp.json
  try {
    const p = path.resolve(process.cwd(), '.cursor/mcp.json')
    const txt = fs.readFileSync(p, 'utf-8')
    const json = JSON.parse(txt)
    const val = json?.mcpServers?.['figma-developer-mcp']?.env?.FIGMA_API_KEY
    if (typeof val === 'string' && val.length > 0) return val
  } catch {}
  return undefined
}

main().catch((e) => { console.error(e); process.exit(1) })
