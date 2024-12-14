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
  <div className={`bg-white rounded-lg shadow-lg p-8 ${isPopular ? 'ring-2 ring-blue-600' : ''}`}>
    {isPopular && (
      <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 mb-4">
        Plus populaire
      </span>
    )}
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="mb-6">
      <span className="text-4xl font-bold text-gray-900">{price}</span>
      {price !== 'Sur mesure' && <span className="text-gray-600">€</span>}
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`block w-full text-center py-3 px-6 rounded-md font-medium ${
        isPopular
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      } transition-colors duration-200`}
    >
      Commencer
    </a>
  </div>
);

export default PricingTier;