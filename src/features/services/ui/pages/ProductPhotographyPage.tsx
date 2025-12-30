import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import '../css/ProductPhotographyPage.css';
import PackagesSection from '../components/PackagesSection';
import ContactSection from '../components/ContactSection';
import { productPhotographyPackages } from '../../constants/productPhotographyPackages';
import productPhotographyBanner from '../../../../assets/product_photo_banner_page.png';

const ProductPhotographyPage: React.FC = () => {
  return (
    <div className="product-photography-page">
      <div className="product-photography-banner">
        <TitlePageCard
          assetPath={productPhotographyBanner}
          title="PRODUCT PHOTOGRAPHY"
          alt="Product photography banner with pastries"
        />
      </div>

      <div className="product-photography-content">
        <PackagesSection packages={productPhotographyPackages} />
      </div>
      
      <ContactSection />
    </div>
  );
};

export default ProductPhotographyPage;
