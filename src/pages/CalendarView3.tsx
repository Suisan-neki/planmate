import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

export default function CalendarView3() {
  const weekDays = ['月', '火', '水', '木', '金', '土', '日']
  
  // 2025年10月のカレンダー（1日は水曜日から始まる）
  const calendarData = [
    // 第1週（水曜日から）
    { day: null, x: 0, y: 0 }, // 月
    { day: null, x: 0, y: 0 }, // 火
    { day: 1, x: 142, y: 166 },
    { day: 2, x: 184, y: 166 },
    { day: 3, x: 229, y: 166 },
    { day: 4, x: 270, y: 166 },
    { day: 5, x: 312, y: 166 },
    // 第2週
    { day: 6, x: 58, y: 201 },
    { day: 7, x: 99, y: 201 },
    { day: 8, x: 140, y: 201 },
    { day: 9, x: 183, y: 201 },
    { day: 10, x: 226, y: 201, isSelected: true }, // 選択されている日（太字・白文字）
    { day: 11, x: 270, y: 201 },
    { day: 12, x: 310, y: 201 },
    // 第3週
    { day: 13, x: 57, y: 238 },
    { day: 14, x: 95, y: 238 },
    { day: 15, x: 137, y: 238 },
    { day: 16, x: 181, y: 238 },
    { day: 17, x: 226, y: 238 },
    { day: 18, x: 267, y: 238 },
    { day: 19, x: 310, y: 238 },
    // 第4週
    { day: 20, x: 54, y: 275 },
    { day: 21, x: 96, y: 275 },
    { day: 22, x: 136, y: 274 },
    { day: 23, x: 179, y: 274 },
    { day: 24, x: 221, y: 273 },
    { day: 25, x: 265, y: 273 },
    { day: 26, x: 308, y: 273 },
    // 第5週
    { day: 27, x: 55, y: 312 },
    { day: 28, x: 92, y: 312 },
    { day: 29, x: 136, y: 312 },
    { day: 30, x: 178, y: 312 },
    { day: 31, x: 224, y: 312 },
    { day: 1, x: 271, y: 312, isNextMonth: true }, // 11月
    { day: 2, x: 311, y: 312, isNextMonth: true }, // 11月
  ]

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

        {/* Calendar Container */}
        <div className="absolute left-[29px] top-[60px] w-[319px] h-[383px]">
          {/* Month/Year Title */}
          <div className="absolute left-[159.5px] top-0 translate-x-[-50%]">
            <p className="text-[22px] leading-[35px] font-semibold text-[#2C4364] text-center whitespace-nowrap">
              10月 2025
            </p>
          </div>

          {/* Previous Month Arrow */}
          <div className="absolute left-0 top-[6px] w-[24px] h-[24px] overflow-clip">
            <div className="absolute inset-[20.83%_33.33%_20.83%_37.5%]">
              <div className="absolute inset-[-7.14%_-14.29%]">
                <img src="/assets/icon-chevron-left.svg" alt="" className="block max-w-none size-full rotate-180" />
              </div>
            </div>
          </div>

          {/* Next Month Arrow */}
          <div className="absolute left-[295px] top-[6px] w-[24px] h-[24px] overflow-clip">
            <div className="absolute inset-[20.83%_33.33%_20.83%_37.5%]">
              <div className="absolute inset-[-7.14%_-14.29%]">
                <img src="/assets/icon-chevron-right.svg" alt="" className="block max-w-none size-full" />
              </div>
            </div>
          </div>

          {/* Week Day Headers */}
          <div className="absolute left-[27px] top-[64px] w-[265px] flex justify-between">
            {weekDays.map((day, index) => (
              <div key={index} className="w-[14px]">
                <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center">
                  {day}
                </p>
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          {calendarData.map((item, index) => {
            if (item.day === null) return null
            
            return (
              <div
                key={index}
                className="absolute z-10"
                style={{ left: `${item.x - 29}px`, top: `${item.y - 60}px` }}
              >
                {/* Selected Day Background (10日) */}
                {item.isSelected && (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-black" />
                )}
                
                {/* Day Number */}
                <p
                  className={`text-[16px] leading-[26px] text-center relative z-10 ${
                    item.isSelected
                      ? 'font-bold text-white'
                      : item.isNextMonth
                      ? 'font-normal text-[rgba(44,67,100,0.6)]'
                      : 'font-normal text-[#2C4364]'
                  }`}
                >
                  {item.day}
                </p>
              </div>
            )
          })}

          {/* Birthday Star Icon (20日) */}
          <div className="absolute left-[15px] top-[207px] w-[40px] h-[40px] flex items-center justify-center pointer-events-none z-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2L24.49 15.26L38.78 15.26L27.15 23.48L31.64 36.74L20 28.52L8.36 36.74L12.85 23.48L1.22 15.26L15.51 15.26L20 2Z" fill="rgba(255,223,189,0.79)"/>
            </svg>
          </div>

          {/* Planned Holiday Circles (ピンク) */}
          <div className="absolute left-[274px] top-[139px] w-[30px] h-[30px] rounded-full bg-[rgba(246,203,213,1.0)] pointer-events-none z-0" />
          <div className="absolute left-[232px] top-[139px] w-[30px] h-[30px] rounded-full bg-[rgba(246,203,213,1.0)] pointer-events-none z-0" />
          <div className="absolute left-[231px] top-[212px] w-[30px] h-[30px] rounded-full bg-[rgba(246,203,213,1.0)] pointer-events-none z-0" />

          {/* Unplanned Holiday Circles (青) */}
          <div className="absolute left-[274px] top-[176px] w-[30px] h-[30px] rounded-full bg-[rgba(196,220,255,1.0)] pointer-events-none z-0" />
          <div className="absolute left-[274px] top-[212px] w-[30px] h-[30px] rounded-full bg-[rgba(196,220,255,1.0)] pointer-events-none z-0" />
        </div>

        {/* No Plans Message */}
        <p className="absolute left-[186px] top-[376px] text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center translate-x-[-50%] whitespace-nowrap">
          予定はありません
        </p>

        {/* Create Plan Button */}
        <div className="absolute left-[29px] top-[451px] w-[327px] h-[50px]">
          <button className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)] flex items-center justify-center">
            <p className="text-[16px] leading-[28px] font-semibold text-white text-center">
              プランを作成する
            </p>
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
          <div className="absolute left-1/2 top-[17px] z-40 h-[56px] w-[59px] flex items-center justify-center shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" style={{ left: '50%', transform: 'translateX(-50%)', borderRadius: '50%' }}>
            <svg width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <ellipse cx="29.5" cy="28" rx="29.5" ry="28" fill="#29BFC0"/>
            </svg>
            <Icon name="plus" className="h-[30px] w-[31px] relative z-10" />
          </div>

          {/* Home icon */}
          <div className="absolute left-[45px] top-[53px] h-[26px] w-[26px]">
            <img src="/assets/home-icon.svg" alt="home" className="h-full w-full opacity-20" />
          </div>

          {/* List icon indicator (Vector - 0) */}
          <div className="absolute left-[104px] bottom-[47px] h-[24px] w-[24px] flex items-center justify-center opacity-20">
            <svg width="24" height="24" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5ZM1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15C2.32843 15 3 14.3284 3 13.5C3 12.6716 2.32843 12 1.5 12ZM18 6H6C5.58579 6 5.25 6.33579 5.25 6.75V8.25C5.25 8.66421 5.58579 9 6 9H18C18.4142 9 18.75 8.66421 18.75 8.25V6.75C18.75 6.33579 18.4142 6 18 6ZM18 0H6C5.58579 0 5.25 0.335786 5.25 0.75V2.25C5.25 2.66421 5.58579 3 6 3H18C18.4142 3 18.75 2.66421 18.75 2.25V0.75C18.75 0.335786 18.4142 0 18 0ZM18 12H6C5.58579 12 5.25 12.3358 5.25 12.75V14.25C5.25 14.6642 5.58579 15 6 15H18C18.4142 15 18.75 14.6642 18.75 14.25V12.75C18.75 12.3358 18.4142 12 18 12Z" fill="#2C4364"/>
            </svg>
          </div>

          {/* Calendar icon (active) */}
          <div className="absolute right-[89px] top-[52px] h-[28px] w-[29px]">
            <Icon name="calendar" className="h-full w-full" />
          </div>

          {/* User icon */}
          <div className="absolute right-[20px] top-[52px] h-[28px] w-[29px]">
            <Icon name="user" className="h-full w-full opacity-20" />
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
