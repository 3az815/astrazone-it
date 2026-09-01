import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />

        <div ref={ref} className="reveal mx-auto flex w-full max-w-3xl flex-col gap-3">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question} className="overflow-hidden rounded-xl border border-ink/[0.06] bg-white shadow-soft">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">{item.question}</span>
                  <Plus
                    className={`h-4.5 w-4.5 shrink-0 text-brand transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4.5 text-sm leading-relaxed text-ink-light">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
