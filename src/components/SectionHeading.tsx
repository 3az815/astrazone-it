import { useReveal } from '../hooks/useReveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>()
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div ref={ref} className={`reveal flex flex-col gap-4 ${alignment} max-w-2xl`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="text-balance text-base leading-relaxed text-ink-light sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
