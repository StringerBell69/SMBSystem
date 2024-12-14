import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plateforme de commerce en ligne moderne avec React et Node.js',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique pour la visualisation de données',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Mobile App',
    description: 'Application mobile cross-platform avec React Native',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;