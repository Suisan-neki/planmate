import { createContext, useContext, useMemo, useState, ReactNode } from 'react'
import { en, ja, Locale } from './dictionaries'

type I18nContextType = {
  locale: Locale
  t: (key: string) => string
  setLocale: (loc: Locale) => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const defaultLocale: Locale = (navigator.language?.startsWith('ja') ? 'ja' : 'en') as Locale
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const dict = useMemo(() => (locale === 'ja' ? ja : en), [locale])
  const t = (key: string) => dict[key] ?? key

  const value = useMemo(() => ({ locale, t, setLocale }), [locale])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


