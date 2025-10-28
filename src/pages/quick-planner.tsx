export default function QuickPlanner(){
  return (
    <div className="min-h-screen w-full flex items-start justify-center py-8 bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] min-h-[720px] bg-[var(--pm-bg)] rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
        <header className="px-4 pt-4 pb-3">
          <h1 className="text-lg font-semibold tracking-tight">クイックプランナー</h1>
          <p className="text-sm text-[var(--pm-subtext)] mt-1">最小入力で計画を作成</p>
        </header>
        <main className="px-4">
          <form className="space-y-3">
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">タイトル</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="イベント名" />
            </div>
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">日時</label>
              <input type="datetime-local" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" />
            </div>
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">メモ</label>
              <textarea className="mt-1 w-full min-h-[100px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="メモ" />
            </div>
            <button className="w-full rounded-xl bg-[var(--pm-primary)] py-2 text-sm text-white">下書き作成</button>
          </form>
        </main>
      </div>
    </div>
  )
}

