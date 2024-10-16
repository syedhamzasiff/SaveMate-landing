import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  animationDelay?: number;
  className?: string;
}

function FeatureCard({ title, description, animationDelay, className }: FeatureCardProps) {
  return (
    <div 
      className={`p-4 sm:p-6 bg-white rounded-lg shadow-md ${className}`} 
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <h1 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">{title}</h1>
      <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
