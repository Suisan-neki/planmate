import DeviceFrame from '@/components/layout/DeviceFrame'

export default function ProjectsYouAreIn1() {
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
        <div className="absolute left-[24px] top-[62px] w-[28px] h-[28px]">
          <img src="/assets/icon-arrow.svg" alt="" className="h-full w-full" />
        </div>

        {/* Illustration */}
        <div className="absolute left-1/2 top-[182px] -translate-x-1/2 w-[316px] h-[281px]">
          <img src="/assets/projects-you-are-in-illustration.png" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Title */}
        <p className="absolute left-1/2 top-[449px] -translate-x-1/2 text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center whitespace-nowrap">
          Woops, You Are Free Now
        </p>

        {/* Description */}
        <p className="absolute left-1/2 top-[487px] -translate-x-1/2 w-[327px] text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center whitespace-pre-wrap">
          No projects that had you as a member at the moment. But you sure can create 1.
        </p>

        {/* Create Project Button */}
        <div className="absolute left-[24px] top-[703px] w-[327px] h-[50px]">
          <button className="absolute inset-0 bg-[#29BFC0] rounded-[26px] shadow-[0px_26px_60px_0px_rgba(141,155,170,0.05)] flex items-center justify-center">
            <p className="text-[16px] leading-[28px] font-semibold text-white text-center">
              Create Project
            </p>
          </button>
        </div>

        {/* Home Indicator */}
        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-[134px] rounded-full bg-black" />
        </div>
      </div>
    </DeviceFrame>
  )
}
