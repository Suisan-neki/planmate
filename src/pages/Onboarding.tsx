import { useTranslation } from 'react-i18next'
import DeviceFrame from '@/components/layout/DeviceFrame'
import { findAutoText } from '@/lib/autoText'

export default function Onboarding(){
  const { t } = useTranslation()
  return (
    <DeviceFrame>
      <div className="absolute inset-0 p-5 text-navy">
        <header>
          <h1 className="text-[20px] leading-[28px] font-semibold">
            {findAutoText({ pathIncludes: ['onboarding'], textIncludes: ['ようこそ','welcome'], fallback: t('onboarding.title') })}
          </h1>
          <p className="mt-1 text-[14px] leading-[22px] opacity-80">
            {findAutoText({ pathIncludes: ['onboarding'], textIncludes: ['紹介','tour','quick'], fallback: t('onboarding.step1') })}
          </p>
        </header>

        <div className="mt-6 grid place-items-center">
          <img src="/assets/onboarding-1.png" alt="onboarding" className="h-[240px] w-auto object-contain" />
        </div>

        <div className="absolute inset-x-0 bottom-0 grid place-items-center p-6">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-6 rounded-full bg-navy/80" />
            <span className="h-1.5 w-2.5 rounded-full bg-navy/20" />
            <span className="h-1.5 w-2.5 rounded-full bg-navy/20" />
          </div>
          <div className="mt-3 flex w-full gap-2">
            <button className="h-11 flex-1 rounded-xl border border-[var(--pm-border)] bg-[var(--pm-muted)] text-sm">
              {findAutoText({ pathIncludes: ['onboarding'], textIncludes: ['スキップ','skip'], fallback: 'スキップ' })}
            </button>
            <button className="h-11 flex-1 rounded-xl bg-black text-white text-sm">
              {findAutoText({ pathIncludes: ['onboarding'], textIncludes: ['次へ','next'], fallback: '次へ' })}
            </button>
          </div>
        </div>
      </div>
    </DeviceFrame>
  )
}
