import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

export default function AfterEvent1() {
  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy"
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

        {/* Scrollable Content Area */}
        <div className="absolute inset-x-0 top-0 bottom-[125px] overflow-y-auto overflow-x-hidden">
          {/* Back Button */}
          <div className="absolute left-[18px] top-[49px] z-30 h-[25px] w-[25px]">
            <Icon name="arrow" className="h-full w-full" />
          </div>

          {/* Title */}
          <div className="absolute left-[199px] top-[74px] z-20 h-[30px] w-[234px] -translate-x-1/2">
            <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center">
              今日も一日お疲れ様でした！
            </p>
          </div>

          {/* Description */}
          <div className="absolute left-1/2 top-[140px] z-20 h-[96px] w-[290px] -translate-x-1/2">
            <p className="text-[14px] leading-[16px] font-semibold text-[#2C4364] text-center tracking-[0.5px]">
              本日のプランはいかがでしたか？
              <br />
              <br />
              <span className="font-normal">フィードバックで次回のプランニングを</span>
              <br />
              <span className="font-normal">よりあなたに合ったものにする事ができます</span>
              <br />
              <br />
              <br />
            </p>
          </div>

          {/* Event Card */}
          <div className="absolute left-[21px] top-[233px] z-20 h-[116px] w-[337px] rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
            {/* Image */}
            <div className="absolute left-[18px] top-[32px] z-10 h-[53px] w-[60px] overflow-hidden rounded-[10px]">
              <img
                src="/assets/event-view7-image1.png"
                alt="ABC遊園地"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="absolute left-[97px] top-[32px] z-10 h-[28px] w-[232px]">
              <p className="text-[22px] leading-[28px] font-medium text-[#222B59]">
                ABC遊園地
              </p>
            </div>

            {/* Date */}
            <div className="absolute left-[97px] top-[65px] z-10 h-[20px] w-[134px]">
              <p className="text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]">
                10月4日（土）
              </p>
            </div>
          </div>

          {/* Spotter Icon */}
          <div className="absolute left-[24px] top-[425px] z-30 h-[8px] w-[8px]">
            <img src="/assets/spotter.svg" alt="" className="h-full w-full" />
          </div>

          {/* Section Labels */}
          <div className="absolute left-[103px] top-[371px] z-20 h-[20px] w-[173px]">
            <p className="text-[14px] leading-[20px] font-medium text-[#222B59] text-center tracking-[0.1px]">
              総合評価
            </p>
          </div>

          {/* Star Rating */}
          <div className="absolute left-[64px] top-[400px] z-20 h-[38px] w-[247px] flex items-center gap-[11px]">
            {/* Star 1 */}
            <div className="h-[38px] w-[40px] flex-shrink-0">
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24.49 13.26L38.78 13.26L27.15 21.48L31.64 34.74L20 26.52L8.36 34.74L12.85 21.48L1.22 13.26L15.51 13.26L20 0Z" fill="rgba(242, 153, 74, 0.6)"/>
              </svg>
            </div>
            {/* Star 2 */}
            <div className="h-[38px] w-[40px] flex-shrink-0">
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24.49 13.26L38.78 13.26L27.15 21.48L31.64 34.74L20 26.52L8.36 34.74L12.85 21.48L1.22 13.26L15.51 13.26L20 0Z" fill="rgba(44, 67, 100, 0.2)"/>
              </svg>
            </div>
            {/* Star 3 */}
            <div className="h-[38px] w-[40px] flex-shrink-0">
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24.49 13.26L38.78 13.26L27.15 21.48L31.64 34.74L20 26.52L8.36 34.74L12.85 21.48L1.22 13.26L15.51 13.26L20 0Z" fill="rgba(44, 67, 100, 0.2)"/>
              </svg>
            </div>
            {/* Star 4 */}
            <div className="h-[38px] w-[40px] flex-shrink-0">
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24.49 13.26L38.78 13.26L27.15 21.48L31.64 34.74L20 26.52L8.36 34.74L12.85 21.48L1.22 13.26L15.51 13.26L20 0Z" fill="rgba(44, 67, 100, 0.2)"/>
              </svg>
            </div>
            {/* Star 5 */}
            <div className="h-[38px] w-[40px] flex-shrink-0">
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24.49 13.26L38.78 13.26L27.15 21.48L31.64 34.74L20 26.52L8.36 34.74L12.85 21.48L1.22 13.26L15.51 13.26L20 0Z" fill="rgba(44, 67, 100, 0.2)"/>
              </svg>
            </div>
          </div>

          <div className="absolute left-[103px] top-[468px] z-20 h-[20px] w-[173px]">
            <p className="text-[14px] leading-[20px] font-medium text-[#222B59] text-center tracking-[0.1px]">
              良かったところ
            </p>
          </div>

          <div className="absolute left-[105px] top-[543.82px] z-20 h-[20px] w-[173px]">
            <p className="text-[14px] leading-[20px] font-medium text-[#222B59] text-center tracking-[0.1px]">
              改善したいところ
            </p>
          </div>

          <div className="absolute left-[101px] top-[618.64px] z-20 h-[20px] w-[173px]">
            <p className="text-[14px] leading-[20px] font-medium text-[#222B59] text-center tracking-[0.1px]">
              利用金額
            </p>
          </div>

          {/* Input Fields */}
          <div className="absolute left-[47px] top-[493px] z-20 h-[34px] w-[281px] rounded-[15px] border border-[#969FAB] bg-white px-[17px] py-[1px] flex items-center">
            <p className="text-[13px] leading-[21px] font-medium text-[rgba(44,67,100,0.6)]">
              自由に記入してください
            </p>
          </div>

          <div className="absolute left-[47px] top-[567.82px] z-20 h-[34px] w-[281px] rounded-[15px] border border-[#969FAB] bg-white px-[17px] py-[1px] flex items-center">
            <p className="text-[13px] leading-[21px] font-medium text-[rgba(44,67,100,0.6)]">
              自由に記入してください
            </p>
          </div>

          <div className="absolute left-[48px] top-[642.64px] z-20 h-[34px] w-[281px] rounded-[15px] border border-[#969FAB] bg-white px-[17px] py-[1px] flex items-center">
            <p className="text-[13px] leading-[21px] font-medium text-[rgba(44,67,100,0.6)]">
              自由に記入してください
            </p>
          </div>

          {/* Next Button */}
          <div className="absolute left-[28px] top-[720px] z-30 h-[50px] w-[327px]">
            <div className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
            <button
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-[16px] leading-[28px] font-semibold text-white">
                次へ
              </span>
            </button>
          </div>

          {/* Skip Link */}
          <div className="absolute left-[191.5px] top-[796px] z-30 w-[279px] -translate-x-1/2">
            <p
              className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center cursor-pointer"
            >
              スキップする
            </p>
          </div>

          {/* Spacer for bottom navigation */}
          <div className="h-[125px]" />
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-[125px] w-[375px]">
          {/* Navbar base */}
          <div className="absolute inset-0">
            {/* White navbar background */}
            <div className="absolute inset-x-0 bottom-0 h-[102px] rounded-t-[25px] bg-white shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              {/* Home indicator */}
              <div className="absolute bottom-0 left-1/2 h-[5px] w-[139px] -translate-x-1/2 rounded-full bg-black" />
            </div>
          </div>

          {/* Plus button - ellipse shape (59x56) - centered */}
          <div className="absolute left-1/2 top-[17px] z-40 h-[56px] w-[59px] flex items-center justify-center shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" style={{ left: '50%', transform: 'translateX(-50%)', borderRadius: '50%' }}>
            <svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <ellipse cx="29.5" cy="28" rx="29.5" ry="28" fill="#29BFC0"/>
            </svg>
            <Icon name="plus" className="h-[30px] w-[31px] relative z-10" />
          </div>

          {/* Home icon */}
          <div className="absolute left-[45px] top-[53px] h-[26px] w-[26px]">
            <img src="/assets/home-icon.svg" alt="home" className="h-full w-full" />
          </div>

          {/* Home icon indicator (Vector - 0) */}
          <div className="absolute left-[104px] bottom-[47px] h-[24px] w-[24px] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5ZM1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15C2.32843 15 3 14.3284 3 13.5C3 12.6716 2.32843 12 1.5 12ZM18 6H6C5.58579 6 5.25 6.33579 5.25 6.75V8.25C5.25 8.66421 5.58579 9 6 9H18C18.4142 9 18.75 8.66421 18.75 8.25V6.75C18.75 6.33579 18.4142 6 18 6ZM18 0H6C5.58579 0 5.25 0.335786 5.25 0.75V2.25C5.25 2.66421 5.58579 3 6 3H18C18.4142 3 18.75 2.66421 18.75 2.25V0.75C18.75 0.335786 18.4142 0 18 0ZM18 12H6C5.58579 12 5.25 12.3358 5.25 12.75V14.25C5.25 14.6642 5.58579 15 6 15H18C18.4142 15 18.75 14.6642 18.75 14.25V12.75C18.75 12.3358 18.4142 12 18 12Z" fill="#2C4364"/>
            </svg>
          </div>

          {/* Calendar icon */}
          <div className="absolute right-[89px] top-[52px] h-[28px] w-[29px]">
            <Icon name="calendar" className="h-full w-full opacity-20" />
          </div>

          {/* User icon */}
          <div className="absolute right-[20px] top-[52px] h-[28px] w-[29px]">
            <Icon name="user" className="h-full w-full opacity-20" />
          </div>
        </div>

        {/* Home indicator */}
        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-28 rounded-full" style={{ backgroundColor: '#000000' }} />
        </div>
      </div>
    </DeviceFrame>
  )
}
