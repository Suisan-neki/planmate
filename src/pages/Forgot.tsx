import DeviceFrame from '@/components/layout/DeviceFrame'
import { useTranslation } from 'react-i18next'
import { findAutoText } from '@/lib/autoText'

export default function Forgot(){
  const { t } = useTranslation()
  return (
    <DeviceFrame>
      <div className="absolute inset-0 p-6 text-navy">
        <h1 className="text-[22px] leading-[30px] font-semibold">
          {findAutoText({ pathIncludes: ['forgot'], textIncludes: ['パスワード','forgot'], fallback: 'パスワードをお忘れですか？' })}
        </h1>
        <p className="mt-1 text-sm opacity-80">
          {findAutoText({ pathIncludes: ['forgot'], textIncludes: ['メール','email'], fallback: '登録したメールアドレスを入力してください' })}
        </p>
        <label className="mt-5 block text-sm">
          {findAutoText({ pathIncludes: ['forgot','login'], textIncludes: ['メール','email'], fallback: t('login.email') })}
          <input className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="you@example.com" />
        </label>
        <button className="mt-6 h-11 w-full rounded-xl bg-primary text-white text-sm">
          {findAutoText({ pathIncludes: ['forgot'], textIncludes: ['送信','send'], fallback: '送信' })}
        </button>
      </div>
    </DeviceFrame>
  )
}
