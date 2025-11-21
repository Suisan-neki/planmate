import DeviceFrame from '@/components/layout/DeviceFrame'
import ModalBase from '@/components/layout/ModalBase'
import { useTranslation } from 'react-i18next'

const mailIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#969FAB" strokeWidth="1.5" />
    <path d="M4 7l8 6 8-6" stroke="#969FAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const userIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <circle cx="12" cy="8" r="4" stroke="#969FAB" strokeWidth="1.5" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#969FAB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function Forgot() {
  const { t } = useTranslation()
  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-white"
        style={{ background: 'linear-gradient(180deg, #29BFC0 0%, rgba(41,191,192,0.85) 100%)' }}
      >
        <img
          src="/assets/forgot_ornaments.png"
          alt=""
          className="pointer-events-none absolute left-[-110px] top-[-56px] h-[622px] w-[581px] select-none"
          draggable={false}
        />

        <div className="absolute inset-x-0 top-[192px] z-20 px-6 text-center">
          <h1 className="text-[24px] leading-[36px] font-semibold tracking-p-[0.2]">{t('forgot.title')}</h1>
        </div>
        <p className="absolute left-1/2 top-[254px] z-20 w-[305px] -translate-x-1/2 text-center text-[14px] leading-[26px] text-white/80 whitespace-pre-line">
          {t('forgot.body')}
        </p>

        <ModalBase
          className="absolute left-1/2 top-[492px] z-20 -translate-x-1/2 w-[375px] h-[320px] px-6 pt-4 pb-[14px] text-navy"
        >
          <div className="flex flex-col translate-y-4">
            <div className="flex h-[58px] items-center gap-3 rounded-[30px] bg-white px-5 shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              {mailIcon}
              <input
                type="email"
                placeholder={t('forgot.placeholderEmail') as string}
                className="flex-1 bg-transparent text-[14px] leading-[26px] text-navy placeholder:text-grey/60 focus:outline-none"
              />
            </div>

            <div className="mt-6 flex h-[58px] items-center gap-3 rounded-[30px] bg-white px-5 shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              {userIcon}
              <input
                type="text"
                placeholder={t('forgot.placeholderUsername') as string}
                className="flex-1 bg-transparent text-[14px] leading-[26px] text-navy placeholder:text-grey/60 focus:outline-none"
              />
            </div>

            <button
              type="button"
              className="mt-10 h-[50px] w-full rounded-[26px] bg-[rgba(44,67,100,0.1)] text-[16px] font-semibold text-grey shadow-[0px_26px_60px_rgba(141,155,170,0.05)]"
              disabled
            >
              {t('forgot.cta')}
            </button>
          </div>
        </ModalBase>

        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-28 rounded-full" style={{ backgroundColor: '#000000' }} />
        </div>
      </div>
    </DeviceFrame>
  )
}
