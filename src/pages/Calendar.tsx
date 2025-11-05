import AppShell from '@/app/AppShell'
import { findAutoText } from '@/lib/autoText'

export default function Calendar(){
  const days = ['S','M','T','W','T','F','S']
  return (
    <AppShell title={findAutoText({ pathIncludes: ['calendar'], textIncludes: ['カレンダー','calendar'], fallback: 'カレンダー' })} current="calendar" onNavigate={(tab) => {
      if (tab === 'home') (window as any).__setDevPage?.('dashboard')
      if (tab === 'settings') (window as any).__setDevPage?.('settings')
    }}>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-navy/70">
        {days.map(d => <div key={d}>{d}</div>)}
        {Array.from({length:35}).map((_,i)=> (
          <div key={i} className={`aspect-square rounded-lg border border-[var(--pm-border)] ${i===26? 'bg-primary/10': 'bg-white'}`}>
            <div className="pt-1 text-[10px] text-navy/70">{(i%30)+1}</div>
          </div>
        ))}
      </div>
    </AppShell>
  )
}
