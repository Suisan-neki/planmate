import { useTranslation } from 'react-i18next'
import { findAutoText } from '@/lib/autoText'
import DeviceFrame from '@/components/layout/DeviceFrame'

export default function Login(){
  const { t } = useTranslation()
  return (
    <DeviceFrame>
      <div className="absolute inset-0 p-6 text-navy">
        <h1 className="text-[26px] leading-[39px] tracking-p-[0.2] font-semibold">
          {findAutoText({ pathIncludes: ['login'], textIncludes: ['ログイン','sign in'], fallback: t('login.title') })}
        </h1>
        <label className="mt-6 block text-sm">
          {findAutoText({ pathIncludes: ['login'], textIncludes: ['メール','email'], fallback: t('login.email') })}
          <input className="mt-1 h-12 w-full rounded-[12px] border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-primary/20" />
        </label>
        <label className="mt-3 block text-sm">
          {findAutoText({ pathIncludes: ['login'], textIncludes: ['パスワード','password'], fallback: t('login.password') })}
          <input type="password" className="mt-1 h-12 w-full rounded-[12px] border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-primary/20" />
        </label>
        <button className="mt-6 h-11 w-full rounded-xl bg-primary text-white text-sm">
          {findAutoText({ pathIncludes: ['login'], textIncludes: ['サインイン','sign in'], fallback: t('login.submit') })}
        </button>
      </div>
    </DeviceFrame>
  )
}
