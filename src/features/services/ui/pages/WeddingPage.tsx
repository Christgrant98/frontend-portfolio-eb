import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import '../css/WeddingPage.css';

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
        <div className="content-section">
          <h2>Capturing Your Special Day</h2>
          <p>
            Every wedding is unique, and we believe your photography should reflect 
            the beauty and emotion of your special day. From the intimate moments 
            to the grand celebrations, we capture it all with artistic vision and 
            technical excellence.
          </p>
        </div>
        
        <div className="services-grid">
          <div className="service-item">
            <h3>Engagement Sessions</h3>
            <p>Beautiful pre-wedding photos that tell your love story</p>
          </div>
          
          <div className="service-item">
            <h3>Wedding Day Coverage</h3>
            <p>Complete coverage from getting ready to the last dance</p>
          </div>
          
          <div className="service-item">
            <h3>Reception Photography</h3>
            <p>Capturing all the joy and celebration of your reception</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPage;
