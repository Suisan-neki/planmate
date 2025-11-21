import DeviceFrame from '@/components/layout/DeviceFrame'
import ModalBase from '@/components/layout/ModalBase'
import Icon from '@/components/atoms/Icon'

export default function EventView3() {
  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy"
        style={{ background: '#29BFC0' }}
      >
        {/* Header BG with ornament */}
        <div className="absolute inset-x-0 top-0 z-0 h-[280px] rounded-b-[28px]" style={{ background: 'inherit' }}>
          {/* Ornament */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/assets/event-view3-ornament.svg"
              alt=""
              className="absolute left-0 top-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="absolute inset-x-0 top-0 z-20 h-[280px] text-center text-white pointer-events-none flex flex-col items-center">
          <h1 className="absolute top-[41px] left-1/2 -translate-x-1/2 text-[24px] leading-[36px] font-semibold">
            おでかけプラン
          </h1>
        </div>

        {/* Image */}
        <div className="absolute left-[52px] top-[77px] z-30 h-[191px] w-[287px] overflow-hidden rounded-[20px]">
          <img
            src="/assets/event-view3-image.png"
            alt="おでかけプラン"
            className="absolute object-cover object-center"
            style={{ 
              left: '50%', 
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              clipPath: 'inset(0 round 20px)'
            }}
          />
        </div>

        {/* Modal Base */}
        <ModalBase
          className="absolute left-1/2 z-20 -translate-x-1/2 w-[375px] pl-[21px] pr-[17px] pt-8 rounded-t-none overflow-y-auto overflow-x-hidden"
          style={{ top: '280px', bottom: '0' }}
        >
          <div className="flex flex-col gap-[10px] pb-[125px]">
            {/* Plan Card 1 */}
            <div className="relative h-[116px] w-[337px] flex-shrink-0 rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
              {/* Title */}
              <div className="absolute top-[25px] text-[22px] leading-[28px] font-medium text-[#222B59]" style={{ left: '96.93px' }}>
                待機中
              </div>
              {/* Date */}
              <div className="absolute top-[59px] text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]" style={{ left: '96.93px' }}>
                11月1日（土）
              </div>
              {/* Edit icon background */}
              <div className="absolute top-[32px] flex-shrink-0 rounded-[20px] bg-[rgba(44,67,100,0.2)] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" style={{ left: '18.033px', width: '59.736px', height: '53px' }} />
              {/* Edit icon */}
              <div className="absolute flex-shrink-0 flex items-center justify-center" style={{ left: 'calc(18.033px + 59.736px / 2 - 18px)', top: 'calc(32px + 53px / 2 - 18px)', width: '36px', height: '36px', aspectRatio: '1/1' }}>
                <img src="/assets/icon-pencil.svg" alt="edit" className="w-full h-full" />
              </div>
              {/* Create button */}
              <div className="absolute left-[226px] top-[72px] flex-shrink-0" style={{ width: '94.676px', height: '25px' }}>
                <div className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    作成する
                  </span>
                </button>
              </div>
              {/* Condition button */}
              <div className="absolute left-[226px] top-[43px] flex-shrink-0" style={{ width: '94.676px', height: '25px' }}>
                <div className="absolute inset-0 bg-[#222B59] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    条件設定
                  </span>
                </button>
              </div>
            </div>

            {/* Plan Card 2 */}
            <div className="relative h-[116px] w-[337px] flex-shrink-0 rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
              {/* Title */}
              <div className="absolute top-[25px] text-[22px] leading-[28px] font-medium text-[#222B59]" style={{ left: '96.93px' }}>
                待機中
              </div>
              {/* Date */}
              <div className="absolute top-[59px] text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]" style={{ left: '96.93px' }}>
                11月1日（土）
              </div>
              {/* Edit icon background */}
              <div className="absolute top-[32px] flex-shrink-0 rounded-[20px] bg-[rgba(44,67,100,0.2)] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" style={{ left: '18.033px', width: '59.736px', height: '53px' }} />
              {/* Edit icon */}
              <div className="absolute flex-shrink-0 flex items-center justify-center" style={{ left: 'calc(18.033px + 59.736px / 2 - 18px)', top: 'calc(32px + 53px / 2 - 18px)', width: '36px', height: '36px', aspectRatio: '1/1' }}>
                <img src="/assets/icon-pencil.svg" alt="edit" className="w-full h-full" />
              </div>
              {/* Create button */}
              <div className="absolute left-[226px] top-[72px] flex-shrink-0" style={{ width: '94.676px', height: '25px' }}>
                <div className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    作成する
                  </span>
                </button>
              </div>
              {/* Condition button */}
              <div className="absolute left-[226px] top-[43px] flex-shrink-0" style={{ width: '94.676px', height: '25px' }}>
                <div className="absolute inset-0 bg-[#222B59] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    条件設定
                  </span>
                </button>
              </div>
            </div>

            {/* Plan Card 3 */}
            <div className="relative h-[116px] w-[337px] flex-shrink-0 rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
              {/* Title */}
              <div className="absolute top-[25px] text-[22px] leading-[28px] font-medium text-[#222B59]" style={{ left: '96.93px' }}>
                待機中
              </div>
              {/* Date */}
              <div className="absolute top-[59px] text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]" style={{ left: '96.93px' }}>
                11月1日（土）
              </div>
              {/* Edit icon background */}
              <div className="absolute top-[32px] flex-shrink-0 rounded-[20px] bg-[rgba(44,67,100,0.2)] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" style={{ left: '18.033px', width: '59.736px', height: '53px' }} />
              {/* Edit icon */}
              <div className="absolute flex-shrink-0 flex items-center justify-center" style={{ left: 'calc(18.033px + 59.736px / 2 - 18px)', top: 'calc(32px + 53px / 2 - 18px)', width: '36px', height: '36px', aspectRatio: '1/1' }}>
                <img src="/assets/icon-pencil.svg" alt="edit" className="w-full h-full" />
              </div>
              {/* Create button */}
              <div className="absolute left-[226px] top-[72px] flex-shrink-0" style={{ width: '94.676px', height: '25px' }}>
                <div className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    作成する
                  </span>
                </button>
              </div>
              {/* Condition button */}
              <div className="absolute left-[226px] top-[43px] flex-shrink-0" style={{ width: '94.676px', height: '25px' }}>
                <div className="absolute inset-0 bg-[#222B59] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    条件設定
                  </span>
                </button>
              </div>
            </div>

            {/* Plan Card 4 */}
            <div className="relative h-[116px] w-[337px] flex-shrink-0 rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
              {/* Title */}
              <div className="absolute top-[25px] text-[22px] leading-[28px] font-medium text-[#222B59]" style={{ left: '96.93px' }}>
                待機中
              </div>
              {/* Date */}
              <div className="absolute top-[59px] text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]" style={{ left: '96.93px' }}>
                11月1日（土）
              </div>
              {/* Edit icon background */}
              <div className="absolute top-[32px] flex-shrink-0 rounded-[20px] bg-[rgba(44,67,100,0.2)] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" style={{ left: '18.033px', width: '59.736px', height: '53px' }} />
              {/* Edit icon */}
              <div className="absolute flex-shrink-0 flex items-center justify-center" style={{ left: 'calc(18.033px + 59.736px / 2 - 18px)', top: 'calc(32px + 53px / 2 - 18px)', width: '36px', height: '36px', aspectRatio: '1/1' }}>
                <img src="/assets/icon-pencil.svg" alt="edit" className="w-full h-full" />
              </div>
              {/* Create button */}
              <div className="absolute left-[226px] top-[72px] flex-shrink-0" style={{ width: '94.676px', height: '25px' }}>
                <div className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    作成する
                  </span>
                </button>
              </div>
              {/* Condition button */}
              <div className="absolute left-[226px] top-[43px] flex-shrink-0" style={{ width: '94.676px', height: '25px' }}>
                <div className="absolute inset-0 bg-[#222B59] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    条件設定
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ModalBase>

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
