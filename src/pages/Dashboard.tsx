import { useTranslation } from 'react-i18next'
import { findAutoText } from '@/lib/autoText'
import AppShell from '@/app/AppShell'

export default function Dashboard(){
  const { t } = useTranslation()
  return (
    <AppShell
      title={findAutoText({ pathIncludes: ['dashboard','home'], textIncludes: ['ダッシュボード','dashboard','home'], fallback: t('dashboard.title') })}
      current="home"
      showFab
      onFab={() => { (window as any).__setDevPage?.('quickplanner') }}
      onNavigate={(tab) => {
        if (tab === 'home') return
        if (tab === 'calendar') (window as any).__setDevPage?.('calendar')
        if (tab === 'settings') (window as any).__setDevPage?.('settings')
      }}
    >
      <div className="grid gap-3">
        <section className="rounded-xl border border-[var(--pm-border)] bg-white p-4">カード</section>
        <section className="rounded-xl border border-[var(--pm-border)] bg-white p-4">カード</section>
        <section className="rounded-xl border border-[var(--pm-border)] bg-white p-4">カード</section>
      </div>
    </AppShell>
  )
}
