import React from 'react';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string | number;
  features: string[];
  description: string;
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  price, 
  features, 
  description, 
  isPopular = false 
}) => (
  <div 
    className={`group bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1
      ${isPopular 
        ? 'shadow-xl ring-2 ring-blue-600' 
        : 'shadow-lg hover:shadow-xl'}`}
  >
    {isPopular && (
      <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 mb-4">
        Plus populaire
      </span>
    )}
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="mb-6">
      <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        {price}
      </span>
      {price !== 'Sur mesure' && <span className="text-gray-600">€</span>}
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start group-hover:transform group-hover:translate-x-1 transition-transform duration-200">
          <div className="p-1 bg-blue-50 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors duration-200">
            <Check className="h-5 w-5 text-blue-600" />
          </div>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
        isPopular
          ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md'
      }`}
    >
      Commencer
    </a>
  </div>
);

export default PricingTier;
