import { ReactNode } from 'react'

export default function AppShell({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="relative h-[812px] bg-screen">
      <main>{children}</main>
    </div>
  )
}


