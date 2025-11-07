import DeviceFrame from '@/components/layout/DeviceFrame'
import { useTranslation } from 'react-i18next'

export default function Splash(){
  const { t } = useTranslation()
  return (
    <DeviceFrame>
      {/* 右上オーブ（Figmaのグラデ値をそのまま） */}
      <div
        className="pointer-events-none absolute -right-[40px] -top-[28px] h-[260px] w-[260px] rounded-full"
        style={{
          background:
            'linear-gradient(41.62deg, rgba(171, 226, 228, 0.1) -65.71%, rgba(71, 227, 233, 0) 93.69%)',
          boxShadow: '0 0 0 1px var(--pm-orb-ring) inset',
        }}
      />

      <div className="flex h-full flex-col items-center justify-end pb-[92px] text-navy">
        {/* 中央ロゴ（174x174 / Figma指定, 位置微調整） */}
        <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2">
          <img
            src="/assets/splash.png"
            alt="PlanMate"
            className="h-[174px] w-[174px] object-contain"
            draggable={false}
          />
        </div>

        {/* タイトルとサブコピー */}
        <div className="w-full text-center">
          <h1 className="font-bold text-[26px] leading-[39px] tracking-p-[0.2]">{t('splash.title')}</h1>
          <p className="mt-[4px] text-[14px] leading-[26px] opacity-80">{t('splash.subtitle')}</p>
        </div>
      </div>
    </DeviceFrame>
  )
}
