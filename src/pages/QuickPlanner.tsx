import AppShell from '@/app/AppShell'
import { findAutoText } from '@/lib/autoText'

export default function QuickPlanner(){
  return (
    <AppShell title={findAutoText({ textIncludes: ['クイック','quick planner'], fallback: 'クイックプランナー' })} current="home" onNavigate={(tab) => {
      if (tab === 'calendar') (window as any).__setDevPage?.('calendar')
      if (tab === 'settings') (window as any).__setDevPage?.('settings')
    }}>
      <label className="mt-5 block text-sm">{findAutoText({ textIncludes: ['タイトル','title'], fallback: 'タイトル' })}
        <input className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="イベント名" />
      </label>
      <label className="mt-3 block text-sm">{findAutoText({ textIncludes: ['日時','date'], fallback: '日時' })}
        <input type="datetime-local" className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" />
      </label>
      <label className="mt-3 block text-sm">{findAutoText({ textIncludes: ['メモ','note'], fallback: 'メモ' })}
        <textarea className="mt-1 min-h-[100px] w-full rounded-md border border-[var(--pm-border)] px-3 py-2 outline-none focus:ring-2 focus:ring-navy/20" placeholder="メモ" />
      </label>
      <button className="mt-6 h-11 w-full rounded-xl bg-primary text-white text-sm">
        {findAutoText({ textIncludes: ['下書き','draft','作成','create'], fallback: '下書き作成' })}
      </button>
    </AppShell>
  )
}
