import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import auto from './i18n.auto.json'

const ja = {
  splash: { title: 'PlanMate', subtitle: '悩む週末から、楽しむ週末へ。' },
  onboarding: { title: 'ようこそ', step1: 'PlanMateの使い方を簡単にご紹介' },
  onboarding1: {
    title: '週末の予定はAIにおまかせ',
    body1: '任せることで生まれる、',
    body2: 'あなたの自由な時間を楽しんで',
    cta: '次へ',
  },
  onboarding2: {
    title: 'より速く、シンプルにプランニング',
    body1: 'あなたに合わせて最適化、',
    body2: '毎日がもっとラクになる',
    cta: '次へ',
  },
  onboarding3: {
    title: 'カレンダーと一体で管理',
    body1: '予定もタスクもひとつに、',
    body2: '迷わず続けられる',
    cta: 'はじめる',
  },
  signup: {
    title: 'PlanMateへようこそ！',
    body: '下の情報を入力して、PlanMateの\n素晴らしい機能をお楽しみください。',
    username: 'ユーザー名',
    usernameHint: '小文字推奨。数字の利用もできます。',
    usernameRule: '小文字のアルファベットと数字が使用できます',
    email: 'メールアドレス',
    password: 'パスワード',
    passwordConfirm: '再度パスワードを入力',
    placeholderEmail: 'メールアドレスを入力',
    placeholderUsername: 'ユーザー名を入力',
    placeholderPassword: 'パスワードを入力',
    placeholderPasswordConfirm: '再度パスワードを入力',
    cta: 'はじめてみる',
    legal: '続けることで、利用規約およびプライバシーポリシーに同意したものとみなされます。',
    loginLink: 'すでにアカウントをお持ちですか？ ログイン',
    loginQuestion: 'すでにアカウントをお持ちですか？',
    loginAction: 'ログイン',
  },
  login: { title: 'ログイン', email: 'メールアドレス', password: 'パスワード', submit: 'サインイン' },
  dashboard: { title: 'ダッシュボード' },
  settings: { title: '設定' },
  forgot: {
    title: 'アカウントの復旧をします',
    body: 'パスワードをお忘れですか？ご安心ください。\nメールアドレスとユーザー名を入力し、\n手順に従ってください。',
    placeholderEmail: 'メールアドレスを入力',
    placeholderUsername: 'ユーザー名を入力',
    cta: '次へ',
  },
  forgot2: {
    title: 'アカウントを認証します',
    body: 'ワンタイムコードをメールに送信しました。\n受信トレイまたは迷惑メールフォルダを\nご確認ください。\n',
    codeLabel: '認証コード',
    verifyCta: '認証する',
  },
  reset: {
    title: '新しいパスワードを作成！',
    body: '最後のステップです。新しいパスワードを作成し、\n忘れないようにしてください！',
    password: '新しいパスワード',
    passwordConfirm: 'パスワード（確認）',
    placeholderPassword: 'パスワードを入力',
    placeholderPasswordConfirm: 'パスワードを入力',
    cta: '確認',
  },
  reset1: {
    title: '新しいパスワードを設定',
    body: 'これで最後のステップです。新しいパスワード\nを設定し、大切に覚えておいてください。',
    placeholderPassword: 'パスワードを入力',
    placeholderPasswordConfirm: 'パスワードを入力',
    cta: '確認',
  },
}

const en = {
  splash: { title: 'PlanMate', subtitle: 'From To-Dos to Ta-Das!' },
  onboarding: { title: 'Welcome', step1: 'A quick tour of PlanMate' },
  onboarding1: {
    title: 'Let AI plan your weekend',
    body1: 'Free your time by delegating,',
    body2: 'and enjoy what matters most',
    cta: 'Next',
  },
  onboarding2: {
    title: 'Plan faster and simpler',
    body1: 'Optimized to your routine,',
    body2: 'making every day easier',
    cta: 'Next',
  },
  onboarding3: {
    title: 'Manage together with Calendar',
    body1: 'Plans and tasks in one place,',
    body2: 'so you never miss a beat',
    cta: 'Get Started',
  },
  signup: {
    title: 'Welcome to PlanMate!',
    body: 'Enter the details below to enjoy all the great features of PlanMate.',
    username: 'Username',
    usernameHint: 'Must be lowercase, numbers allowed',
    usernameRule: 'Lowercase letters and numbers are allowed',
    email: 'Email',
    password: 'Password',
    passwordConfirm: 'Confirm Password',
    placeholderEmail: 'Enter your email',
    placeholderUsername: 'Enter your username',
    placeholderPassword: 'Enter your password',
    placeholderPasswordConfirm: 'Re-enter your password',
    cta: 'Get Started',
    legal: 'By continuing, you agree to our Terms of Service and Privacy Policy.',
    loginLink: 'Already have an account? Login',
    loginQuestion: 'Already have an account?',
    loginAction: 'Login',
  },
  forgot: {
    title: 'Forgot your password?',
    body: 'Enter your registered email and username,\nthen follow the instructions we send you.',
    placeholderEmail: 'Enter your email',
    placeholderUsername: 'Enter your username',
    cta: 'Next',
  },
  forgot2: {
    title: 'Verify your account',
    body: 'We sent a one-time code to your email.\nPlease check your inbox or spam folder.\n',
    codeLabel: 'Verification Code',
    verifyCta: 'Verify',
  },
  reset: {
    title: 'Create New Password!',
    body: 'Finally, you\'ve come to the last step. Now, create your new password and don\'t forget to remember it!',
    password: 'New password',
    passwordConfirm: 'Confirm new password',
    placeholderPassword: 'Enter your password',
    placeholderPasswordConfirm: 'Enter your password',
    cta: 'Confirm',
  },
  reset1: {
    title: 'Set New Password',
    body: 'This is the final step.\nSet your new password and remember it carefully.',
    placeholderPassword: 'Enter your password',
    placeholderPasswordConfirm: 'Enter your password',
    cta: 'Confirm',
  },
  login: { title: 'Sign in', email: 'Email', password: 'Password', submit: 'Sign in' },
  dashboard: { title: 'Dashboard' },
  settings: { title: 'Settings' },
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: { ...ja, auto: auto as any } },
      en: { translation: en },
    },
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: { escapeValue: false },
  })

export default i18n
