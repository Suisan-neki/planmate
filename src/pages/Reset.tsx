import DeviceFrame from '@/components/layout/DeviceFrame'
import { findAutoText } from '@/lib/autoText'

export default function Reset(){
  return (
    <DeviceFrame>
      <div className="absolute inset-0 p-6 text-navy">
        <h1 className="text-[22px] leading-[30px] font-semibold">
          {findAutoText({ pathIncludes: ['reset'], textIncludes: ['再設定','reset password'], fallback: 'パスワード再設定' })}
        </h1>
        <label className="mt-5 block text-sm">
          {findAutoText({ textIncludes: ['新しい','new password'], fallback: '新しいパスワード' })}
          <input type="password" className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="••••••••" />
        </label>
        <label className="mt-3 block text-sm">
          {findAutoText({ textIncludes: ['確認','confirm'], fallback: 'パスワード（確認）' })}
          <input type="password" className="mt-1 h-10 w-full rounded-md border border-[var(--pm-border)] px-3 outline-none focus:ring-2 focus:ring-navy/20" placeholder="••••••••" />
        </label>
        <button className="mt-6 h-11 w-full rounded-xl bg-primary text-white text-sm">
          {findAutoText({ textIncludes: ['リセット','reset'], fallback: 'リセット' })}
        </button>
      </div>
    </DeviceFrame>
  )
}
