'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          SaveMate
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 text-gray-800">
          <Link href="#features" className="hover:text-green-500 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-green-500 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-green-500 transition-colors">
            Testimonials
          </Link>
        </div>

        {/* Call to Action Button */}
        <Link 
          href="#cta"
          className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition-colors"
        >
          Start Saving with Us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar