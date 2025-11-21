import DeviceFrame from '@/components/layout/DeviceFrame'
import { useState } from 'react'

export default function ProfileSetting4() {
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const hasSelection = selectedDays.length > 0

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

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
          <div className="absolute bg-[#29BFC0] h-[8px] left-[11px] right-[275px] rounded-[20px] top-1/2 -translate-y-1/2" />
        </div>

        {/* Title */}
        <div className="absolute left-1/2 top-[53px] -translate-x-1/2">
          <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center">
            その調子！
          </p>
        </div>

        {/* Question */}
        <div className="absolute left-[32px] top-[138px] w-[324px]">
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] whitespace-pre-wrap">
            お出かけできる曜日はいつですか？（複数回答可）
          </p>
        </div>

        {/* Day Buttons */}
        {/* Row 1 */}
        <button
          onClick={() => toggleDay('月曜')}
          className={`absolute left-[8.27%] top-[172px] h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
            selectedDays.includes('月曜')
              ? 'bg-[#29BFC0] border-[#29BFC0]'
              : 'bg-transparent'
          }`}
        >
          <p
            className={`text-[13px] leading-[21px] font-medium text-center whitespace-pre-wrap ${
              selectedDays.includes('月曜') ? 'text-white' : 'text-[#2C4364]'
            }`}
          >
            月曜
          </p>
        </button>

        <button
          onClick={() => toggleDay('火曜')}
          className={`absolute left-[30.93%] top-[172px] h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
            selectedDays.includes('火曜')
              ? 'bg-[#29BFC0] border-[#29BFC0]'
              : 'bg-transparent'
          }`}
        >
          <p
            className={`text-[13px] leading-[21px] font-medium text-center whitespace-pre-wrap ${
              selectedDays.includes('火曜') ? 'text-white' : 'text-[#2C4364]'
            }`}
          >
            火曜
          </p>
        </button>

        <button
          onClick={() => toggleDay('水曜')}
          className={`absolute left-[53.6%] top-[172px] h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
            selectedDays.includes('水曜')
              ? 'bg-[#29BFC0] border-[#29BFC0]'
              : 'bg-transparent'
          }`}
        >
          <p
            className={`text-[13px] leading-[21px] font-medium text-center whitespace-pre-wrap ${
              selectedDays.includes('水曜') ? 'text-white' : 'text-[#2C4364]'
            }`}
          >
            水曜
          </p>
        </button>

        <button
          onClick={() => toggleDay('木曜')}
          className={`absolute left-[76.27%] top-[172px] h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
            selectedDays.includes('木曜')
              ? 'bg-[#29BFC0] border-[#29BFC0]'
              : 'bg-transparent'
          }`}
        >
          <p
            className={`text-[13px] leading-[21px] font-medium text-center whitespace-pre-wrap ${
              selectedDays.includes('木曜') ? 'text-white' : 'text-[#2C4364]'
            }`}
          >
            木曜
          </p>
        </button>

        {/* Row 2 */}
        <button
          onClick={() => toggleDay('金曜')}
          className={`absolute left-[8.27%] top-[217px] h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
            selectedDays.includes('金曜')
              ? 'bg-[#29BFC0] border-[#29BFC0]'
              : 'bg-transparent'
          }`}
        >
          <p
            className={`text-[13px] leading-[21px] font-medium text-center whitespace-pre-wrap ${
              selectedDays.includes('金曜') ? 'text-white' : 'text-[#2C4364]'
            }`}
          >
            金曜
          </p>
        </button>

        <button
          onClick={() => toggleDay('土曜')}
          className={`absolute left-[30.93%] top-[216px] h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
            selectedDays.includes('土曜')
              ? 'bg-[#29BFC0] border-[#29BFC0]'
              : 'bg-transparent'
          }`}
        >
          <p
            className={`text-[13px] leading-[21px] font-medium text-center whitespace-pre-wrap ${
              selectedDays.includes('土曜') ? 'text-white' : 'text-[#2C4364]'
            }`}
          >
            土曜
          </p>
        </button>

        <button
          onClick={() => toggleDay('日曜')}
          className={`absolute left-[53.6%] top-[217px] h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
            selectedDays.includes('日曜')
              ? 'bg-[#29BFC0] border-[#29BFC0]'
              : 'bg-transparent'
          }`}
        >
          <p
            className={`text-[13px] leading-[21px] font-medium text-center whitespace-pre-wrap ${
              selectedDays.includes('日曜') ? 'text-white' : 'text-[#2C4364]'
            }`}
          >
            日曜
          </p>
        </button>

        <button
          onClick={() => toggleDay('祝日')}
          className={`absolute left-[75.2%] top-[216px] h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
            selectedDays.includes('祝日')
              ? 'bg-[#29BFC0] border-[#29BFC0]'
              : 'bg-transparent'
          }`}
        >
          <p
            className={`text-[13px] leading-[21px] font-medium text-center whitespace-pre-wrap ${
              selectedDays.includes('祝日') ? 'text-white' : 'text-[#2C4364]'
            }`}
          >
            祝日
          </p>
        </button>

        {/* Next Button */}
        <div className="absolute left-[25px] top-[674px]">
          <button
            disabled={!hasSelection}
            className={`h-[50px] w-[327px] rounded-[26px] text-[16px] font-semibold leading-[28px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)] ${
              hasSelection ? 'bg-[#29BFC0] text-white' : 'bg-[rgba(44,67,100,0.1)] text-grey cursor-not-allowed'
            }`}
            onClick={() => hasSelection && (window as any).__setDevPage?.('profileSetting5')}
          >
            次へ
          </button>
        </div>

        {/* Skip Link */}
        <div className="absolute left-1/2 top-[750px] w-[279px] -translate-x-1/2">
          <p
            className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center whitespace-pre-wrap cursor-pointer"
            onClick={() => (window as any).__setDevPage?.('profileSetting5')}
          >
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
