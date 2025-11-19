import React from 'react';
import PortfolioSection from '../../../home/ui/components/PortfolioSection';
import '../css/PortfolioPage.css';

const PortfolioPage: React.FC = () => {
  return (
    <main className="portfolio-page">
      <div className="portfolio-page-header">
        <h1 className="portfolio-page-title font-heading">PORTFOLIO</h1>
      </div>
      <PortfolioSection isPreview={false} />
    </main>
  );
};

export default PortfolioPage;

