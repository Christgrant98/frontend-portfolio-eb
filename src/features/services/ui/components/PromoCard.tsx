import React from 'react';
import '../css/PromoCard.css';
import type { PromoCardData } from '../interfaces/promoCard';

interface PromoCardProps {
  data: PromoCardData;
  isEven: boolean;
}

const PromoCard: React.FC<PromoCardProps> = ({ data, isEven }) => {
  return (
    <div className={`promo-card ${isEven ? 'promo-card-even' : 'promo-card-odd'}`}>
      <div className="promo-inner-container">
        <h2 className="promo-title">{data.title}</h2>
        <p className="promo-description">{data.description}</p>
        <ul className="promo-items">
          {data.descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="promo-price">{data.price}</p>
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
