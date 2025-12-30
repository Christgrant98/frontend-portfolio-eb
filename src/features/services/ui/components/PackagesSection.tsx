import React from 'react';
import PromoCard from './PromoCard';
import type { PromoCardData } from '../interfaces/promoCard';
import '../css/PackagesSection.css';

interface PackagesSectionProps {
  packages: PromoCardData[];
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ packages }) => {
  return (
    <div className="packages-section">
      {packages.map((packageData, index) => (
        <PromoCard
          key={index}
          data={packageData}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default PackagesSection;

