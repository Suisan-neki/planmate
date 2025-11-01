type IconName = 'calendar' | 'stats' | 'tick' | 'finger' | 'close' | 'arrow' | 'user' | 'mail' | 'lock'

const srcMap: Record<IconName, string> = {
  calendar: '/assets/icon-calendar.svg',
  stats: '/assets/icon-stats.svg',
  tick: '/assets/icon-tick.svg',
  finger: '/assets/icon-finger.svg',
  close: '/assets/icon-close.svg',
  arrow: '/assets/icon-arrow.svg',
  user: '',
  mail: '',
  lock: '',
}

function Inline({ name, className }: { name: IconName; className?: string }) {
  if (name === 'user') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className || 'h-5 w-5'}>
        <circle cx="12" cy="8" r="4" stroke="#2C4364" strokeWidth="1.5" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#2C4364" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className || 'h-5 w-5'}>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#2C4364" strokeWidth="1.5" />
        <path d="M4 7l8 6 8-6" stroke="#2C4364" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'lock') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className || 'h-5 w-5'}>
        <rect x="4" y="10" width="16" height="10" rx="2" stroke="#2C4364" strokeWidth="1.5" />
        <path d="M8 10V7a4 4 0 118 0v3" stroke="#2C4364" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return null
}

export default function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const src = srcMap[name]
  if (src) return <img src={src} alt={name} className={className || 'h-5 w-5'} />
  return <Inline name={name} className={className} />
}


