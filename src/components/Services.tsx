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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1000px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Nos Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour répondre à vos besoins digitaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <service.icon className="h-12 w-12 text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
