import React from 'react';
import PortfolioMasonry from '../components/PortfolioMasonry';
import { portfolioItems } from '../data/portfolio';

const PortfolioPage: React.FC = () => {
  const handleCtaClick = () => {
    console.log('CTA clicked - Navigate to contact or full portfolio');
    // You can add navigation logic here, e.g.:
    // navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <header className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
          Portfolio
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A curated collection of our finest work capturing love stories,
          authentic moments, and timeless memories.
        </p>
      </header>

      {/* Portfolio Gallery */}
      <PortfolioMasonry
        items={portfolioItems}
        ctaLabel="Get In Touch"
        onCtaClick={handleCtaClick}
      />
    </div>
  );
};

export default PortfolioPage;

