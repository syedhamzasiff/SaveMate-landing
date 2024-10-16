import React from 'react';
import { Check } from 'lucide-react'; 
import CtaButton from './CtaButton';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

function PricingCard ({ title, price, features, buttonText }:PricingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full h-80 md:h-96 transition-transform duration-300 hover:shadow-xl overflow-hidden">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">{title}</h3>
      <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">{price}</p>
      <ul className="mb-8 md:mb-10 space-y-3 md:space-y-4 mx-4 md:mx-6 overflow-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 text-sm md:text-base">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 mr-2" /> 
            {feature}
          </li>
        ))}
      </ul>
      <CtaButton 
        text={buttonText} 
        href='#download'        
      />
    </div>
  );
};

export default PricingCard;
