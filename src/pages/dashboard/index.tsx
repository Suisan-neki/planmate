export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <section className="rounded-lg border border-border bg-card p-4 shadow-card">
          <h2 className="mb-2 text-sm font-medium text-fg/70">Today</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between rounded-md border border-border px-3 py-2">
              <span className="truncate">Standup with team</span>
              <span className="text-xs text-fg/50">09:30</span>
            </li>
            <li className="flex items-center justify-between rounded-md border border-border px-3 py-2">
              <span className="truncate">Design review</span>
              <span className="text-xs text-fg/50">11:00</span>
            </li>
          </ul>
        </section>
        <section className="rounded-lg border border-border bg-card p-4 shadow-card">
          <h2 className="mb-2 text-sm font-medium text-fg/70">Progress</h2>
          <div className="space-y-3 text-sm">
            <div>
              <div className="mb-1 flex justify-between">
                <span>Week Completion</span>
                <span className="text-fg/50">62%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[62%] bg-primary" />
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span>Overdue</span>
                <span className="text-fg/50">3</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[20%] bg-primary" />
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-lg border border-border bg-card p-4 shadow-card">
          <h2 className="mb-2 text-sm font-medium text-fg/70">Quick Actions</h2>
          <div className="flex flex-wrap gap-2">
            <a
              href="/tasks/new"
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-fg"
            >
              New Task
            </a>
            <a
              href="/tasks"
              className="inline-flex items-center rounded-md border border-border bg-bg px-3 py-2 text-sm"
            >
              View Tasks
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

