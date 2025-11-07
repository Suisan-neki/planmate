import { useEffect } from 'react'
import DeviceFrame from '@/components/layout/DeviceFrame'
import { setOverlayOptions } from '@/dev/overlays'

export default function Design_97_427() {
  useEffect(() => {
    setOverlayOptions({
      img: '/assets/overlays/target-97-427.png',
      imgOpacity: 0.5,
      grid: true,
      gridStep: 8,
      gridOpacity: 0.2,
    })
    window.dispatchEvent(new CustomEvent('dev-overlay-change'))
  }, [])

  return (
    <DeviceFrame>
      <div className="absolute inset-0 p-6 text-navy">
        {/* 右上のオーナメント（Figmaの薄い円弧） */}
        <div
          className="pointer-events-none absolute -right-[40px] -top-[28px] h-[260px] w-[260px] rounded-full"
          style={{
            background:
              'linear-gradient(41.62deg, rgba(171, 226, 228, 0.10) -65.71%, rgba(71, 227, 233, 0) 93.69%)',
            boxShadow: '0 0 0 1px var(--pm-orb-ring) inset',
          }}
        />

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
        <div className="absolute inset-x-0 bottom-[92px] text-center">
          <h1 className="font-bold text-[26px] leading-[39px] tracking-p-[0.2]">PlanMate</h1>
          <p className="mt-[4px] text-[14px] leading-[26px] opacity-80">From To-Dos to Ta-Das！</p>
        </div>
      </div>
    </DeviceFrame>
  )
}
