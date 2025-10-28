import { Link } from 'react-router-dom'

export default function ForgotPassword(){
  return (
    <div className="min-h-screen w-full flex items-start justify-center py-8 bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] min-h-[720px] bg-[var(--pm-bg)] rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
        <header className="px-4 pt-4 pb-3">
          <h1 className="text-lg font-semibold tracking-tight">パスワードをお忘れですか？</h1>
          <p className="text-sm text-[var(--pm-subtext)] mt-1">登録したメールアドレスを入力してください</p>
        </header>
        <main className="px-4">
          <form className="space-y-3">
            <div>
              <label className="text-xs text-[var(--pm-subtext)]">メールアドレス</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="you@example.com" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-[var(--pm-primary)] py-2 text-sm text-white">送信</button>
          </form>

          <p className="mt-4 text-center text-xs text-[var(--pm-subtext)]">
            <Link className="text-[var(--pm-primary)]" to="/auth/reset">リセットコードをお持ちの方</Link>
          </p>
        </main>
      </div>
    </div>
  )
}

