import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import auto from './i18n.auto.json'

const ja = {
  splash: { title: 'PlanMate', subtitle: '悩む週末から、楽しむ週末へ。' },
  onboarding: { title: 'ようこそ', step1: 'PlanMateの使い方を簡単にご紹介' },
  login: { title: 'ログイン', email: 'メールアドレス', password: 'パスワード', submit: 'サインイン' },
  dashboard: { title: 'ダッシュボード' },
  settings: { title: '設定' },
}

const en = {
  splash: { title: 'PlanMate', subtitle: 'From To-Dos to Ta-Das!' },
  onboarding: { title: 'Welcome', step1: 'A quick tour of PlanMate' },
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
