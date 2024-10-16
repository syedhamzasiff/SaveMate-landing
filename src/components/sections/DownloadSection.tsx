import React from 'react';
import Image from 'next/image';

function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-200 to-green-50 flex items-center justify-center" id='download'>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full px-8 space-y-10 lg:space-y-0 lg:space-x-10">
        
        <div className="flex-shrink-0">
          <Image
            src='/images/application-layout.png'
            alt='App Image'
            width={400}
            height={400}
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get Started with SaveMate Today
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Download our app and take the first step towards financial freedom.
          </p>
  
          <div className="flex space-x-4 mt-8 justify-center lg:ml-20">
            <a href="#playstore" className="flex items-center">
              <Image 
                src='/images/playstore.png'
                width={240} 
                height={60}
                alt='PlayStore Link'
                className="hover:scale-105 transition-transform duration-200 w-36 lg:w-56" 
              />
            </a>
            <a href="#appstore" className="flex items-center">
              <Image 
                src='/images/appstore.png'
                width={200}
                height={60}
                alt='AppStore Link'
                className="hover:scale-105 transition-transform duration-200 w-32 lg:w-52" 
              />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default DownloadSection;
