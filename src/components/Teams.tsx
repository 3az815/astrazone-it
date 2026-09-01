import { useState } from 'react'
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react'
import { teamsMeta } from '../data/teams'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export default function Teams() {
  const { t, isRTL } = useLanguage()
  const [activeId, setActiveId] = useState(teamsMeta[0].id)
  const activeMeta = teamsMeta.find((tm) => tm.id === activeId) ?? teamsMeta[0]
  const activeContent = t.teams.items[activeId]
  const ref = useReveal<HTMLDivElement>()
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="equipes" className="py-24 sm:py-32">
      <div className="container-az flex flex-col gap-14">
        <SectionHeading eyebrow={t.teams.eyebrow} title={t.teams.title} subtitle={t.teams.subtitle} />

        <div className="reveal is-visible mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
          <span className="rounded-full border border-ink/10 px-3 py-1.5 text-ink-light">{t.teams.direction}</span>
          {teamsMeta.map((tm) => (
            <span key={tm.id} className="flex items-center gap-2">
              <ChevronIcon className="h-3.5 w-3.5" aria-hidden />
              <span
                className={`rounded-full border px-3 py-1.5 transition-colors ${
                  activeId === tm.id
                    ? 'border-brand/40 bg-brand/[0.06] text-brand-deep'
                    : 'border-ink/10 text-ink-light'
                }`}
              >
                {t.teams.items[tm.id].name}
              </span>
            </span>
          ))}
        </div>

        <div ref={ref} className="reveal grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {teamsMeta.map((tm) => {
              const Icon = tm.icon
              const isActive = tm.id === activeId
              return (
                <button
                  key={tm.id}
                  onClick={() => setActiveId(tm.id)}
                  className={`flex min-w-[220px] shrink-0 items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all duration-200 lg:min-w-0 ${
                    isActive
                      ? 'border-brand/30 bg-white shadow-card'
                      : 'border-ink/[0.06] bg-surface-soft hover:border-brand/20'
                  }`}
                  aria-pressed={isActive}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      isActive ? 'bg-brand-gradient' : 'bg-ink/[0.05]'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-ink-light'}`} aria-hidden />
                  </div>
                  <span className={`text-sm font-semibold ${isActive ? 'text-brand-deep' : 'text-ink'}`}>
                    {t.teams.items[tm.id].name}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="card-az flex flex-col gap-8 p-7 sm:p-9">
            <div>
              <h3 className="text-2xl font-semibold">{activeContent.name}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-light">{activeContent.mission}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {t.teams.membersLabel} —
                </span>
                {activeContent.members.length > 0 ? (
                  activeContent.members.map((member) => (
                    <span
                      key={member}
                      className="rounded-full bg-brand-gradient px-3.5 py-1.5 text-sm font-semibold text-white shadow-soft"
                    >
                      {member}
                    </span>
                  ))
                ) : (
                  <span className="rounded-full border border-dashed border-ink/15 px-3.5 py-1.5 text-sm font-medium text-ink-faint">
                    {t.teams.openPosition}
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {t.teams.responsibilitiesLabel}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {activeContent.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="rounded-full border border-ink/[0.08] bg-surface-soft px-3 py-1.5 text-sm text-ink-light"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                {activeContent.technologies.length > 0 && (
                  <div>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-faint">
                      {t.teams.technologiesLabel}
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {activeContent.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-lg bg-brand/[0.06] px-3 py-1.5 text-sm font-medium text-brand-deep"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-faint">
                    {t.teams.relatedServicesLabel}
                  </h4>
                  <ul className="flex flex-col gap-1.5 text-sm text-ink-light">
                    {activeContent.relatedServices.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand" aria-hidden />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {activeId === 'hard' && (
              <div className="flex flex-col gap-7 border-t border-ink/[0.06] pt-8">
                <h4 className="font-mono text-xs uppercase tracking-wide text-ink-faint">{t.hardSkills.title}</h4>
                {t.hardSkills.categories.map((cat) => (
                  <SkillGroup key={cat.title} title={cat.title} items={cat.items} />
                ))}
              </div>
            )}

            {activeId === 'support' && (
              <div className="flex flex-col gap-7 border-t border-ink/[0.06] pt-8">
                <h4 className="font-mono text-xs uppercase tracking-wide text-ink-faint">{t.skills.title}</h4>
                {t.skills.tiers.map((tier) => (
                  <SkillGroup key={tier.label} title={tier.label} items={tier.skills} />
                ))}
                <SkillGroup title={t.skills.toolsLabel} items={t.skills.tools} />
              </div>
            )}

            {activeId === 'soft-securite' && (
              <div className="flex flex-col gap-7 border-t border-ink/[0.06] pt-8">
                <SkillGroup title={t.cyberSkills.topSkillsLabel} items={t.cyberSkills.topSkills} />
                {t.cyberSkills.modules.map((mod) => (
                  <SkillGroup key={mod.code} title={mod.title} items={mod.items} />
                ))}
                <SkillGroup title={t.cyberSkills.toolsLabel} items={t.cyberSkills.tools} />
              </div>
            )}

            {activeId === 'assistant' && (
              <div className="flex flex-col gap-7 border-t border-ink/[0.06] pt-8">
                <h4 className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {t.assistantSkills.title}
                </h4>
                {t.assistantSkills.categories.map((cat) => (
                  <SkillGroup key={cat.title} title={cat.title} items={cat.items} />
                ))}
              </div>
            )}

            {activeId === 'projet' && (
              <div className="flex flex-col gap-7 border-t border-ink/[0.06] pt-8">
                <h4 className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {t.projetSkills.title}
                </h4>
                {t.projetSkills.categories.map((cat) => (
                  <SkillGroup key={cat.title} title={cat.title} items={cat.items} />
                ))}
              </div>
            )}

            <button onClick={scrollToContact} className="btn-secondary self-start">
              {t.teams.contactBtn}
              <ArrowRight className={`h-4 w-4 ${isRTL ? '-scale-x-100' : ''}`} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/** One labeled row of skill badges — the single shared style used across every team's skills breakdown. */
function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h5 className="text-sm font-semibold text-ink">{title}</h5>
        <span className="h-px flex-1 bg-ink/[0.06]" aria-hidden />
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-brand/20 bg-brand/[0.06] px-3 py-1.5 text-sm font-medium text-brand-deep"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
