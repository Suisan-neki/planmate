import DeviceFrame from '@/components/layout/DeviceFrame'
import { useState } from 'react'

export default function ProfileSetting8() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    )
  }

  const options = [
    'テーマパーク',
    '水族館や動物園',
    'ショッピング',
    'おうちでドラマ鑑賞',
    'ドライブ',
    'カフェ巡り',
    'キャンピング',
    '話題のスポットやイベント巡り',
    '料理やお菓子作り',
    'ボードゲームやTVゲーム',
    'お家でのんびり',
    'BBQ',
    '旅行',
    '近隣散策',
    'ハイキング',
    'レストランで食事',
    '映画館',
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
          <div className="absolute bg-[#29BFC0] h-[8px] left-[11px] right-[275px] rounded-[20px] top-1/2 -translate-y-1/2" />
        </div>

        {/* Title */}
        <div className="absolute left-1/2 top-[53px] -translate-x-1/2">
          <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center">
            最後です
          </p>
        </div>

        {/* Question */}
        <div className="absolute left-1/2 top-[138px] -translate-x-1/2 w-[343px]">
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center whitespace-pre-wrap">
            好きな場所や活動を教えてください（複数回答可）
          </p>
        </div>

        {/* Options Grid */}
        <div className="absolute left-[32px] top-[178px] right-[32px] flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={`h-[36px] px-[17px] rounded-[30px] border border-[#969FAB] flex items-center justify-center shrink-0 ${
                selectedOptions.includes(option)
                  ? 'bg-[#29BFC0] border-[#29BFC0]'
                  : 'bg-transparent'
              }`}
            >
              <p
                className={`text-[13px] leading-[21px] font-medium text-center whitespace-nowrap ${
                  selectedOptions.includes(option) ? 'text-white' : 'text-[#2C4364]'
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
