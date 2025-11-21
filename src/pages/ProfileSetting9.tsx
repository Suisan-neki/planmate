import DeviceFrame from '@/components/layout/DeviceFrame'

export default function ProfileSetting9() {
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

        {/* Progress Bar */}
        <div className="absolute left-[21px] top-[83px] h-[30px] w-[331px] z-20">
          <div className="absolute bg-[#EAEFF1] h-[8px] left-[11px] right-0 rounded-[20px] top-1/2 -translate-y-1/2" />
          <div className="absolute bg-[#29BFC0] h-[8px] left-[11px] right-0 rounded-[20px] top-1/2 -translate-y-1/2 z-10" />
        </div>

        {/* Title (above the bar) */}
        <div className="absolute left-1/2 top-[53px] -translate-x-1/2">
          <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center">
            お疲れさまでした！
          </p>
        </div>

        {/* Image */}
        <div className="absolute left-1/2 top-[143px] -translate-x-1/2 -translate-x-[110px] w-[248px] h-[243px]">
          <img src="/assets/profile-setting9-image.png" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Message */}
        <div className="absolute left-1/2 top-[460px] -translate-x-1/2 w-[343px]">
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center whitespace-pre-wrap">
            素敵なプランをご提案しますね{'\n'}終わったらプッシュ通知でお知らせします！
          </p>
        </div>

        {/* Home Button */}
        <div className="absolute left-[25px] top-[550px]">
          <button
            className="h-[50px] w-[327px] rounded-[26px] bg-[#29BFC0] text-white text-[16px] font-semibold leading-[28px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]"
            onClick={() => (window as any).__setDevPage?.('dashboard')}
          >
            ホーム画面へ
          </button>
        </div>

        {/* Profile Setting Button */}
        <div className="absolute left-[25px] top-[620px]">
          <button
            className="h-[50px] w-[327px] rounded-[26px] border border-[#969FAB] bg-white text-[#2C4364] text-[16px] font-semibold leading-[28px]"
            onClick={() => (window as any).__setDevPage?.('dashboard')}
          >
            プロフィール設定へ
          </button>
        </div>

        {/* Home Indicator */}
        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-[134px] rounded-full bg-black" />
        </div>
      </div>
    </DeviceFrame>
  )
}
