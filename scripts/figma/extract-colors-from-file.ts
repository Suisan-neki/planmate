/**
 * Extract unique solid colors, corner radii and shadows from a Figma file
 * without using the Variables API (works with files:read scope only).
 *
 * Usage:
 *   tsx scripts/figma/extract-colors-from-file.ts <fileKey> [--out src/figma.colors.json]
 *
 * Output shape (example):
 *   {
 *     "colors": [{ "hex": "#2C4364", "rgb": [44,67,100], "count": 12 }],
 *     "radii":  [0, 8, 12, 16, 20, 32],
 *     "shadows": ["0 4px 16px rgba(0,0,0,0.08)"]
 *   }
 */
import fs from 'node:fs'
import path from 'node:path'

type Paint = { type: string; visible?: boolean; opacity?: number; color?: { r:number; g:number; b:number } }
type Effect = { type: string; radius?: number; offset?: { x:number; y:number }; color?: { r:number; g:number; b:number; a:number }; visible?: boolean }

async function main(){
  const [fileKey, ...rest] = process.argv.slice(2)
  if(!fileKey){
    console.error('Usage: tsx scripts/figma/extract-colors-from-file.ts <fileKey> [--out out.json]')
    process.exit(1)
  }
  const out = getFlag(rest, '--out') || 'src/figma.colors.json'
  const token = getToken()
  if(!token){ console.error('FIGMA_API_KEY is required'); process.exit(1) }

  const url = `https://api.figma.com/v1/files/${fileKey}`
  const res = await fetch(url, { headers: { 'X-Figma-Token': token } as any })
  if(!res.ok){ throw new Error(`Fetch ${res.status} ${res.statusText}`) }
  const json = await res.json()

  const colors = new Map<string, number>()
  const radii = new Set<number>()
  const shadows = new Set<string>()

  const visit = (node: any) => {
    // colors
    const fills: Paint[] | undefined = node.fills
    if (Array.isArray(fills)) {
      for (const p of fills){
        if (p && p.visible !== false && p.type === 'SOLID' && p.color){
          const hex = rgbToHex(p.color.r, p.color.g, p.color.b)
          colors.set(hex, (colors.get(hex) || 0) + 1)
        }
      }
    }
    // radius
    if (typeof node.cornerRadius === 'number') radii.add(round(node.cornerRadius))
    if (Array.isArray(node.rectangleCornerRadii)) node.rectangleCornerRadii.forEach((v:number)=> radii.add(round(v)))
    // shadows
    const fx: Effect[] | undefined = node.effects
    if (Array.isArray(fx)){
      for (const e of fx){
        if (e.visible === false) continue
        if (e.type === 'DROP_SHADOW' || e.type === 'INNER_SHADOW'){
          const col = e.color || { r:0, g:0, b:0, a:0.25 }
          const rgba = `rgba(${to255(col.r)},${to255(col.g)},${to255(col.b)},${Number(col.a ?? 1).toFixed(2)})`
          const off = e.offset || { x:0, y:0 }
          const css = `${off.x}px ${off.y}px ${round(e.radius ?? 0)}px ${rgba}`
          shadows.add(css)
        }
      }
    }
    // recurse
    if (Array.isArray(node.children)) node.children.forEach(visit)
  }

  visit(json.document)

  const outObj = {
    colors: Array.from(colors.entries()).map(([hex,count])=> ({ hex, rgb: hexToRgb(hex), count })).sort((a,b)=> b.count - a.count),
    radii: Array.from(radii).sort((a,b)=> a-b),
    shadows: Array.from(shadows),
  }

  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, JSON.stringify(outObj, null, 2))
  console.log(`Wrote colors/radii/shadows to ${out} (colors: ${outObj.colors.length})`)
}

function getFlag(args: string[], name: string){ const i = args.indexOf(name); return i>=0? args[i+1] : undefined }
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

function to255(v:number){ return Math.round(Math.min(1, Math.max(0, v)) * 255) }
function round(v:number){ return Math.round(v * 100) / 100 }
function rgbToHex(r:number,g:number,b:number){
  const rr = to255(r).toString(16).padStart(2,'0')
  const gg = to255(g).toString(16).padStart(2,'0')
  const bb = to255(b).toString(16).padStart(2,'0')
  return `#${rr}${gg}${bb}`.toUpperCase()
}
function hexToRgb(hex:string){
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if(!m) return [0,0,0]
  return [parseInt(m[1],16), parseInt(m[2],16), parseInt(m[3],16)]
}

main().catch(e=>{ console.error(e); process.exit(1) })

