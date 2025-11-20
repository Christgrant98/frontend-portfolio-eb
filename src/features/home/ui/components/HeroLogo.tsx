import React from 'react';
import '../css/HeroLogo.css';

interface HeroLogoProps {
  logoUrl: string;
  logoAlt?: string;
}

const HeroLogo: React.FC<HeroLogoProps> = ({ 
  logoUrl,
  logoAlt = "Pharus Creative Logo"
}) => {
  return (
    <div className="hero-logo">
      <img 
        src={logoUrl} 
        alt={logoAlt} 
        className="hero-logo-image"
      />
    </div>
  );
};

export default HeroLogo;

