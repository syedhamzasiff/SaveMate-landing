import React from 'react';
import PricingCard from '../ui/PricingCard';

function PricingSection() {
  return (
    <section className="px-10 py-6 md:py-10 lg:py-20 bg-green-50 min-h-screen" id="pricing">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Choose Your Plan</h1>
        <h2 className="text-xl text-gray-600 mb-12">Flexible plans tailored to your financial journey.</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 mx-8">
          
          <PricingCard
            title="Free"
            price="$0/mo"
            features={['Basic Budget Tracking', 'Goal Setting', 'Limited Insights']}
            buttonText="Get Started"
          />
          
          <PricingCard
            title="Solo"
            price="$9.99/mo"
            features={['Pro Budgeting Tools', 'Full Insights & Reports', 'Priority Support']}
            buttonText="Go Solo"
          />
          
          <PricingCard
            title="Family"
            price="$19.99/mo"
            features={['All Solo Features', 'Family Sharing', 'Combine Budgeting']}
            buttonText="Get Family Plan"
          />
        </div>
      </div>
    </section>
  );
}

export default PricingSection;