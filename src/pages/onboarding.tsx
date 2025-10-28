import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CalendarCheck, ListChecks, Sparkles, Rocket } from 'lucide-react'

type Step = {
  title: string
  body: string
  icon: JSX.Element
}

const steps: Step[] = [
  {
    title: '今日やることを、すぐ見える',
    body: 'ホームでタスクとイベントをまとめて把握。迷わず動けます。',
    icon: <ListChecks className="w-8 h-8" />,
  },
  {
    title: 'クイックプランで一瞬作成',
    body: '最低限の入力で下書きを作成。詳細は後から整えればOK。',
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: 'カレンダーと一緒に管理',
    body: '予定の前後でやることを分けて整理。準備も振り返りもスムーズ。',
    icon: <CalendarCheck className="w-8 h-8" />,
  },
]

export default function Onboarding(){
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  const last = index === steps.length - 1

  function next(){
    if (last){
      try { localStorage.setItem('pm_onboarded', '1') } catch {}
      navigate('/auth/signup')
    } else {
      setIndex((i) => Math.min(i + 1, steps.length - 1))
    }
  }

  return (
    <div className="min-h-screen w-full flex items-start justify-center py-8 bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] min-h-[720px] bg-[var(--pm-bg)] rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
        <header className="px-5 pt-4 pb-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">ようこそ</h1>
            <p className="text-sm text-[var(--pm-subtext)] mt-1">PlanMateの使い方を簡単にご紹介</p>
          </div>
          <Link to="/" className="text-xs text-[var(--pm-subtext)] hover:text-[var(--pm-text)]/90">スキップ</Link>
        </header>

        <main className="px-5">
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[var(--pm-shadow)]">
            <div className="mx-auto mb-4 h-28 rounded-xl bg-[radial-gradient(200px_100px_at_50%_20%,rgba(108,140,255,.25),transparent)] border border-white/10 flex items-center justify-center">
              {steps[index].icon}
            </div>
            <h2 className="text-base font-semibold">{steps[index].title}</h2>
            <p className="mt-2 text-sm text-[var(--pm-subtext)]">{steps[index].body}</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-[var(--pm-primary)]' : 'w-2.5 bg-white/15'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm ${last ? 'bg-[var(--pm-primary)] text-white' : 'border border-white/10 bg-white/5 hover:bg-white/10'}`}
            >
              {last ? (<>
                <Rocket className="w-4 h-4" /> はじめる
              </>) : '次へ'}
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
