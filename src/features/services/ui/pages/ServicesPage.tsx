import React from 'react';
import ServicesGrid from '../components/ServicesGrid';
import { socialMediaCards } from '../../constants/socialMedia';
import '../css/ServicesPage.css';

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1 className="services-title">SERVICES</h1>
      </div>
      
      <div className="services-content">
        <ServicesGrid cards={socialMediaCards} />
      </div>
    </div>
  );
};

export default ServicesPage;
