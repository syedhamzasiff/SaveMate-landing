'use client'; 
import React from 'react';
import StatItem from '../ui/StatItem';
import CtaButton from '../ui/CtaButton';

function CredibilitySection() {
  return (
    <section className="py-16 flex items-center justify-center bg-gradient-to-b from-white to-gray-200">
  <div className="max-w-5xl mx-auto text-center space-y-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">Join Over <span className="text-green-600 font-bold">10 Million</span> Satisfied Users </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
      <StatItem number="5 Million" text="Successful Goals Achieved" />
      <StatItem number="500,000" text="Daily Active Users" />
      <StatItem number="1 Million" text="App Downloads and Counting" />
    </div>
    <CtaButton text="Join the Community" href="#download" />
  </div>
</section>
  );
  
};


export default CredibilitySection;
