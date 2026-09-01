import { useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface FormState {
  name: string
  email: string
  phone: string
  sector: string
  service: string
  team: string
  budget: string
  description: string
  urgency: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  sector: '',
  service: '',
  team: '',
  budget: '',
  description: '',
  urgency: '',
}

const CONTACT_EMAIL = 'astrazoneit@gmail.com'

export default function QuoteForm() {
  const { t } = useLanguage()
  const f = t.quoteForm
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}

    if (!form.name.trim()) next.name = f.errors.name
    if (!form.email.trim()) {
      next.email = f.errors.email
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = f.errors.email
    }
    if (!form.phone.trim()) {
      next.phone = f.errors.phone
    } else if (!/^[\d+\s()-]{8,}$/.test(form.phone)) {
      next.phone = f.errors.phone
    }
    if (!form.sector) next.sector = f.errors.sector
    if (!form.service) next.service = f.errors.service
    if (!form.description.trim()) next.description = f.errors.description
    if (!form.urgency) next.urgency = f.errors.urgency

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const bodyLines = [
      `${f.nameLabel} : ${form.name}`,
      `${f.emailLabel} : ${form.email}`,
      `${f.phoneLabel} : ${form.phone}`,
      `${f.sectorLabel} : ${form.sector}`,
      `${f.serviceLabel} : ${form.service}`,
      `${f.teamLabel} : ${form.team || '-'}`,
      `${f.budgetLabel} : ${form.budget || '-'}`,
      `${f.urgencyLabel} : ${form.urgency}`,
      '',
      `${f.descriptionLabel} :`,
      form.description,
    ]
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `${f.submitBtn} — ${form.name}`,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card-az flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand" aria-hidden />
        <h3 className="text-xl font-semibold">{f.successTitle}</h3>
        <p className="max-w-md text-sm leading-relaxed text-ink-light">
          {f.successText} (<span className="font-medium text-ink">{CONTACT_EMAIL}</span>)
        </p>
        <button
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className="btn-secondary mt-2"
        >
          {f.newRequestBtn}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-az flex flex-col gap-6 p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={f.nameLabel} error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="input-az"
            placeholder={f.namePlaceholder}
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label={f.emailLabel} error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="input-az"
            placeholder={f.emailPlaceholder}
            aria-invalid={!!errors.email}
          />
        </Field>

        <Field label={f.phoneLabel} error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="input-az"
            placeholder={f.phonePlaceholder}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label={f.sectorLabel} error={errors.sector}>
          <select
            value={form.sector}
            onChange={(e) => update('sector', e.target.value)}
            className="input-az"
            aria-invalid={!!errors.sector}
          >
            <option value="">{f.selectPlaceholder}</option>
            {f.sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label={f.serviceLabel} error={errors.service}>
          <select
            value={form.service}
            onChange={(e) => update('service', e.target.value)}
            className="input-az"
            aria-invalid={!!errors.service}
          >
            <option value="">{f.selectPlaceholder}</option>
            {f.services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label={f.teamLabel}>
          <select value={form.team} onChange={(e) => update('team', e.target.value)} className="input-az">
            <option value="">{f.selectPlaceholder}</option>
            {f.teams.map((teamName) => (
              <option key={teamName} value={teamName}>
                {teamName}
              </option>
            ))}
          </select>
        </Field>

        <Field label={f.budgetLabel}>
          <input
            type="text"
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            className="input-az"
            placeholder={f.budgetPlaceholder}
          />
        </Field>

        <Field label={f.urgencyLabel} error={errors.urgency}>
          <select
            value={form.urgency}
            onChange={(e) => update('urgency', e.target.value)}
            className="input-az"
            aria-invalid={!!errors.urgency}
          >
            <option value="">{f.selectPlaceholder}</option>
            {f.urgencyLevels.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={f.descriptionLabel} error={errors.description}>
        <textarea
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          className="input-az min-h-[120px] resize-y"
          placeholder={f.descriptionPlaceholder}
          aria-invalid={!!errors.description}
        />
      </Field>

      <button type="submit" className="btn-primary self-start">
        {f.submitBtn}
        <Send className="h-4 w-4" aria-hidden />
      </button>
    </form>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="text-xs font-medium text-red-500">{error}</span>}
    </label>
  )
}
