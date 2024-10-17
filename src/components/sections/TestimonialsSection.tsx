import React from 'react';
import TestimonialSlider from '../ui/TestimonialSlider';

function TestimonialSection() {
  return (
    <section className=" py-4 md:py-10 flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-green-50" id="testimonials">
      <h1 className="text-5xl  font-bold text-gray-800 mb-6 text-center mx-2 md:mx-0 lg:mt-10">
        Hear from Our Community
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-8 text-center mx-2 md:mx-0">
        Real stories from real users who transformed their finances with SaveMate.
      </h2>
      <TestimonialSlider />
    </section>
  );
};

export default TestimonialSection;
