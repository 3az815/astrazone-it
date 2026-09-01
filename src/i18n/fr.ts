import type { Translation } from './types'

export const fr: Translation = {
  meta: {
    title: 'AstraZone IT Solutions | Services IT, Réseaux & Cybersécurité au Maroc',
    description:
      "AstraZone IT Solutions accompagne les entreprises au Maroc avec des solutions IT professionnelles en réseaux, systèmes, cloud, cybersécurité, supervision et support informatique.",
  },
  nav: {
    accueil: 'Accueil',
    apropos: 'À propos',
    equipes: 'Équipes',
    services: 'Services',
    technologies: 'Technologies',
    secteurs: 'Secteurs',
    tarifs: 'Tarifs',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Demander un devis',
  },
  hero: {
    badge: 'AstraZone IT Solutions',
    titlePrefix: 'Votre Partenaire',
    titleHighlight: 'IT de Confiance',
    subtitle:
      "Des solutions informatiques fiables, sécurisées et performantes pour accompagner votre transformation numérique.",
    ctaPrimary: 'Demander un devis',
    ctaSecondary: 'Découvrir nos services',
    trustLine: 'Réseaux • Systèmes • Cloud • Sécurité • Support',
  },
  about: {
    eyebrow: 'À propos',
    title: "À propos d'AstraZone",
    subtitle:
      "Une entreprise marocaine au service de la performance et de la sécurité de votre système d'information.",
    p1: "AstraZone IT Solutions est une entreprise marocaine spécialisée dans les services informatiques professionnels destinés aux entreprises de toutes tailles.",
    p2: "Basée à Skhirat, l'entreprise accompagne ses clients dans la conception, le déploiement et la maintenance d'infrastructures IT modernes, sécurisées et performantes.",
    sectors: ['Santé', 'Hôtellerie', 'Éducation', 'Industrie', 'Commerce', 'Secteur public', 'PME'],
    pillars: ['Rigueur technique', 'Réactivité', 'Transparence', 'Accompagnement durable'],
  },
  missionVision: {
    missionLabel: 'Mission',
    missionText:
      "Fournir aux entreprises marocaines des solutions informatiques fiables, sécurisées et performantes, afin de renforcer leur compétitivité et d'accompagner durablement leur transformation numérique.",
    visionLabel: 'Vision',
    visionText:
      "Devenir un acteur de référence dans le domaine des services IT au Maroc, reconnu pour son expertise technique, la qualité de son accompagnement et son engagement envers la satisfaction client.",
    valuesLabel: 'Valeurs',
    values: ['Excellence technique', 'Intégrité', 'Réactivité', 'Innovation', 'Engagement'],
  },
  why: {
    eyebrow: 'Nos atouts',
    title: 'Pourquoi choisir AstraZone ?',
    reasons: [
      'Ingénieurs professionnels',
      'Réponse rapide',
      'Tarifs compétitifs',
      'Solutions sécurisées',
      'Support professionnel',
      'Satisfaction client',
    ],
  },
  teams: {
    eyebrow: 'Nos équipes',
    title: 'Une organisation pensée pour chaque besoin technique',
    subtitle:
      "Des équipes spécialisées et coordonnées pour couvrir l'ensemble de votre infrastructure IT.",
    direction: 'Direction',
    responsibilitiesLabel: 'Responsabilités',
    technologiesLabel: 'Technologies',
    relatedServicesLabel: 'Services associés',
    membersLabel: 'Équipe',
    openPosition: 'Recrutement en cours',
    contactBtn: 'Contacter cette équipe',
    items: {
      hard: {
        name: 'Équipe Hard',
        mission:
          "Installation et maintenance de tout ce qui touche au matériel : câblage, équipements réseau et postes de travail.",
        members: ['Zouhir Bouayour'],
        responsibilities: [
          'Câblage réseau',
          'Installation des équipements',
          'Maintenance matérielle',
          'Montage et configuration des postes',
          'Installation switches & routeurs',
          'Dépannage matériel',
        ],
        technologies: ['Câblage structuré', 'Switches', 'Routeurs', 'Outillage réseau'],
        relatedServices: ['Câblage Réseau', 'Installation Réseau', "Réparation d'Ordinateurs"],
      },
      'soft-securite': {
        name: 'Soft & Sécurité',
        mission:
          'Gestion logicielle et sécurité des postes : licences, activation, antivirus et surveillance des systèmes.',
        members: ['Ilyas Ghanmi', 'Soukaina Ettahri'],
        responsibilities: [
          'Activation des licences',
          'Installation Office',
          'Installation antivirus',
          'Surveillance des systèmes',
          'Configuration logicielle',
          'Sécurité des postes',
          'Mises à jour logicielles',
        ],
        technologies: ['Microsoft 365', 'Antivirus', 'Wazuh', 'Licences logicielles'],
        relatedServices: ['Microsoft 365', 'Cybersécurité', 'Support IT'],
      },
      support: {
        name: 'Équipe Support',
        mission:
          "Support technique polyvalent, capable de renforcer les équipes Hard et Soft & Sécurité selon les besoins du terrain.",
        members: ['Walid Ait Chahraine'],
        responsibilities: [
          'Support technique',
          'Intervention polyvalente',
          'Renfort équipe Hard',
          'Renfort équipe Soft & Sécurité',
          'Dépannage général',
          'Assistance utilisateurs',
        ],
        technologies: ['GLPI', 'Outils de support à distance'],
        relatedServices: ['Support IT', 'Maintenance Informatique'],
      },
      assistant: {
        name: 'Équipe Assistant',
        mission:
          "Accompagnement des clients, analyse des problèmes et élaboration de solutions, en appui sur les projets d'envergure.",
        members: ['Fatima Zahra El Bakri'],
        responsibilities: [
          'Accompagnement client',
          'Analyse des problèmes',
          'Élaboration de solutions',
          'Appui sur les grands projets',
          'Suivi client',
          'Coordination',
        ],
        technologies: ['GLPI', 'Outils de gestion client'],
        relatedServices: ['Support IT', 'Conseil Technique'],
      },
      projet: {
        name: 'Équipe Projet',
        mission: "Installation et organisation des projets techniques : GLPI, Zabbix, VoIP et plus.",
        members: ['Ayoub Dhab'],
        responsibilities: [
          'Installation GLPI',
          'Installation Zabbix',
          'Installation VoIP',
          'Organisation de projets',
          'Déploiement de solutions',
          'Suivi de projet',
        ],
        technologies: ['GLPI', 'Zabbix', 'VoIP / Issabel'],
        relatedServices: ['GLPI', 'Zabbix', 'VoIP Issabel'],
      },
      commercial: {
        name: 'Commercial & Développement',
        mission:
          "Développement commercial et partenariats stratégiques pour accompagner la croissance d'AstraZone.",
        members: [],
        responsibilities: [
          'Prospection commerciale',
          'Développement de partenariats',
          'Relation client',
          "Développement de l'activité",
        ],
        technologies: [],
        relatedServices: ['Conseil Technique'],
      },
    },
  },
  services: {
    eyebrow: 'Nos services',
    title: 'Des solutions IT complètes pour votre infrastructure numérique',
    ctaBtn: 'Demander un devis pour ce service',
    categories: {
      support: {
        label: 'Support & Maintenance',
        intro: "Un accompagnement continu pour garder vos postes et systèmes opérationnels.",
        items: [
          { name: 'Support IT', description: 'Assistance technique réactive à distance et sur site.' },
          {
            name: 'Maintenance Informatique',
            description: 'Entretien préventif et correctif de votre parc informatique.',
          },
          {
            name: "Réparation d'Ordinateurs",
            description: 'Diagnostic et réparation de postes fixes et portables.',
          },
        ],
      },
      systemes: {
        label: 'Systèmes',
        intro: 'Déploiement et configuration des environnements Windows et Linux.',
        items: [
          { name: 'Installation Windows', description: 'Déploiement et configuration de postes sous Windows.' },
          { name: 'Installation Linux', description: 'Mise en place de systèmes Linux adaptés à vos usages.' },
          { name: 'Windows Server', description: 'Installation et administration de serveurs Windows Server.' },
        ],
      },
      infrastructure: {
        label: 'Infrastructure',
        intro: "Les fondations serveur et annuaire de votre système d'information.",
        items: [
          { name: 'Linux Server', description: 'Déploiement et administration de serveurs Linux.' },
          { name: 'Active Directory', description: "Gestion centralisée des identités et des accès." },
          { name: 'DNS', description: 'Configuration et supervision de vos services de résolution de noms.' },
        ],
      },
      reseaux: {
        label: 'Réseaux',
        intro: 'Conception et déploiement de réseaux fiables et évolutifs.',
        items: [
          { name: 'DHCP', description: "Attribution automatisée des adresses IP sur votre réseau." },
          { name: 'Group Policy', description: 'Application de stratégies de groupe pour standardiser vos postes.' },
          { name: 'Microsoft 365', description: 'Déploiement et gestion de la suite collaborative Microsoft 365.' },
        ],
      },
      securite: {
        label: 'Sécurité',
        intro: 'Protection de vos systèmes, réseaux et données sensibles.',
        items: [
          { name: 'Configuration VLAN', description: 'Segmentation réseau pour isoler et sécuriser vos flux.' },
          { name: 'VPN', description: 'Mise en place de connexions distantes chiffrées et sécurisées.' },
          { name: 'Firewall', description: 'Configuration de pare-feu pour filtrer et contrôler le trafic.' },
        ],
      },
      cloud: {
        label: 'Cloud',
        intro: 'Solutions cloud et collaboratives pour vos équipes.',
        items: [
          { name: 'Google Workspace', description: 'Déploiement et administration de Google Workspace.' },
          { name: 'VMware', description: 'Virtualisation de serveurs avec la plateforme VMware.' },
          { name: 'Hyper-V', description: 'Mise en place de machines virtuelles sous Hyper-V.' },
        ],
      },
      virtualisation: {
        label: 'Virtualisation',
        intro: 'Environnements virtualisés pour optimiser vos ressources.',
        items: [
          { name: 'VirtualBox', description: 'Environnements de virtualisation légers pour tests et développement.' },
          { name: 'Proxmox', description: 'Plateforme de virtualisation open source pour vos serveurs.' },
          { name: 'Solutions Cloud', description: 'Architecture et migration vers des infrastructures cloud.' },
        ],
      },
      supervision: {
        label: 'Supervision',
        intro: 'Surveillance proactive de vos infrastructures IT.',
        items: [
          { name: 'Zabbix', description: 'Supervision en temps réel de vos serveurs et équipements réseau.' },
          { name: 'Wazuh', description: 'Détection et surveillance de sécurité de vos systèmes.' },
          { name: 'GLPI', description: 'Gestion de parc informatique et de tickets de support.' },
        ],
      },
      continuite: {
        label: 'Continuité',
        intro: "Préparer et sécuriser la continuité de votre activité.",
        items: [
          {
            name: "Plan de Reprise d'Activité",
            description: 'Élaboration de procédures de reprise après incident.',
          },
          { name: 'Cybersécurité', description: 'Audit et renforcement de la sécurité de vos systèmes.' },
          { name: 'Câblage Réseau', description: 'Installation de câblage structuré pour vos locaux.' },
        ],
      },
      videosurveillance: {
        label: 'Vidéosurveillance',
        intro: 'Sécurité physique et accompagnement stratégique.',
        items: [
          { name: 'Installation CCTV', description: 'Déploiement de systèmes de vidéosurveillance sur site.' },
          { name: 'Conseil Technique', description: 'Accompagnement stratégique sur vos choix technologiques.' },
          { name: 'Formation IT', description: 'Formation de vos équipes aux bonnes pratiques informatiques.' },
        ],
      },
    },
  },
  technologies: {
    eyebrow: 'Écosystème technique',
    title: 'Les technologies que nous maîtrisons',
    subtitle:
      "Un socle technique éprouvé, choisi pour sa fiabilité et sa compatibilité avec vos environnements existants.",
    groups: {
      reseaux: { category: 'Réseaux', items: ['Cisco', 'Huawei', 'MikroTik', 'BDCOM'] },
      systemes: {
        category: 'Systèmes',
        items: ['Windows', 'Linux', 'Windows Server', 'Active Directory', 'DNS', 'DHCP'],
      },
      cloud: {
        category: 'Cloud & Virtualisation',
        items: ['VMware', 'Hyper-V', 'VirtualBox', 'Proxmox', 'Google Workspace', 'Microsoft 365'],
      },
      cyber: {
        category: 'Cybersécurité & Supervision',
        items: ['Wazuh', 'SIEM', 'ELK Stack', 'Suricata', 'MITRE ATT&CK', 'Zabbix', 'GLPI', 'Issabel', 'VPN', 'VLAN', 'Firewall'],
      },
    },
  },
  skills: {
    eyebrow: 'Compétences Techniques',
    title: 'Compétences Techniques — Technicien Support IT',
    toolsLabel: 'Outils maîtrisés',
    tiers: [
      {
        label: 'Priorité très haute',
        skills: [
          'Windows 10/11',
          'Hardware & périphériques',
          'Troubleshooting / Helpdesk',
          'TCP/IP',
          'DHCP',
          'DNS',
          'LAN / WAN',
          'Wi-Fi / Ethernet',
          'Active Directory',
          'Gestion des utilisateurs et groupes',
          'Gestion des droits d\'accès',
          'Windows Server basics',
          'Imprimantes et périphériques',
          'Backup & Recovery basics',
        ],
      },
      {
        label: 'Priorité haute',
        skills: [
          'Microsoft 365',
          'PowerShell',
          'NTFS & Share Permissions',
          'GPO basics',
          'Windows Event Viewer',
          'Remote Desktop',
          'Network troubleshooting',
          'File Sharing',
        ],
      },
      {
        label: 'Priorité moyenne',
        skills: ['Zabbix', 'Wireshark', 'Cisco basics', 'VLAN', 'Ubuntu / Linux basics', 'Excel', 'Documentation technique'],
      },
      {
        label: 'Priorité basique / bonus',
        skills: ['Bash', 'SQL', 'Database basics'],
      },
    ],
    tools: [
      'Windows',
      'Windows Server',
      'Active Directory',
      'Microsoft 365',
      'PowerShell',
      'Zabbix',
      'Wireshark',
      'Cisco',
      'Ubuntu',
      'Linux',
      'Excel',
      'Bash',
      'SQL',
    ],
  },
  cyberSkills: {
    title: 'Compétences Cybersécurité',
    topSkillsLabel: 'Compétences Cybersécurité',
    topSkills: [
      'Sécurité des systèmes',
      'Sécurité réseau',
      'Sécurisation des systèmes',
      'Prévention des menaces',
      "Gestion des droits d'accès",
      'Monitoring & Surveillance',
      'Analyse des incidents',
      'Administration Linux & Windows pour la sécurité',
    ],
    modules: [
      {
        code: 'M202',
        title: "Tests d'intrusion / Pentest",
        items: [
          'Méthodologies de Pentest',
          'Reconnaissance',
          'Scanning & Enumeration',
          'Vulnerability Assessment',
          'Exploitation',
          'Post-Exploitation',
          'Web Pentesting',
          'Rapport de Pentest',
        ],
      },
      {
        code: 'M203',
        title: 'Analyse des attaques et incidents',
        items: ['Cyber Kill Chain', 'Analyse des Logs', 'Network Analysis', 'SIEM'],
      },
      {
        code: 'M204',
        title: 'Durcissement / Hardening',
        items: [
          'Security Hardening',
          'Windows Hardening',
          'Linux Hardening',
          'Network Hardening',
          'Firewall',
          'VPN',
          'IDS / IPS',
          'Vulnerability Management',
          'Monitoring & Logging',
          'Security Audit',
        ],
      },
    ],
    toolsLabel: 'Outils Cybersécurité',
    tools: [
      'Wazuh',
      'AlienVault OSSIM',
      'Suricata',
      'Snort',
      'Wireshark',
      'tcpdump',
      'Syslog-ng',
      'Grafana',
      'Kibana',
      'Elasticsearch',
      'Logstash',
      'Nessus',
      'OpenVAS',
      'Lynis',
      'PingCastle',
      'pwquality',
      'GPO',
      'AppArmor',
      'SELinux',
      'pfSense',
      'Squid',
      'OpenVPN',
      'Maltego',
    ],
  },
  assistantSkills: {
    title: 'Compétences — Équipe Assistant IT',
    categories: [
      {
        title: 'Administration Systèmes',
        items: ['Windows Server', 'Linux', 'Active Directory', 'DNS', 'DHCP', 'GPO', 'WDS', 'DFS', 'LDAP', 'SSH'],
      },
      {
        title: 'Réseaux',
        items: ['TCP/IP', 'VLAN', 'WLAN', 'Routage', 'NAT', 'VPN', 'ACL', 'Cisco', 'SNMP'],
      },
      {
        title: 'Support IT',
        items: [
          'Déploiement des postes',
          'Maintenance des postes',
          'Configuration des imprimantes',
          'Diagnostic des incidents',
          'Assistance aux utilisateurs',
        ],
      },
      {
        title: 'Virtualisation',
        items: ['VMware', 'Hyper-V', 'Proxmox', 'VirtualBox'],
      },
      {
        title: 'Stockage & Serveurs',
        items: ['RAID', 'LVM', 'iSCSI', 'NFS', 'Samba', 'Failover'],
      },
      {
        title: 'Supervision',
        items: ['Veeam ONE', 'SNMP'],
      },
      {
        title: 'Sécurité IT',
        items: ['Fortinet', 'Kaspersky Security Center', 'Firewall'],
      },
      {
        title: 'VoIP',
        items: ['Issabel', 'Asterisk', 'Cisco CUCM'],
      },
    ],
  },
  projetSkills: {
    title: 'Compétences — Équipe Projet',
    categories: [
      {
        title: 'Réseaux',
        items: ['TCP/IP', 'VLAN', 'DHCP', 'DNS', 'Routage & Commutation', 'Câblage réseau'],
      },
      {
        title: 'Systèmes & Virtualisation',
        items: ['Windows', 'Linux', 'Installation & configuration serveurs', 'VMware', 'VirtualBox', 'SDN', 'Cloud Computing'],
      },
      {
        title: 'Gestion IT',
        items: ['GLPI — Déploiement & Administration', 'Gestion des postes de travail', 'Gestion des imprimantes'],
      },
      {
        title: 'Support & Sécurité',
        items: ['Maintenance & dépannage informatique', 'Support technique & assistance utilisateurs', 'Sécurité des systèmes et réseaux'],
      },
    ],
  },
  hardSkills: {
    title: 'Compétences — Équipe Hard',
    categories: [
      {
        title: "Systèmes d'exploitation",
        items: ['Windows Server (Active Directory, GPO, Gestion des utilisateurs)', 'Linux (ligne de commande, permissions)'],
      },
      {
        title: 'Réseaux',
        items: ['Configuration LAN, switches et VLAN', 'Notions de routage et protocoles réseau'],
      },
      {
        title: 'Virtualisation',
        items: ['VMware Workstation', 'ESXi / Proxmox (notions)'],
      },
      {
        title: 'Support Informatique',
        items: ['Maintenance des postes de travail', 'Installation logiciels et périphériques', 'Support utilisateurs'],
      },
    ],
  },
  industries: {
    eyebrow: 'Secteurs',
    title: "Secteurs d'activité",
    items: ['Santé', 'Hôtellerie', 'Éducation', 'Industrie', 'Commerce', 'Secteur public', 'PME'],
  },
  methodology: {
    eyebrow: 'Méthodologie',
    title: 'Une démarche claire, du premier contact à la maintenance',
    steps: [
      { title: 'Consultation', desc: "Échange initial pour comprendre votre besoin." },
      { title: 'Visite sur Site', desc: "Évaluation de votre infrastructure existante." },
      { title: 'Analyse', desc: 'Étude technique et identification des solutions.' },
      { title: 'Devis', desc: 'Proposition détaillée et transparente.' },
      { title: 'Installation', desc: 'Déploiement des solutions retenues.' },
      { title: 'Tests', desc: 'Validation du bon fonctionnement.' },
      { title: 'Livraison', desc: 'Remise du projet finalisé.' },
      { title: 'Maintenance', desc: 'Suivi et accompagnement continu.' },
    ],
  },
  pricing: {
    eyebrow: 'Tarifs',
    title: "Des contrats de maintenance pensés pour chaque taille d'entreprise",
    subtitle: 'Chaque contrat peut être personnalisé selon les besoins du client.',
    plans: {
      bronze: {
        name: 'Bronze',
        price: '1 500 DH',
        period: '/ mois',
        features: [
          'Support à distance illimité',
          '1 visite technique / mois',
          'Maintenance préventive de base',
          'Temps de réponse : 24h',
        ],
      },
      silver: {
        name: 'Silver',
        price: '3 000 DH',
        period: '/ mois',
        features: [
          'Support à distance + sur site',
          '2 visites techniques / mois',
          'Supervision réseau basique',
          'Temps de réponse : 12h',
        ],
      },
      gold: {
        name: 'Gold',
        price: '5 500 DH',
        period: '/ mois',
        features: [
          'Support prioritaire 6j/7',
          '4 visites techniques / mois',
          'Supervision & sauvegarde incluses',
          'Temps de réponse : 4h',
        ],
      },
      platinum: {
        name: 'Platinum',
        price: '9 000 DH',
        period: '/ mois',
        features: [
          'Support prioritaire 24/7',
          'Visites illimitées',
          'Sécurité, supervision & PRA inclus',
          'Temps de réponse : 1h',
        ],
      },
    },
    chooseBtn: 'Choisir',
    unitTableTitle: "Tarifs à l'unité",
    priceTable: [
      { service: 'Diagnostic informatique', price: '100 DH' },
      { service: 'Installation Windows', price: '250 DH' },
      { service: 'Installation Linux', price: '300 DH' },
      { service: 'Installation réseau', price: '500 DH' },
      { service: 'Configuration Switch', price: '600 DH' },
      { service: 'Windows Server', price: '1 200 DH' },
      { service: 'Linux Server', price: '1 000 DH' },
      { service: 'VoIP Issabel', price: '1 500 DH' },
      { service: 'GLPI', price: '1 000 DH' },
      { service: 'Zabbix', price: '1 500 DH' },
      { service: 'Cybersécurité (audit)', price: '700 DH' },
      { service: 'Support technique', price: '150 DH / heure' },
      { service: 'Projets de grande envergure', price: 'Sur devis' },
    ],
    note: 'Les tarifs sont indicatifs. Un devis personnalisé est établi pour chaque projet.',
  },
  testimonials: {
    eyebrow: 'Témoignages',
    title: 'Ce que nos clients disent de nous',
    items: [
      {
        quote:
          "AstraZone a modernisé toute notre infrastructure réseau avec un professionnalisme remarquable. Un partenaire fiable et réactif.",
        author: 'Directeur Général',
        role: 'Groupe Hôtelier, Rabat',
      },
      {
        quote:
          "Leur équipe a su sécuriser nos systèmes tout en respectant les contraintes de continuité de service. Résultat impeccable.",
        author: 'Responsable IT',
        role: 'Clinique Privée, Casablanca',
      },
      {
        quote:
          "Un accompagnement de A à Z, du conseil à la maintenance. Nous recommandons AstraZone sans hésitation.",
        author: 'Fondateur',
        role: 'PME Industrielle, Salé',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Intervenez-vous en dehors de Skhirat ?',
        answer:
          "Oui, notre équipe se déplace au-delà de Skhirat selon les besoins du projet. Contactez-nous pour vérifier la faisabilité et les modalités d'intervention dans votre zone.",
      },
      {
        question: 'Proposez-vous des contrats de maintenance ?',
        answer:
          'Oui, nous proposons plusieurs formules de contrats de maintenance (Bronze, Silver, Gold, Platinum) adaptées à la taille et aux besoins de votre entreprise.',
      },
      {
        question: "Quel est votre délai d'intervention ?",
        answer:
          "Le délai dépend du contrat souscrit, de 1h en Platinum à 24h en Bronze. Pour les demandes ponctuelles, nous confirmons un délai lors de la prise de contact.",
      },
      {
        question: 'Travaillez-vous avec les particuliers ?',
        answer:
          "Notre activité est principalement orientée entreprises, mais certaines interventions ponctuelles pour particuliers peuvent être étudiées au cas par cas.",
      },
      {
        question: 'Comment obtenir un devis ?',
        answer:
          'Il vous suffit de remplir le formulaire de devis en ligne ou de nous contacter directement par téléphone, WhatsApp ou email. Nous établissons une proposition adaptée à votre besoin.',
      },
      {
        question: 'Vos techniciens sont-ils certifiés ?',
        answer:
          'Nos équipes sont composées de professionnels formés aux technologies que nous déployons (réseaux, systèmes, cybersécurité) et travaillent selon des standards techniques rigoureux.',
      },
    ],
  },
  cta: {
    title: "Besoin d'une solution IT ?",
    subtitle: 'Notre équipe est prête à vous accompagner.',
    primary: 'Demander un devis',
    secondary: 'Nous contacter',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de votre projet',
    subtitle: 'Contactez-nous directement ou envoyez-nous les détails de votre besoin.',
    addressLabel: 'Skhirat, Maroc',
    callBtn: 'Appeler',
    whatsappBtn: 'WhatsApp',
  },
  quoteForm: {
    nameLabel: 'Nom / Société',
    namePlaceholder: 'Votre nom ou votre entreprise',
    emailLabel: 'Email',
    emailPlaceholder: 'vous@entreprise.com',
    phoneLabel: 'Téléphone',
    phonePlaceholder: '+212 6XX XXX XXX',
    sectorLabel: "Secteur d'activité",
    serviceLabel: 'Service recherché',
    teamLabel: 'Équipe concernée',
    budgetLabel: 'Budget approximatif',
    budgetPlaceholder: 'Ex : 5 000 DH',
    urgencyLabel: 'Urgence',
    descriptionLabel: 'Description du besoin',
    descriptionPlaceholder: 'Décrivez votre projet ou votre besoin technique…',
    selectPlaceholder: 'Sélectionner…',
    sectors: ['Santé', 'Hôtellerie', 'Éducation', 'Industrie', 'Commerce', 'Secteur public', 'PME', 'Autre'],
    services: [
      'Support & Maintenance',
      'Systèmes',
      'Infrastructure',
      'Réseaux',
      'Sécurité',
      'Cloud',
      'Virtualisation',
      'Supervision',
      'Continuité',
      'Vidéosurveillance',
    ],
    teams: ['Équipe Hard', 'Soft & Sécurité', 'Équipe Support', 'Équipe Assistant', 'Équipe Projet', 'Commercial & Développement', 'Non défini'],
    urgencyLevels: ['Faible', 'Normale', 'Élevée', 'Urgente'],
    errors: {
      name: 'Merci de renseigner votre nom ou société.',
      email: 'Merci de renseigner votre email.',
      phone: 'Merci de renseigner votre téléphone.',
      sector: 'Merci de choisir un secteur.',
      service: 'Merci de choisir un service.',
      description: 'Merci de décrire votre besoin.',
      urgency: "Merci d'indiquer le niveau d'urgence.",
    },
    submitBtn: 'Demander mon devis',
    successTitle: 'Votre demande est prête à être envoyée',
    successText:
      "Votre messagerie s'est ouverte avec les détails de votre demande pré-remplis. Il ne vous reste qu'à cliquer sur envoyer.",
    newRequestBtn: 'Faire une nouvelle demande',
  },
  footer: {
    tagline: 'Votre Partenaire IT de Confiance',
    trust: 'Réseaux • Systèmes • Cloud • Sécurité • Support',
    empowering: 'Empowering Your Business Through Technology',
    navServices: 'Services',
    navTeams: 'Équipes',
    navTechnologies: 'Technologies',
    navContact: 'Contact',
    copyright: 'AstraZone IT Solutions. Skhirat, Maroc.',
  },
}
