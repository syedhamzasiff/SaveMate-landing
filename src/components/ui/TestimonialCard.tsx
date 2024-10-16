import React from 'react';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
}

function TestimonialCard ({ text, author, rating }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-white shadow-lg ring-1 ring-gray-300 transition-transform transform hover:scale-105 p-6 w-72 h-72">
      <blockquote className="text-lg leading-7 tracking-tight text-gray-700 italic flex-grow">
        <p>&quot;{text}&quot;</p>
      </blockquote>
      <div className="mt-4">
        <p className="font-bold text-gray-800 text-md">{author}</p>
        <div className="text-yellow-500 mt-1">
          {'★'.repeat(rating)}{' '}
          {'☆'.repeat(5 - rating)} 
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
