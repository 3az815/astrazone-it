import type { LucideIcon } from 'lucide-react'
import {
  LifeBuoy,
  MonitorCog,
  Server,
  Network,
  ShieldCheck,
  Cloud,
  Boxes,
  Activity,
  Wrench,
  Video,
} from 'lucide-react'

/** Ordered service category ids + icons. Text content lives in src/i18n/{fr,ar,en}.ts under services.categories[id]. */
export interface ServiceCategoryMeta {
  id: string
  icon: LucideIcon
}

export const serviceCategoriesMeta: ServiceCategoryMeta[] = [
  { id: 'support', icon: LifeBuoy },
  { id: 'systemes', icon: MonitorCog },
  { id: 'infrastructure', icon: Server },
  { id: 'reseaux', icon: Network },
  { id: 'securite', icon: ShieldCheck },
  { id: 'cloud', icon: Cloud },
  { id: 'virtualisation', icon: Boxes },
  { id: 'supervision', icon: Activity },
  { id: 'continuite', icon: Wrench },
  { id: 'videosurveillance', icon: Video },
]
