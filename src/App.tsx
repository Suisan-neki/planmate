// duplicate import removed (already at top)
import { useTranslation } from 'react-i18next'
import Splash from '@/pages/Splash'
import Onboarding from '@/pages/Onboarding'
import Onboarding2 from '@/pages/Onboarding2'
import Onboarding3 from '@/pages/Onboarding3'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import Forgot from '@/pages/Forgot'
import Reset from '@/pages/Reset'
import Dashboard from '@/pages/Dashboard'
import Calendar from '@/pages/Calendar'
import EventsPlanning from '@/pages/EventsPlanning'
import EventsAfter from '@/pages/EventsAfter'
import QuickPlanner from '@/pages/QuickPlanner'
import Profile from '@/pages/Profile'
import Settings from '@/pages/Settings'

type PageKey =
  | 'splash'
  | 'onboarding'
  | 'onboarding2'
  | 'onboarding3'
  | 'login'
  | 'signup'
  | 'forgot'
  | 'reset'
  | 'dashboard'
  | 'calendar'
  | 'eventsPlanning'
  | 'eventsAfter'
  | 'quickplanner'
  | 'profile'
  | 'settings'

export default function App() {
  const [page, setPage] = useState<PageKey>(() => (localStorage.getItem('dev_page') as PageKey) || 'splash')
  const { i18n } = useTranslation()

  useEffect(() => { localStorage.setItem('dev_page', page) }, [page])
  useEffect(() => {
    ;(window as any).__setDevPage = (p: PageKey) => setPage(p)
    return () => { try { delete (window as any).__setDevPage } catch {} }
  }, [])

  return (
    <div className="min-h-screen w-full bg-white p-6">
      {/* 小画面向け: 上部の横並びメニュー */}
      <DevToolbar
        className="mb-4 md:hidden"
        page={page}
        onChange={setPage}
        lang={i18n.language as 'ja' | 'en'}
        onLang={(lng) => i18n.changeLanguage(lng)}
      />

      <div className="mx-auto flex max-w-[1200px] items-start justify-center gap-6">
        <div className="shrink-0 w-[375px]">
          {page === 'splash' && <Splash />}
          {page === 'onboarding' && <Onboarding />}
          {page === 'onboarding2' && <Onboarding2 />}
          {page === 'onboarding3' && <Onboarding3 />}
          {page === 'login' && <Login />}
          {page === 'signup' && <SignUp />}
          {page === 'forgot' && <Forgot />}
          {page === 'reset' && <Reset />}
          {page === 'dashboard' && <Dashboard />}
          {page === 'calendar' && <Calendar />}
          {page === 'eventsPlanning' && <EventsPlanning />}
          {page === 'eventsAfter' && <EventsAfter />}
          {page === 'quickplanner' && <QuickPlanner />}
          {page === 'profile' && <Profile />}
          {page === 'settings' && <Settings />}
        </div>
        <DevSidebar
          page={page}
          onChange={setPage}
          lang={i18n.language as 'ja' | 'en'}
          onLang={(lng) => i18n.changeLanguage(lng)}
        />
      </div>
    </div>
  )
}

function DevSidebar({
  page,
  onChange,
  lang,
  onLang,
}: {
  page: PageKey
  onChange: (p: PageKey) => void
  lang: 'ja' | 'en'
  onLang: (l: 'ja' | 'en') => void
}) {
  const NavButton = ({ k, label }: { k: PageKey; label: string }) => (
    <button
      onClick={() => onChange(k)}
      className={`h-9 w-full rounded-md px-3 text-left text-sm ${page === k ? 'bg-primary text-white' : 'bg-[var(--pm-muted)] hover:brightness-95'}`}
    >
      {label}
    </button>
  )
  return (
    <aside className="sticky top-6 hidden w-[240px] shrink-0 flex-col gap-2 rounded-xl border border-[var(--pm-border)] bg-white/90 p-3 shadow-sm backdrop-blur md:flex">
      <div className="text-xs mb-1 text-black/60">Pages</div>
      <NavButton k="splash" label="Splash" />
      <NavButton k="onboarding" label="Onboarding 1" />
      <NavButton k="onboarding2" label="Onboarding 2" />
      <NavButton k="onboarding3" label="Onboarding 3" />
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">Auth</div>
      <NavButton k="login" label="Login" />
      <NavButton k="signup" label="Sign Up" />
      <NavButton k="forgot" label="Forgot" />
      <NavButton k="reset" label="Reset" />
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">App</div>
      <NavButton k="dashboard" label="Home" />
      <NavButton k="calendar" label="Calendar" />
      <NavButton k="eventsPlanning" label="Event Planning" />
      <NavButton k="eventsAfter" label="Event After" />
      <NavButton k="quickplanner" label="Quick Planner" />
      <NavButton k="profile" label="Profile" />
      <NavButton k="settings" label="Settings" />
      <div className="my-2 h-px w-full bg-black/10" />
      <div className="text-xs mb-1 text-black/60">Language</div>
      <div className="flex overflow-hidden rounded-md border border-[var(--pm-border)]">
        <button
          onClick={() => onLang('ja')}
          className={`h-8 w-1/2 text-xs ${lang === 'ja' ? 'bg-primary text-white' : 'bg-[var(--pm-muted)]'}`}
        >
          JA
        </button>
        <button
          onClick={() => onLang('en')}
          className={`h-8 w-1/2 text-xs ${lang === 'en' ? 'bg-primary text-white' : 'bg-[var(--pm-muted)]'}`}
        >
          EN
        </button>
      </div>

      <div className="my-2 h-px w-full bg-black/10" />
      <div className="text-xs mb-1 text-black/60">Overlays</div>
      <OverlayControls />
    </aside>
  )
}

function DevToolbar({
  className = '',
  page,
  onChange,
  lang,
  onLang,
}: {
  className?: string
  page: PageKey
  onChange: (p: PageKey) => void
  lang: 'ja' | 'en'
  onLang: (l: 'ja' | 'en') => void
}) {
  const Tab = ({ k, label }: { k: PageKey; label: string }) => (
    <button
      onClick={() => onChange(k)}
      className={`h-9 shrink-0 rounded-md px-3 text-sm ${page === k ? 'bg-primary text-white' : 'bg-[var(--pm-muted)] hover:brightness-95'}`}
    >
      {label}
    </button>
  )
  return (
    <div className={`flex items-center gap-2 overflow-x-auto rounded-xl border border-[var(--pm-border)] bg-white/90 p-2 shadow-sm backdrop-blur ${className}`}>
      <Tab k="splash" label="Splash" />
      <Tab k="onboarding" label="Onboarding" />
      <Tab k="login" label="Login" />
      <Tab k="dashboard" label="Dashboard" />
      <Tab k="settings" label="Settings" />
      <div className="mx-2 h-4 w-px bg-black/10" />
      <div className="flex overflow-hidden rounded-md border border-[var(--pm-border)]">
        <button
          onClick={() => onLang('ja')}
          className={`h-8 w-10 text-xs ${lang === 'ja' ? 'bg-primary text-white' : 'bg-[var(--pm-muted)]'}`}
        >
          JA
        </button>
        <button
          onClick={() => onLang('en')}
          className={`h-8 w-10 text-xs ${lang === 'en' ? 'bg-primary text-white' : 'bg-[var(--pm-muted)]'}`}
        >
          EN
        </button>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'

function OverlayControls() {
  const [grid, setGrid] = useState<boolean>(() => JSON.parse(localStorage.getItem('dev_grid') ?? 'false'))
  const [gridStep, setGridStep] = useState<number>(() => Number(localStorage.getItem('dev_grid_step') ?? '8'))
  const [gridOpacity, setGridOpacity] = useState<number>(() => Number(localStorage.getItem('dev_grid_opacity') ?? '0.25'))
  const [img, setImg] = useState<string>(() => localStorage.getItem('dev_img_overlay') ?? '')
  const [imgOpacity, setImgOpacity] = useState<number>(() => Number(localStorage.getItem('dev_img_opacity') ?? '0.3'))

  useEffect(() => {
    ;(window as any).__grid = grid
    localStorage.setItem('dev_grid', JSON.stringify(grid))
    window.dispatchEvent(new CustomEvent('dev-overlay-change'))
  }, [grid])

  useEffect(() => {
    ;(window as any).__gridStep = gridStep
    localStorage.setItem('dev_grid_step', String(gridStep))
    window.dispatchEvent(new CustomEvent('dev-overlay-change'))
  }, [gridStep])

  useEffect(() => {
    ;(window as any).__gridOpacity = gridOpacity
    localStorage.setItem('dev_grid_opacity', String(gridOpacity))
    window.dispatchEvent(new CustomEvent('dev-overlay-change'))
  }, [gridOpacity])

  useEffect(() => {
    (window as any).__imgOverlay = img || undefined
    if (img) localStorage.setItem('dev_img_overlay', img)
    else localStorage.removeItem('dev_img_overlay')
    window.dispatchEvent(new CustomEvent('dev-overlay-change'))
  }, [img])

  useEffect(() => {
    (window as any).__imgOpacity = imgOpacity
    localStorage.setItem('dev_img_opacity', String(imgOpacity))
    window.dispatchEvent(new CustomEvent('dev-overlay-change'))
  }, [imgOpacity])

  return (
    <div className="grid gap-2 text-xs">
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={grid} onChange={(e) => setGrid(e.target.checked)} />
        Baseline grid (8px)
      </label>
      <div className="flex items-center gap-2">
        <span className="w-16">Grid step</span>
        <input type="range" min={4} max={24} step={1} value={gridStep} onChange={(e) => setGridStep(Number(e.target.value))} />
        <span>{gridStep}px</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-16">Grid alpha</span>
        <input type="range" min={0} max={1} step={0.05} value={gridOpacity} onChange={(e) => setGridOpacity(Number(e.target.value))} />
        <span>{gridOpacity.toFixed(2)}</span>
      </div>
      <div>
        <div className="mb-1">Image overlay path</div>
        <input
          className="w-full rounded-md border border-[var(--pm-border)] px-2 py-1 text-xs outline-none"
          placeholder="/assets/overlay.png"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <div className="mt-1 flex items-center gap-2">
          <span className="w-16">Opacity</span>
          <input type="range" min={0} max={1} step={0.05} value={imgOpacity} onChange={(e) => setImgOpacity(Number(e.target.value))} />
          <span>{imgOpacity.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
