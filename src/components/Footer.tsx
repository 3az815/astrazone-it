import Logo from './Logo'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const footerNav = [
    { id: 'services', label: t.footer.navServices },
    { id: 'equipes', label: t.footer.navTeams },
    { id: 'technologies', label: t.footer.navTechnologies },
    { id: 'contact', label: t.footer.navContact },
  ]

  return (
    <footer className="border-t border-ink/[0.06] bg-white">
      <div className="container-az flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-sm font-medium text-ink-light">{t.footer.tagline}</p>
            <p className="font-mono text-xs tracking-wide text-brand-deep">{t.footer.trust}</p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-light">
              {footerNav.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="transition-colors hover:text-brand-deep">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/[0.06] pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>{t.footer.empowering}</p>
        </div>
      </div>
    </footer>
  )
}
