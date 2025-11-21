import DeviceFrame from '@/components/layout/DeviceFrame'
import ModalBase from '@/components/layout/ModalBase'
import Icon from '@/components/atoms/Icon'
import { useTranslation } from 'react-i18next'

export default function SignUp() {
  const { t, i18n } = useTranslation()
  const isJa = i18n.language === 'ja'

  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy"
        style={{ background: '#29BFC0' }}
      >
        {/* Header BG (teal gradient + image) */}
        <div className="absolute inset-x-0 top-0 z-0 h-[280px] rounded-b-[28px]" style={{ background: 'inherit' }}>
          {/* Image */}
          <div className="absolute left-[53px] top-[76px] h-[191px] w-[287px]">
            <img
              src="/assets/signup-image.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="absolute inset-x-0 top-0 z-20 h-[280px] px-6 text-center text-white pointer-events-none flex flex-col items-center justify-center">
          <h1 className="text-[24px] leading-[36px] font-semibold">
            {t('signup.titleTrip')}
          </h1>
        </div>

        {/* Floating form panel */}
        <ModalBase
          className="absolute left-1/2 top-[280px] z-20 -translate-x-1/2 -translate-y-[34px] w-[375px] px-6 pb-[14px] pt-8"
          style={{ height: 'calc(100% - 246px)' }}
        >
          <div className="flex flex-col">
            {/* Email */}
            <div className="flex items-center gap-3 rounded-[30px] bg-white px-5 h-[58px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              <Icon name="mail" className="h-[26px] w-[26px]" />
              <input
                type="email"
                placeholder={isJa ? (t('signup.placeholderEmail') as string) : (t('signup.placeholderEmailEn') as string)}
                className="flex-1 bg-transparent text-[14px] leading-[26px] placeholder:text-grey/60 focus:outline-none"
              />
            </div>

            {/* Username */}
            <div className="mt-[24px] flex items-center gap-3 rounded-[30px] bg-white px-5 h-[58px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              <Icon name="user" className="h-[26px] w-[26px]" />
              <input
                type="text"
                placeholder={isJa ? (t('signup.placeholderUsername') as string) : (t('signup.placeholderUsernameEn') as string)}
                className="flex-1 bg-transparent text-[14px] leading-[26px] placeholder:text-grey/60 focus:outline-none"
              />
            </div>
            <div className="mt-2 flex items-center gap-2 pl-2 text-[11px] leading-[20px] text-dark/60">
              <img src="/assets/spotter.svg" alt="" className="h-[8px] w-[8px]" />
              <span>{isJa ? (t('signup.usernameRule') as string) : (t('signup.usernameRuleEn') as string)}</span>
            </div>

            {/* Password */}
            <div className="mt-[18px] flex items-center gap-3 rounded-[30px] bg-white px-5 h-[58px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              <Icon name="lock" className="h-[26px] w-[26px]" />
              <input
                type="password"
                placeholder={isJa ? (t('signup.placeholderPassword') as string) : (t('signup.placeholderPasswordEn') as string)}
                className="flex-1 bg-transparent text-[14px] leading-[26px] placeholder:text-grey/60 focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div className="mt-[24px] flex items-center gap-3 rounded-[30px] bg-white px-5 h-[58px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              <Icon name="lock" className="h-[26px] w-[26px]" />
              <input
                type="password"
                placeholder={isJa ? (t('signup.placeholderPasswordConfirm') as string) : (t('signup.placeholderPasswordConfirmEn') as string)}
                className="flex-1 bg-transparent text-[14px] leading-[26px] placeholder:text-grey/60 focus:outline-none"
              />
            </div>

            {/* CTA (disabled style) */}
            <button
              className="mt-[32px] h-[50px] w-full rounded-[26px] bg-[rgba(44,67,100,0.1)] text-[16px] font-semibold leading-[28px] text-grey shadow-[0px_26px_60px_rgba(141,155,170,0.05)]"
            >
              {isJa ? (t('signup.cta') as string) : (t('signup.ctaEn') as string)}
            </button>

            <p className="mt-[20px] text-center text-[14px] leading-[26px] text-navy">
              {isJa ? (t('signup.loginQuestion') as string) : (t('signup.loginQuestionEn') as string)}{' '}
              <button type="button" className="font-semibold text-primary">
                {isJa ? (t('signup.loginAction') as string) : (t('signup.loginActionEn') as string)}
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
