/**
 * List frames (and component frames) in a Figma file to obtain node IDs for overlay export.
 * Usage:
 *   node scripts/figma/list-frames.mjs --key <fileKey> [--page "Page Name"]
 */
import fs from 'node:fs'
import path from 'node:path'

function arg(name, fallback){ const i = process.argv.indexOf(name); return i>=0? process.argv[i+1] : fallback }

function getToken(){
  if (process.env.FIGMA_API_KEY) return process.env.FIGMA_API_KEY
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN
  try {
    const p = path.resolve(process.cwd(), '.cursor/mcp.json')
    const txt = fs.readFileSync(p, 'utf-8')
    const j = JSON.parse(txt)
    const t = j?.mcpServers?.['figma-developer-mcp']?.env?.FIGMA_API_KEY
    if (typeof t === 'string' && t.length>0) return t
  } catch {}
  return undefined
}

async function fetchJSON(url, token){
  const res = await fetch(url, { headers: { 'X-Figma-Token': token } })
  if (!res.ok) throw new Error(`Fetch ${res.status} ${res.statusText}: ${url}`)
  return res.json()
}

function listFrames(node, trail, out, pageFilter){
  const t = node.type
  const name = node.name
  const id = node.id
  const pathTrail = [...trail, name].join(' / ')
  const isPage = t === 'CANVAS'
  const isFrameLike = t === 'FRAME' || t === 'COMPONENT' || t === 'INSTANCE' || t === 'GROUP'
  const inPage = trail.length>0 && trail[0] === pageFilter

  if (pageFilter && !inPage && !isPage) {
    node.children?.forEach(ch => listFrames(ch, [...trail, name], out, pageFilter))
    return
  }

  if (isFrameLike && !['GROUP'].includes(t)) {
    out.push({ id, name, path: pathTrail, type: t })
  }
  node.children?.forEach(ch => listFrames(ch, [...trail, name], out, pageFilter))
}

async function main(){
  const key = arg('--key')
  if (!key){ console.error('Usage: --key <fileKey> [--page "Page Name"]'); process.exit(1) }
  const page = arg('--page')
  const token = getToken()
  if (!token){ console.error('FIGMA_API_KEY not found'); process.exit(1) }

  const file = await fetchJSON(`https://api.figma.com/v1/files/${encodeURIComponent(key)}`, token)
  const doc = file?.document
  if (!doc){ console.error('No document'); process.exit(1) }
  const out = []
  listFrames(doc, [], out, page)
  out
    .filter(x => !page || x.path.startsWith(page + ' /'))
    .slice(0, 500)
    .forEach(x => console.log(`${x.id}\t${x.type}\t${x.path}`))
}

main().catch(e=>{ console.error(e); process.exit(1) })

