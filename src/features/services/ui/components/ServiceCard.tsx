import React, { useState } from 'react';
import type { SocialMediaCard } from '../../interfaces/socialMedia';
import '../css/ServiceCard.css';   

interface ServiceCardProps {
  card: SocialMediaCard;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-container">
        <img 
          src={card.imagePath} 
          alt={card.title} 
          className={`card-image ${isHovered ? 'image-hovered' : ''}`}
        />
        <div className={`image-overlay ${isHovered ? 'overlay-visible' : ''}`}>
          <h3 className="card-title">{card.title}</h3>
        </div>
      </div>
      
      <div className={`card-description ${isHovered ? 'description-visible' : ''}`}>
        <p className="description-text">{card.description}</p>
        <div className="learn-more">
          <span>Learn more</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
