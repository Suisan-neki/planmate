// duplicate import removed (already at top)
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Splash from '@/pages/Splash'
import Onboarding from '@/pages/Onboarding'
import Onboarding2 from '@/pages/Onboarding2'
import Onboarding3 from '@/pages/Onboarding3'
import Dashboard from '@/pages/Dashboard'
import AfterEvent1 from '@/pages/AfterEvent1'
import AfterEvent2 from '@/pages/AfterEvent2'
// import Design_97_427 from '@/pages/Design_97_427'
import SignUp1 from '@/pages/SignUp1'
import Forgot1 from '@/pages/Forgot1'
import Forgot2 from '@/pages/Forgot2'
import Reset1 from '@/pages/Reset1'
import Fingerprint1 from '@/pages/Fingerprint1'
import ProfileSetting1 from '@/pages/ProfileSetting1'
import ProfileSetting2 from '@/pages/ProfileSetting2'
import ProfileSetting3 from '@/pages/ProfileSetting3'
import ProfileSetting4 from '@/pages/ProfileSetting4'
import ProfileSetting5 from '@/pages/ProfileSetting5'
import ProfileSetting6 from '@/pages/ProfileSetting6'
import ProfileSetting7 from '@/pages/ProfileSetting7'
import ProfileSetting8 from '@/pages/ProfileSetting8'
import ProfileSetting9 from '@/pages/ProfileSetting9'
import EventView1 from '@/pages/EventView1'
import EventView2 from '@/pages/EventView2'
import EventView3 from '@/pages/EventView3'
import EventView4 from '@/pages/EventView4'
import EventView5 from '@/pages/EventView5'
import EventView6 from '@/pages/EventView6'
import EventView7 from '@/pages/EventView7'
import EventView8 from '@/pages/EventView8'

type PageKey = string

export default function App() {
  const [page, setPage] = useState<PageKey>(() => (localStorage.getItem('dev_page') as PageKey) || 'splash')
  const { i18n } = useTranslation()
  const knownPages = new Set<PageKey>([
    'splash','onboarding','onboarding2','onboarding3',
    'signUp1',
    'forgot1','forgot2',
    'reset1',
    'fingerprint1',
    'profileSetting1','profileSetting2','profileSetting3','profileSetting4','profileSetting5','profileSetting6','profileSetting7','profileSetting8','profileSetting9',
    'dashboard',
    'eventView1','eventView2','eventView3','eventView4','eventView5','eventView6','eventView7','eventView8',
    'afterEvent1','afterEvent2'
  ])
  const activePage: PageKey = knownPages.has(page) ? page : 'splash'

  useEffect(() => { localStorage.setItem('dev_page', page) }, [page])
  useEffect(() => {
    if (!knownPages.has(page)) setPage('splash')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    ;(window as any).__setDevPage = (p: PageKey) => setPage(p)
    return () => { try { delete (window as any).__setDevPage } catch {} }
  }, [])

  return (
    <div className="min-h-screen w-full bg-white p-6">
      {/* 小画面向け: 上部の横並びメニュー */}
      <DevToolbar
        className="mb-4 md:hidden"
        page={activePage}
        onChange={setPage}
        lang={i18n.language as 'ja' | 'en'}
        onLang={(lng) => i18n.changeLanguage(lng)}
      />

      <div className="mx-auto flex max-w-[1200px] items-start justify-center gap-6">
        <div className="shrink-0 w-[375px]">
          {activePage === 'splash' && <Splash />}
          {activePage === 'onboarding' && <Onboarding />}
          {activePage === 'onboarding2' && <Onboarding2 />}
          {activePage === 'onboarding3' && <Onboarding3 />}
          {activePage === 'signUp1' && <SignUp1 />}
          
          {activePage === 'forgot1' && <Forgot1 />}
          {activePage === 'forgot2' && <Forgot2 />}
          {activePage === 'reset1' && <Reset1 />}
          {activePage === 'fingerprint1' && <Fingerprint1 />}
          {activePage === 'profileSetting1' && <ProfileSetting1 />}
          {activePage === 'profileSetting2' && <ProfileSetting2 />}
          {activePage === 'profileSetting3' && <ProfileSetting3 />}
          {activePage === 'profileSetting4' && <ProfileSetting4 />}
          {activePage === 'profileSetting5' && <ProfileSetting5 />}
          {activePage === 'profileSetting6' && <ProfileSetting6 />}
          {activePage === 'profileSetting7' && <ProfileSetting7 />}
          {activePage === 'profileSetting8' && <ProfileSetting8 />}
          {activePage === 'profileSetting9' && <ProfileSetting9 />}
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'eventView1' && <EventView1 />}
          {activePage === 'eventView2' && <EventView2 />}
          {activePage === 'eventView3' && <EventView3 />}
          {activePage === 'eventView4' && <EventView4 />}
          {activePage === 'eventView5' && <EventView5 />}
          {activePage === 'eventView6' && <EventView6 />}
          {activePage === 'eventView7' && <EventView7 />}
          {activePage === 'eventView8' && <EventView8 />}
          {activePage === 'afterEvent1' && <AfterEvent1 />}
          {activePage === 'afterEvent2' && <AfterEvent2 />}
        </div>
        <DevSidebar
          page={activePage}
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
      <div className="text-[11px] text-black/50">Sign Up</div>
      <NavButton k="signUp1" label="Sign Up 1" />
      
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">Forgot Password</div>
      <NavButton k="forgot1" label="Forgot 1" />
      <NavButton k="forgot2" label="Forgot 2" />
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">Reset Password</div>
      <NavButton k="reset1" label="Reset 1" />
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">Fingerprint Login</div>
      <NavButton k="fingerprint1" label="Fingerprint 1" />
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">Profile Setting</div>
      <NavButton k="profileSetting1" label="Profile Setting 1" />
      <NavButton k="profileSetting2" label="Profile Setting 2" />
      <NavButton k="profileSetting3" label="Profile Setting 3" />
      <NavButton k="profileSetting4" label="Profile Setting 4" />
      <NavButton k="profileSetting5" label="Profile Setting 5" />
      <NavButton k="profileSetting6" label="Profile Setting 6" />
      <NavButton k="profileSetting7" label="Profile Setting 7" />
      <NavButton k="profileSetting8" label="Profile Setting 8" />
      <NavButton k="profileSetting9" label="Profile Setting 9" />
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">App</div>
      <NavButton k="dashboard" label="Home" />
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">Event View</div>
      <NavButton k="eventView1" label="Event View 1" />
      <NavButton k="eventView2" label="Event View 2" />
      <NavButton k="eventView3" label="Event View 3" />
      <NavButton k="eventView4" label="Event View 4" />
      <NavButton k="eventView5" label="Event View 5" />
      <NavButton k="eventView6" label="Event View 6" />
      <NavButton k="eventView7" label="Event View 7" />
      <NavButton k="eventView8" label="Event View 8" />
      <div className="my-1 h-px bg-black/10" />
      <div className="text-[11px] text-black/50">After Event</div>
      <NavButton k="afterEvent1" label="After Event 1" />
      <NavButton k="afterEvent2" label="After Event 2" />
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
      <Tab k="dashboard" label="Dashboard" />
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

// OverlayControls removed
