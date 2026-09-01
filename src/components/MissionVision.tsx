import { Target, Telescope, Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function MissionVision() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  const rows = [
    { icon: Target, label: t.missionVision.missionLabel, text: t.missionVision.missionText },
    { icon: Telescope, label: t.missionVision.visionLabel, text: t.missionVision.visionText },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="container-az">
        <div ref={ref} className="reveal divide-y divide-ink/[0.06] border-y border-ink/[0.06]">
          {rows.map(({ icon: Icon, label, text }) => (
            <div key={label} className="grid gap-6 py-10 sm:grid-cols-[220px_1fr] sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/[0.06]">
                  <Icon className="h-5 w-5 text-brand-deep" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{label}</h3>
              </div>
              <p className="max-w-2xl text-balance text-base leading-relaxed text-ink-light sm:text-lg">
                {text}
              </p>
            </div>
          ))}

          <div className="grid gap-6 py-10 sm:grid-cols-[220px_1fr] sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/[0.06]">
                <Star className="h-5 w-5 text-brand-deep" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">{t.missionVision.valuesLabel}</h3>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {t.missionVision.values.map((value, i) => (
                <span key={value} className="flex items-center gap-2 text-base font-medium text-ink">
                  <span className="font-mono text-xs text-brand-cyan">{String(i + 1).padStart(2, '0')}</span>
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
