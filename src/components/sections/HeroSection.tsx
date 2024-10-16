import React from 'react';
import Image from 'next/image';
import CtaButton from '../ui/CtaButton';

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-between bg-gradient-to-r from-green-200 to-green-50 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 space-y-6 text-center md:text-left">
      <h1 className="text-5xl font-bold text-gray-800 leading-tight">Empower Your Financial Journey</h1>
      <p className="text-gray-700 text-lg md:max-w-lg">With SaveMate, take charge of your finances and reach your goals effortlessly.</p>
      <div className="flex justify-center md:justify-start">
        <CtaButton text="Join the Movement" href="#cta" />
      </div>
    </div>
    <div className="mt-8 md:mt-0 md:w-1/2">
      <Image src='/images/hero-section-image.png' alt='Hero Section Image' width={0} height={0} priority={true} sizes="80vw" style={{ width: '100%', height: 'auto' }} />
    </div>
  </div>
</section>
  );
}

export default HeroSection;
