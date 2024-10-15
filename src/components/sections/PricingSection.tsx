import React from 'react'
import PricingCard from '../ui/PricingCard'

function PricingSection() {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
          {/* Free Tier */}
          <PricingCard
            title="Free"
            price="$0/mo"
            features={['Basic Budget Tracking', 'Goal Setting', 'Limited Insights']}
            buttonText="Get Started"
          />
          
          {/* Solo Tier */}
          <PricingCard
            title="Solo"
            price="$9.99/mo"
            features={['Advanced Budgeting Tools', 'Full Insights & Reports', 'Priority Support']}
            buttonText="Go Solo"
          />
          
          {/* Family Tier */}
          <PricingCard
            title="Family"
            price="$19.99/mo"
            features={['All Solo Features', 'Family Sharing', 'Collaborative Budgeting']}
            buttonText="Get Family Plan"
          />
        </div>
      </div>
    </section>
  )
}

export default PricingSection
