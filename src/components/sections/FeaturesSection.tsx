'use client';

import FeatureCard from "../ui/FeatureCard";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  image: string;
}

function FeaturesSection() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [currentImage, setCurrentImage] = useState<string>(''); 

  useEffect(() => {
    const fetchFeatures = async () => {
      const response = await fetch('/data/features.json');
      const data = await response.json();
      setFeatures(data);
      if (data.length > 0) {
        setCurrentImage(data[0].image);
      }
    };
    fetchFeatures();
  }, []);

  const handleHover = (image: string) => {
    setCurrentImage(image);
  };

  const handleClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-200 to-white py-4 md:py-10 lg:py-20" id="features">
      <div className="text-center lg:mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          Why Choose SaveMate?
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-10">
        <div className="hidden md:flex flex-col flex-1 space-y-6 md:pr-10">
          {features.slice(0, 4).map((feature, index) => (
            <div 
              key={feature.title}
              onMouseEnter={() => handleHover(feature.image)}
              className="hover:cursor-pointer"
            >
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                animationDelay={index * 150}
                className="hover:bg-green-100 transition-colors duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <Image 
            src={currentImage || '/calender-image.png'} 
            alt="Mobile App Layout" 
            width={400} 
            height={800}
            className="mt-8 md:mt-0" 
          />
        </div>

        <div className="hidden md:flex flex-col flex-1 space-y-6 md:pl-10">
          {features.slice(4).map((feature, index) => (
            <div 
              key={feature.title}
              onMouseEnter={() => handleHover(feature.image)} 
              className="hover:cursor-pointer"
            >
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                animationDelay={index * 150}
                className="hover:bg-green-100 transition-colors duration-300"
              />
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col space-y-6 w-full">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              onClick={() => handleClick(feature.image)}
              className="hover:cursor-pointer"
            >
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                animationDelay={index * 150}
                className="hover:bg-green-100 transition-colors duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
