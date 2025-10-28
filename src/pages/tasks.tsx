export default function TasksPage(){
  return (
    <div>
      <h3 className="px-4 text-sm tracking-wide text-[var(--pm-subtext)]">All Tasks</h3>
      <div className="px-4 mt-2 flex flex-col gap-2">
        {Array.from({length:6}).map((_,i)=> (
          <div key={i} className="rounded-2xl p-3 border border-white/10 bg-white/5">Task {i+1}</div>
        ))}
      </div>
    </div>
  )
}

