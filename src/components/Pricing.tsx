import React from 'react';
import PricingTier from './pricing/PricingTier';
import { pricingTiers } from './pricing/pricingData';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Tarifs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions adaptées à tous les budgets avec un excellent rapport qualité-prix
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {pricingTiers.map((tier) => (
            <div className="w-full">
              <PricingTier key={tier.title} {...tier} />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Tous nos prix sont en euros (€) TTC. Des options de paiement flexibles sont disponibles. (*) Payé annuelement.
           
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
