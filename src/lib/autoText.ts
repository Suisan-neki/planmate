import auto from '@/i18n.auto.json'

type Dict = Record<string, string>
const dict: Dict = (auto || {}) as Dict

export function findAutoText(opts: { pathIncludes?: string[]; textIncludes?: string[]; fallback?: string }) {
  const { pathIncludes = [], textIncludes = [], fallback } = opts
  const entries = Object.entries(dict)

  const hitByPath = pathIncludes.length
    ? entries.find(([k]) => pathIncludes.some((p) => k.toLowerCase().includes(p.toLowerCase())))
    : undefined
  if (hitByPath) return hitByPath[1]

  const hitByText = textIncludes.length
    ? entries.find(([, v]) => textIncludes.some((t) => (v || '').toLowerCase().includes(t.toLowerCase())))
    : undefined
  if (hitByText) return hitByText[1]

  return fallback || ''
}

export function listAutoKeys(prefix?: string) {
  const entries = Object.entries(dict)
  if (!prefix) return entries.map(([k]) => k)
  return entries.filter(([k]) => k.toLowerCase().includes(prefix.toLowerCase())).map(([k]) => k)
}

