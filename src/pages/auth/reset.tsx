import { Link } from 'react-router-dom'

export default function ResetPassword(){
  return (
    <div className="min-h-screen w-full flex items-start justify-center py-8 bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] min-h-[720px] bg-[var(--pm-bg)] rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
        <header className="px-4 pt-4 pb-3">
          <h1 className="text-lg font-semibold tracking-tight">パスワード再設定</h1>
          <p className="text-sm text-[var(--pm-subtext)] mt-1">新しいパスワードを設定してください</p>
        </header>
        <main className="px-4">
          <form className="space-y-3">
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">新しいパスワード</label>
              <input type="password" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="••••••••" />
            </div>
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">パスワード（確認）</label>
              <input type="password" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-[var(--pm-primary)] py-2 text-sm text-white">リセット</button>
          </form>

          <p className="mt-4 text-center text-xs text-[var(--pm-subtext)]">
            <Link className="text-[var(--pm-primary)]" to="/auth/signup">ログインへ戻る</Link>
          </p>
        </main>
      </div>
    </div>
  )
}

