import { ArrowRight, MessageCircle } from 'lucide-react'
import NetworkVisual from './NetworkVisual'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function CTA() {
  const ref = useReveal<HTMLDivElement>()
  const { t, isRTL } = useLanguage()

  const scrollToQuote = () =>
    document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />

      <div className="container-az">
        <div
          ref={ref}
          className="reveal relative grid items-center gap-10 overflow-hidden rounded-3xl border border-ink/[0.06] bg-white px-8 py-14 shadow-card sm:px-14 lg:grid-cols-2 lg:py-16"
        >
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">{t.cta.title}</h2>
            <p className="max-w-md text-balance text-base leading-relaxed text-ink-light sm:text-lg">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button onClick={scrollToQuote} className="btn-primary">
                {t.cta.primary}
                <ArrowRight className={`h-4 w-4 ${isRTL ? '-scale-x-100' : ''}`} aria-hidden />
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                {t.cta.secondary}
                <MessageCircle className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <NetworkVisual className="scale-90" />
          </div>
        </div>
      </div>
    </section>
  )
}
