import DeviceFrame from '@/components/layout/DeviceFrame'
import { useState } from 'react'

export default function ProfileSetting7() {
  const [selectedBudget, setSelectedBudget] = useState<string>('')

  const budgetOptions = [
    '5万円以下',
    '5万円以上10万円以下',
    '10万円以上20万円以下',
    '20万円以上30万円以下',
    '40万円以上50万円以下',
    '50万円以上100万円以下',
    '100万円以上',
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

        {/* Progress Bar */}
        <div className="absolute left-[21px] top-[83px] h-[30px] w-[331px]">
          <div className="absolute bg-[#EAEFF1] h-[8px] left-[11px] right-0 rounded-[20px] top-1/2 -translate-y-1/2" />
          <div className="absolute bg-[#29BFC0] h-[8px] left-[11px] right-[59px] rounded-[20px] top-1/2 -translate-y-1/2" />
        </div>

        {/* Title */}
        <div className="absolute left-1/2 top-[53px] -translate-x-1/2">
          <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center">
            あと少しです
          </p>
        </div>

        {/* Question */}
        <div className="absolute left-1/2 top-[135px] -translate-x-1/2 w-[343px]">
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center whitespace-pre-wrap">
            ひと月当たりの休日や週末に使う予算を{'\n'}教えてください
          </p>
        </div>

        {/* Budget Options */}
        <div className="absolute left-1/2 top-[200px] -translate-x-1/2 w-[181px] flex flex-col gap-[7px]">
          {budgetOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedBudget(option)}
              className={`h-[36px] w-full rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
                selectedBudget === option
                  ? 'bg-[#29BFC0] border-[#29BFC0]'
                  : 'bg-transparent'
              }`}
            >
              <p
                className={`text-[13px] leading-[21px] font-medium text-center ${
                  selectedBudget === option ? 'text-white' : 'text-[#2C4364]'
                }`}
              >
                {option}
              </p>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="absolute left-[25px] top-[674px]">
          <button className="h-[50px] w-[327px] rounded-[26px] bg-[#29BFC0] text-white text-[16px] font-semibold leading-[28px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
            次へ
          </button>
        </div>

        {/* Skip Link */}
        <div className="absolute left-1/2 top-[750px] w-[279px] -translate-x-1/2">
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center whitespace-pre-wrap">
            スキップする
          </p>
        </div>

        {/* Home Indicator */}
        <div className="pointer-events-none absolute left-0 top-[778px] z-[999] flex h-[34px] w-[375px] items-end justify-center px-[120px] pb-[9px]">
          <div className="h-[5px] w-[134px] rounded-full bg-black" />
        </div>
      </div>
    </DeviceFrame>
  )
}
