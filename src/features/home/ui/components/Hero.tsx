import React from 'react';
import '../css/Hero.css';
import pharusLogo from '../../../../assets/pharus_creative_logo.png'; 
import HeroLogo from './HeroLogo';

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  showLogo?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title = "PHARUS CREATIVE",
  subtitle = "Histoires d'amour illuminées par l'art",
  imageUrl,
  imageAlt = "Hero background",
  showLogo = true
}) => {
  return (
    <section className="hero">
      {/* Imagen de fondo */}
      {imageUrl && (
        <div className="hero-background">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
      )}
      
      {/* Contenido del hero */}
      <div className="hero-content">
        <div className="hero-text">
          {showLogo && <HeroLogo logoUrl={pharusLogo} />}
          <h1 className="hero-title font-heading">{title}</h1>
          <p className="hero-subtitle font-body font-light">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
