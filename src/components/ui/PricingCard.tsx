import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/3">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-4xl font-bold text-gray-900 mb-6">{price}</p>
      <ul className="mb-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default PricingCard;