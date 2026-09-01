export interface TeamContent {
  name: string
  mission: string
  members: string[]
  responsibilities: string[]
  technologies: string[]
  relatedServices: string[]
}

export interface ServiceItemContent {
  name: string
  description: string
}

export interface ServiceCategoryContent {
  label: string
  intro: string
  items: ServiceItemContent[]
}

export interface TechGroupContent {
  category: string
  items: string[]
}

export interface ContractPlanContent {
  name: string
  price: string
  period: string
  features: string[]
}

export interface ServicePriceContent {
  service: string
  price: string
}

export interface FaqItemContent {
  question: string
  answer: string
}

export interface TestimonialContent {
  quote: string
  author: string
  role: string
}

export interface MethodologyStepContent {
  title: string
  desc: string
}

export interface SkillTierContent {
  label: string
  skills: string[]
}

export interface SkillsSectionContent {
  eyebrow: string
  title: string
  toolsLabel: string
  tiers: SkillTierContent[]
  tools: string[]
}

export interface CyberModuleContent {
  code: string
  title: string
  items: string[]
}

export interface CyberSkillsContent {
  title: string
  topSkillsLabel: string
  topSkills: string[]
  modules: CyberModuleContent[]
  toolsLabel: string
  tools: string[]
}

export interface SkillCategoryContent {
  title: string
  items: string[]
}

export interface AssistantSkillsContent {
  title: string
  categories: SkillCategoryContent[]
}

export interface ProjetSkillsContent {
  title: string
  categories: SkillCategoryContent[]
}

export interface HardSkillsContent {
  title: string
  categories: SkillCategoryContent[]
}

export interface Translation {
  meta: {
    title: string
    description: string
  }
  nav: {
    accueil: string
    apropos: string
    equipes: string
    services: string
    technologies: string
    secteurs: string
    tarifs: string
    faq: string
    contact: string
    cta: string
  }
  hero: {
    badge: string
    titlePrefix: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    trustLine: string
  }
  about: {
    eyebrow: string
    title: string
    subtitle: string
    p1: string
    p2: string
    sectors: string[]
    pillars: string[]
  }
  missionVision: {
    missionLabel: string
    missionText: string
    visionLabel: string
    visionText: string
    valuesLabel: string
    values: string[]
  }
  why: {
    eyebrow: string
    title: string
    reasons: string[]
  }
  teams: {
    eyebrow: string
    title: string
    subtitle: string
    direction: string
    responsibilitiesLabel: string
    technologiesLabel: string
    relatedServicesLabel: string
    membersLabel: string
    openPosition: string
    contactBtn: string
    items: Record<string, TeamContent>
  }
  services: {
    eyebrow: string
    title: string
    ctaBtn: string
    categories: Record<string, ServiceCategoryContent>
  }
  technologies: {
    eyebrow: string
    title: string
    subtitle: string
    groups: Record<string, TechGroupContent>
  }
  skills: SkillsSectionContent
  cyberSkills: CyberSkillsContent
  assistantSkills: AssistantSkillsContent
  projetSkills: ProjetSkillsContent
  hardSkills: HardSkillsContent
  industries: {
    eyebrow: string
    title: string
    items: string[]
  }
  methodology: {
    eyebrow: string
    title: string
    steps: MethodologyStepContent[]
  }
  pricing: {
    eyebrow: string
    title: string
    subtitle: string
    plans: Record<string, ContractPlanContent>
    chooseBtn: string
    unitTableTitle: string
    priceTable: ServicePriceContent[]
    note: string
  }
  testimonials: {
    eyebrow: string
    title: string
    items: TestimonialContent[]
  }
  faq: {
    eyebrow: string
    title: string
    items: FaqItemContent[]
  }
  cta: {
    title: string
    subtitle: string
    primary: string
    secondary: string
  }
  contact: {
    eyebrow: string
    title: string
    subtitle: string
    addressLabel: string
    callBtn: string
    whatsappBtn: string
  }
  quoteForm: {
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    sectorLabel: string
    serviceLabel: string
    teamLabel: string
    budgetLabel: string
    budgetPlaceholder: string
    urgencyLabel: string
    descriptionLabel: string
    descriptionPlaceholder: string
    selectPlaceholder: string
    sectors: string[]
    services: string[]
    teams: string[]
    urgencyLevels: string[]
    errors: {
      name: string
      email: string
      phone: string
      sector: string
      service: string
      description: string
      urgency: string
    }
    submitBtn: string
    successTitle: string
    successText: string
    newRequestBtn: string
  }
  footer: {
    tagline: string
    trust: string
    empowering: string
    navServices: string
    navTeams: string
    navTechnologies: string
    navContact: string
    copyright: string
  }
}
