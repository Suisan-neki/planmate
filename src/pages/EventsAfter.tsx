import AppShell from '@/app/AppShell'
import { findAutoText } from '@/lib/autoText'

export default function EventsAfter(){
  return (
    <AppShell title={findAutoText({ textIncludes: ['終了後','after','イベント'], fallback: 'イベント（終了後）' })} current="home" onNavigate={(tab) => {
      if (tab === 'calendar') (window as any).__setDevPage?.('calendar')
      if (tab === 'settings') (window as any).__setDevPage?.('settings')
    }}>
      <section className="rounded-xl border border-[var(--pm-border)] bg-white p-4">
        <h2 className="text-sm font-medium">{findAutoText({ textIncludes: ['サマリー','summary'], fallback: 'サマリー' })}</h2>
        <p className="mt-1 text-sm text-navy/70">参加者 5名、所要 2時間、満足度 4/5</p>
      </section>
      <section className="mt-3 rounded-xl border border-[var(--pm-border)] bg-white p-4">
        <h2 className="text-sm font-medium">{findAutoText({ textIncludes: ['メモ','note'], fallback: 'メモ' })}</h2>
        <textarea className="mt-2 min-h-[120px] w-full rounded-md border border-[var(--pm-border)] bg-transparent px-3 py-2 text-sm outline-none" placeholder="次回の改善点など" />
      </section>
    </AppShell>
  )
}
