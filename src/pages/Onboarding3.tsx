import DeviceFrame from '@/components/layout/DeviceFrame'
import { useTranslation } from 'react-i18next'

export default function Onboarding3(){
  const { t } = useTranslation()
  return (
    <DeviceFrame>
      <div className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy flex flex-col">
        {/* Top illustration */}
        <div className="mt-[56px] flex items-center justify-center px-6">
          <img src="/assets/onboarding1-illustration.png" alt="onboarding" className="h-[240px] w-auto object-contain" />
        </div>

        {/* Floating card — duplicate of onboarding1 */}
        <div
          className="mt-auto mb-[45px] mx-auto w-[327px] h-[266px] rounded-[30px] bg-white px-6 pt-8 relative text-center"
          style={{ boxShadow: '0 26px 60px rgba(141,155,170,0.05)' }}
        >
          {/* notch */}
          <div className="absolute -top-[17px] left-1/2 -translate-x-1/2 h-[34px] w-[108px] rounded-[17px] bg-white grid place-items-center">
            <div className="inline-flex items-start gap-2 bg-white">
              <span className="h-1.5 w-2.5 rounded-full bg-primary/20" />
              <span className="h-1.5 w-2.5 rounded-full bg-primary/20" />
              <span className="h-1.5 w-6 rounded-full bg-primary/80" />
            </div>
          </div>

          <h2 className="text-[18px] leading-[26px] font-semibold">{t('onboarding3.title')}</h2>
          <p className="mt-3 text-[12px] leading-[20px] text-grey">
            {t('onboarding3.body1')}
            <br />
            {t('onboarding3.body2')}
          </p>

          <div className="mt-[62px] px-[80px] pb-[32px]">
            <button className="h-12 w-full rounded-[24px] bg-primary text-white text-[14px]">{t('onboarding3.cta')}</button>
          </div>
        </div>
      </div>
    </DeviceFrame>
  )
}
