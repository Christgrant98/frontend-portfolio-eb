import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import '../css/WeddingPage.css';
import PromoCard from '../components/PromoCard';
import { weddingPackages } from '../../constants/weddingPackages';

const WeddingPage: React.FC = () => {
  return (
    <div className="wedding-page">
      <div className="wedding-banner">
        <TitlePageCard 
          assetPath="/src/assets/wedding_banner.png"
          title="WEDDINGS"
          alt="Wedding banner with couple's hands holding flowers"
        />
      </div>
      
      <div className="wedding-content">
        {weddingPackages.map((packageData, index) => (
          <PromoCard 
            key={index} 
            data={packageData} 
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default WeddingPage;
