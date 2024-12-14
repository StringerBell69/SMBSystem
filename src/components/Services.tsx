import React from 'react';
import { Code, Database, HeartHandshake, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Développement Web Full Stack',
    description: 'Expertise en React et Node.js pour des applications web modernes et performantes.',
    icon: Code,
  },
  {
    title: 'Solutions Sur-mesure',
    description: 'Conception de systèmes adaptés aux besoins spécifiques de votre entreprise.',
    icon: Database,
  },
  {
    title: 'Consultation IT',
    description: 'Accompagnement stratégique pour votre transformation numérique.',
    icon: HeartHandshake,
  },
  {
    title: 'Maintenance & Support',
    description: 'Service après-vente de haute qualité pour la pérennité de vos solutions.',
    icon: Wrench,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour répondre à vos besoins digitaux
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;