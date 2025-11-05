import { useState } from 'react'
import DeviceFrame from '@/components/layout/DeviceFrame'
import { findAutoText } from '@/lib/autoText'

export default function Splash(){
  const [logoVisible, setLogoVisible] = useState(true)
  return (
    <DeviceFrame>
      {/* 右上オーブ（Figmaのグラデ値をそのまま） */}
      <div
        className="pointer-events-none absolute -right-[40px] -top-[40px] h-[240px] w-[240px] rounded-full"
        style={{
          background:
            'linear-gradient(41.62deg, rgba(171, 226, 228, 0.1) -65.71%, rgba(71, 227, 233, 0) 93.69%)',
          boxShadow: '0 0 0 1px var(--pm-orb-ring) inset',
        }}
      />

      <div className="flex h-full flex-col items-center justify-end pb-[48px] text-navy">
        {/* 中央ロゴ */}
        <div className="absolute top-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="mx-auto h-[112px] w-[112px] rounded-full bg-[radial-gradient(closest-side,_rgba(188,192,250,0.35),_rgba(71,227,233,0.12))]" />
            {logoVisible ? (
              <img
                src="/images/splash/logo.png"
                alt="PlanMate"
                className="absolute inset-0 m-auto h-[80px] w-[80px] object-contain"
                onError={() => setLogoVisible(false)}
                draggable={false}
              />
            ) : (
              <img
                src="/assets/splash.png"
                alt="splash"
                className="absolute inset-0 m-auto h-[80px] w-[80px] object-contain"
                draggable={false}
              />
            )}
          </div>
        </div>

        {/* タイトルとサブコピー */}
        <div className="w-full text-center">
          <h1 className="font-bold text-[26px] leading-[39px] tracking-[0.2px]">
            {findAutoText({ pathIncludes: ['splash', 'planmate'], textIncludes: ['planmate'], fallback: 'PlanMate' })}
          </h1>
          <p className="mt-[4px] text-[14px] leading-[26px] opacity-90">
            {findAutoText({ pathIncludes: ['splash'], textIncludes: ['週末', 'to-dos', 'ta-das'], fallback: '悩む週末から、楽しむ週末へ。' })}
          </p>
        </div>
      </div>
    </DeviceFrame>
  )
}
