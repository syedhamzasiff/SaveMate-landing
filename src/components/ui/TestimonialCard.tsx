'use client'; 
import React from 'react';

type TestimonialCardProps = {
  text: string;
  author: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-600">{`"${text}"`}</p>
      <p className="mt-4 font-semibold text-gray-800">- {author}</p>
    </div>
  );
};

export default TestimonialCard;
