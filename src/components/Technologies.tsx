import { technologyGroupIds } from '../data/technologies'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export default function Technologies() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="technologies" className="py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.technologies.eyebrow}
          title={t.technologies.title}
          subtitle={t.technologies.subtitle}
        />

        <div ref={ref} className="reveal grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologyGroupIds.map((id) => {
            const group = t.technologies.groups[id]
            return (
              <div key={id} className="flex flex-col gap-4">
                <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-ink/[0.08] bg-white px-3.5 py-2 text-sm font-medium text-ink shadow-soft transition-colors hover:border-brand/25 hover:text-brand-deep"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
