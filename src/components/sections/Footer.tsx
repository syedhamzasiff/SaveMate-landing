import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg mb-2">Your journey to financial empowerment starts with us.</p>
        <div className="mt-8 text-sm">
          <p>&copy; 2024 SaveMate. All rights reserved.</p>
        </div>
        <div className="mt-4 text-sm">
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
  
}

export default Footer;
