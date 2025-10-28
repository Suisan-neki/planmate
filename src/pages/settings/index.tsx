export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <section className="rounded-lg border border-border bg-card p-4 shadow-card">
        <h2 className="mb-2 text-sm font-medium text-fg/70">Appearance</h2>
        <p className="text-sm text-fg/70">
          Uses system preference for now. Manual theme switch can be added.
        </p>
      </section>
      <section className="rounded-lg border border-border bg-card p-4 shadow-card">
        <h2 className="mb-2 text-sm font-medium text-fg/70">Account</h2>
        <p className="text-sm text-fg/70">MVP: display-only.</p>
      </section>
    </div>
  )
}

