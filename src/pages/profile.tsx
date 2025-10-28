export default function ProfileSetting(){
  return (
    <div className="min-h-screen w-full flex items-start justify-center py-8 bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] min-h-[720px] bg-[var(--pm-bg)] rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
        <header className="px-4 pt-4 pb-3">
          <h1 className="text-lg font-semibold tracking-tight">プロフィール設定</h1>
          <p className="text-sm text-[var(--pm-subtext)] mt-1">個人情報を編集します</p>
        </header>
        <main className="px-4">
          <form className="space-y-3">
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">表示名</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="表示名" />
            </div>
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">メール</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">自己紹介</label>
              <textarea className="mt-1 w-full min-h-[100px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="ひとこと" />
            </div>
            <button className="w-full rounded-xl bg-[var(--pm-primary)] py-2 text-sm text-white">保存</button>
          </form>
        </main>
      </div>
    </div>
  )
}

