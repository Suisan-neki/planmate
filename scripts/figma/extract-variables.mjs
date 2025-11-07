/**
 * Fetch Figma Variables JSON (local/remotes) with Node ESM (no tsx) to avoid EPERM issues.
 * Usage:
 *   node scripts/figma/extract-variables.mjs --key <fileKey> --out src/figma.variables.json
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
    const json = JSON.parse(txt)
    const val = json?.mcpServers?.['figma-developer-mcp']?.env?.FIGMA_API_KEY
    if (typeof val === 'string' && val.length > 0) return val
  } catch {}
  return undefined
}

async function tryFetch(url, headers){
  const res = await fetch(url, { headers })
  const text = await res.text()
  return { ok: res.ok, status: res.status, text }
}

async function main(){
  const key = arg('--key') || process.argv.slice(2).find(v=>!v.startsWith('--'))
  const out = arg('--out', 'src/figma.variables.json')
  if(!key){ console.error('Usage: node scripts/figma/extract-variables.mjs --key <fileKey> [--out out.json]'); process.exit(1) }
  const token = getToken()
  if(!token){ console.error('FIGMA_API_KEY is required'); process.exit(1) }

  const endpoints = [
    `https://api.figma.com/v1/files/${key}/variables/local`,
    `https://api.figma.com/v1/files/${key}/variables`,
  ]
  const headersList = [
    { 'X-Figma-Token': token },
    { Authorization: `Bearer ${token}` },
  ]

  let last = { ok:false, status:0, text:'' }
  for (const url of endpoints){
    for (const h of headersList){
      const res = await tryFetch(url, h)
      last = res
      if (res.ok){
        try {
          const json = JSON.parse(res.text)
          fs.mkdirSync(path.dirname(out), { recursive: true })
          fs.writeFileSync(out, JSON.stringify(json, null, 2))
          console.log(`Wrote variables to ${out}`)
          return
        } catch (e){
          console.error('Failed to parse JSON:', e)
          process.exit(1)
        }
      }
    }
  }
  console.error(`Fetch ${last.status} — ensure PAT has files:read + file_variables:read and the fileKey is the variables definition source shared with the PAT account. Body: ${last.text}`)
  process.exit(1)
}

main().catch(e=>{ console.error(e); process.exit(1) })

