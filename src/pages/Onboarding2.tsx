import DeviceFrame from '@/components/layout/DeviceFrame'
import { useTranslation } from 'react-i18next'

export default function Onboarding2(){
  const { t } = useTranslation()
  return (
    <DeviceFrame>
      <div className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy flex flex-col">
        {/* Top illustration */}
        <div className="mt-[111px] flex items-center justify-center">
          <img
            src="/assets/onboarding2の画像.png"
            alt="onboarding"
            className="h-[307px] w-[307px] object-contain"
            draggable={false}
          />
        </div>

        {/* Floating card — duplicate of onboarding1 */}
        <div
          className="mt-auto mb-[75px] mx-auto w-[327px] h-[249px] rounded-[30px] bg-white px-6 pt-8 relative text-center"
          style={{ boxShadow: '0 26px 60px rgba(141,155,170,0.05)' }}
        >
          {/* notch */}
          <div className="absolute -top-[17px] left-1/2 -translate-x-1/2 h-[34px] w-[108px] rounded-[17px] bg-white grid place-items-center">
            <div className="inline-flex items-start gap-2 bg-white">
              <span className="h-1.5 w-2.5 rounded-full bg-primary/20" />
              <span className="h-1.5 w-6 rounded-full bg-primary/80" />
              <span className="h-1.5 w-2.5 rounded-full bg-primary/20" />
            </div>
          </div>

          <h2 className="text-[18px] leading-[26px] font-semibold">{t('onboarding2.title')}</h2>
          <p className="mt-3 text-[12px] leading-[20px] text-grey">
            {t('onboarding2.body1')}
            <br />
            {t('onboarding2.body2')}
          </p>

          <div className="mt-[62px] px-[80px] pb-[15px]">
            <button className="h-12 w-full rounded-[24px] bg-primary text-white text-[14px]">{t('onboarding2.cta')}</button>
          </div>
        </div>
      </div>
    </DeviceFrame>
  )
}
