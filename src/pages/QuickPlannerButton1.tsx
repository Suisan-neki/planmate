import DeviceFrame from '@/components/layout/DeviceFrame'
import Icon from '@/components/atoms/Icon'

export default function QuickPlannerButton1() {
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

        {/* Top Card */}
        <div className="absolute left-[10px] top-[10px] w-[355px] h-[245px] bg-[#29BFC0] rounded-[30px] overflow-hidden">
          {/* Ornament decorations */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Left ornament */}
            <div className="absolute left-[-18.31%] top-[-39.37%] w-[170px] h-[283px] rotate-[8.694deg]">
              <div className="w-full h-full opacity-30">
                {/* Decorative element */}
              </div>
            </div>
            {/* Right ornament */}
            <div className="absolute right-[-18.31%] top-[-39.37%] w-[170px] h-[283px] rotate-[171.306deg] scale-y-[-1]">
              <div className="w-full h-full opacity-30">
                {/* Decorative element */}
              </div>
            </div>
          </div>

          {/* Hi, Jonathan! */}
          <p className="absolute left-1/2 top-[calc(50%-92.5px)] translate-x-[-50%] text-[18px] leading-[30px] font-bold text-white text-center">
            Hi, Jonathan!
          </p>

          {/* 6 Active Task Badge */}
          <div className="absolute left-1/2 top-[calc(50%-28.5px)] translate-x-[-50%] translate-y-[-50%] bg-[#2C4364] px-[18px] py-[8px] rounded-[24px]">
            <p className="text-[16px] leading-[28px] font-normal text-white text-center">
              <span className="font-bold">6</span> Active Task
            </p>
          </div>

          {/* Task Card */}
          <div className="absolute left-[14px] right-[14px] bottom-[14px] h-[115px] bg-white rounded-[18px]">
            {/* Orange indicator */}
            <div className="absolute left-[12px] top-1/2 translate-y-[-50%] w-[4px] h-[51px] bg-[#F2994A] rounded-[2px]" />
            
            {/* Task Title */}
            <p className="absolute left-[32px] top-[calc(50%-27.5px)] text-[15px] leading-[27px] font-semibold text-[#2C4364]">
              Canoz Homescreen Update
            </p>
            
            {/* Task Time */}
            <p className="absolute left-[32px] top-[calc(50%+3.5px)] text-[13px] leading-[22px] font-normal text-[rgba(150,159,171,0.8)]">
              Today, 4:00 PM
            </p>

            {/* Chevron Icon */}
            <div className="absolute right-[20px] top-1/2 translate-y-[-50%] w-[22px] h-[22px]">
              <Icon name="arrow" className="h-full w-full rotate-[-90deg] opacity-60" />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <p className="absolute left-[24px] top-[283px] text-[18px] leading-[30px] font-semibold text-[#2C4364]">
          Projects
        </p>
        <p className="absolute right-[24px] top-[285px] text-[14px] leading-[26px] font-medium text-[#29BFC0] text-right">
          View All
        </p>

        {/* Project Card 1 */}
        <div className="absolute left-[24px] top-[329px] w-[222px] h-[164px] bg-white rounded-[16px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
          {/* Orange indicator */}
          <div className="absolute left-[20px] top-[24px] w-[4px] h-[46px] bg-[#F2994A] rounded-[2px]" />
          
          {/* Project Title */}
          <p className="absolute left-[36px] top-[19px] text-[16px] leading-[28px] font-semibold text-[#2C4364]">
            Rando Mobile App
          </p>
          
          {/* Project Subtitle */}
          <p className="absolute left-[36px] top-[49px] text-[12px] leading-[21px] font-normal text-[#969FAB]">
            Mobile App Redesign
          </p>

          {/* People Avatars */}
          <div className="absolute left-[20px] top-[calc(50%+18px)] translate-y-[-50%] flex items-center gap-[8px]">
            {/* Avatar placeholders */}
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300" />
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300" />
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300" />
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300" />
            <div className="w-[28px] h-[28px] rounded-full bg-[#2C4364] flex items-center justify-center">
              <p className="text-[13px] leading-[22px] font-medium text-white">3</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute left-[12px] right-[12px] bottom-0 h-[30px] bg-white rounded-[20px] shadow-[0px_-3px_70px_rgba(141,155,170,0.18)]">
            <div className="absolute left-[11px] right-[44px] top-1/2 translate-y-[-50%] h-[8px] bg-[rgba(44,67,100,0.1)] rounded-[20px]" />
            <div className="absolute left-[11px] right-[59px] top-1/2 translate-y-[-50%] h-[8px] bg-[#29BFC0] rounded-[20px]" />
            <p className="absolute right-[10px] top-[calc(50%-9px)] translate-y-[-50%] text-[10px] leading-[18px] font-medium text-[#2C4364] text-right w-[26px]">
              90%
            </p>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="absolute left-[266px] top-[329px] w-[222px] h-[164px] bg-white rounded-[16px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
          {/* Orange indicator */}
          <div className="absolute left-[20px] top-[24px] w-[4px] h-[46px] bg-[#F2994A] rounded-[2px]" />
          
          {/* Project Title */}
          <p className="absolute left-[36px] top-[19px] text-[16px] leading-[28px] font-semibold text-[#2C4364]">
            Canoz Mobile App
          </p>
          
          {/* Project Subtitle */}
          <p className="absolute left-[36px] top-[49px] text-[12px] leading-[21px] font-normal text-[#969FAB]">
            Mobile App Redesign
          </p>

          {/* People Avatars */}
          <div className="absolute left-[20px] top-[calc(50%+18px)] translate-y-[-50%] flex items-center gap-[8px]">
            {/* Avatar placeholders */}
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300" />
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300" />
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300" />
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300" />
            <div className="w-[28px] h-[28px] rounded-full bg-[#2C4364] flex items-center justify-center">
              <p className="text-[13px] leading-[22px] font-medium text-white">3</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute left-[12px] right-[12px] bottom-0 h-[30px] bg-white rounded-[20px] shadow-[0px_-3px_70px_rgba(141,155,170,0.18)]">
            <div className="absolute left-[11px] right-[44px] top-1/2 translate-y-[-50%] h-[8px] bg-[rgba(44,67,100,0.1)] rounded-[20px]" />
            <div className="absolute left-[11px] right-[144px] top-1/2 translate-y-[-50%] h-[8px] bg-[#29BFC0] rounded-[20px]" />
            <p className="absolute right-[10px] top-[calc(50%-9px)] translate-y-[-50%] text-[10px] leading-[18px] font-medium text-[#2C4364] text-right w-[26px]">
              30%
            </p>
          </div>
        </div>

        {/* Checklist Section */}
        <p className="absolute left-[24px] top-[529px] text-[18px] leading-[30px] font-semibold text-[#2C4364]">
          Checklist
        </p>

        {/* Checklist Item */}
        <div className="absolute left-[24px] top-[575px] w-[327px] h-[80px] bg-white rounded-[16px] shadow-[0px_26px_80px_rgba(141,155,170,0.04)]">
          <p className="absolute left-[20px] top-[calc(50%-26px)] translate-y-[-50%] text-[16px] leading-[28px] font-semibold text-[#2C4364]">
            Icon Design
          </p>
          <p className="absolute left-[20px] top-[calc(50%+5px)] translate-y-[-50%] text-[12px] leading-[21px] font-normal text-[#969FAB]">
            Canoz Mobile App
          </p>
          {/* Checklist checkbox */}
          <div className="absolute right-[20px] top-1/2 translate-y-[-50%] w-[26px] h-[26px] border border-[rgba(150,159,171,0.2)] rounded-[6px] bg-[#F3F6F8]" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(44,67,100,0.6)] backdrop-blur-[7.5px] z-40" />

        {/* Quick Planner Button Base */}
        <div className="absolute left-[33px] top-[560px] w-[310px] h-[310px] z-50">
          <div className="w-full h-full rounded-full bg-white opacity-10" />
        </div>

        {/* Quick Planner Button */}
        <div className="absolute left-[100px] top-[612px] bg-white px-[20px] py-[6px] pl-[6px] rounded-[27px] shadow-[0px_0px_40px_rgba(141,155,170,0.15)] flex items-center gap-[12px] z-50">
          {/* Icon */}
          <div className="w-[42px] h-[42px] bg-[#F3F6F8] rounded-[27px] flex items-center justify-center shrink-0 relative">
            <div className="w-[28px] h-[28px] relative">
              <div className="absolute inset-[12.5%]">
                <div className="absolute inset-[-4.76%]">
                  <img src="/assets/icon-project.svg" alt="project" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-[16px] leading-[28px] font-medium text-[#2C4364] shrink-0">
            予定をたてる
          </p>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-[60] h-[125px] w-[375px]">
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

        {/* Home Indicator */}
        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-[134px] rounded-full bg-black" />
        </div>
      </div>
    </DeviceFrame>
  )
}
