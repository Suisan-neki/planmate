/**
 * Print absoluteBoundingBox (x,y,width,height) for one or more node ids.
 * Usage:
 *   node scripts/figma/get-node-geometry.mjs --key <fileKey> --id 192:1906[,node2,...]
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

async function main(){
  const key = arg('--key')
  const idArg = arg('--id')
  if (!key || !idArg){
    console.error('Usage: node scripts/figma/get-node-geometry.mjs --key <fileKey> --id <nodeId[,nodeId2,...]>')
    process.exit(1)
  }
  const token = getToken()
  if (!token){ console.error('FIGMA_TOKEN or FIGMA_API_KEY is required'); process.exit(1) }
  const ids = idArg.split(',').map(s=>s.trim()).filter(Boolean)
  const url = `https://api.figma.com/v1/files/${encodeURIComponent(key)}/nodes?ids=${encodeURIComponent(ids.join(','))}`
  const json = await fetchJSON(url, token)
  const nodes = json.nodes || {}
  for (const id of ids){
    const n = nodes[id]?.document
    const box = n?.absoluteBoundingBox
    const name = n?.name
    const type = n?.type
    if (!box) { console.log(`${id}\t(no box)\t${type||''}\t${name||''}`); continue }
    const { x, y, width, height } = box
    console.log(`${id}\t${width}x${height}@(${x},${y})\t${type}\t${name}`)
  }
}

main().catch(e=>{ console.error(e); process.exit(1) })

