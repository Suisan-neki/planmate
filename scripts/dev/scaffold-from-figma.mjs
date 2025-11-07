/**
 * Fetch FRAME names from a Figma file (optionally a specific page) and scaffold screens.
 *
 * Usage:
 *   node scripts/dev/scaffold-from-figma.mjs --key <fileKey> [--page "Eng ver."]
 */
import fs from 'node:fs'
import path from 'node:path'

function argJoin(name, fallback){
  const i = process.argv.indexOf(name)
  if (i < 0) return fallback
  // Join following tokens until next flag (starts with --)
  const parts = []
  for (let j = i + 1; j < process.argv.length; j++){
    const tok = process.argv[j]
    if (tok.startsWith('--')) break
    parts.push(tok)
  }
  return parts.length ? parts.join(' ') : fallback
}

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

function slugify(s){ return String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') }
function pascalFromSlug(slug){ return slug.replace(/(^|[-_])(\w)/g, (_,a,b)=>b.toUpperCase()) }

function collectFrames(root, pageFilter){
  const out = []
  const pf = pageFilter ? String(pageFilter).toLowerCase().replace(/\W+/g,' ').trim() : ''
  function walk(node, inPage){
    const t = node.type
    const name = node.name || ''
    if (t === 'CANVAS'){
      let match = true
      if (pf){
        const nn = name.toLowerCase().replace(/\W+/g,' ').trim()
        match = nn.includes(pf)
      }
      node.children?.forEach(ch => walk(ch, match))
      return
    }
    if (!inPage && pageFilter) return
    if (t === 'FRAME') out.push(name)
    node.children?.forEach(ch => walk(ch, inPage))
  }
  walk(root, !pageFilter)
  return Array.from(new Set(out))
}

function ensureScreen(slug, title){
  const outDir = path.resolve('src/screens')
  fs.mkdirSync(outDir, { recursive: true })
  const file = path.join(outDir, `${slug}.tsx`)
  if (fs.existsSync(file)) return false
  const Comp = pascalFromSlug(slug)
  const content = `import DeviceFrame from '@/components/layout/DeviceFrame'

export default function ${Comp}(){
  return (
    <DeviceFrame>
      <div className=\"relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy grid place-items-center\">\n        <div className=\"text-center\">\n          <h1 className=\"text-[18px] font-semibold\">${title}</h1>\n          <p className=\"text-[12px] text-grey mt-1\">${slug}</p>\n        </div>\n      </div>\n    </DeviceFrame>
  )
}
`
  fs.writeFileSync(file, content, 'utf-8')
  return true
}

async function main(){
  const key = argJoin('--key')
  const page = argJoin('--page')
  if (!key){ console.error('Usage: node scripts/dev/scaffold-from-figma.mjs --key <fileKey> [--page "Eng ver."]'); process.exit(1) }
  const token = getToken()
  if (!token){ console.error('FIGMA_API_KEY (or FIGMA_TOKEN) is required'); process.exit(1) }

  const file = await fetchJSON(`https://api.figma.com/v1/files/${encodeURIComponent(key)}`, token)
  const frames = collectFrames(file?.document, page)
  if (frames.length === 0){ console.warn('No frames found. Check page name or permissions.'); return }

  let created = 0
  for (const name of frames){
    const slug = slugify(name)
    if (ensureScreen(slug, name)) created++
  }
  console.log(`Scaffolded ${created} screens under src/screens (total frames: ${frames.length}).`)
}

main().catch(e=>{ console.error(e); process.exit(1) })
