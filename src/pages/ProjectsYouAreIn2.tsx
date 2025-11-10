import DeviceFrame from '@/components/layout/DeviceFrame'

export default function ProjectsYouAreIn2() {
  return (
    <DeviceFrame hideHomeIndicator hideStatusBar>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy rounded-[40px]"
        style={{ background: 'rgba(255, 255, 255, 0.6)' }}
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
        <div className="absolute left-[24px] top-[62px] w-[28px] h-[28px]">
          <img src="/assets/icon-arrow.svg" alt="" className="h-full w-full" />
        </div>

        {/* Title */}
        <p className="absolute left-[24px] top-[102px] text-[18px] leading-[30px] font-semibold text-[#2C4364]">
          Projects You Are In
        </p>

        {/* Project Card 1 - Rando Mobile App (90%) */}
        <div className="absolute left-[24px] top-[152px] w-[327px] h-[201px]">
          {/* Card Background */}
          <div className="absolute inset-0 rounded-[16px] shadow-[0px_26px_80px_rgba(141,155,170,0.08)]" style={{ background: 'rgba(255, 255, 255, 0.6)' }} />

          {/* Left Accent Bar */}
          <div className="absolute left-[20px] top-[calc(50%-77px)] w-[4px] h-[74px] bg-[#F2994A] rounded-[2px]" />

          {/* Project Title */}
          <p className="absolute left-[44px] top-[calc(50%-76.5px)] text-[22px] leading-[35px] font-semibold text-[#2C4364]">
            Rando Mobile App
          </p>

          {/* Member Avatars */}
          <div className="absolute left-[44px] top-[calc(50%-15.5px)] flex items-center gap-0">
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-0">
              <img src="/assets/projects-you-are-in-2-avatar1.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar2.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar3.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar4.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full bg-[#2C4364] border-2 border-white -ml-2 relative flex items-center justify-center">
              <p className="text-[13px] leading-[22px] font-medium text-white">
                3
              </p>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="absolute left-[24px] right-[24px] bottom-[24px] h-[30px]">
            <div className="absolute inset-0 bg-white rounded-[20px] shadow-[0px_-3px_70px_rgba(141,155,170,0.18)]" />
            <div className="absolute left-[11px] right-[44px] top-1/2 -translate-y-1/2 h-[8px] bg-[rgba(44,67,100,0.1)] rounded-[20px]" />
            <div className="absolute left-[11px] right-[59px] top-1/2 -translate-y-1/2 h-[8px] bg-[#29BFC0] rounded-[20px]" />
            <p className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[10px] leading-[18px] font-medium text-[#2C4364] text-right">
              90%
            </p>
          </div>
        </div>

        {/* Project Card 2 - Mizu Landing Page (50%) */}
        <div className="absolute left-[24px] top-[373px] w-[327px] h-[201px]">
          {/* Card Background */}
          <div className="absolute inset-0 rounded-[16px] shadow-[0px_26px_80px_rgba(141,155,170,0.08)]" style={{ background: 'rgba(255, 255, 255, 0.6)' }} />

          {/* Left Accent Bar */}
          <div className="absolute left-[20px] top-[calc(50%-77px)] w-[4px] h-[74px] bg-[#F2994A] rounded-[2px]" />

          {/* Project Title */}
          <p className="absolute left-[44px] top-[calc(50%-76.5px)] text-[22px] leading-[35px] font-semibold text-[#2C4364]">
            Mizu Landing Page
          </p>

          {/* Member Avatars */}
          <div className="absolute left-[44px] top-[calc(50%-15.5px)] flex items-center gap-0">
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-0">
              <img src="/assets/projects-you-are-in-2-avatar3.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar4.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar1.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar2.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full bg-[#2C4364] border-2 border-white -ml-2 relative flex items-center justify-center">
              <p className="text-[13px] leading-[22px] font-medium text-white">
                6
              </p>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="absolute left-[24px] right-[24px] bottom-[24px] h-[30px]">
            <div className="absolute inset-0 bg-white rounded-[20px] shadow-[0px_-3px_70px_rgba(141,155,170,0.18)]" />
            <div className="absolute left-[11px] right-[44px] top-1/2 -translate-y-1/2 h-[8px] bg-[rgba(44,67,100,0.1)] rounded-[20px]" />
            <div className="absolute left-[11px] right-[115.5px] top-1/2 -translate-y-1/2 h-[8px] bg-[#29BFC0] rounded-[20px]" />
            <p className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[10px] leading-[18px] font-medium text-[#2C4364] text-right">
              50%
            </p>
          </div>
        </div>

        {/* Project Card 3 - Rando Mobile App (30%) */}
        <div className="absolute left-[24px] top-[594px] w-[327px] h-[201px]">
          {/* Card Background */}
          <div className="absolute inset-0 rounded-[16px] shadow-[0px_26px_80px_rgba(141,155,170,0.08)]" style={{ background: 'rgba(255, 255, 255, 0.6)' }} />

          {/* Left Accent Bar */}
          <div className="absolute left-[20px] top-[calc(50%-77px)] w-[4px] h-[74px] bg-[#F2994A] rounded-[2px]" />

          {/* Project Title */}
          <p className="absolute left-[44px] top-[calc(50%-76.5px)] text-[22px] leading-[35px] font-semibold text-[#2C4364]">
            Rando Mobile App
          </p>

          {/* Member Avatars */}
          <div className="absolute left-[44px] top-[calc(50%-15.5px)] flex items-center gap-0">
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-0">
              <img src="/assets/projects-you-are-in-2-avatar1.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar2.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar3.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden border-2 border-white -ml-2">
              <img src="/assets/projects-you-are-in-2-avatar4.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[28px] h-[28px] rounded-full bg-[#2C4364] border-2 border-white -ml-2 relative flex items-center justify-center">
              <p className="text-[13px] leading-[22px] font-medium text-white">
                3
              </p>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="absolute left-[24px] right-[24px] bottom-[24px] h-[30px]">
            <div className="absolute inset-0 bg-white rounded-[20px] shadow-[0px_-3px_70px_rgba(141,155,170,0.18)]" />
            <div className="absolute left-[11px] right-[44px] top-1/2 -translate-y-1/2 h-[8px] bg-[rgba(44,67,100,0.1)] rounded-[20px]" />
            <div className="absolute left-[11px] right-[144.1px] top-1/2 -translate-y-1/2 h-[8px] bg-[#29BFC0] rounded-[20px]" />
            <p className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[10px] leading-[18px] font-medium text-[#2C4364] text-right">
              30%
            </p>
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
