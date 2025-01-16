import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-100/30 to-indigo-100/30 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              Votre partenaire pour
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 inline-block transform hover:scale-105 transition-transform duration-300">
              l'innovation digitale
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Développement de solutions sur-mesure et accompagnement 
            pour les entreprises en pleine croissance.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Démarrer votre projet
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
