import DeviceFrame from '@/components/layout/DeviceFrame'
import { useState } from 'react'
import Icon from '@/components/atoms/Icon'

export default function ProfileSetting6() {
  const [gender, setGender] = useState<string>('')
  const [relationship, setRelationship] = useState<string>('パートナー')

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
          <div className="absolute bg-[#29BFC0] h-[8px] left-[11px] right-[121px] rounded-[20px] top-1/2 -translate-y-1/2" />
        </div>

        {/* Title */}
        <div className="absolute left-1/2 top-[53px] -translate-x-1/2">
          <p className="text-[18px] leading-[30px] font-semibold text-[#2C4364] text-center">
            あと少しです
          </p>
        </div>

        {/* Question */}
        <div className="absolute left-[32px] top-[138px] w-[320px]">
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] whitespace-pre-wrap">
            一緒にお出かけする人について教えてください
          </p>
        </div>

        {/* Form Card */}
        <div className="absolute left-[14px] top-[180px] w-[347px] h-[392px] rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
          {/* Member Title */}
          <div className="absolute left-[23.35px] top-[10px]">
            <p className="text-[14px] leading-[26px] font-bold text-[#2C4364]">
              メンバー１
            </p>
          </div>

          {/* Name Label */}
          <div className="absolute left-[22.42px] top-[35px]">
            <p className="text-[14px] leading-[26px] font-normal text-[#2C4364]">
              名前
            </p>
          </div>

          {/* Name Input */}
          <div className="absolute left-[25px] top-[62px] right-[25px]">
            <input
              type="text"
              placeholder="名前を入力してください"
              className="h-[34px] w-full rounded-[15px] border border-[#969FAB] px-[17px] text-[13px] leading-[21px] text-[rgba(44,67,100,0.6)] placeholder:text-[rgba(44,67,100,0.6)]"
            />
          </div>

          {/* Gender Label */}
          <div className="absolute left-[22.42px] top-[103px]">
            <p className="text-[14px] leading-[26px] font-normal text-[#2C4364]">
              性別
            </p>
          </div>

          {/* Gender Buttons */}
          <div className="absolute left-1/2 top-[131px] -translate-x-1/2 flex gap-2">
            <button
              onClick={() => setGender('女性')}
              className={`h-[34px] min-w-[65px] px-[20px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
                gender === '女性'
                  ? 'bg-[#29BFC0] border-[#29BFC0]'
                  : 'bg-white'
              }`}
            >
              <p
                className={`text-[14px] leading-[21px] font-medium text-center whitespace-nowrap ${
                  gender === '女性' ? 'text-white' : 'text-[#2C4364]'
                }`}
              >
                女性
              </p>
            </button>
            <button
              onClick={() => setGender('男性')}
              className={`h-[34px] min-w-[65px] px-[20px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
                gender === '男性'
                  ? 'bg-[#29BFC0] border-[#29BFC0]'
                  : 'bg-white'
              }`}
            >
              <p
                className={`text-[14px] leading-[21px] font-medium text-center whitespace-nowrap ${
                  gender === '男性' ? 'text-white' : 'text-[#2C4364]'
                }`}
              >
                男性
              </p>
            </button>
            <button
              onClick={() => setGender('どちらでもない')}
              className={`h-[34px] min-w-[104px] px-[20px] rounded-[30px] border border-[#969FAB] flex items-center justify-center ${
                gender === 'どちらでもない'
                  ? 'bg-[#29BFC0] border-[#29BFC0]'
                  : 'bg-white'
              }`}
            >
              <p
                className={`text-[14px] leading-[21px] font-medium text-center whitespace-nowrap ${
                  gender === 'どちらでもない' ? 'text-white' : 'text-[#2C4364]'
                }`}
              >
                どちらでもない
              </p>
            </button>
          </div>

          {/* Birthday Label */}
          <div className="absolute left-[23.35px] top-[175px]">
            <p className="text-[14px] leading-[26px] font-normal text-[#2C4364]">
              誕生日
            </p>
          </div>

          {/* Birthday Selects */}
          <div className="absolute left-[23px] top-[203px] flex gap-2">
            <div className="h-[34px] pl-[17px] pr-[12px] rounded-[30px] border border-[#969FAB] flex items-center justify-center gap-1 bg-white">
              <p className="text-[13px] leading-[21px] font-medium text-[#2C4364]">9月</p>
              <Icon name="chevron-down" className="h-[16px] w-[16px] shrink-0 aspect-square ml-[5px]" />
            </div>
            <div className="h-[34px] pl-[17px] pr-[12px] rounded-[30px] border border-[#969FAB] flex items-center justify-center gap-1 bg-white">
              <p className="text-[13px] leading-[21px] font-medium text-[#2C4364]">30</p>
              <Icon name="chevron-down" className="h-[16px] w-[16px] shrink-0 aspect-square ml-[5px]" />
            </div>
            <div className="h-[34px] pl-[17px] pr-[12px] rounded-[30px] border border-[#969FAB] flex items-center justify-center gap-1 bg-white">
              <p className="text-[13px] leading-[21px] font-medium text-[#2C4364]">1990</p>
              <Icon name="chevron-down" className="h-[16px] w-[16px] shrink-0 aspect-square ml-[5px]" />
            </div>
          </div>

          {/* Relationship Label */}
          <div className="absolute left-[23.35px] top-[245px]">
            <p className="text-[14px] leading-[26px] font-normal text-[#2C4364]">
              関係性
            </p>
          </div>

          {/* Relationship Buttons */}
          <div className="absolute left-[23px] top-[273px] right-[25px] flex gap-[6px]">
            {['パートナー', '子供', '親', '友人', 'その他'].map((rel) => (
              <button
                key={rel}
                onClick={() => setRelationship(rel)}
                className={`h-[34px] px-[10px] rounded-[30px] border border-[#969FAB] flex items-center justify-center shrink-0 ${
                  relationship === rel
                    ? 'bg-[#29BFC0] border-[#29BFC0]'
                    : 'bg-transparent'
                }`}
              >
                <p
                  className={`text-[13px] leading-[21px] font-medium text-center whitespace-nowrap ${
                    relationship === rel ? 'text-white' : 'text-[#2C4364]'
                  }`}
                >
                  {rel}
                </p>
              </button>
            ))}
          </div>

          {/* Notes Label */}
          <div className="absolute left-[26px] top-[320px]">
            <p className="text-[14px] leading-[26px] font-normal text-[#2C4364]">
              補足事項
            </p>
          </div>

          {/* Notes Input */}
          <div className="absolute left-[25px] top-[348px] right-[25px]">
            <input
              type="text"
              placeholder="アレルギーや特別な配慮の必要の有無など"
              className="h-[34px] w-full rounded-[15px] border border-[#969FAB] px-[17px] text-[13px] leading-[21px] text-[rgba(44,67,100,0.6)] placeholder:text-[rgba(44,67,100,0.6)]"
            />
          </div>
        </div>

        {/* Add Member Link */}
        <div className="absolute left-[27px] top-[578px] flex items-center gap-2">
          <div className="flex items-center justify-center w-[20px] h-[20px]">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M12 5v14M5 12h14" stroke="rgba(44,67,100,0.6)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)]">
            メンバーを追加する
          </p>
        </div>

        {/* Next Button */}
        <div className="absolute left-[25px] top-[674px]">
          <button
            className="h-[50px] w-[327px] rounded-[26px] bg-[#29BFC0] text-white text-[16px] font-semibold leading-[28px] shadow-[0px_26px_60px_rgba(141,155,170,0.05)]"
            onClick={() => (window as any).__setDevPage?.('profileSetting7')}
          >
            次へ
          </button>
        </div>

        {/* Skip Link */}
        <div className="absolute left-1/2 top-[750px] w-[279px] -translate-x-1/2">
          <p
            className="text-[14px] leading-[26px] font-normal text-[rgba(44,67,100,0.6)] text-center whitespace-pre-wrap cursor-pointer"
            onClick={() => (window as any).__setDevPage?.('profileSetting7')}
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
