export const pricingTiers = [
  {
    title: 'Site Vitrine',
    price: '450',
    description: 'Conçu pour les petites entreprises souhaitant une présence en ligne simple et efficace.',
    features: [
      'Jusqu\'à 5 pages professionnelles',
      'Design moderne et responsive',
      'Formulaire de contact intuitif',
      'Optimisation SEO standard',
      '2 cycles de révision inclus'
    ]
  },
  {
    title: 'E-commerce',
    price: '1200',
    description: 'Pour les entreprises cherchant à vendre en ligne facilement et en toute sécurité.',
    isPopular: true,
    features: [
      'Ajout de 30 produits maximum',
      'Système de paiement sécurisé',
      'Gestion des stocks intégrée',
      'Dashboard admin simplifié',
      'Support technique offert 1 mois'
    ]
  },
  {
    title: 'Applications Mobiles',
    price: 'Sur mesure',
    description: 'Parfait pour créer une application iOS et Android innovante et performante.',
    isPopular: true,
    features: [
      'Compatible iOS et Android',
      'Design sur mesure inclus',
      'Intégration des fonctions clés',
      'Optimisation pour hautes performances',
      'Support technique offert 3 mois'
    ]
  },
  {
    title: 'Service de Maintenance',
    price: '*65/mois',
    description: 'Une solution clé pour assurer la sécurité et les mises à jour régulières de vos sites.',
    features: [
      'Mises à jour fréquentes',
      'Protection avancée des données',
      'Amélioration des performances',
      'Support client en continu',
      'Rapports détaillés chaque mois'
    ]
  }
] as const;
