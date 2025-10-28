export default function EventPlanningView(){
  return (
    <div className="min-h-screen w-full flex items-start justify-center py-8 bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] min-h-[720px] bg-[var(--pm-bg)] rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
        <header className="px-4 pt-4 pb-3">
          <h1 className="text-lg font-semibold tracking-tight">イベント（計画中）</h1>
          <p className="text-sm text-[var(--pm-subtext)] mt-1">タスクを追加して計画を進めましょう</p>
        </header>
        <main className="px-4">
          <ul className="space-y-2">
            {['場所を決める','参加者に連絡','持ち物を用意'].map((t,i)=> (
              <li key={t} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                <span className="text-sm">{i+1}. {t}</span>
                <button className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs">完了</button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  )
}

