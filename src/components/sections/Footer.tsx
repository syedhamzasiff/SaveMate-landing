import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg">Take control of your finances with SaveMate</p>
        <a
          href="#cta"
          className="mt-4 inline-block bg-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-green-600 transition-colors duration-300"
        >
          Start Now
        </a>
        <div className="mt-8 text-sm">
          <p>&copy; 2024 SaveMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
