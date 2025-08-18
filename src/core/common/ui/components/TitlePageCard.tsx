import React from 'react';
import '../css/TitlePageCard.css';

interface TitlePageCardProps {
  assetPath: string;
  title: string;
  alt?: string;
  className?: string;
}

const TitlePageCard: React.FC<TitlePageCardProps> = ({ 
  assetPath, 
  title, 
  alt = title,
  className = ''
}) => {
  return (
    <div className={`title-page-card ${className}`}>
      <div className="image-container">
        <img 
          src={assetPath} 
          alt={alt} 
          className="card-image"
        />
        <div className="image-overlay">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TitlePageCard;
