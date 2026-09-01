import { Check } from 'lucide-react'
import { contractPlanIds } from '../data/pricing'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export default function Pricing() {
  const ref = useReveal<HTMLDivElement>()
  const tableRef = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  const scrollToQuote = () =>
    document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="tarifs" className="py-24 sm:py-32">
      <div className="container-az flex flex-col gap-16">
        <SectionHeading eyebrow={t.pricing.eyebrow} title={t.pricing.title} subtitle={t.pricing.subtitle} />

        <div ref={ref} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contractPlanIds.map(({ id, featured }) => {
            const plan = t.pricing.plans[id]
            return (
              <div
                key={id}
                className={`flex flex-col gap-6 rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  featured
                    ? 'border-transparent bg-ink text-white shadow-glow'
                    : 'border-ink/[0.06] bg-white shadow-soft hover:border-brand/25 hover:shadow-card'
                }`}
              >
                <div>
                  <h3 className={`text-lg font-semibold ${featured ? 'text-white' : 'text-ink'}`}>{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className={`text-3xl font-semibold ${featured ? 'text-white' : 'text-ink'}`}>
                      {plan.price}
                    </span>
                    <span className={featured ? 'text-white/60' : 'text-ink-faint'}>{plan.period}</span>
                  </div>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-brand-cyan' : 'text-brand'}`} aria-hidden />
                      <span className={featured ? 'text-white/85' : 'text-ink-light'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={scrollToQuote} className={featured ? 'btn-primary' : 'btn-secondary'}>
                  {t.pricing.chooseBtn} {plan.name}
                </button>
              </div>
            )
          })}
        </div>

        <div ref={tableRef} className="reveal flex flex-col gap-6">
          <h3 className="text-xl font-semibold">{t.pricing.unitTableTitle}</h3>
          <div className="overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-soft">
            <table className="w-full text-left rtl:text-right text-sm">
              <tbody className="divide-y divide-ink/[0.06]">
                {t.pricing.priceTable.map((row) => (
                  <tr key={row.service} className="transition-colors hover:bg-surface-soft">
                    <td className="px-5 py-3.5 font-medium text-ink">{row.service}</td>
                    <td className="px-5 py-3.5 text-right rtl:text-left font-mono text-ink-light">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-ink-faint">{t.pricing.note}</p>
        </div>
      </div>
    </section>
  )
}
