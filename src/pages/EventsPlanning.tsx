import AppShell from '@/app/AppShell'
import { findAutoText } from '@/lib/autoText'
import Icon from '@/components/atoms/Icon'

export default function EventsPlanning(){
  const items = ['場所を決める','参加者に連絡','持ち物を用意']
  return (
    <AppShell title={findAutoText({ textIncludes: ['計画中','planning','イベント'], fallback: 'イベント（計画中）' })} current="home" onNavigate={(tab) => {
      if (tab === 'calendar') (window as any).__setDevPage?.('calendar')
      if (tab === 'settings') (window as any).__setDevPage?.('settings')
    }}>
      <ul className="space-y-2">
        {items.map((t,i)=> (
          <li key={t} className="flex items-center justify-between rounded-xl border border-[var(--pm-border)] bg-white p-3">
            <div className="flex items-center gap-2">
              <Icon name="tick" className="h-5 w-5 opacity-70" />
              <span className="text-sm">{i+1}. {t}</span>
            </div>
            <button className="rounded-lg border border-[var(--pm-border)] bg-[var(--pm-muted)] px-2 py-1 text-xs">完了</button>
          </li>
        ))}
      </ul>
    </AppShell>
  )
}
