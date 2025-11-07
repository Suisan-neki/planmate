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

export default function Forgot2() {
  const { t } = useTranslation()
  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-white"
        style={{ background: 'linear-gradient(180deg, #29BFC0 0%, rgba(41,191,192,0.85) 100%)' }}
      >
        {/* Header BG with ornaments */}
        <div className="absolute inset-x-0 top-0 z-0 h-[566px] rounded-b-[28px]" style={{ background: 'inherit' }}>
          <svg
            className="pointer-events-none absolute left-[-116px] top-[68px] z-10 h-[242px] w-[242px] select-none"
            viewBox="-110 0 242 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-110 121C-110 54.1735 -55.8265 0 11 0C77.8265 0 132 54.1735 132 121C132 187.826 77.8265 242 11 242C-55.8265 242 -110 187.826 -110 121ZM82.7713 121C82.7713 81.3618 50.6382 49.2287 11 49.2287C-28.6382 49.2287 -60.7713 81.3618 -60.7713 121C-60.7713 160.638 -28.6382 192.771 11 192.771C50.6382 192.771 82.7713 160.638 82.7713 121Z"
              fill="url(#forgot2-ring-gradient-left)"
              fillOpacity={0.2}
            />
            <defs>
              <linearGradient
                id="forgot2-ring-gradient-left"
                x1="366.57"
                y1="464.364"
                x2="-55.3377"
                y2="-8.49122"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="pointer-events-none absolute right-[-94px] top-[-32px] z-10 h-[242px] w-[242px] select-none"
            viewBox="0 -56 242 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M242 65C242 131.826 187.826 186 121 186C54.1735 186 0 131.826 0 65C0 -1.82645 54.1735 -56 121 -56C187.826 -56 242 -1.82645 242 65ZM49.2287 65C49.2287 104.638 81.3618 136.771 121 136.771C160.638 136.771 192.771 104.638 192.771 65C192.771 25.3618 160.638 -6.77132 121 -6.77132C81.3618 -6.77132 49.2287 25.3618 49.2287 65Z"
              fill="url(#forgot2-ring-gradient-right)"
              fillOpacity={0.2}
            />
            <defs>
              <linearGradient
                id="forgot2-ring-gradient-right"
                x1="-234.57"
                y1="-278.364"
                x2="201.5"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="pointer-events-none absolute right-[-94px] top-[306px] z-10 h-[242px] w-[242px] select-none"
            viewBox="0 -56 242 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M242 65C242 131.826 187.826 186 121 186C54.1735 186 0 131.826 0 65C0 -1.82645 54.1735 -56 121 -56C187.826 -56 242 -1.82645 242 65ZM49.2287 65C49.2287 104.638 81.3618 136.771 121 136.771C160.638 136.771 192.771 104.638 192.771 65C192.771 25.3618 160.638 -6.77132 121 -6.77132C81.3618 -6.77132 49.2287 25.3618 49.2287 65Z"
              fill="url(#forgot2-ring-gradient-right)"
              fillOpacity={0.2}
            />
          </svg>

          <div className="pointer-events-none absolute left-[48px] top-[74px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[176px] top-[111px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[338px] top-[73px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[53px] top-[459px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[156px] top-[382px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[321px] top-[423px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
        </div>

        <div className="absolute inset-x-0 top-[192px] z-20 px-6 text-center">
          <h1 className="text-[24px] leading-[36px] font-semibold tracking-p-[0.2]">{t('forgot2.title')}</h1>
        </div>
        <p className="absolute left-1/2 top-[254px] z-20 w-[305px] -translate-x-1/2 text-center text-[14px] leading-[26px] text-white/80 whitespace-pre-line">
          {t('forgot2.body')}
        </p>

        <ModalBase
          className="absolute left-1/2 top-[546px] z-20 -translate-x-1/2 w-[375px] h-[266px] px-6 pt-8 pb-[14px] text-navy"
        >
          <div className="flex flex-col">
            {/* Verification code label */}
            <label className="mb-2 text-[11px] leading-[20px] text-grey/80">
              {t('forgot2.codeLabel')}
            </label>

            {/* 6 input boxes */}
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-[58px] flex-1 rounded-[30px] bg-white shadow-[0px_26px_60px_rgba(141,155,170,0.05)]"
                />
              ))}
            </div>

            {/* Verify button */}
            <button
              type="button"
              className="mt-10 h-[50px] w-full rounded-[26px] bg-[rgba(44,67,100,0.1)] text-[16px] font-semibold text-grey shadow-[0px_26px_60px_rgba(141,155,170,0.05)]"
              disabled
            >
              {t('forgot2.verifyCta')}
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
