import { useMemo, useState } from 'react'
import AppShell from './app/AppShell'
import DeviceFrame from './components/layout/DeviceFrame'
import Button from './components/atoms/Button'
import FormField from './components/molecules/FormField'
import Icon from './components/atoms/Icon'
import { useI18n } from './i18n/I18n'

type Screen =
  | 'splash'
  | 'onboarding1'
  | 'onboarding2'
  | 'onboarding3'
  | 'signup'
  | 'signupError'
  | 'signupLoading'
  | 'forgot'
  | 'verify'
  | 'reset'
  | 'projects'
  | 'tasks'
  | 'calendar'
  | 'home'

const tabs: Array<{ key: Screen; label: string }> = [
  { key: 'splash', label: 'Splash' },
  { key: 'onboarding1', label: 'Onboard 1' },
  { key: 'onboarding2', label: 'Onboard 2' },
  { key: 'onboarding3', label: 'Onboard 3' },
  { key: 'signup', label: 'Sign Up' },
  { key: 'signupError', label: 'SignUp Err' },
  { key: 'signupLoading', label: 'SignUp Load' },
  { key: 'forgot', label: 'Forgot' },
  { key: 'verify', label: 'Verify' },
  { key: 'reset', label: 'Reset' },
  { key: 'projects', label: 'Projects' },
  { key: 'tasks', label: 'Tasks' },
  { key: 'calendar', label: 'Calendar' },
  { key: 'home', label: 'Home' },
]

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash')
  const { t, locale, setLocale } = useI18n()

  const Content = useMemo(() => {
    switch (screen) {
      case 'splash':
        return <Splash />
      case 'onboarding1':
        return <Onboarding1 />
      case 'onboarding2':
        return <Onboarding2 />
      case 'onboarding3':
        return <Onboarding3 />
      case 'signup':
        return <SignUpEmpty />
      case 'signupError':
        return <SignUpError />
      case 'signupLoading':
        return <SignUpLoading />
      case 'forgot':
        return <ForgotPassword />
      case 'verify':
        return <Verification />
      case 'reset':
        return <ResetPassword />
      case 'projects':
        return <ProjectsIn />
      case 'tasks':
        return <TasksScreen />
      case 'calendar':
        return <CalendarScreen />
      case 'home':
        return <Home />
    }
  }, [screen])

  const activeNav = screen === 'home'
    ? 'home'
    : screen === 'onboarding1' || screen === 'onboarding2' || screen === 'onboarding3' || screen === 'tasks' || screen === 'projects'
      ? 'tasks'
      : screen === 'signup' || screen === 'forgot' || screen === 'verify' || screen === 'reset' || screen === 'calendar'
        ? 'profile'
        : undefined

  return (
    <div className="min-h-screen text-dark font-sans">
      <DeviceFrame>
        <AppShell
          title={labelFor(screen, t)}
        >
          {Content}
        </AppShell>
      </DeviceFrame>
      <div className="fixed left-4 top-5 z-50">
        <div className="mb-2 flex gap-2">
          <button
            className={`rounded px-2 py-1 text-xs ring-1 ${locale==='ja'?'bg-primary text-white ring-primary':'ring-grey/30'}`}
            onClick={() => setLocale('ja')}
          >JA</button>
          <button
            className={`rounded px-2 py-1 text-xs ring-1 ${locale==='en'?'bg-primary text-white ring-primary':'ring-grey/30'}`}
            onClick={() => setLocale('en')}
          >EN</button>
        </div>
      </div>
      <div className="fixed left-4 top-1/2 z-50 -translate-y-1/2">
        <div className="flex max-h-[80vh] flex-col gap-2 overflow-auto rounded bg-white/90 p-2 shadow ring-1 ring-grey/20">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setScreen(t.key)}
              className={`whitespace-nowrap rounded px-3 py-2 text-sm text-left ${screen === t.key ? 'bg-primary text-white' : 'bg-screen text-dark'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function labelFor(s: Screen, t: (k: string) => string) {
  const f = tabs.find(t => t.key === s)
  if (!f) return 'PlanMate'
  if (s === 'home') return t('homeTitle')
  return f.label
}

function Splash() {
  const { t } = useI18n()
  return (
    <div className="relative h-[812px]">
      {/* Ellipse 6 & 7 (Figma wrapper: left 169, top -56, 326x330) */}
      <div className="pointer-events-none absolute left-[169px] top-[-56px] z-0 h-[330px] w-[326px]">
        <div className="absolute right-[18px] top-0 h-[308px] w-[308px] rounded-full bg-[linear-gradient(42deg,rgba(171,226,228,0.10)_-65.71%,rgba(71,227,233,0)_93.69%)]" />
        <div className="absolute right-0 top-[22px] h-[308px] w-[308px] rounded-full border border-[rgba(191,192,250,0.65)]" />
      </div>
      {/* iPhone X status bar */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-[9999] -translate-x-1/2 h-[44px] w-[375px] shrink-0">
        {/* Time Style (left 21, top 13) scaled 2x */}
        <img src="/assets/status-time.png" alt="time" className="absolute left-[21px] top-[13px] h-[21px] w-[54px]" />
        {/* Group3 (right 14.67, top 17.33) scaled 2x */}
        <img src="/assets/status-group3.png" alt="status" className="absolute right-[14.67px] top-[17.33px] h-[11.336px] w-[66.662px]" />
      </div>
      {/* Ellipse 6 & 7 (Figma) */}
      {/* Ellipse 6/7 temporarily removed to ensure status bar visibility */}
      <div className="absolute top-6 left-0 right-0 mx-auto h-1 w-20 rounded bg-grey/40" />
      <div className="flex h-full flex-col items-center justify-center gap-2 -mt-8">
        {/* Center image absolute at 257px from top */}
        <img src="/assets/splash.png" alt="splash" className="absolute left-1/2 top-[257px] h-[174px] w-[174px] shrink-0 aspect-[1/1] -translate-x-1/2 rounded-2xl object-cover" />
        {/* Title and subtitle absolute positions */}
        <div className="absolute left-1/2 top-[649px] -translate-x-1/2 typo-h1 text-dark ff-off">{t('appTitle')}</div>
        <div className="absolute left-1/2 top-[688px] -translate-x-1/2 typo-subtitle-r text-center text-[color:rgba(44,67,100,0.80)] ff-off whitespace-nowrap">{t('splashTagline')}</div>
      </div>
      {/* iPhone home indicator (visual) */}
      <div className="pointer-events-none absolute bottom-[9px] left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-black/60" />
    </div>
  )
}

function Dots({ step, total = 3 }: { step: number; total?: number }) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${i + 1 === step ? 'bg-primary' : 'bg-dark/10'}`}
        />
      ))}
    </div>
  )
}

function OnboardingBase(props: { title: string; body: string; imageSrc?: string; step: number; note?: string }) {
  return (
    <div className="relative h-[812px]">
      <div className="absolute -top-10 right-6 h-72 w-72 rounded-full bg-primary/20 blur-2xl" />
      <div className="absolute -bottom-10 left-10 h-72 w-72 rounded-full bg-secondary/20 blur-2xl" />
      {/* scatter ornaments */}
      <span className="absolute left-8 top-32 h-2 w-2 rounded-full bg-dark/10" />
      <span className="absolute right-10 top-48 h-2 w-2 rounded-full bg-dark/10" />
      <span className="absolute left-24 bottom-36 h-2 w-2 rounded-full bg-dark/10" />
      <span className="absolute right-14 bottom-24 h-2 w-2 rounded-full bg-dark/10" />
      <div className="pt-16" />
      {props.imageSrc && (
        <div className="mx-auto mb-4 flex items-center justify-center">
          <img src={props.imageSrc} alt="illustration" className="h-72 w-72 object-contain" />
        </div>
      )}
      <div className="relative mx-6">
        {/* Rectangle 31: top tab with 3 indicators */}
        <div className="absolute left-1/2 -top-6 flex h-12 w-40 -translate-x-1/2 items-center justify-center rounded-[16px] bg-white ring-1 ring-grey/10 shadow">
          <div className="flex items-center gap-3">
            <span className="h-3 w-10 rounded-full bg-primary/70" />
            <span className="h-3 w-3 rounded-full bg-dark/10" />
            <span className="h-3 w-3 rounded-full bg-dark/10" />
          </div>
        </div>
        <div className="rounded-[24px] bg-white px-6 pb-10 pt-10 shadow-lg ring-1 ring-grey/10">
          <div className="mb-4 text-center typo-h2 text-dark">{props.title}</div>
          <div className="mx-auto max-w-[300px] text-center typo-subtitle-r text-grey">{props.body}</div>
          <div className="mt-10">
            <Dots step={props.step} />
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Button size="lg" className="w-[260px] rounded-full shadow-[0_12px_32px_rgba(41,191,192,0.25)]">
              {props.step === 3 ? useI18n().t('onboarding3Cta') : props.step === 2 ? useI18n().t('onboarding2Cta') : useI18n().t('onboarding1Cta')}
            </Button>
          </div>
          {props.note && (
            <div className="mt-4 text-center typo-caption1 text-grey">
              {props.note}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Onboarding1() {
  const { t } = useI18n()
  return (
    <div className="relative h-[812px]">
      {/* Group 9 illustration (family & dog): left 50.93, top 89, w 243.07, h 312.55 */}
      <img
        src="/assets/onboarding1-family-dog.png"
        alt="illust"
        className="absolute left-[50.93px] top-[89px] h-[312.55px] w-[243.07px] object-contain z-10"
      />
      {/* Union card: left 24, top 462, size 327 x 300 */}
      <div className="absolute left-[24px] top-[462px] h-[300px] w-[327px] z-20">
        <img src="/assets/onboarding1-union.png" alt="union" className="h-full w-full object-contain" />
      </div>
      {/* dots mark/1: left 160, top 475 (absolute) - Unionカードの上 */}
      <div className="absolute left-[160px] top-[475px] flex items-center gap-[8px] z-40">
        <span className="h-[8px] w-[24px] rounded-[4px] bg-primary" />
        <span className="h-[8px] w-[8px] rounded-[4px] bg-[rgba(150,159,171,0.2)]" />
        <span className="h-[8px] w-[8px] rounded-[4px] bg-[rgba(150,159,171,0.2)]" />
      </div>
      {/* title: center, top 524px, width 216px, H4 18/30 */}
      <div className="absolute left-1/2 top-[524px] -translate-x-1/2 w-[216px] text-center typo-h4 text-dark z-[100] pointer-events-none" style={{ fontFamily: 'Poppins', fontFeatureSettings: "'liga' off, 'clig' off" }}>{t('onboarding1Title')}</div>
      {/* body: center, top 566px, width 279px, Subtitle Regular 14/26, grey60 */}
      <div className="absolute left-1/2 top-[566px] -translate-x-1/2 w-[279px] text-center typo-subtitle-r leading-[26px] text-[rgba(44,67,100,0.6)] whitespace-pre-line z-[100] pointer-events-none" style={{ fontFamily: 'Poppins', fontFeatureSettings: "'liga' off, 'clig' off" }}>
        {t('onboarding1Body')}
      </div>
      {/* button: left 104, top 680, 167x50, rounded 26 */}
      <button className="absolute left-[104px] top-[680px] h-[50px] w-[167px] rounded-[26px] bg-primary text-white typo-title1 shadow-[0px_26px_60px_rgba(141,155,170,0.05)] z-[100]" style={{ fontFamily: 'Poppins', fontFeatureSettings: "'liga' off, 'clig' off" }}>{t('onboarding1Cta')}</button>
    </div>
  )
}

function Onboarding2() {
  const { t } = useI18n()
  return (
    <div className="relative h-[812px]">
      {/* illustration: left 24, top 130, size 309 x 309 */}
      <img
        src="/assets/onboarding-2.png"
        alt="illust"
        className="absolute left-[24px] top-[130px] h-[309px] w-[309px] object-contain"
      />
      {/* Rectangle 31 like tab (center) at around top 462 area with dots at top 475 */}
      <div className="absolute left-1/2 top-[462px] -translate-x-1/2">
        {/* dots mark/2: step 2 active */}
        <div className="absolute left-1/2 top-[13px] -translate-x-1/2 flex items-center gap-[8px]">
          <span className="h-[8px] w-[8px] rounded-[4px] bg-[rgba(150,159,171,0.2)]" />
          <span className="h-[8px] w-[24px] rounded-[4px] bg-primary" />
          <span className="h-[8px] w-[8px] rounded-[4px] bg-[rgba(150,159,171,0.2)]" />
        </div>
      </div>
      {/* title at top 524 centered, H4 18/30 */}
      <div className="absolute left-1/2 top-[524px] -translate-x-1/2 typo-h4 text-dark text-center w-[300px]">{t('onboarding2Title')}</div>
      {/* body at top 566, Subtitle Regular 14/26, grey60 */}
      <div className="absolute left-1/2 top-[566px] -translate-x-1/2 typo-subtitle-r text-center text-[rgba(44,67,100,0.6)] w-[279px]">
        {t('onboarding2Body')}
      </div>
      {/* button at left 104, top 680, 167x50, rounded 26 */}
      <div className="absolute left-[104px] top-[680px] h-[50px] w-[167px]">
        <button className="h-full w-full rounded-[26px] bg-primary text-white typo-title1 shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">{t('onboarding2Cta')}</button>
      </div>
    </div>
  )
}

function Onboarding3() {
  const { t } = useI18n()
  return (
    <div className="relative h-[812px]">
      {/* illustration: left 37, top 130, size 309 x 309 */}
      <img
        src="/assets/onboarding-2.png"
        alt="illust"
        className="absolute left-[37px] top-[130px] h-[309px] w-[309px] object-contain"
      />
      {/* Rectangle 31 like tab (center) at around top 462 area with dots at top 475 */}
      <div className="absolute left-1/2 top-[462px] -translate-x-1/2">
        {/* dots mark/3: step 3 active */}
        <div className="absolute left-1/2 top-[13px] -translate-x-1/2 flex items-center gap-[8px]">
          <span className="h-[8px] w-[8px] rounded-[4px] bg-[rgba(150,159,171,0.2)]" />
          <span className="h-[8px] w-[8px] rounded-[4px] bg-[rgba(150,159,171,0.2)]" />
          <span className="h-[8px] w-[24px] rounded-[4px] bg-primary" />
        </div>
      </div>
      {/* title at top 524 centered, H4 18/30 */}
      <div className="absolute left-1/2 top-[524px] -translate-x-1/2 typo-h4 text-dark text-center w-[300px]">{t('onboarding3Title')}</div>
      {/* body at top 566, Subtitle Regular 14/26, grey60 */}
      <div className="absolute left-1/2 top-[566px] -translate-x-1/2 typo-subtitle-r text-center text-[rgba(44,67,100,0.6)] w-[279px]">
        {t('onboarding3Body')}
      </div>
      {/* button at left 104, top 680, 167x50, rounded 26 */}
      <div className="absolute left-[104px] top-[680px] h-[50px] w-[167px]">
        <button className="h-full w-full rounded-[26px] bg-primary text-white typo-title1 shadow-[0px_26px_60px_rgba(141,155,170,0.05)]">{t('onboarding3Cta')}</button>
      </div>
      {/* terms note at top 744 */}
      <div className="absolute left-1/2 top-[744px] -translate-x-1/2 typo-subtitle-r text-center text-[rgba(44,67,100,0.6)] w-[279px]">
        {t('By continuing, you agree to our Terms of Service and Privacy Policy.') || 'By continuing, you agree to our Terms of Service and Privacy Policy.'}
      </div>
    </div>
  )
}


function SignUpEmpty() {
  const { t } = useI18n()
  return (
    <div className="relative h-[812px]">
      <div className="absolute -top-10 right-6 h-60 w-60 rounded-full bg-primary/20 blur-2xl" />
      <div className="absolute top-0 h-44 w-full" />
      <div className="px-6 pt-20">
        <div className="typo-h2">{t('signupTitle')}</div>
        <p className="mt-2 typo-body text-grey">{t('signupBody')}</p>
        <div className="mt-4 rounded-2xl bg-white p-5 shadow ring-1 ring-grey/10">
          <div className="space-y-4">
            <FormField placeholder="Username" state="inactive" hint={t('signupUsernameHint')} startIconName="user" />
            <FormField placeholder="Email" state="inactive" startIconName="mail" />
            <FormField placeholder="Password" type="password" state="inactive" startIconName="lock" />
            <FormField placeholder="Confirm Password" type="password" state="inactive" startIconName="lock" />
          </div>
          <Button className="mt-6" variant="disabled">{t('signupCTA')}</Button>
        </div>
        <div className="mt-4 text-center text-sm text-grey">{t('loginLink')}</div>
      </div>
    </div>
  )
}

function SignUpError() {
  const { t } = useI18n()
  return (
    <div className="relative h-[812px]">
      <div className="absolute -top-10 right-6 h-60 w-60 rounded-full bg-primary/20 blur-2xl" />
      <div className="px-6 pt-20">
        <div className="typo-h2">{t('signupTitle')}</div>
        <p className="mt-2 typo-body text-grey">{t('signupBody')}</p>
        <Card className="mt-4">
          <div className="flex items-center gap-2 rounded-lg bg-error/5 p-3 text-error ring-1 ring-error/20">
            <Icon name="close" className="h-4 w-4" />
            <div className="typo-body">Username Already Taken</div>
          </div>
          <div className="mt-4 space-y-4">
            <FormField placeholder="Username" state="error" startIconName="user" />
            <FormField placeholder="Email" state="inactive" startIconName="mail" />
            <FormField placeholder="Password" type="password" state="inactive" startIconName="lock" />
            <FormField placeholder="Confirm Password" type="password" state="inactive" startIconName="lock" />
          </div>
          <Button className="mt-6">Try Another Username</Button>
        </Card>
        <div className="mt-4 text-center text-sm text-grey">{t('loginLink')}</div>
      </div>
    </div>
  )
}

function SignUpLoading() {
  const { t } = useI18n()
  return (
    <div className="relative h-[812px]">
      <div className="absolute -top-10 right-6 h-60 w-60 rounded-full bg-primary/20 blur-2xl" />
      <div className="px-6 pt-20">
        <div className="typo-h2">{t('signupTitle')}</div>
        <p className="mt-2 typo-body text-grey">{t('signupBody')}</p>
        <Card className="mt-4">
          <div className="space-y-4">
            <FormField placeholder="Username" state="active" startIconName="user" />
            <FormField placeholder="Email" state="active" startIconName="mail" />
            <FormField placeholder="Password" type="password" state="active" startIconName="lock" />
            <FormField placeholder="Confirm Password" type="password" state="active" startIconName="lock" />
          </div>
          <Button className="mt-6" variant="secondary">Creating Account...</Button>
          <div className="mt-3 flex items-center justify-center gap-2 text-grey">
            <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
            <div className="h-3 w-3 animate-pulse rounded-full bg-primary [animation-delay:120ms]" />
            <div className="h-3 w-3 animate-pulse rounded-full bg-primary [animation-delay:240ms]" />
          </div>
        </Card>
      </div>
    </div>
  )
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-5 shadow ring-1 ring-grey/10 ${className}`}>{children}</div>
  )
}

function ForgotPassword() {
  const { t } = useI18n()
  return (
    <div className="px-6 pt-10">
      <div className="typo-h2">{t('Don’t Worry, We Got You!') || 'Don’t Worry, We Got You!'}</div>
      <p className="mt-2 typo-body text-grey">
        {t('Forgot your password? We got you so don’t worry! Fill up the email and username and follow the next steps!') ||
          'Forgot your password? Fill your email and username and follow the next steps!'}
      </p>
      <Card className="mt-4">
        <div className="space-y-4">
          <FormField placeholder="Email" state="inactive" startIconName="mail" />
          <FormField placeholder="Username" state="inactive" startIconName="user" />
        </div>
        <Button className="mt-6">Send Code</Button>
      </Card>
    </div>
  )
}

function Verification() {
  return (
    <div className="px-6 pt-10">
      <div className="typo-h2">Verify Your Account</div>
      <p className="mt-2 typo-body text-grey">We sent you an OTP code. Please check your inbox or spam.</p>
      <Card className="mt-4">
        <div className="flex items-center justify-between gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex h-12 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-grey/30 text-sm text-dark">
              0
            </div>
          ))}
        </div>
        <Button className="mt-6">Verify</Button>
      </Card>
    </div>
  )
}

function ResetPassword() {
  return (
    <div className="px-6 pt-10">
      <div className="text-xl font-semibold">Create New Password!</div>
      <p className="mt-2 text-sm text-grey">Finally, you’ve come to the last step. Create your new password.</p>
      <Card className="mt-4">
        <div className="space-y-4">
          <FormField placeholder="New Password" type="password" state="inactive" startIconSrc="/assets/icon-finger.svg" />
          <FormField placeholder="Confirm Password" type="password" state="inactive" startIconSrc="/assets/icon-finger.svg" />
        </div>
        <Button className="mt-6">Save Password</Button>
      </Card>
    </div>
  )
}

function Home() {
  const { t } = useI18n()
  return (
    <div className="px-4 pt-4">
      <div className="text-xl font-semibold">{t('homeTitle')}</div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="h-32 rounded-2xl bg-white p-4 shadow ring-1 ring-grey/10">
          <div className="text-sm text-grey">{t('today')}</div>
          <div className="mt-2 h-6 w-24 rounded bg-primary/20" />
        </div>
        <div className="h-32 rounded-2xl bg-white p-4 shadow ring-1 ring-grey/10">
          <div className="text-sm text-grey">{t('tasks')}</div>
          <div className="mt-2 h-6 w-20 rounded bg-secondary/20" />
        </div>
      </div>
    </div>
  )
}


function ProjectCard() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow ring-1 ring-grey/10">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-primary/20" />
        <div className="flex-1">
          <div className="font-medium">Project Name</div>
          <div className="text-xs text-grey">4 members • 12 tasks</div>
        </div>
      </div>
      <div className="mt-3 h-2 w-full rounded bg-screen">
        <div className="h-2 w-2/5 rounded bg-primary" />
      </div>
    </div>
  )
}

function ProjectsIn() {
  return (
    <div className="px-4 pt-4">
      <div className="mb-3 flex items-center gap-2">
        <img src="/assets/icon-arrow.svg" alt="back" className="h-6 w-6 rotate-180" />
        <div className="text-xl font-semibold">Projects You Are In</div>
      </div>
      <div className="space-y-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

function TasksScreen() {
  return (
    <div className="px-4 pt-4">
      <div className="text-xl font-semibold">Tasks</div>
      <div className="mt-3 space-y-3">
        {['Design onboarding', 'Fix calendar layout', 'Refine signup icons'].map((t, i) => (
          <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow ring-1 ring-grey/10">
            <div className="h-5 w-5 rounded ring-1 ring-grey/30" />
            <div className="flex-1 text-sm">{t}</div>
            <span className="text-xs text-grey">Today</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CalendarScreen() {
  const days = ['S','M','T','W','T','F','S']
  return (
    <div className="px-4 pt-4">
      <div className="text-xl font-semibold">Calendar</div>
      <div className="mt-3 rounded-2xl bg-white p-4 shadow ring-1 ring-grey/10">
        <div className="grid grid-cols-7 gap-2 text-center text-xs text-grey">
          {days.map(d => (<div key={d}>{d}</div>))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-2 text-center">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className={`aspect-square rounded ${i===10||i===18? 'bg-primary/20' : 'bg-screen'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}


