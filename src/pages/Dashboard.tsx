import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

export default function Dashboard() {
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
          {/* Top Card */}
          <div className="absolute left-[10px] top-[10px] z-20 h-[273px] w-[355px] rounded-[30px] bg-[#29BFC0] overflow-hidden">
            {/* Greeting */}
            <div className="absolute left-[66px] top-[44px] z-10 h-[30px] w-[222px] text-center">
              <p className="text-[18px] leading-[30px] font-bold text-white">
                こんにちは、username！
              </p>
            </div>

            {/* Section Title */}
            <div className="absolute left-[112px] top-[88px] z-10 h-[28px] w-[128px]">
              <p className="text-[16px] leading-[28px] font-bold text-white">
                今週の楽しい予定
              </p>
            </div>

            {/* Notification Icon */}
            <div className="absolute right-[23px] top-[31px] z-10 h-[25px] w-[21px]">
              <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 0C7.46243 0 5 2.46243 5 5.5V11.5C5 13.1569 4.15685 14.6569 2.82843 15.5858C2.29711 15.9763 2 16.5763 2 17.2V19C2 19.5523 2.44772 20 3 20H18C18.5523 20 19 19.5523 19 19V17.2C19 16.5763 18.7029 15.9763 18.1716 15.5858C16.8431 14.6569 16 13.1569 16 11.5V5.5C16 2.46243 13.5376 0 10.5 0Z" fill="white"/>
                <circle cx="16" cy="5" r="4" fill="#F2994A"/>
              </svg>
            </div>

            {/* Event Card - ABC遊園地 */}
            <div className="absolute left-[8px] top-[128px] z-10 h-[127px] w-[337px] rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
              {/* Image */}
              <div className="absolute left-[18px] top-[35px] z-10 h-[58px] w-[60px] overflow-hidden rounded-[10px]">
                <img
                  src="/assets/event-view7-image1.png"
                  alt="ABC遊園地"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title */}
              <div className="absolute left-[97px] top-[27px] z-10 h-[31px] w-[232px]">
                <p className="text-[22px] leading-[28px] font-medium text-[#222B59]">
                  ABC遊園地
                </p>
              </div>

              {/* Date and Weather */}
              <div className="absolute left-[97px] top-[65px] z-10 h-[40px] w-[128px]">
                <p className="text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]">
                  10月4日（土）
                </p>
                <p className="text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]">
                  天気予報：晴れ
                </p>
              </div>

              {/* Confirmed Button */}
              <div className="absolute left-[225px] top-[79px] z-10 h-[27px] w-[95px]">
                <div className="absolute inset-0 bg-[#00C3D0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    確認済み
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="absolute left-[296px] top-[285px] z-20 h-[26px] w-[55px] text-right">
            <p className="text-[14px] leading-[26px] font-medium text-[#29BFC0]">
              View All
            </p>
          </div>

          {/* Section Title - あなたのレビュー待ち */}
          <div className="absolute left-[18px] top-[328px] z-20 h-[30px] w-[180px]">
            <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364]">
              あなたのレビュー待ち
            </p>
          </div>

          {/* View More Link */}
          <div className="absolute left-[278px] top-[487px] z-20 h-[26px] w-[73px] text-right">
            <p className="text-[14px] leading-[26px] font-medium text-[#29BFC0]">
              View More
            </p>
          </div>

          {/* Event Card - サマーランド */}
          <div className="absolute left-[14px] top-[358px] z-20 h-[127px] w-[351px] rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
            {/* Image */}
            <div className="absolute left-[19px] top-[35px] z-10 h-[58px] w-[62px] overflow-hidden rounded-[10px]">
              <img
                src="/assets/event-view7-image1.png"
                alt="サマーランド"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="absolute left-[101px] top-[27px] z-10 h-[31px] w-[242px]">
              <p className="text-[22px] leading-[28px] font-medium text-[#222B59]">
                サマーランド
              </p>
            </div>

            {/* Date */}
            <div className="absolute left-[101px] top-[65px] z-10 h-[20px] w-[134px]">
              <p className="text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]">
                10月5日（日）
              </p>
            </div>

            {/* Action Required Button */}
            <div className="absolute left-[235px] top-[79px] z-10 h-[27px] w-[99px]">
              <div className="absolute inset-0 bg-[#F2994A] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                  要対応
                </span>
              </button>
            </div>
          </div>

          {/* Section Title - 今月の予算使用状況 */}
          <div className="absolute left-[18px] top-[530px] z-20 h-[30px] w-[162px]">
            <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364]">
              今月の予算使用状況
            </p>
          </div>

          {/* View Detail Link */}
          <div className="absolute left-[273px] top-[661px] z-20 h-[26px] w-[78px] text-right">
            <p className="text-[14px] leading-[26px] font-medium text-[#29BFC0]">
              View Detail
            </p>
          </div>

          {/* Budget Card */}
          <div className="absolute left-[12px] top-[565px] z-40 h-[94px] w-[352px] rounded-[20px] bg-white shadow-[0px_-3px_70px_rgba(141,155,170,0.18)]">
            {/* Title */}
            <div className="absolute left-[15px] top-[4px] z-10 h-[26px] w-[236px]">
              <p className="text-[18px] leading-[26px] font-semibold text-[#2C4364]">
                支出予定額： ￥35,000
              </p>
            </div>

            {/* Progress Bar Background */}
            <div className="absolute left-[15px] right-[40px] top-[39px] h-[8px] rounded-[20px] bg-[#EAEFF1]" />

            {/* Progress Bar */}
            <div className="absolute left-[15px] top-[39px] h-[8px] w-[205.5px]">
              <img
                src="/assets/home-progress-bar.png"
                alt=""
                className="h-full w-full"
              />
            </div>

            {/* Percentage */}
            <div className="absolute right-[11px] top-[34px] z-10 h-[18px] w-[26px] text-right">
              <p className="text-[10px] leading-[18px] font-medium text-[#2C4364]">
                50%
              </p>
            </div>

            {/* Remaining Budget */}
            <div className="absolute left-[15px] top-[61px] z-10 h-[19px] w-[248px]">
              <p className="text-[14px] leading-[1.2] font-medium text-[#969FAB]">
                残りの予算：￥15,000 / ￥50,000
              </p>
            </div>
          </div>

          {/* Spacer for bottom navigation */}
          <div className="h-[125px]" />
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-[125px] w-[375px]">

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
