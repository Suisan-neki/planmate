import DeviceFrame from '@/components/layout/DeviceFrame'
import ModalBase from '@/components/layout/ModalBase'
import Icon from '@/components/atoms/Icon'
import { useTranslation } from 'react-i18next'

export default function SignUp1(){
  const { t } = useTranslation()
  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy"
        style={{ background: 'linear-gradient(180deg, #29BFC0 0%, rgba(41,191,192,0.85) 100%)' }}
      >
        {/* Header BG (teal gradient + dots) */}
        <div className="absolute inset-x-0 top-0 z-0 h-[280px] rounded-b-[28px]" style={{ background: 'inherit' }}>
          <svg
            className="pointer-events-none absolute left-[-116px] top-[68px] h-[242px] w-[242px] select-none"
            viewBox="-110 0 242 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-110 121C-110 54.1735 -55.8265 0 11 0C77.8265 0 132 54.1735 132 121C132 187.826 77.8265 242 11 242C-55.8265 242 -110 187.826 -110 121ZM82.7713 121C82.7713 81.3618 50.6382 49.2287 11 49.2287C-28.6382 49.2287 -60.7713 81.3618 -60.7713 121C-60.7713 160.638 -28.6382 192.771 11 192.771C50.6382 192.771 82.7713 160.638 82.7713 121Z"
              fill="url(#signup1-ring-gradient-left)"
              fillOpacity={0.2}
            />
            <defs>
              <linearGradient
                id="signup1-ring-gradient-left"
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
            className="pointer-events-none absolute right-[-94px] top-[-32px] h-[242px] w-[242px] select-none"
            viewBox="0 -56 242 242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M242 65C242 131.826 187.826 186 121 186C54.1735 186 0 131.826 0 65C0 -1.82645 54.1735 -56 121 -56C187.826 -56 242 -1.82645 242 65ZM49.2287 65C49.2287 104.638 81.3618 136.771 121 136.771C160.638 136.771 192.771 104.638 192.771 65C192.771 25.3618 160.638 -6.77132 121 -6.77132C81.3618 -6.77132 49.2287 25.3618 49.2287 65Z"
              fill="url(#signup1-ring-gradient-right)"
              fillOpacity={0.2}
            />
            <defs>
              <linearGradient
                id="signup1-ring-gradient-right"
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

          <div className="pointer-events-none absolute left-[48px] top-[74px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[172px] top-[44px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[338px] top-[73px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[40px] top-[216px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
          <div className="pointer-events-none absolute left-[302px] top-[216px] z-10 h-[9px] w-[9px] rounded-full bg-screen/20" />
        </div>

        {/* Title + subtitle inside header — subtitle bottom = header bottom - 81px */}
        <div className="absolute inset-x-0 top-0 z-20 h-[280px] px-6 text-center text-white pointer-events-none flex flex-col items-center justify-end pb-[117px]">
          <h1 className="text-[22px] leading-[30px] font-bold tracking-p-[0.2]">{t('signup.title')}</h1>
          <p className="mt-3 text-[12px] leading-[20px] opacity-90 whitespace-pre-line">{t('signup.body')}</p>
        </div>

        {/* Floating form panel — width:375, height:532, r:30, bg-screen, bottom aligned */}
        <ModalBase
          className="absolute left-1/2 top-[280px] z-20 -translate-x-1/2 -translate-y-[34px] w-[375px] px-4 pb-[14px] pt-4"
          style={{ height: 'calc(100% - 246px)' }}
        >
          <div className="flex flex-col translate-y-4">
            {/* Email */}
            <div className="flex items-center gap-3 rounded-[24px] border border-grey/15 bg-white px-4 h-[56px]">
              <Icon name="mail" className="h-5 w-5" />
              <input
                type="email"
                placeholder={t('signup.placeholderEmail') as string}
                className="flex-1 bg-transparent text-[14px] placeholder:text-grey/60 focus:outline-none"
                readOnly
              />
            </div>

            {/* Username */}
            <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-grey/15 bg-white px-4 h-[56px]">
              <Icon name="user" className="h-5 w-5" />
              <input
                type="text"
                placeholder={t('signup.placeholderUsername') as string}
                className="flex-1 bg-transparent text-[14px] placeholder:text-grey/60 focus:outline-none"
                readOnly
              />
            </div>
            <div className="mt-2 pl-2 text-[11px] leading-[18px] text-grey">
              <span className="inline-block align-middle mr-1 h-[6px] w-[6px] rounded-full bg-warning" />
              {t('signup.usernameRule')}
            </div>

            {/* Password */}
            <div className="mt-4 flex items-center gap-3 rounded-[24px] border border-grey/15 bg-white px-4 h-[56px]">
              <Icon name="lock" className="h-5 w-5" />
              <input
                type="password"
                placeholder={t('signup.placeholderPassword') as string}
                className="flex-1 bg-transparent text-[14px] placeholder:text-grey/60 focus:outline-none"
                readOnly
              />
            </div>

            {/* Confirm Password */}
            <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-grey/15 bg-white px-4 h-[56px]">
              <Icon name="lock" className="h-5 w-5" />
              <input
                type="password"
                placeholder={t('signup.placeholderPasswordConfirm') as string}
                className="flex-1 bg-transparent text-[14px] placeholder:text-grey/60 focus:outline-none"
                readOnly
              />
            </div>

            {/* CTA (disabled style) */}
            <button disabled className="mt-8 h-12 w-full rounded-[24px] bg-grey/20 text-grey/70 text-[14px] font-semibold">
              {t('signup.cta')}
            </button>

            <p className="mt-5 text-center text-[14px] leading-[26px] text-navy">
              {t('signup.loginQuestion')}{' '}
              <button type="button" className="font-semibold text-primary">
                {t('signup.loginAction')}
              </button>
            </p>
          </div>
        </ModalBase>

        {/* Home indicator */}
        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-28 rounded-full" style={{ backgroundColor: '#000000' }} />
        </div>
      </div>
    </DeviceFrame>
  )
}
