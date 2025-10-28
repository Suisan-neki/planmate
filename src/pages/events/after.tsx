export default function EventAfterView(){
  return (
    <div className="min-h-screen w-full flex items-start justify-center py-8 bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] min-h-[720px] bg-[var(--pm-bg)] rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
        <header className="px-4 pt-4 pb-3">
          <h1 className="text-lg font-semibold tracking-tight">イベント（終了後）</h1>
          <p className="text-sm text-[var(--pm-subtext)] mt-1">ふりかえりとメモを記録しましょう</p>
        </header>
        <main className="px-4">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <h2 className="text-sm font-medium">サマリー</h2>
            <p className="mt-1 text-sm text-[var(--pm-subtext)]">参加者 5名、所要 2時間、満足度 4/5</p>
          </section>
          <section className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
            <h2 className="text-sm font-medium">メモ</h2>
            <textarea className="mt-2 w-full min-h-[120px] rounded-xl border border-white/10 bg-transparent px-3 py-2 text-sm outline-none" placeholder="次回の改善点など" />
          </section>
        </main>
      </div>
    </div>
  )
}

