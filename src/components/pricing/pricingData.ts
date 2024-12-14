export const pricingTiers = [
  {
    title: 'Site Vitrine',
    price: '450',
    description: 'Idéal pour les petites entreprises et projets personnels',
    features: [
      'Jusqu\'à 5 pages',
      'Design responsive',
      'Formulaire de contact',
      'Optimisation SEO de base',
      '2 révisions gratuites'
    ]
  },
  {
    title: 'E-commerce',
    price: '1200',
    description: 'Pour les entreprises souhaitant vendre en ligne',
    isPopular: true,
    features: [
      'Jusqu\'à 30 produits',
      'Paiement sécurisé',
      'Gestion des stocks',
      'Dashboard admin',
      'Support technique (1 mois)'
    ]
  },
  {
    title: 'Applications Mobiles',
    price: 'Sur mesure',
    description: 'Pour les entreprises souhaitant créer une application mobile personnalisée',
    isPopular: true,
    features: [
      'Application iOS et Android',
      'Design personnalisé',
      'Intégration des fonctionnalités spécifiques',
      'Optimisation des performances',
      'Support technique (3 mois)'
    ]
},
{
  title: 'Service de Maintenance',
  price: '*65/mois',
  description: 'Pour les entreprises nécessitant un suivi et une maintenance régulière de leurs sites web ou applications.',
  features: [
    'Mises à jour régulières',
    'Sécurisation des données',
    'Optimisation des performances',
    'Support technique continu',
    'Rapports mensuels'
  ]
}
] as const;