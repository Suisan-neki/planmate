/**
 * Search nodes by name substring and print their id/type/path.
 * Usage:
 *   node scripts/figma/find-nodes.mjs --key <fileKey> --name "Rectangle 30"
 */
import fs from 'node:fs'
import path from 'node:path'

function arg(name, fallback){ const i = process.argv.indexOf(name); return i>=0? process.argv[i+1] : fallback }
function getToken(){
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN
  if (process.env.FIGMA_API_KEY) return process.env.FIGMA_API_KEY
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
  if (!res.ok) throw new Error(`Fetch ${res.status} ${res.statusText}`)
  return res.json()
}

function walk(node, trail, hits, q){
  const name = node.name || ''
  const type = node.type || ''
  const id = node.id || ''
  const pathStr = [...trail, name].join(' / ')
  if (name.toLowerCase().includes(q)) hits.push({ id, type, path: pathStr })
  const children = node.children || []
  for (const ch of children) walk(ch, [...trail, name], hits, q)
}

async function main(){
  const key = arg('--key')
  const name = (arg('--name')||'').trim()
  if (!key || !name){ console.error('Usage: node scripts/figma/find-nodes.mjs --key <fileKey> --name "text"'); process.exit(1) }
  const token = getToken()
  if (!token){ console.error('FIGMA_TOKEN or FIGMA_API_KEY is required'); process.exit(1) }
  const file = await fetchJSON(`https://api.figma.com/v1/files/${encodeURIComponent(key)}`, token)
  const root = file?.document
  const hits = []
  walk(root, [], hits, name.toLowerCase())
  for (const h of hits.slice(0, 200)){
    console.log(`${h.id}\t${h.type}\t${h.path}`)
  }
}

main().catch(e=>{ console.error(e); process.exit(1) })

