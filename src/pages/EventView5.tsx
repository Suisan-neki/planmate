import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

export default function EventView5() {
  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy"
        style={{ background: '#29BFC0' }}
      >
        {/* Modal Base */}
        <div className="absolute inset-x-0 top-0 h-[771px] rounded-[30px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" style={{ background: '#F3F6F8' }} />

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

        {/* Subtitle */}
        <div className="absolute left-[31px] top-[57px] z-20 h-[26px] w-[324px] text-center">
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)]">
            だれと過ごしたいですか？
          </p>
        </div>

        {/* Date */}
        <div className="absolute left-[154px] top-[115px] z-20 h-[16px] w-[84px] text-center">
          <p className="text-[12px] leading-[16px] font-semibold text-[#2C4364] tracking-[0.5px]">
            10月11日  (土)
          </p>
        </div>

        {/* Tag Button - パートナー */}
        <div className="absolute left-[48px] top-[166px] z-20 h-[36px] w-[155px]">
          <div className="absolute inset-0 border border-[#969FAB] rounded-[30px] bg-transparent flex items-center justify-center px-[17px]">
            <span className="text-[13px] leading-[21px] font-medium text-[#2C4364]">
              パートナー
            </span>
          </div>
        </div>

        {/* Tag Button - 子供 (Selected) */}
        <div className="absolute left-[216px] top-[166px] z-20 h-[36px] w-[91px]">
          <div className="absolute inset-0 border border-[#969FAB] rounded-[30px] flex items-center justify-center px-[17px]" style={{ background: '#28C0C1' }}>
            <span className="text-[13px] leading-[21px] font-bold text-white">
              子供
            </span>
          </div>
        </div>

        {/* Tag Button - 友人 */}
        <div className="absolute left-[50px] top-[216px] z-20 h-[36px] w-[91px]">
          <div className="absolute inset-0 border border-[#969FAB] rounded-[30px] bg-transparent flex items-center justify-center px-[17px]">
            <span className="text-[13px] leading-[21px] font-medium text-[#2C4364]">
              友人
            </span>
          </div>
        </div>

        {/* Tag Button - 親 */}
        <div className="absolute left-[157px] top-[216px] z-20 h-[36px] w-[91px]">
          <div className="absolute inset-0 border border-[#969FAB] rounded-[30px] bg-transparent flex items-center justify-center px-[17px]">
            <span className="text-[13px] leading-[21px] font-medium text-[#2C4364]">
              親
            </span>
          </div>
        </div>

        {/* Next Button */}
        <div className="absolute left-[23px] top-[344px] z-20 h-[50px] w-[327px]">
          <div className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="text-[16px] leading-[28px] font-semibold text-white">
              次へ
            </span>
          </button>
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
          <div
            className="absolute left-1/2 top-[17px] z-40 h-[56px] w-[59px] flex items-center justify-center shadow-[0px_26px_60px_rgba(141,155,170,0.05)]"
            style={{ left: '50%', transform: 'translateX(-50%)', borderRadius: '50%' }}
          >
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
