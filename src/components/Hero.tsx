import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id='hero' className="relative bg-gradient-to-br from-blue-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Votre partenaire pour l'innovation digitale
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Développement Full Stack React, solutions IT sur-mesure et accompagnement 
            pour entreprises en pleine croissance.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Démarrer votre projet
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;