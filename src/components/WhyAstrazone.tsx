import { UserCheck, Timer, Wallet, Lock, Headset, Smile } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const reasonIcons = [UserCheck, Timer, Wallet, Lock, Headset, Smile]

export default function WhyAstrazone() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section className="bg-surface-soft py-24 sm:py-32">
      <div className="container-az flex flex-col gap-12">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />

        <div ref={ref} className="reveal grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {t.why.reasons.map((label, i) => {
            const Icon = reasonIcons[i]
            return (
              <div
                key={label}
                className="card-az flex flex-col items-center gap-3 px-4 py-7 text-center hover:-translate-y-1 hover:border-brand/25 hover:shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/[0.08]">
                  <Icon className="h-5 w-5 text-brand-deep" aria-hidden />
                </div>
                <span className="text-sm font-medium leading-snug text-ink">{label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
