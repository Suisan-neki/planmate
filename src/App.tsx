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
import CalendarView1 from '@/pages/CalendarView1'
import CalendarView2 from '@/pages/CalendarView2'
import CalendarView3 from '@/pages/CalendarView3'
import QuickPlannerButton1 from '@/pages/QuickPlannerButton1'
import QuickPlannerButton2 from '@/pages/QuickPlannerButton2'
import ProfilePersonalSettingView1 from '@/pages/ProfilePersonalSettingView1'
import ProjectsYouAreIn1 from '@/pages/ProjectsYouAreIn1'
import ProjectsYouAreIn2 from '@/pages/ProjectsYouAreIn2'
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

const PAGE_LANG_MAP: Record<PageKey, Array<'ja' | 'en'>> = {
  splash: ['ja', 'en'],
  onboarding: ['ja', 'en'],
  onboarding2: ['ja', 'en'],
  onboarding3: ['ja', 'en'],
  signUp1: ['ja', 'en'],
  forgot1: ['ja', 'en'],
  forgot2: ['ja', 'en'],
  reset1: ['ja', 'en'],
  fingerprint1: ['en'],
  profileSetting1: ['ja'],
  profileSetting2: ['ja'],
  profileSetting3: ['ja'],
  profileSetting4: ['ja'],
  profileSetting5: ['ja'],
  profileSetting6: ['ja'],
  profileSetting7: ['ja'],
  profileSetting8: ['ja'],
  profileSetting9: ['ja'],
  dashboard: ['ja'],
  eventView1: ['ja'],
  eventView2: ['ja'],
  eventView3: ['ja'],
  eventView4: ['ja'],
  eventView5: ['ja'],
  eventView6: ['ja'],
  eventView7: ['ja'],
  eventView8: ['ja'],
  afterEvent1: ['ja'],
  afterEvent2: ['ja'],
  calendarView1: ['ja'],
  calendarView2: ['ja'],
  calendarView3: ['ja'],
  quickPlannerButton1: ['en'],
  quickPlannerButton2: ['ja'],
  profilePersonalSettingView1: ['ja'],
  projectsYouAreIn1: ['en'],
  projectsYouAreIn2: ['en'],
}

const ALL_PAGES: PageKey[] = [
  'splash',
  'onboarding',
  'onboarding2',
  'onboarding3',
  'signUp1',
  'forgot1',
  'forgot2',
  'reset1',
  'fingerprint1',
  'profileSetting1',
  'profileSetting2',
  'profileSetting3',
  'profileSetting4',
  'profileSetting5',
  'profileSetting6',
  'profileSetting7',
  'profileSetting8',
  'profileSetting9',
  'dashboard',
  'eventView1',
  'eventView2',
  'eventView3',
  'eventView4',
  'eventView5',
  'eventView6',
  'eventView7',
  'eventView8',
  'afterEvent1',
  'afterEvent2',
  'calendarView1',
  'calendarView2',
  'calendarView3',
  'quickPlannerButton1',
  'quickPlannerButton2',
  'profilePersonalSettingView1',
  'projectsYouAreIn1',
  'projectsYouAreIn2',
]

const KNOWN_PAGES = new Set<PageKey>(ALL_PAGES)

function isPageAvailableInLang(page: PageKey, lang: 'ja' | 'en') {
  return (PAGE_LANG_MAP[page] ?? ['ja', 'en']).includes(lang)
}

function firstAvailablePage(lang: 'ja' | 'en'): PageKey {
  return ALL_PAGES.find((p) => isPageAvailableInLang(p, lang)) ?? 'splash'
}

export default function App() {
  const [page, setPage] = useState<PageKey>(() => (localStorage.getItem('dev_page') as PageKey) || 'splash')
  const { i18n } = useTranslation()
  const lang = (i18n.language?.startsWith('en') ? 'en' : 'ja') as 'ja' | 'en'
  const fallbackPage = firstAvailablePage(lang)
  const activePage: PageKey =
    KNOWN_PAGES.has(page) && isPageAvailableInLang(page, lang) ? page : fallbackPage

  useEffect(() => { localStorage.setItem('dev_page', page) }, [page])
  useEffect(() => {
    if (!KNOWN_PAGES.has(page) || !isPageAvailableInLang(page, lang)) {
      setPage(fallbackPage)
    }
  }, [page, lang, fallbackPage])
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
        lang={lang}
        onLang={(lng) => i18n.changeLanguage(lng)}
        isAvailable={(k) => isPageAvailableInLang(k, lang)}
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
          {activePage === 'calendarView1' && <CalendarView1 />}
          {activePage === 'calendarView2' && <CalendarView2 />}
          {activePage === 'calendarView3' && <CalendarView3 />}
          {activePage === 'quickPlannerButton1' && <QuickPlannerButton1 />}
          {activePage === 'quickPlannerButton2' && <QuickPlannerButton2 />}
          {activePage === 'profilePersonalSettingView1' && <ProfilePersonalSettingView1 />}
          {activePage === 'projectsYouAreIn1' && <ProjectsYouAreIn1 />}
          {activePage === 'projectsYouAreIn2' && <ProjectsYouAreIn2 />}
        </div>
        <DevSidebar
          page={activePage}
          onChange={setPage}
          lang={lang}
          onLang={(lng) => i18n.changeLanguage(lng)}
          isAvailable={(k) => isPageAvailableInLang(k, lang)}
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
  isAvailable,
}: {
  page: PageKey
  onChange: (p: PageKey) => void
  lang: 'ja' | 'en'
  onLang: (l: 'ja' | 'en') => void
  isAvailable: (p: PageKey) => boolean
}) {
  const NavButton = ({ k, label }: { k: PageKey; label: string }) => (
    <button
      onClick={() => onChange(k)}
      className={`h-9 w-full rounded-md px-3 text-left text-sm ${page === k ? 'bg-primary text-white' : 'bg-[var(--pm-muted)] hover:brightness-95'}`}
    >
      {label}
    </button>
  )

  const sections = [
    {
      title: 'Pages',
      headingClass: 'text-xs mb-1 text-black/60',
      items: [
        { key: 'splash', label: 'Splash' },
        { key: 'onboarding', label: 'Onboarding 1' },
        { key: 'onboarding2', label: 'Onboarding 2' },
        { key: 'onboarding3', label: 'Onboarding 3' },
      ],
    },
    { title: 'Sign Up', items: [{ key: 'signUp1', label: 'Sign Up 1' }] },
    {
      title: 'Forgot Password',
      items: [
        { key: 'forgot1', label: 'Forgot 1' },
        { key: 'forgot2', label: 'Forgot 2' },
      ],
    },
    { title: 'Reset Password', items: [{ key: 'reset1', label: 'Reset 1' }] },
    { title: 'Fingerprint Login', items: [{ key: 'fingerprint1', label: 'Fingerprint 1' }] },
    {
      title: 'Profile Setting',
      items: [
        { key: 'profileSetting1', label: 'Profile Setting 1' },
        { key: 'profileSetting2', label: 'Profile Setting 2' },
        { key: 'profileSetting3', label: 'Profile Setting 3' },
        { key: 'profileSetting4', label: 'Profile Setting 4' },
        { key: 'profileSetting5', label: 'Profile Setting 5' },
        { key: 'profileSetting6', label: 'Profile Setting 6' },
        { key: 'profileSetting7', label: 'Profile Setting 7' },
        { key: 'profileSetting8', label: 'Profile Setting 8' },
        { key: 'profileSetting9', label: 'Profile Setting 9' },
      ],
    },
    { title: 'App', items: [{ key: 'dashboard', label: 'Home' }] },
    {
      title: 'Event View',
      items: [
        { key: 'eventView1', label: 'Event View 1' },
        { key: 'eventView2', label: 'Event View 2' },
        { key: 'eventView3', label: 'Event View 3' },
        { key: 'eventView4', label: 'Event View 4' },
        { key: 'eventView5', label: 'Event View 5' },
        { key: 'eventView6', label: 'Event View 6' },
        { key: 'eventView7', label: 'Event View 7' },
        { key: 'eventView8', label: 'Event View 8' },
      ],
    },
    {
      title: 'After Event',
      items: [
        { key: 'afterEvent1', label: 'After Event 1' },
        { key: 'afterEvent2', label: 'After Event 2' },
      ],
    },
    {
      title: 'Calendar View',
      items: [
        { key: 'calendarView1', label: 'Calendar View 1' },
        { key: 'calendarView2', label: 'Calendar View 2' },
        { key: 'calendarView3', label: 'Calendar View 3' },
      ],
    },
    {
      title: 'Quick Planner Button',
      items: [
        { key: 'quickPlannerButton1', label: 'Quick Planner Button 1' },
        { key: 'quickPlannerButton2', label: 'Quick Planner Button 2' },
      ],
    },
    {
      title: 'Profile Personal Setting View',
      items: [{ key: 'profilePersonalSettingView1', label: 'Profile Personal Setting View 1' }],
    },
    {
      title: 'Projects You Are In (EN only)',
      items: [
        { key: 'projectsYouAreIn1', label: 'Projects You Are In 1' },
        { key: 'projectsYouAreIn2', label: 'Projects You Are In 2' },
      ],
    },
  ]

  const visibleSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => isAvailable(item.key)),
    }))
    .filter((section) => section.items.length > 0)

  return (
    <aside className="sticky top-6 hidden w-[240px] shrink-0 flex-col gap-2 rounded-xl border border-[var(--pm-border)] bg-white/90 p-3 shadow-sm backdrop-blur md:flex">
      {visibleSections.map((section, idx) => (
        <div key={section.title}>
          <div className={section.headingClass ?? 'text-[11px] text-black/50'}>{section.title}</div>
          {section.items.map((item) => (
            <NavButton key={item.key} k={item.key} label={item.label} />
          ))}
          <div className={`${idx === visibleSections.length - 1 ? 'my-2' : 'my-1'} h-px w-full bg-black/10`} />
        </div>
      ))}
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
  isAvailable,
}: {
  className?: string
  page: PageKey
  onChange: (p: PageKey) => void
  lang: 'ja' | 'en'
  onLang: (l: 'ja' | 'en') => void
  isAvailable: (p: PageKey) => boolean
}) {
  const Tab = ({ k, label }: { k: PageKey; label: string }) => (
    <button
      onClick={() => onChange(k)}
      className={`h-9 shrink-0 rounded-md px-3 text-sm ${page === k ? 'bg-primary text-white' : 'bg-[var(--pm-muted)] hover:brightness-95'}`}
    >
      {label}
    </button>
  )

  const tabs = [
    { k: 'splash' as PageKey, label: 'Splash' },
    { k: 'onboarding' as PageKey, label: 'Onboarding' },
    { k: 'dashboard' as PageKey, label: 'Dashboard' },
  ].filter((tab) => isAvailable(tab.k))

  return (
    <div className={`flex items-center gap-2 overflow-x-auto rounded-xl border border-[var(--pm-border)] bg-white/90 p-2 shadow-sm backdrop-blur ${className}`}>
      {tabs.map((tab) => (
        <Tab key={tab.k} k={tab.k} label={tab.label} />
      ))}
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
