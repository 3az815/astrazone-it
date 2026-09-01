import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react'
import QuoteForm from './QuoteForm'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const PHONE = '+212 649 414 983'
const PHONE_TEL = '+212649414983'
const EMAIL = 'astrazoneit@gmail.com'
const WHATSAPP = 'https://wa.me/212649414983'
const INSTAGRAM = 'https://www.instagram.com/astrazoneit?igsh=MWk0Nm9vbmZrYXUyZw=='
const GOOGLE_MAPS = 'https://share.google/SAOOzCxx0r69iyki0'
// TODO: replace with the real AstraZone Facebook page URL once available.
const FACEBOOK = 'https://facebook.com'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-surface-soft py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div ref={ref} className="reveal grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <div className="card-az flex flex-col gap-5 p-7">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-deep" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">AstraZone IT Solutions</p>
                  <a
                    href={GOOGLE_MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-light underline decoration-ink/20 underline-offset-2 hover:text-brand-deep hover:decoration-brand/40"
                  >
                    {t.contact.addressLabel}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-ink/[0.06] pt-5">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 text-sm text-ink-light hover:text-brand-deep">
                  <Phone className="h-4 w-4 text-brand-deep" aria-hidden />
                  {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm text-ink-light hover:text-brand-deep">
                  <Mail className="h-4 w-4 text-brand-deep" aria-hidden />
                  {EMAIL}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink-light hover:text-brand-deep"
                >
                  <MessageCircle className="h-4 w-4 text-brand-deep" aria-hidden />
                  WhatsApp — {PHONE}
                </a>
              </div>

              <div className="flex gap-2 border-t border-ink/[0.06] pt-5">
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AstraZone IT Solutions sur Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink/10 text-ink-light transition-colors hover:border-brand/30 hover:text-brand-deep"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AstraZone IT Solutions sur Instagram — @astrazoneit"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink/10 text-ink-light transition-colors hover:border-brand/30 hover:text-brand-deep"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary text-sm">
                <Phone className="h-4 w-4" aria-hidden />
                {t.contact.callBtn}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t.contact.whatsappBtn}
              </a>
            </div>
          </div>

          <div id="devis" className="scroll-mt-28">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}
