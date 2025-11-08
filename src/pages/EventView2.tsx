import DeviceFrame from '@/components/layout/DeviceFrame'
import ModalBase from '@/components/layout/ModalBase'
import Icon from '@/components/atoms/Icon'
import { useTranslation } from 'react-i18next'

export default function EventView2() {
  const { t } = useTranslation()

  return (
    <DeviceFrame hideHomeIndicator>
      <div
        className="relative w-[375px] h-[812px] mx-auto overflow-hidden text-navy"
        style={{ background: '#29BFC0' }}
      >
        {/* Header BG with ornament */}
        <div className="absolute inset-x-0 top-0 z-0 h-[239px] rounded-b-[28px]" style={{ background: 'inherit' }}>
          {/* Ornament */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/assets/event-view2-ornament.svg"
              alt=""
              className="absolute left-[1px] top-[-20px] h-[291px] w-[375px]"
            />
          </div>
        </div>

        {/* Back button */}
        <div className="absolute left-[19px] top-[47px] z-20 h-[28px] w-[28px] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 9.33L10.83 14L17.5 18.67" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Title and Date */}
        <div className="absolute inset-x-0 top-0 z-20 h-[239px] px-6 text-center text-white pointer-events-none flex flex-col items-center">
          <h1 className="absolute top-[73px] left-1/2 -translate-x-1/2 text-[24px] leading-[36px] font-semibold w-[124px]">
            ABC遊園地
          </h1>
          <p className="absolute top-[53px] left-1/2 -translate-x-1/2 text-[12px] font-semibold leading-[16px] tracking-[0.5px] text-white w-[84px]">
            10月4日  (土)
          </p>
        </div>

        {/* Image Card - positioned in header area, right below title */}
        <div className="absolute left-[19px] z-30 h-[193px] w-[337px] overflow-hidden rounded-[30px]" style={{ top: 'calc(73px + 36px)' }}>
          <img
            src="/assets/event-view2-image.png"
            alt="ABC遊園地"
            className="absolute object-cover object-center"
            style={{ 
              left: '50%', 
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'calc(100% + 34px)',
              height: 'calc(100% + 20px)',
              clipPath: 'inset(0 round 30px)'
            }}
          />
        </div>

        {/* Modal Base */}
        <ModalBase
          className="absolute left-1/2 z-20 -translate-x-1/2 w-[375px] pl-[19px] pr-[17px] pt-8 rounded-t-none overflow-y-auto overflow-x-hidden"
          style={{ top: '239px', bottom: '0' }}
        >
          <div className="flex flex-col gap-[10px] pb-[125px]">
            {/* Location Card - positioned 219px below image top (image top: 109px, target: 328px, modal top: 239px, padding: 32px, so marginTop: 328 - 239 - 32 = 57px) */}
            <div className="relative h-[77px] w-[339px] flex-shrink-0 rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]" style={{ marginTop: '57px' }}>
              {/* Map marker icon */}
              <div className="absolute left-[15px] top-[27px] h-[23px] w-[23px]">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 2C7.91 2 5 4.91 5 8.5C5 13.25 11.5 21 11.5 21C11.5 21 18 13.25 18 8.5C18 4.91 15.09 2 11.5 2Z" fill="#00C3D0"/>
                  <circle cx="11.5" cy="8.5" r="3" fill="white"/>
                </svg>
              </div>
              {/* Map preview */}
              <div className="absolute left-[44px] top-[33px] right-[15px] h-[17px]">
                <img src="/assets/event-view2-map.png" alt="地図" className="h-full w-full object-cover" />
              </div>
              <p className="absolute left-[52px] right-[15px] top-[11.5px] text-[14px] font-medium leading-[20px] text-[#222B59] overflow-hidden text-ellipsis whitespace-nowrap">
                千葉県浦安市舞浜
              </p>
              <p className="absolute left-[52px] right-[15px] top-[49.5px] text-[14px] font-medium leading-[20px] text-[rgba(44,67,100,0.6)] overflow-hidden text-ellipsis whitespace-nowrap">
                {t('eventView.viewMap')}
              </p>
            </div>

            {/* Transport & Cost Card */}
            <div className="relative h-[84px] w-[339px] flex-shrink-0 rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)]">
              {/* Map marker icon */}
              <div className="absolute left-[15px] top-[31px] h-[23px] w-[23px]">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 2C7.91 2 5 4.91 5 8.5C5 13.25 11.5 21 11.5 21C11.5 21 18 13.25 18 8.5C18 4.91 15.09 2 11.5 2Z" fill="#00C3D0"/>
                  <circle cx="11.5" cy="8.5" r="3" fill="white"/>
                </svg>
              </div>
              {/* Wallet icon */}
              <div className="absolute left-[16px] top-[45px] h-[20px] w-[20px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14V6C19 4.9 18.1 4 17 4Z" stroke="#00C3D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 8H19" stroke="#00C3D0" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="absolute left-[53px] right-[15px] top-[19px] text-[14px] font-medium leading-[20px] text-[#222B59] overflow-hidden text-ellipsis whitespace-nowrap">
                車40分, 電車50分 （12km）
              </p>
              <p className="absolute left-[53px] right-[15px] top-[44px] text-[14px] font-medium leading-[20px] text-[#222B59] overflow-hidden text-ellipsis whitespace-nowrap">
                25,000 ~ 50,000円
              </p>
            </div>

            {/* Section Title: 注意事項・持ち物 */}
            <p className="mt-[10px] text-[14px] font-medium leading-[20px] text-[#222B59]">
              {t('eventView.notesTitle')}
            </p>

            {/* Notes Card */}
            <div className="relative min-h-[84px] w-[339px] flex-shrink-0 rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)] overflow-hidden pt-[9px] pb-[9px]">
              <div className="px-[39px] pr-[14px]">
                <div className="flex items-start gap-3">
                  <div className="h-[7px] w-[7px] rounded-full bg-[#00C3D0] mt-[6px] flex-shrink-0" />
                  <p className="text-[14px] font-medium leading-[20px] text-grey flex-1 min-w-0">
                    パーク内でチケットの購入不可
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-[3px]">
                  <div className="h-[7px] w-[7px] rounded-full bg-[#00C3D0] mt-[6px] flex-shrink-0" />
                  <p className="text-[14px] font-medium leading-[20px] text-grey flex-1 min-w-0">
                    ホテルのチェックインは20時まで
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-[3px]">
                  <div className="h-[7px] w-[7px] rounded-full bg-[#00C3D0] mt-[6px] flex-shrink-0" />
                  <p className="text-[14px] font-medium leading-[20px] text-grey flex-1 min-w-0">
                    自販機はCエリアのみ
                  </p>
                </div>
              </div>
            </div>

            {/* Section Title: チェックリスト */}
            <p className="mt-[10px] text-[14px] font-medium leading-[20px] text-[#222B59]">
              {t('eventView.checklistTitle')}
            </p>

            {/* Checklist Card */}
            <div className="relative h-[135px] w-[339px] flex-shrink-0 rounded-[20px] bg-white shadow-[0px_16px_60px_rgba(141,155,170,0.1)] overflow-hidden">
              <div className="absolute left-[14px] top-[11px] right-[14px]">
                <div className="flex items-start gap-3">
                  <div className="h-[15px] w-[15px] rounded-[3px] border border-grey mt-[2px] flex-shrink-0" />
                  <p className="text-[14px] font-medium leading-[20px] text-grey whitespace-nowrap">
                    ホテルの予約
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-[4px]">
                  <div className="h-[15px] w-[15px] rounded-[3px] border border-grey mt-[2px] flex-shrink-0" />
                  <p className="text-[14px] font-medium leading-[20px] text-grey whitespace-nowrap">
                    チケットの購入（9/1 14時より予約開始)
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-[4px]">
                  <div className="h-[15px] w-[15px] rounded-[3px] border border-grey mt-[2px] flex-shrink-0" />
                  <p className="text-[14px] font-medium leading-[20px] text-grey whitespace-nowrap">
                    仮装衣装の事前購入
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-[4px]">
                  <div className="h-[15px] w-[15px] rounded-[3px] bg-[#29BFC0] mt-[2px] flex-shrink-0 flex items-center justify-center">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[14px] font-medium leading-[20px] text-grey whitespace-nowrap">
                    防水カメラ
                  </p>
                </div>
                <div className="flex items-start gap-3 mt-[4px]">
                  <div className="h-[15px] w-[15px] rounded-full border border-[#AAAAAA] mt-[2px] flex-shrink-0 flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 2V13M2 7.5H13" stroke="#AAAAAA" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-[14px] font-medium leading-[20px] text-grey tracking-[0.1px] whitespace-nowrap">
                    {t('eventView.addChecklist')}
                  </p>
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <button className="mt-[10px] h-[50px] w-full rounded-[26px] bg-[#00C3D0] text-[16px] font-semibold leading-[28px] text-white shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">
              {t('eventView.confirmButton')}
            </button>

            {/* Change Schedule Links */}
            <p className="mt-[10px] text-center text-[14px] leading-[26px] text-navy">
              {t('eventView.changeSchedule')}
            </p>
            <p className="mt-[3px] text-center text-[14px] leading-[26px] text-navy">
              <span className="font-semibold text-primary">{t('eventView.cancelSchedule')}</span>
              <span className="text-[#222B59]"> {t('eventView.or')} </span>
              <span className="font-semibold text-primary">{t('eventView.requestReproposal')}</span>
            </p>
          </div>
        </ModalBase>

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
