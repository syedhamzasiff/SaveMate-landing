'use client'; 
import React from 'react';

type StatItemProps = {
  number: string;
  text: string;
};

const CredibilitySection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-5xl mx-auto text-center space-y-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Join our community of{' '}
          <span className="text-green-600">10M+ budgeters</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <StatItem number="5M+" text="Successful Goals" />
          <StatItem number="500k+" text="Daily Users" />
          <StatItem number="1M+" text="Downloads" />
        </div>
        <div className="pt-8">
          <a 
            href="#" 
            className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition-transform duration-300 hover:scale-105"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<StatItemProps> = ({ number, text }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <p className="text-4xl sm:text-5xl font-extrabold text-green-600 mb-2">{number}</p>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
};

export default CredibilitySection;
