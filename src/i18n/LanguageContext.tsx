import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { fr } from './fr'
import { ar } from './ar'
import { en } from './en'
import type { Translation } from './types'

export type Lang = 'fr' | 'ar' | 'en'

const dictionaries: Record<Lang, Translation> = { fr, ar, en }

export const languageMeta: Record<Lang, { label: string; short: string }> = {
  fr: { label: 'Français', short: 'FR' },
  ar: { label: 'العربية', short: 'AR' },
  en: { label: 'English', short: 'EN' },
}

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'astrazone-lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'fr' || stored === 'ar' || stored === 'en') return stored
  return 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }

  const isRTL = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.title = dictionaries[lang].meta.title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', dictionaries[lang].meta.description)
  }, [lang, isRTL])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang], isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
