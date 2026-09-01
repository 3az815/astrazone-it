import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

// Visual weight decreases from tier 0 (very high priority) to tier 3 (basic/bonus).
const tierStyles = [
  'border-transparent bg-brand-gradient text-white shadow-glow',
  'border-brand/25 bg-brand/[0.08] text-brand-deep',
  'border-ink/[0.08] bg-surface-soft text-ink-light',
  'border-dashed border-ink/15 bg-white text-ink-faint',
]

export default function Skills() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div ref={ref} className="reveal flex flex-col gap-10">
          {t.skills.tiers.map((tier, i) => (
            <div key={tier.label} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-base font-semibold text-ink">{tier.label}</h3>
                <span className="h-px flex-1 bg-ink/[0.06]" aria-hidden />
              </div>
              <div className="flex flex-wrap gap-2">
                {tier.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 ${tierStyles[i]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* tools */}
          <div className="flex flex-col gap-4 border-t border-ink/[0.06] pt-8">
            <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint">{t.skills.toolsLabel}</h3>
            <div className="flex flex-wrap gap-2">
              {t.skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-ink/[0.08] bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
