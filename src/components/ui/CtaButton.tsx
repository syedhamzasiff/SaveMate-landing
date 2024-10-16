import React from 'react';

interface CTAProps {
  text: string;
  href: string;
}

function CtaButton({ text, href }: CTAProps) {
  return (
    <a
      href={href}
      className="inline-block bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-900 transition-all duration-300 hover:scale-105"
    >
      {text}
    </a>
  );
}

export default CtaButton;