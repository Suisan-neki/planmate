import React from 'react'
export default function Card({children, className=''}: {children:React.ReactNode; className?:string}){
  return (
    <section className={`rounded-2xl bg-[var(--pm-card)]/90 backdrop-blur p-4 shadow-[var(--pm-shadow)] border border-white/10 ${className}`}>
      {children}
    </section>
  )
}

