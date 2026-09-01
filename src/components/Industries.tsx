import { HeartPulse, Hotel, GraduationCap, Factory, Store, Landmark, Building2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const industryIcons = [HeartPulse, Hotel, GraduationCap, Factory, Store, Landmark, Building2]

export default function Industries() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="secteurs" className="bg-surface-soft py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading eyebrow={t.industries.eyebrow} title={t.industries.title} />

        <div
          ref={ref}
          className="reveal grid divide-y divide-ink/[0.06] border-y border-ink/[0.06] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
        >
          {t.industries.items.map((name, i) => {
            const Icon = industryIcons[i]
            return (
              <div key={name} className="group flex items-center gap-4 px-6 py-6 transition-colors hover:bg-white">
                <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                <Icon className="h-5 w-5 text-brand-deep" aria-hidden />
                <span className="text-base font-medium text-ink">{name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
