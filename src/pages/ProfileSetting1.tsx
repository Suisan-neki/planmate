import DeviceFrame from '@/components/layout/DeviceFrame'

export default function ProfileSetting1() {
  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy rounded-[40px]"
        style={{ background: '#F3F6F8' }}
      >
        {/* Status Bar */}
        <div className="absolute inset-x-0 top-0 z-30 h-[44px]">
          <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.662px]">
            <img src="/assets/status-group3.png" alt="" className="h-full w-full" />
          </div>
          <div className="absolute h-[21px] left-[21px] top-[13px] w-[54px]">
            <img src="/assets/status-time.png" alt="" className="h-full w-full" />
          </div>
        </div>

        {/* Content Area */}
        <div className="absolute inset-x-0 top-0 bottom-0">
          {/* Union Image */}
          <div className="absolute left-[24px] top-[60px] z-20 h-[300px] w-[327px]">
            <img
              src="/assets/profile-setting1-union.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Dots Mark */}
          <div className="absolute left-[160px] top-[73px] z-30 inline-flex items-start gap-2">
            <span className="h-[8px] w-[8px] rounded-[4px] bg-[rgba(150,159,171,0.2)]" />
            <span className="h-[8px] w-[8px] rounded-[4px] bg-[rgba(150,159,171,0.2)]" />
            <span className="h-[8px] w-[24px] rounded-[4px] bg-[#29BFC0]" />
          </div>

          {/* Title */}
          <div className="absolute left-1/2 top-[105px] z-20 -translate-x-1/2">
            <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center">
              あなたについて教えてください
            </p>
          </div>

          {/* Description */}
          <div className="absolute left-1/2 top-[166px] z-20 w-[279px] -translate-x-1/2">
            <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center">
              あなたにピッタリな週末プランをご提案するために、プロフィールに関する質問に
              <br />
              答えてください
            </p>
          </div>

          {/* Main Image */}
          <div className="absolute left-1/2 top-[245px] z-20 h-[290px] w-[290px] -translate-x-1/2">
            <img
              src="/assets/profile-setting1-image.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Next Button */}
          <div className="absolute left-[24px] top-[676px] z-30">
            <button
              className="h-[50px] w-[327px] rounded-[26px] bg-[#29BFC0] text-white text-[16px] font-semibold leading-[28px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]"
              onClick={() => (window as any).__setDevPage?.('profileSetting2')}
            >
              次へ
            </button>
          </div>

          {/* Skip Link */}
          <div className="absolute left-1/2 top-[752px] z-20 w-[279px] -translate-x-1/2">
            <p
              className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center cursor-pointer"
              onClick={() => (window as any).__setDevPage?.('profileSetting2')}
            >
              スキップして後で設定する
            </p>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-[134px] rounded-full bg-black" />
        </div>
      </div>
    </DeviceFrame>
  )
}
