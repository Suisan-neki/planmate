import { useTranslation } from 'react-i18next'
import AppShell from '@/app/AppShell'
import { findAutoText } from '@/lib/autoText'

export default function Settings(){
  const { t } = useTranslation()
  return (
    <AppShell title={findAutoText({ pathIncludes: ['settings'], textIncludes: ['設定','settings'], fallback: t('settings.title') })} current="settings" onNavigate={(tab) => {
      if (tab === 'home') (window as any).__setDevPage?.('dashboard')
      if (tab === 'calendar') (window as any).__setDevPage?.('calendar')
    }}>
      <div className="grid gap-3">
        <div className="rounded-xl border border-[var(--pm-border)] bg-white p-4 text-sm">ここに設定項目のUIを実装</div>
      </div>
    </AppShell>
  )
}
