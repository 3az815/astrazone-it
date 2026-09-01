import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { serviceCategoriesMeta } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export default function Services() {
  const { t, isRTL } = useLanguage()
  const [activeId, setActiveId] = useState(serviceCategoriesMeta[0].id)
  const activeMeta = serviceCategoriesMeta.find((c) => c.id === activeId) ?? serviceCategoriesMeta[0]
  const activeContent = t.services.categories[activeId]
  const ref = useReveal<HTMLDivElement>()

  const scrollToQuote = () =>
    document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="services" className="bg-surface-soft py-24 sm:py-32">
      <div className="container-az flex flex-col gap-12">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />

        <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 lg:mx-0 lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0">
          {serviceCategoriesMeta.map((cat) => {
            const Icon = cat.icon
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'border-transparent bg-brand-gradient text-white shadow-glow'
                    : 'border-ink/[0.08] bg-white text-ink-light hover:border-brand/25 hover:text-ink'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {t.services.categories[cat.id].label}
              </button>
            )
          })}
        </div>

        <div key={activeMeta.id} ref={ref} className="reveal is-visible flex flex-col gap-6">
          <p className="max-w-2xl text-base text-ink-light">{activeContent.intro}</p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeContent.items.map((item) => (
              <div
                key={item.name}
                className="group card-az flex flex-col gap-2 p-5 hover:-translate-y-1 hover:border-brand/25 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-ink">{item.name}</h3>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:text-brand ${
                      isRTL ? '-scale-x-100 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                    aria-hidden
                  />
                </div>
                <p className="text-sm leading-relaxed text-ink-light">{item.description}</p>
              </div>
            ))}
          </div>

          <button onClick={scrollToQuote} className="btn-primary self-start">
            {t.services.ctaBtn}
            <ArrowRight className={`h-4 w-4 ${isRTL ? '-scale-x-100' : ''}`} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  )
}
