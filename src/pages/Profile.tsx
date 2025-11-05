import AppShell from '@/app/AppShell'
import { findAutoText } from '@/lib/autoText'

export default function Profile(){
  return (
    <AppShell title={findAutoText({ textIncludes: ['プロフィール','設定','profile','settings'], fallback: 'プロフィール設定' })} current="settings" onNavigate={(tab) => {
      if (tab === 'home') (window as any).__setDevPage?.('dashboard')
      if (tab === 'calendar') (window as any).__setDevPage?.('calendar')
    }}>
      <label className="mt-5 block text-sm">{findAutoText({ textIncludes: ['表示名','display name'], fallback: '表示名' })}
        <input className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="表示名" />
      </label>
      <label className="mt-3 block text-sm">{findAutoText({ textIncludes: ['メール','email'], fallback: 'メール' })}
        <input className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="you@example.com" />
      </label>
      <label className="mt-3 block text-sm">{findAutoText({ textIncludes: ['自己紹介','bio'], fallback: '自己紹介' })}
        <textarea className="mt-1 min-h-[100px] w-full rounded-md border border-[var(--pm-border)] px-3 py-2 outline-none focus:ring-2 focus:ring-navy/20" placeholder="ひとこと" />
      </label>
      <button className="mt-6 h-11 w-full rounded-xl bg-primary text-white text-sm">
        {findAutoText({ textIncludes: ['保存','save'], fallback: '保存' })}
      </button>
    </AppShell>
  )
}
