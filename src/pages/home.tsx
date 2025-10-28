import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import { Calendar } from 'lucide-react'

export default function HomePage(){
  return (
    <div className="stack-4">
      <Card className="mx-4 mt-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[var(--pm-subtext)]">Today</p>
            <h2 className="mt-1 text-xl font-semibold">3 tasks • 2 events</h2>
          </div>
          <div className="flex items-center gap-2 text-[var(--pm-subtext)]">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">Oct 28</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-[var(--pm-text)]/90 border border-white/10">Study</span>
          <span className="px-3 py-1 text-xs rounded-full bg-[var(--pm-accent)]/15 text-[var(--pm-accent)] border border-white/10">Meeting</span>
          <span className="px-3 py-1 text-xs rounded-full bg-[var(--pm-danger)]/15 text-[var(--pm-danger)] border border-white/10">Workout</span>
        </div>
      </Card>

      <section className="mt-2">
        <h3 className="px-4 text-sm tracking-wide text-[var(--pm-subtext)]">Upcoming</h3>
        <div className="mt-2 flex flex-col gap-2 px-4">
          <TaskItem title="Lab practice" time="10:00 - 12:00" />
          <TaskItem title="Write project summary" time="13:30 - 14:30" accent />
          <TaskItem title="Gym" time="18:00 - 19:00" />
        </div>
      </section>

      <div className="h-2"/>
      <div className="h-2"/>
    </div>
  )
}

function TaskItem({title, time, accent}:{title:string; time:string; accent?:boolean}){
  return (
    <div className={`rounded-2xl p-3 flex items-center justify-between border ${accent? 'border-[var(--pm-accent)]/30 bg-[var(--pm-accent)]/10' : 'border-white/10 bg-[var(--pm-card)]/70'}`}>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-[var(--pm-subtext)] mt-0.5">{time}</p>
      </div>
      <Button>Details</Button>
    </div>
  )
}

