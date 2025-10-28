import { Outlet, NavLink, Link } from 'react-router-dom'
import { Home, ListChecks, Calendar, Settings, Bell, Plus } from 'lucide-react'

export default function AppShell(){
  return (
    <div className="min-h-screen w-full flex items-start justify-center py-8 bg-[var(--pm-bg)] text-[var(--pm-text)]">
      <div className="w-[375px] min-h-[720px] bg-[var(--pm-bg)] rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden">
        <header className="px-4 pt-4 pb-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">PlanMate</h1>
          <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition" aria-label="notifications">
            <Bell className="w-5 h-5" />
          </button>
        </header>
        <main className="pb-28">
          <Outlet />
        </main>

        <Link to="/quick-planner" className="absolute bottom-20 right-6 p-4 rounded-2xl bg-[var(--pm-primary)] hover:opacity-90 shadow-lg" aria-label="create">
          <Plus className="w-6 h-6 text-white" />
        </Link>

        <nav className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[92%] rounded-2xl bg-[var(--pm-card)]/95 backdrop-blur border border-white/10 px-3 py-1.5">
          <ul className="grid grid-cols-4">
            <NavItem to="/" label="Home" icon={<Home className="w-5 h-5" />} />
            <NavItem to="/tasks" label="Tasks" icon={<ListChecks className="w-5 h-5" />} />
            <NavItem to="/calendar" label="Calendar" icon={<Calendar className="w-5 h-5" />} />
            <NavItem to="/settings" label="Settings" icon={<Settings className="w-5 h-5" />} />
          </ul>
        </nav>
      </div>
    </div>
  )
}

function NavItem({ to, label, icon }: { to:string; label:string; icon:React.ReactNode }){
  return (
    <li>
      <NavLink
        to={to}
        end
        className={({isActive})=>`w-full flex flex-col items-center gap-0.5 py-2 rounded-xl transition ${isActive? 'text-[var(--pm-primary)] bg-white/5' : 'text-[var(--pm-subtext)] hover:text-[var(--pm-text)]/90'}`}
      >
        {icon}
        <span className="text-[10px]">{label}</span>
      </NavLink>
    </li>
  )
}
