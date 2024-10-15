'use client'; 
import React from 'react';

type FeatureCardProps = {
  title: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default FeatureCard;
