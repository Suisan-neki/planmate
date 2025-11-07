/**
 * Scaffold simple DeviceFrame pages from a newline-separated list.
 *
 * Usage:
 *   node scripts/dev/scaffold-screens.mjs screens.txt
 *
 * Each line becomes src/screens/<slug>.tsx with a simple centered title.
 */
import fs from 'node:fs'
import path from 'node:path'

const input = process.argv[2] || 'screens.txt'
if (!fs.existsSync(input)) {
  console.error(`Input list not found: ${input}`)
  process.exit(1)
}

function slugify(s){
  return String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')
}

const outDir = path.resolve('src/screens')
fs.mkdirSync(outDir, { recursive: true })

const lines = fs.readFileSync(input, 'utf-8').split(/\r?\n/).map(s=>s.trim()).filter(Boolean)
for (const line of lines){
  const slug = slugify(line)
  const file = path.join(outDir, `${slug}.tsx`)
  if (fs.existsSync(file)) continue
  const content = `import DeviceFrame from '@/components/layout/DeviceFrame'

export default function ${slug.replace(/(^|[-_])(\w)/g, (_,a,b)=>b.toUpperCase())}(){
  return (
    <DeviceFrame>
      <div className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy grid place-items-center">
        <div className="text-center">
          <h1 className="text-[18px] font-semibold">${line}</h1>
          <p className="text-[12px] text-grey mt-1">${slug}</p>
        </div>
      </div>
    </DeviceFrame>
  )
}
`
  fs.writeFileSync(file, content, 'utf-8')
  console.log('Created', path.relative(process.cwd(), file))
}

console.log('Done. Restart dev server if needed. New screens will appear under the Dev menu once imported dynamically.')

