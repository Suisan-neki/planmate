import { ReactNode } from 'react'
import { DevOverlays } from '@/dev/overlays'

export default function DeviceFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(90deg,#f5f7fa_0%,#f5f7fa_50%,#eef2f6_50%,#eef2f6_100%)] bg-[length:40px_100%]">
      <div className="relative rounded-[36px] border border-grey/30 bg-white shadow-2xl ring-4 ring-grey/10">
        <div className="relative h-[812px] w-[375px] overflow-hidden rounded-[40px] bg-screen">
          {children}
          <DevOverlays />
          {/* Global iPhone X status bar overlay */}
          <div className="pointer-events-none absolute left-1/2 top-0 z-[9999] -translate-x-1/2 h-[44px] w-[375px]">
            <img src="/assets/status-time.png" alt="time" className="absolute left-[21px] top-[13px] h-[21px] w-[54px]" />
            <img src="/assets/status-group3.png" alt="status" className="absolute right-[14.67px] top-[17.33px] h-[11.336px] w-[66.662px]" />
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-full bg-grey/20" />
      </div>
    </div>
  )
}

