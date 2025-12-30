import React from 'react';
import '../css/PromoCard.css';
import type { PromoCardData } from '../interfaces/promoCard';
import { Button } from '../../../../core/common/ui/components';
import { useIsDesktop } from '../../../../core/common/hooks/useMediaQuery';

interface PromoCardProps {
  data: PromoCardData;
  isEven: boolean;
}

const PromoCard: React.FC<PromoCardProps> = ({ data, isEven }) => {
  const isDesktop = useIsDesktop();


  if (!isDesktop) {
    return (
      <div className="promo-card-mobile">
        <div className="promo-mobile-header">
          <h2 className="promo-mobile-title">{data.title}</h2>
          <div className="promo-mobile-price">
            {data.price.map((priceItem, index) => (
              <p key={index} className="promo-mobile-price-item">{priceItem}</p>
            ))}
          </div>
        </div>
        <p className="promo-mobile-description">{data.description}</p>
        <ul className="promo-mobile-items">
          {data.descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="promo-mobile-footer">
          <Button 
            text="Book Now"
            onClick={() => {}}
            variant="primary"
            className="promo-mobile-button"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`promo-card ${isEven ? 'promo-card-even' : 'promo-card-odd'}`}>
      <div className="promo-inner-container">
        <div className="promo-header">
          <h2 className="promo-title">{data.title}</h2>
          <div className="promo-price">
            {data.price.map((priceItem, index) => (
              <p key={index} className="promo-price-item">{priceItem}</p>
            ))}
          </div>
        </div>
        <p className="promo-description">{data.description}</p>
        <ul className="promo-items">
          {data.descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Button 
            text="Book Now"
            onClick={() => {}}
            variant="primary"
            className="section-button"
          />
      </div>
      <div className="promo-image-container">
        <img 
          src={data.imagePath} 
          alt={data.title} 
          className="promo-image"
        />
      </div>
    </div>
  );
};

export default PromoCard;
