/**
 * Export Figma frames as PNG via Images API (for pixel-perfect overlays).
 * Usage examples:
 *   node scripts/figma/export-images.mjs --key <fileKey> --node 63:381 --name splash --out public/assets/overlays
 *   node scripts/figma/export-images.mjs --key <fileKey> --node 12:548,12:600 --name splash,onboarding1 --out public/assets/overlays --scale 1
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

async function fetchBinary(url){
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Download ${res.status} ${res.statusText}: ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  return buf
}

async function main(){
  const key = arg('--key')
  if (!key){ console.error('Usage: --key <fileKey> --node <id[,id2,...]> [--name <name[,name2,...]>] [--out dir] [--scale 1]'); process.exit(1) }
  const nodeArg = arg('--node')
  if (!nodeArg){ console.error('Missing --node <id>'); process.exit(1) }
  const nodes = nodeArg.split(',').map(s=>s.trim()).filter(Boolean)
  const namesArg = arg('--name')
  const names = namesArg? namesArg.split(',').map(s=>s.trim()) : []
  const outDir = arg('--out', 'public/assets/overlays')
  const scale = arg('--scale', '1')
  const token = getToken()
  if (!token){ console.error('FIGMA_API_KEY not found (env or .cursor/mcp.json)'); process.exit(1) }

  const url = `https://api.figma.com/v1/images/${encodeURIComponent(key)}?ids=${encodeURIComponent(nodes.join(','))}&format=png&scale=${encodeURIComponent(scale)}`
  const json = await fetchJSON(url, token)
  const map = json.images || {}
  fs.mkdirSync(outDir, { recursive: true })

  let count = 0
  for (let i=0;i<nodes.length;i++){
    const id = nodes[i]
    const name = names[i] || id.replace(/[:]/g,'-')
    const imgUrl = map[id]
    if (!imgUrl){ console.warn(`No image URL for node ${id}`); continue }
    const buf = await fetchBinary(imgUrl)
    const p = path.join(outDir, `${name}.png`)
    fs.writeFileSync(p, buf)
    console.log(`Saved ${p}`)
    count++
  }
  if (count===0){ console.error('No images saved. Check node ids and fileKey.'); process.exit(1) }
}

main().catch(e=>{ console.error(e); process.exit(1) })

