import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import '../css/WeddingPage.css';
import PackagesSection from '../components/PackagesSection';
import ContactSection from '../components/ContactSection';
import { weddingPackages } from '../../constants/weddingPackages';
import weddingBanner from '../../../../assets/wedding_banner_page.png'; 

const WeddingPage: React.FC = () => {
  return (
    <div className="wedding-page">
      <div className="wedding-banner">
        <TitlePageCard 
          assetPath={weddingBanner}
          title="WEDDINGS"
          alt="Wedding banner with couple's hands holding flowers"
        />
      </div>
      
      <div className="wedding-content">
        <PackagesSection packages={weddingPackages} />
      </div>
      
      <ContactSection />
    </div>
  );
};

export default WeddingPage;
