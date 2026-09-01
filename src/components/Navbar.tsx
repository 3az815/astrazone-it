import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight, Globe, Check } from 'lucide-react'
import Logo from './Logo'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage, languageMeta, type Lang } from '../i18n/LanguageContext'

const sectionIds = [
  'accueil',
  'a-propos',
  'equipes',
  'services',
  'technologies',
  'secteurs',
  'tarifs',
  'faq',
  'contact',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const { lang, setLang, t, isRTL } = useLanguage()

  const navLinks = [
    { id: 'accueil', label: t.nav.accueil },
    { id: 'a-propos', label: t.nav.apropos },
    { id: 'equipes', label: t.nav.equipes },
    { id: 'services', label: t.nav.services },
    { id: 'technologies', label: t.nav.technologies },
    { id: 'secteurs', label: t.nav.secteurs },
    { id: 'tarifs', label: t.nav.tarifs },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleLangSelect = (next: Lang) => {
    setLang(next)
    setLangMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/[0.06] bg-white/85 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-az flex h-20 items-center justify-between" aria-label="Navigation principale">
        <button
          onClick={() => handleNavClick('accueil')}
          className="flex items-center gap-3 rounded-lg"
          aria-label="Retour à l'accueil AstraZone IT Solutions"
        >
          <Logo />
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id ? 'text-brand-deep' : 'text-ink-light hover:text-ink'
                }`}
                aria-current={activeId === link.id ? 'page' : undefined}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {/* language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg border border-ink/10 px-3 py-2 text-sm font-medium text-ink-light transition-colors hover:border-brand/25 hover:text-ink"
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
              aria-label="Choisir la langue / Choose language / اختر اللغة"
            >
              <Globe className="h-4 w-4" aria-hidden />
              {languageMeta[lang].short}
            </button>
            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)} />
                <ul
                  role="listbox"
                  className={`absolute top-full z-20 mt-2 w-40 overflow-hidden rounded-xl border border-ink/[0.08] bg-white py-1.5 shadow-card ${
                    isRTL ? 'left-0' : 'right-0'
                  }`}
                >
                  {(Object.keys(languageMeta) as Lang[]).map((code) => (
                    <li key={code}>
                      <button
                        onClick={() => handleLangSelect(code)}
                        role="option"
                        aria-selected={lang === code}
                        className={`flex w-full items-center justify-between gap-2 px-3.5 py-2 text-sm ${
                          lang === code ? 'font-semibold text-brand-deep' : 'text-ink-light hover:bg-surface-soft'
                        }`}
                      >
                        {languageMeta[code].label}
                        {lang === code && <Check className="h-4 w-4" aria-hidden />}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <button onClick={() => handleNavClick('contact')} className="btn-primary text-sm">
            {t.nav.cta}
            <ArrowRight className={`h-4 w-4 ${isRTL ? '-scale-x-100' : ''}`} aria-hidden />
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLangMenuOpen((v) => !v)}
            className="flex items-center gap-1 rounded-lg border border-ink/10 px-2.5 py-2 text-xs font-semibold text-ink-light"
            aria-label="Choisir la langue"
          >
            <Globe className="h-4 w-4" aria-hidden />
            {languageMeta[lang].short}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-lg border border-ink/10 p-2.5 text-ink"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile language menu */}
      {langMenuOpen && (
        <div className="border-t border-ink/[0.06] bg-white lg:hidden">
          <ul className="container-az flex gap-2 py-3">
            {(Object.keys(languageMeta) as Lang[]).map((code) => (
              <li key={code}>
                <button
                  onClick={() => handleLangSelect(code)}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium ${
                    lang === code
                      ? 'border-brand/30 bg-brand/[0.06] text-brand-deep'
                      : 'border-ink/10 text-ink-light'
                  }`}
                >
                  {languageMeta[code].label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* mobile menu */}
      <div
        className={`grid overflow-hidden border-t border-ink/[0.06] bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <ul className="container-az flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                    activeId === link.id ? 'bg-brand/[0.06] text-brand-deep' : 'text-ink-light'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button onClick={() => handleNavClick('contact')} className="btn-primary w-full text-sm">
                {t.nav.cta}
                <ArrowRight className={`h-4 w-4 ${isRTL ? '-scale-x-100' : ''}`} aria-hidden />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
