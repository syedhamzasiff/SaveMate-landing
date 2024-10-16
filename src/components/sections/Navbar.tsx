'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CtaButton from '../ui/CtaButton';

function Navbar() {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          SaveMate
        </Link>

        <div className="hidden md:flex space-x-4 text-gray-800"> 
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

        <CtaButton 
          text='Join Us'
          href='#download'
          />
      </div>
    </nav>
  );
}

export default Navbar;
