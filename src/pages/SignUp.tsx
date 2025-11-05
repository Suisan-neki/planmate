import DeviceFrame from '@/components/layout/DeviceFrame'
import { useTranslation } from 'react-i18next'
import { findAutoText } from '@/lib/autoText'

export default function SignUp(){
  const { t } = useTranslation()
  return (
    <DeviceFrame>
      <div className="absolute inset-0 p-6 text-navy">
        <h1 className="text-[22px] leading-[30px] font-semibold">
          {findAutoText({ pathIncludes: ['sign','signup','register'], textIncludes: ['新規登録','sign up','register'], fallback: 'Sign up' })}
        </h1>
        <label className="mt-5 block text-sm">
          {findAutoText({ textIncludes: ['名前','name'], fallback: '名前' })}
          <input className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="山田 太郎" />
        </label>
        <label className="mt-3 block text-sm">
          {findAutoText({ pathIncludes: ['sign','login'], textIncludes: ['メール','email'], fallback: t('login.email') })}
          <input className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="you@example.com" />
        </label>
        <label className="mt-3 block text-sm">
          {findAutoText({ pathIncludes: ['sign','login'], textIncludes: ['パスワード','password'], fallback: t('login.password') })}
          <input type="password" className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="••••••••" />
        </label>
        <button className="mt-6 h-11 w-full rounded-xl bg-primary text-white text-sm">
          {findAutoText({ textIncludes: ['アカウント','作成','create account','sign up'], fallback: 'アカウントを作成' })}
        </button>
      </div>
    </DeviceFrame>
  )
}
