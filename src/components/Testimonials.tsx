import { Quote } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section className="bg-surface-soft py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />

        <div ref={ref} className="reveal grid gap-5 lg:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure key={item.author} className="card-az flex flex-col gap-5 p-7 hover:-translate-y-1 hover:shadow-card">
              <Quote className="h-7 w-7 text-brand/40" aria-hidden />
              <blockquote className="flex-1 text-base leading-relaxed text-ink">"{item.quote}"</blockquote>
              <figcaption className="border-t border-ink/[0.06] pt-4">
                <p className="text-sm font-semibold text-ink">{item.author}</p>
                <p className="text-sm text-ink-faint">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
