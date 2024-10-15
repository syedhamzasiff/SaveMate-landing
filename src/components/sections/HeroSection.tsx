import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-between bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left side: Tagline and CTA */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Your money, your goal, our mission
          </h1>
          <p className="text-gray-600 text-lg">
            Take control of your finances and achieve your goals with SaveMate.
          </p>
          <a
            href="#cta"
            className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-green-600 transition-colors duration-300"
          >
            Start Saving with Us
          </a>
        </div>

        {/* Right side: Placeholder for animation/illustration */}
        <div className="mt-8 md:mt-0 md:w-1/2">
        <Image
          src='/images/hero-section-image.png'
          alt='Hero Section Image'
          width={0}
          height={0}
          priority={true}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
