import { ArrowRight, ChevronDown } from 'lucide-react'
import NetworkVisual from './NetworkVisual'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t, isRTL } = useLanguage()
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="accueil" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-radial-glow" aria-hidden />
      <div
        className="absolute -right-40 -top-40 -z-10 h-[560px] w-[560px] animate-drift rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,194,255,0.16), transparent 70%)' }}
        aria-hidden
      />

      <div className="container-az grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-7">
          <span className="section-eyebrow">{t.hero.badge}</span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {t.hero.titlePrefix}{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">{t.hero.titleHighlight}</span>
          </h1>

          <p className="max-w-xl text-balance text-lg leading-relaxed text-ink-light">{t.hero.subtitle}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollTo('contact')} className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight className={`h-4 w-4 ${isRTL ? '-scale-x-100' : ''}`} aria-hidden />
            </button>
            <button onClick={() => scrollTo('services')} className="btn-secondary">
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className="flex items-center gap-2 pt-2 text-sm font-medium text-ink-light">
            <span className="font-mono text-xs tracking-wide text-brand-deep">{t.hero.trustLine}</span>
          </div>
        </div>

        <div className="relative">
          <NetworkVisual />
        </div>
      </div>

      <button
        onClick={() => scrollTo('a-propos')}
        className="mx-auto mt-16 hidden animate-float-slow items-center justify-center text-ink-faint transition-colors hover:text-brand sm:flex"
        aria-label="Défiler vers la section suivante"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  )
}
