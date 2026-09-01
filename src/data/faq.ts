export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
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
]
