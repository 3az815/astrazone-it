import type { LucideIcon } from 'lucide-react'
import { HardHat, ShieldHalf, Headset, ClipboardList, FolderKanban, Briefcase } from 'lucide-react'

/** Ordered team ids + icons. Text content lives in src/i18n/{fr,ar,en}.ts under teams.items[id]. */
export interface TeamMeta {
  id: string
  icon: LucideIcon
}

export const teamsMeta: TeamMeta[] = [
  { id: 'hard', icon: HardHat },
  { id: 'soft-securite', icon: ShieldHalf },
  { id: 'support', icon: Headset },
  { id: 'assistant', icon: ClipboardList },
  { id: 'projet', icon: FolderKanban },
  { id: 'commercial', icon: Briefcase },
]
