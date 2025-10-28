export default function CalendarPage(){
  return (
    <div>
      <h3 className="px-4 text-sm tracking-wide text-[var(--pm-subtext)]">Calendar</h3>
      <div className="px-4 mt-3 grid grid-cols-7 gap-1 text-xs">
        {['S','M','T','W','T','F','S'].map(d=> <div key={d} className="text-center text-[var(--pm-subtext)]">{d}</div>)}
        {Array.from({length:35}).map((_,i)=> (
          <div key={i} className={`aspect-square rounded-xl flex items-center justify-center border border-white/10 ${i===27? 'bg-[var(--pm-primary)]/20 text-[var(--pm-primary)]' : 'bg-white/5'}`}>{(i%30)+1}</div>
        ))}
      </div>
    </div>
  )
}

