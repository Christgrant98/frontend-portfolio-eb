import React from 'react';
import ServiceCard from './ServiceCard';
import type { SocialMediaCard } from '../../interfaces/socialMedia';
import '../css/ServicesGrid.css';

interface ServicesGridProps {
  cards: SocialMediaCard[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ cards }) => {
  return (
    <div className="services-grid">
      {cards.map((card, index) => (
        <ServiceCard key={index} card={card} />
      ))}
    </div>
  );
};

export default ServicesGrid;
