import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

export default function ProfilePersonalSettingView1() {
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

        {/* Back Arrow */}
        <div className="absolute left-[12px] top-[54px] w-[25px] h-[25px]">
          <img src="/assets/icon-arrow.svg" alt="" className="h-full w-full" />
        </div>

        {/* User Icon */}
        <div className="absolute left-1/2 top-[113px] -translate-x-1/2 w-[30.333px] h-[39px]" style={{ flexShrink: 0 }}>
          <img src="/assets/profile-personal-setting-view1-user-icon.svg" alt="" className="h-full w-full" />
        </div>

        {/* Username */}
        <p className="absolute left-1/2 top-[153px] -translate-x-1/2 text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center whitespace-nowrap">
          zaralarson12
        </p>

        {/* Section Title: 個人設定 */}
        <p className="absolute left-[31px] top-[198px] text-[13px] leading-[22px] font-medium text-[rgba(44,67,100,0.6)]">
          個人設定
        </p>

        {/* Personal Settings Form */}
        <div className="absolute left-[24px] top-[218px] w-[327px] h-[208px]" style={{ flexShrink: 0 }}>
          {/* Form Base */}
          <div className="absolute inset-0 bg-white rounded-[30px] shadow-[0px_26px_60px_0px_rgba(141,155,170,0.05)]" />

          {/* User Info Row */}
          <div className="absolute left-0 top-[11px] w-full h-[32px] flex items-center">
            <div className="absolute left-[19px] w-[25px] h-[25px] shrink-0 flex items-center justify-center">
              <img src="/assets/profile-personal-setting-view1-frame.svg" alt="" className="w-full h-full object-contain" style={{ flexShrink: 0 }} />
            </div>
            <p className="absolute left-[57px] text-[13px] leading-[22px] font-medium text-[#2C4364]">
              ユーザー情報
            </p>
            <div className="absolute right-[11px] w-[28px] h-[28px] flex items-center justify-center">
              <Icon name="chevron-right" className="h-[15px] w-[15px]" />
            </div>
          </div>

          {/* Divider Line */}
          <div className="absolute left-[57px] top-[43px] w-[270px] h-[1px] bg-[rgba(44,67,100,0.1)]" />

          {/* Outing Members Row */}
          <div className="absolute left-0 top-[51px] w-full h-[32px] flex items-center">
            <div className="absolute left-[19px] w-[25px] h-[18.279px] shrink-0 flex items-center justify-center" style={{ aspectRatio: '25.00/18.28' }}>
              <img src="/assets/profile-personal-setting-view1-group1.svg" alt="" className="w-full h-full object-contain" style={{ flexShrink: 0 }} />
            </div>
            <p className="absolute left-[57px] text-[13px] leading-[22px] font-medium text-[#2C4364]">
              お出かけメンバー
            </p>
            <div className="absolute right-[11px] w-[28px] h-[28px] flex items-center justify-center">
              <Icon name="chevron-right" className="h-[15px] w-[15px]" />
            </div>
          </div>

          {/* Divider Line */}
          <div className="absolute left-[57px] top-[85px] w-[270px] h-[1px] bg-[rgba(44,67,100,0.1)]" />

          {/* Favorite Spots Row */}
          <div className="absolute left-0 top-[93px] w-full h-[32px] flex items-center">
            <div className="absolute left-[19px] w-[25px] h-[18.279px] shrink-0 flex items-center justify-center" style={{ aspectRatio: '25.00/18.28' }}>
              <img src="/assets/profile-personal-setting-view1-group2.svg" alt="" className="w-full h-full object-contain" style={{ flexShrink: 0 }} />
            </div>
            <p className="absolute left-[57px] text-[13px] leading-[22px] font-medium text-[#2C4364]">
              お気に入りスポット・アクティビティ
            </p>
            <div className="absolute right-[11px] w-[28px] h-[28px] flex items-center justify-center">
              <Icon name="chevron-right" className="h-[15px] w-[15px]" />
            </div>
          </div>

          {/* Divider Line */}
          <div className="absolute left-[57px] top-[128px] w-[270px] h-[1px] bg-[rgba(44,67,100,0.1)]" />

          {/* Notification Settings Row */}
          <div className="absolute left-0 top-[136px] w-full h-[32px] flex items-center">
            <div className="absolute left-[19px] w-[25px] h-[25px] shrink-0 flex items-center justify-center">
              <img src="/assets/profile-personal-setting-view1-bell-icon.svg" alt="" className="w-full h-full object-contain" style={{ flexShrink: 0 }} />
            </div>
            <p className="absolute left-[57px] text-[13px] leading-[22px] font-medium text-[#2C4364]">
              通知設定
            </p>
            <div className="absolute right-[11px] w-[28px] h-[28px] flex items-center justify-center">
              <Icon name="chevron-right" className="h-[15px] w-[15px]" />
            </div>
          </div>

          {/* Divider Line */}
          <div className="absolute left-[57px] top-[166px] w-[270px] h-[1px] bg-[rgba(44,67,100,0.1)]" />

          {/* Subscription Row */}
          <div className="absolute left-0 top-[174px] w-full h-[32px] flex items-center">
            <div className="absolute left-[19px] w-[25px] h-[18.279px] shrink-0 flex items-center justify-center" style={{ aspectRatio: '25.00/18.28' }}>
              <img src="/assets/profile-personal-setting-view1-group4.svg" alt="" className="w-full h-full object-contain" style={{ flexShrink: 0 }} />
            </div>
            <p className="absolute left-[57px] text-[13px] leading-[22px] font-medium text-[#2C4364]">
              購読
            </p>
            <div className="absolute right-[11px] w-[28px] h-[28px] flex items-center justify-center">
              <Icon name="chevron-right" className="h-[15px] w-[15px]" />
            </div>
          </div>
        </div>

        {/* Section Title: サポート */}
        <p className="absolute left-[31px] top-[452px] text-[13px] leading-[22px] font-medium text-[rgba(44,67,100,0.6)]">
          サポート
        </p>

        {/* Support Form */}
        <div className="absolute left-[24px] top-[452px] w-[327px] h-[50px]">
          {/* Form Base */}
          <div className="absolute inset-0 bg-white rounded-[30px] shadow-[0px_26px_60px_0px_rgba(141,155,170,0.05)]" />

          {/* Contact Row */}
          <div className="absolute left-0 top-[11px] w-full h-[28px] flex items-center">
            <div className="absolute left-[19px] w-[25px] h-[18.279px] shrink-0 flex items-center justify-center relative" style={{ aspectRatio: '25.00/18.28' }}>
              <img src="/assets/profile-personal-setting-view1-group5.svg" alt="" className="w-full h-full object-contain" style={{ flexShrink: 0 }} />
              {/* Vector overlay - envelope flap */}
              <div className="absolute left-0 w-full" style={{ top: '-2px', height: '10.614795684814453px' }}>
                <img src="/assets/profile-personal-setting-view1-group5-vector.svg" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="absolute left-[57px] text-[13px] leading-[22px] font-medium text-[#2C4364]">
              問い合わせ
            </p>
            <div className="absolute right-[11px] w-[28px] h-[28px] flex items-center justify-center">
              <Icon name="chevron-right" className="h-[15px] w-[15px]" />
            </div>
          </div>
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

          {/* List icon indicator (Vector - 0) */}
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

        {/* Home Indicator */}
        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-[134px] rounded-full bg-black" />
        </div>
      </div>
    </DeviceFrame>
  )
}
