import React from 'react';
import { Check } from 'lucide-react'; // Import the Check icon from lucide-react

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8  md:w-1/3 md:px-3 transition-transform duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <p className="text-4xl font-bold text-gray-900 mb-6">{price}</p>
      <ul className="mb-10 space-y-4 mx-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Check className="w-5 h-5 text-green-600 mr-2" /> 
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default PricingCard;