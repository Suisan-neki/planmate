import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

export default function EventView7() {
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
        <div className="absolute left-[148px] top-[57px] z-20 h-[16px] w-[84px] text-center">
          <p className="text-[12px] leading-[16px] font-semibold text-[#2C4364] tracking-[0.5px]">
            10月11日  (土)
          </p>
        </div>

        {/* Subtitle */}
        <div className="absolute left-[28px] top-[86px] z-20 h-[26px] w-[324px] text-center">
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)]">
            どこに興味がありますか？
          </p>
        </div>

        {/* Scrollable Content Area */}
        <div className="absolute inset-x-0 top-0 bottom-[125px] overflow-y-auto overflow-x-hidden">
          {/* Location Card 1 - ABC遊園地 */}
          <div className="absolute left-[19px] top-[121px] z-20 h-[288px] w-[337px] rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
            {/* Title */}
            <div className="absolute left-[15.74px] top-[8.58px] z-10 h-[34.33px] w-[312px] text-center">
              <p className="text-[24px] leading-[36px] font-semibold text-[#2C4364]">
                ABC遊園地
              </p>
            </div>

            {/* Image */}
            <div className="absolute left-[15.74px] top-[48.64px] z-10 h-[184.05px] w-[312px] overflow-hidden rounded-[20px]">
              <img
                src="/assets/event-view7-image1.png"
                alt="ABC遊園地"
                className="absolute object-cover object-center"
                style={{ 
                  left: '50%', 
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '346.26px',
                  height: '194.77px',
                  clipPath: 'inset(0 round 20px)'
                }}
              />
            </div>

            {/* Info Card */}
            <div className="absolute left-[12.89px] top-[200px] z-10 h-[73.43px] w-[313.85px] rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
              {/* Date and Weather */}
              <div className="absolute left-[48.14px] top-[10.97px] z-10 h-[11.36px] w-[159.74px]">
                <p className="text-[14px] leading-[20px] font-semibold text-[#969FAB] tracking-[0.1px]">
                  10月4日（土）天気予報：晴れ
                </p>
              </div>
              {/* Map Link */}
              <div className="absolute left-[48.14px] top-[47.21px] z-10 h-[11.36px] w-[159.74px]">
                <p className="text-[14px] leading-[20px] font-medium text-[rgba(44,67,100,0.6)] tracking-[0.1px]">
                  地図を見る
                </p>
              </div>
              {/* Map Icon */}
              <div className="absolute left-[15px] top-[27px] z-10 h-[23px] w-[23px]">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 0C5.15 0 0 5.15 0 11.5C0 17.85 11.5 23 11.5 23C11.5 23 23 17.85 23 11.5C23 5.15 17.85 0 11.5 0ZM11.5 15.5C9.29 15.5 7.5 13.71 7.5 11.5C7.5 9.29 9.29 7.5 11.5 7.5C13.71 7.5 15.5 9.29 15.5 11.5C15.5 13.71 13.71 15.5 11.5 15.5Z" fill="#222B59"/>
                </svg>
              </div>
              {/* Map Preview */}
              <div className="absolute left-[44px] top-[33px] z-10 h-[17px] w-[244px] overflow-hidden rounded-[4px]">
                <img
                  src="/assets/event-view7-map.png"
                  alt="地図"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Confirmed Button */}
              <div className="absolute left-[208.7px] top-[114.24px] z-10 h-[39.67px] w-[87.65px]">
                <div className="absolute inset-0 bg-[#00C3D0] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12px] leading-[16px] font-semibold text-white tracking-[0.5px]">
                    確認済み
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Location Card 2 - 噴水公園 */}
          <div className="absolute left-[17px] top-[425px] z-20 h-[288px] w-[337px] rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
            {/* Title */}
            <div className="absolute left-[15.74px] top-[8.58px] z-10 h-[34.33px] w-[312px] text-center">
              <p className="text-[24px] leading-[36px] font-semibold text-[#2C4364]">
                噴水公園
              </p>
            </div>

            {/* Image */}
            <div className="absolute left-[15.74px] top-[48.64px] z-10 h-[184.05px] w-[312px] overflow-hidden rounded-[20px]">
              <img
                src="/assets/event-view7-image1.png"
                alt="噴水公園"
                className="absolute object-cover object-center"
                style={{ 
                  left: '50%', 
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '346.26px',
                  height: '194.77px',
                  clipPath: 'inset(0 round 20px)'
                }}
              />
            </div>

            {/* Info Card */}
            <div className="absolute left-[12.89px] top-[200px] z-10 h-[73.43px] w-[313.85px] rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
              {/* Location */}
              <div className="absolute left-[48.14px] top-[10.97px] z-10 h-[11.36px] w-[159.74px]">
                <p className="text-[14px] leading-[20px] font-medium text-[#222B59] tracking-[0.1px]">
                  千葉県浦安市舞浜
                </p>
              </div>
              {/* Map Link */}
              <div className="absolute left-[48.14px] top-[47.21px] z-10 h-[11.36px] w-[159.74px]">
                <p className="text-[14px] leading-[20px] font-medium text-[rgba(44,67,100,0.6)] tracking-[0.1px]">
                  地図を見る
                </p>
              </div>
              {/* Map Icon */}
              <div className="absolute left-[15px] top-[27px] z-10 h-[23px] w-[23px]">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 0C5.15 0 0 5.15 0 11.5C0 17.85 11.5 23 11.5 23C11.5 23 23 17.85 23 11.5C23 5.15 17.85 0 11.5 0ZM11.5 15.5C9.29 15.5 7.5 13.71 7.5 11.5C7.5 9.29 9.29 7.5 11.5 7.5C13.71 7.5 15.5 9.29 15.5 11.5C15.5 13.71 13.71 15.5 11.5 15.5Z" fill="#222B59"/>
                </svg>
              </div>
              {/* Map Preview */}
              <div className="absolute left-[44px] top-[33px] z-10 h-[17px] w-[244px] overflow-hidden rounded-[4px]">
                <img
                  src="/assets/event-view7-map.png"
                  alt="地図"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Button 1 */}
          <div className="absolute left-[19px] top-[729px] z-20 h-[50px] w-[341px]">
            <div className="absolute inset-0 bg-[#2C4364] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="text-[16px] leading-[28px] font-semibold text-white">
                どちらにも興味がない
              </span>
            </button>
          </div>

          {/* Button 2 */}
          <div className="absolute left-[19px] top-[795px] z-20 h-[50px] w-[341px]">
            <div className="absolute inset-0 bg-[#2C4364] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="text-[16px] leading-[28px] font-semibold text-white">
                １つ目に似た場所を探す
              </span>
            </button>
          </div>

          {/* Button 3 */}
          <div className="absolute left-[19px] top-[860px] z-20 h-[50px] w-[341px]">
            <div className="absolute inset-0 bg-[#2C4364] rounded-[26px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="text-[16px] leading-[28px] font-semibold text-white">
                ２つ目に似た場所を探す
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

