import { ShieldCheck, Zap, Eye, HeartHandshake } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const pillarIcons = [ShieldCheck, Zap, Eye, HeartHandshake]

export default function About() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="a-propos" className="relative bg-surface-soft py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.subtitle} />

        <div ref={ref} className="reveal grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-ink-light sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {t.about.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-ink/[0.08] bg-white px-3.5 py-1.5 text-sm font-medium text-ink-light"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {t.about.pillars.map((label, i) => {
              const Icon = pillarIcons[i]
              return (
                <div
                  key={label}
                  className="card-az flex flex-col gap-3 p-5 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient">
                    <Icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
