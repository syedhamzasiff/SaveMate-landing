import React from 'react'

function DownloadSection() {
  return (
    <section className="py-20 bg-gray-50" id="cta">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Download CTA */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">Download SaveMate Now</h2>
          <p className="text-gray-600">Start saving and achieving your financial goals today!</p>
          <div className="space-x-4">
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition-colors">
              Play Store
            </a>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition-colors">
              App Store
            </a>
          </div>
        </div>

        {/* Right side: Phone mockup */}
        <div className="mt-8 md:mt-0">
          <div className="bg-gray-200 h-64 w-32 mx-auto md:mx-0 rounded-lg">
            {/* Placeholder for phone mockup */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
