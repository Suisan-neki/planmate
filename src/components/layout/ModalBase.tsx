import { CSSProperties, ReactNode } from 'react'

type ModalBaseProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  variant?: 'single' | 'double'
  topContent?: ReactNode
}

export default function ModalBase({ children, className = '', style, variant = 'single', topContent }: ModalBaseProps) {
  if (variant === 'double') {
    return (
      <div className={`relative ${className}`} style={style}>
        {/* Navy色のModalBase */}
        <div className="relative z-10 rounded-[30px] bg-navy shadow-[0px_26px_60px_rgba(141,155,170,0.05)] w-full h-[400px] flex items-start justify-center px-6 pt-[28px]">
          <div className="flex items-center justify-center w-full">
            {topContent}
          </div>
        </div>
        
        {/* 白いModalBase（106px下に配置） */}
        <div className="absolute top-[106px] left-0 right-0 z-20 rounded-[30px] bg-screen shadow-[0px_26px_60px_rgba(141,155,170,0.05)] w-full h-[294px]">
          {children}
        </div>
      </div>
    )
  }

  // 通常の白いModalBase（既存のページ用）
  return (
    <div
      className={`rounded-[30px] bg-screen shadow-[0px_26px_60px_rgba(141,155,170,0.05)] ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}


