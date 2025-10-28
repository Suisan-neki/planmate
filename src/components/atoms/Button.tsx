import React from 'react'
export default function Button({children, className='', ...props}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }){
  return (
    <button
      className={`px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
