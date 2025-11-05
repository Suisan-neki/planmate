/**
 * Fetch Figma local variables and dump as tokens JSON.
 * Usage:
 *   FIGMA_API_KEY=xxxx tsx scripts/figma/extract-variables.ts <fileKey> [--out src/figma.variables.json]
 */
import fs from 'node:fs'
import path from 'node:path'

async function main(){
  const [fileKey, ...rest] = process.argv.slice(2)
  if(!fileKey){
    console.error('Usage: tsx scripts/figma/extract-variables.ts <fileKey> [--out out.json]')
    process.exit(1)
  }
  const out = getFlag(rest, '--out') || 'src/figma.variables.json'
  const token = getToken()
  if(!token){ console.error('FIGMA_API_KEY is required'); process.exit(1) }

  const url = `https://api.figma.com/v1/files/${fileKey}/variables/local`
  const res = await fetch(url, { headers: { 'X-Figma-Token': token } as any })
  if(!res.ok){ throw new Error(`Fetch ${res.status} ${res.statusText}`) }
  const json = await res.json()

  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, JSON.stringify(json, null, 2))
  console.log(`Wrote variables to ${out}`)
}

function getFlag(args: string[], name: string){
  const i = args.indexOf(name); return i>=0? args[i+1] : undefined
}

function getToken(): string | undefined {
  if (process.env.FIGMA_API_KEY) return process.env.FIGMA_API_KEY
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN
  try {
    const p = path.resolve(process.cwd(), '.cursor/mcp.json')
    const txt = fs.readFileSync(p, 'utf-8')
    const json = JSON.parse(txt)
    const val = json?.mcpServers?.['figma-developer-mcp']?.env?.FIGMA_API_KEY
    if (typeof val === 'string' && val.length > 0) return val
  } catch {}
  return undefined
}

main().catch(e=>{ console.error(e); process.exit(1) })
