import React from 'react';
import TestimonialSlider from '../ui/TestimonialSlider';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-10 flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-400" id="testimonials">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Hear from Our Community</h1>
      <h2 className="text-2xl text-gray-800 mb-8">Real stories from real users who transformed their finances with SaveMate.</h2>
      <TestimonialSlider />
    </section>
  );
  
};

export default TestimonialSection;