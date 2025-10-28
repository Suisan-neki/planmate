export default function CalendarPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Calendar</h1>
      <div className="grid grid-cols-7 gap-2 rounded-lg border border-border bg-card p-4 shadow-card">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-md border border-border bg-bg/60 p-2 text-xs text-fg/70"
          >
            Day {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

