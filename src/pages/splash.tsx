import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SplashScreen(){
  const navigate = useNavigate()

  useEffect(() => {
    const id = setTimeout(() => navigate('/onboarding'), 1600)
    return () => clearTimeout(id)
  }, [navigate])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] h-[720px] rounded-3xl shadow-2xl border border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(108,140,255,0.25),transparent),radial-gradient(800px_400px_at_80%_100%,rgba(34,209,170,0.15),transparent)]" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-5 size-16 rounded-2xl bg-[var(--pm-primary)] shadow-xl animate-pulse" />
            <h1 className="text-2xl font-semibold tracking-tight">PlanMate</h1>
            <p className="mt-2 text-sm text-[var(--pm-subtext)]">計画を、もっとシンプルに。</p>
            <button
              onClick={() => navigate('/onboarding')}
              className="mt-6 inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              続ける
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
