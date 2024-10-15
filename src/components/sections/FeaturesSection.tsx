'use client'; 
import React from 'react';
import Image from 'next/image';
import FeatureCard from '../ui/FeatureCard'

const FeaturesSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 md:w-1/2">
          <FeatureCard title="Track Your Expenses" />
          <FeatureCard title="Set Budget Goals" />
          <FeatureCard title="Get Insights" />
          <FeatureCard title="Manage Multiple Accounts" />
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <Image 
            src="/images/app-layout.png" 
            alt="Mobile App Display"
            width={300} 
            height={600} 
            className="transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <FeatureCard title="Receive Notifications" />
          <FeatureCard title="Secure Your Data" />
          <FeatureCard title="Customizable Reports" />
          <FeatureCard title="Easy to Use Interface" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
