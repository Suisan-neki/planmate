type IconName =
  | 'calendar'
  | 'stats'
  | 'tick'
  | 'finger'
  | 'close'
  | 'arrow'
  | 'user'
  | 'mail'
  | 'lock'
  | 'home'
  | 'settings'
  | 'plus'

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
  if (name === 'home') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className || 'h-5 w-5'}>
        <path d="M3 11l9-7 9 7v8a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3H10v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" stroke="#2C4364" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'settings') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className || 'h-5 w-5'}>
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#2C4364" strokeWidth="1.5" />
        <path d="M19.4 15a7.97 7.97 0 00.1-2 7.97 7.97 0 00-.1-2l2-1.6-2-3.4-2.4 1a7.9 7.9 0 00-1.7-1l-.3-2.6H9l-.3 2.6a7.9 7.9 0 00-1.7 1l-2.4-1-2 3.4 2 1.6a7.97 7.97 0 00-.1 2 7.97 7.97 0 00.1 2l-2 1.6 2 3.4 2.4-1c.5.4 1.1.8 1.7 1l.3 2.6h4.8l.3-2.6c.6-.2 1.2-.6 1.7-1l2.4 1 2-3.4-2-1.6z" stroke="#2C4364" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'plus') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className || 'h-5 w-5'}>
        <path d="M12 5v14M5 12h14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
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

