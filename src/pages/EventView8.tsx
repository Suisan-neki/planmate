import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

export default function EventView8() {
  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy"
        style={{ background: '#29BFC0' }}
      >
        {/* Modal Base */}
        <div className="absolute inset-x-0 top-0 h-[974px] rounded-[30px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" style={{ background: '#F3F6F8' }} />

        {/* Status Bar */}
        <div className="absolute inset-x-0 top-0 z-30 h-[44px]">
          <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.662px]">
            <img src="/assets/status-group3.png" alt="" className="h-full w-full" />
          </div>
          <div className="absolute h-[21px] left-[21px] top-[13px] w-[54px]">
            <img src="/assets/status-time.png" alt="" className="h-full w-full" />
          </div>
        </div>

        {/* Back Arrow */}
        <div className="absolute left-[18px] top-[49px] z-30 h-[25px] w-[25px]">
          <Icon name="arrow" className="h-full w-full" style={{ filter: 'brightness(0) invert(1)' }} />
        </div>

        {/* Date */}
        <div className="absolute left-[148px] top-[53px] z-20 h-[16px] w-[84px] text-center">
          <p className="text-[12px] leading-[16px] font-semibold text-[#2C4364] tracking-[0.5px]">
            10月11日  (土)
          </p>
        </div>

        {/* Scrollable Content Area */}
        <div className="absolute inset-x-0 top-0 bottom-[125px] overflow-y-auto overflow-x-hidden">
          {/* Loading Animation */}
          <div className="absolute left-[61px] top-[137px] z-20 h-[250px] w-[250px]">
            {/* Loading Circle */}
            <img
              src="/assets/event-view8-loading.png"
              alt=""
              className="absolute inset-0 h-full w-full"
            />
            
            {/* Lightbulb Icon */}
            <div className="absolute left-[75px] top-[47px] h-[148.1px] w-[100px]">
              <img
                src="/assets/event-view8-lightbulb.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Loading Text */}
          <div className="absolute left-[104px] top-[447px] z-20 h-[60px] w-[162px] text-center">
            <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364]">
              あなたにぴったりな
            </p>
            <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364]">
              プランを作成中...
            </p>
          </div>

          {/* View Plan Button (Disabled) */}
          <div className="absolute left-[24px] top-[579px] z-20 h-[50px] w-[327px]">
            <div className="absolute inset-0 bg-[rgba(44,67,100,0.1)] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
            <button className="absolute inset-0 flex items-center justify-center" disabled>
              <span className="text-[16px] leading-[28px] font-semibold text-[#969FAB]">
                プランをみる
              </span>
            </button>
          </div>

          {/* Return Home Button */}
          <div className="absolute left-[24px] top-[649px] z-20 h-[50px] w-[327px]">
            <div className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="text-[16px] leading-[28px] font-semibold text-white">
                ホームにもどる
              </span>
            </button>
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

