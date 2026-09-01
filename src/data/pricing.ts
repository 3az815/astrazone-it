/** Ordered contract plan ids + which one is visually featured. Text content lives in src/i18n/{fr,ar,en}.ts under pricing.plans[id]. */
export const contractPlanIds: { id: string; featured?: boolean }[] = [
  { id: 'bronze' },
  { id: 'silver' },
  { id: 'gold', featured: true },
  { id: 'platinum' },
]
