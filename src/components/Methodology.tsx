import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export default function Methodology() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()
  const steps = t.methodology.steps

  return (
    <section className="py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading eyebrow={t.methodology.eyebrow} title={t.methodology.title} />

        <div ref={ref} className="reveal hidden lg:block">
          <div className="relative grid grid-cols-8 gap-4">
            <div className="absolute left-0 right-0 top-5 h-px bg-ink/10" aria-hidden />
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col gap-4">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand bg-white font-mono text-xs font-semibold text-brand-deep">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
              {i !== steps.length - 1 && (
                <div className="absolute left-5 top-10 h-full w-px bg-ink/10" aria-hidden />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white font-mono text-xs font-semibold text-brand-deep">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="pt-1.5">
                <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
