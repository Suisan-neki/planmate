import DeviceFrame from '@/components/layout/DeviceFrame'

export default function ProfileSetting2() {
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
          {/* Progress Bar */}
          <div className="absolute h-[30px] left-[21px] top-[83px] w-[331px]">
            <div className="absolute bg-[#EAEFF1] h-[8px] left-[11px] right-0 rounded-[20px] top-1/2 -translate-y-1/2" />
            <div className="absolute bg-[#29BFC0] h-[8px] left-[11px] right-[275px] rounded-[20px] top-1/2 -translate-y-1/2" />
          </div>

          {/* Title */}
          <div className="absolute left-1/2 top-[53px] z-20 -translate-x-1/2">
            <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center">
              はじめましょう
            </p>
          </div>

          {/* Question */}
          <div className="absolute left-[32px] top-[138px] z-20 w-[320px]">
            <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)]">
              あなたの性別は？
            </p>
          </div>

          {/* Option: 女性 (Selected) */}
          <div className="absolute left-[24px] top-[177px] z-20">
            <button className="h-[36px] w-[131px] rounded-[30px] bg-[#29BFC0] border border-[#969FAB] px-[17px] flex items-center justify-center">
              <span className="text-[13px] leading-[21px] font-bold text-white">
                女性
              </span>
            </button>
          </div>

          {/* Option: 男性 */}
          <div className="absolute left-[24px] top-[231px] z-20">
            <button className="h-[36px] w-[131px] rounded-[30px] bg-white border border-[#969FAB] px-[17px] flex items-center justify-center">
              <span className="text-[13px] leading-[21px] font-medium text-[#2C4364]">
                男性
              </span>
            </button>
          </div>

          {/* Option: どちらでもない */}
          <div className="absolute left-[24px] top-[292px] z-20">
            <button className="h-[36px] w-[131px] rounded-[30px] bg-white border border-[#969FAB] px-[17px] flex items-center justify-center">
              <span className="text-[13px] leading-[21px] font-medium text-[#2C4364]">
                どちらでもない
              </span>
            </button>
          </div>

          {/* Next Button */}
          <div className="absolute left-[25px] top-[674px] z-30">
            <button className="h-[50px] w-[327px] rounded-[26px] bg-[#29BFC0] text-white text-[16px] font-semibold leading-[28px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              次へ
            </button>
          </div>

          {/* Skip Link */}
          <div className="absolute left-1/2 top-[750px] z-20 w-[279px] -translate-x-1/2">
            <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center">
              スキップする
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

