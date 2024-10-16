import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  animationDelay?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, animationDelay, className }) => {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-md ${className}`} style={{ animationDelay: `${animationDelay}ms` }}>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
