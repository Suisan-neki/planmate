import { ReactNode } from 'react'
import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

type TabKey = 'home' | 'calendar' | 'settings'

export default function AppShell({
  title,
  children,
  current = 'home',
  showFab = false,
  onNavigate,
  onFab,
}: {
  title?: string
  children: ReactNode
  current?: TabKey
  showFab?: boolean
  onNavigate?: (tab: TabKey) => void
  onFab?: () => void
}) {
  return (
    <DeviceFrame>
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10 flex h-[56px] items-center justify-between px-5 text-navy">
        <h1 className="text-[18px] font-semibold leading-[26px]">{title}</h1>
        <button className="rounded-lg border border-[var(--pm-border)] bg-[var(--pm-muted)] px-3 py-1.5 text-xs">検索</button>
      </header>

      {/* Content area with bottom spacing */}
      <main className="absolute inset-x-0 top-[56px] bottom-[80px] overflow-auto p-5 text-navy">
        {children}
      </main>

      {/* FAB */}
      {showFab && (
        <button
          onClick={onFab}
          className="absolute bottom-[96px] right-6 grid h-12 w-12 place-items-center rounded-2xl bg-primary shadow-lg"
        >
          <Icon name="plus" className="h-6 w-6" />
        </button>
      )}

      {/* Bottom Nav */}
      <nav className="absolute inset-x-0 bottom-0 z-10 mx-4 mb-3 rounded-2xl border border-[var(--pm-border)] bg-white/90 px-4 py-2 text-[11px] text-navy shadow-card backdrop-blur">
        <ul className="grid grid-cols-3">
          <li>
            <button onClick={() => onNavigate?.('home')} className="flex w-full flex-col items-center py-2">
              <Icon name="home" className={`h-5 w-5 ${current === 'home' ? '' : 'opacity-60'}`} />
              <span className={`${current === 'home' ? '' : 'opacity-60'}`}>Home</span>
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate?.('calendar')} className="flex w-full flex-col items-center py-2">
              <Icon name="calendar" className={`h-5 w-5 ${current === 'calendar' ? '' : 'opacity-60'}`} />
              <span className={`${current === 'calendar' ? '' : 'opacity-60'}`}>Calendar</span>
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate?.('settings')} className="flex w-full flex-col items-center py-2">
              <Icon name="settings" className={`h-5 w-5 ${current === 'settings' ? '' : 'opacity-60'}`} />
              <span className={`${current === 'settings' ? '' : 'opacity-60'}`}>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
    </DeviceFrame>
  )
}
