import React from 'react';
import '../css/NextSection.css';
import { Button } from '../../../../core/common/ui/components';

interface NextSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
}

const NextSection: React.FC<NextSectionProps> = ({ 
  title = "MEANINGFUL MEMORIES THROUGH AUTHENTIC AND PROFESSIONAL IMAGES",
  description = "I capture unique moments from the love of weddings to the essence of a product, the warmth of a family, or the strength of an individual portrait. My photography adapts to every story, brand, or emotion you want to share.",
  buttonText = "Contact Me",
  onButtonClick,
  imageUrl,
  imageAlt = "Photography showcase"
}) => {
  return (
    <section className="next-section">
      <div className="next-section-container">
        {/* Columna Izquierda - Imagen */}
        <div className="next-section-image">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="section-image"
            />
          ) : (
            <div className="image-placeholder">
              <span>Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Columna Derecha - Contenido */}
        <div className="next-section-content">
          <h2 className="section-title font-heading">{title}</h2>
          <p className="section-description font-body">{description}</p>
          <Button 
            text="Contact Me"
            onClick={onButtonClick}
            variant="primary"
            className="section-button"
          />
        </div>
      </div>
    </section>
  );
};

export default NextSection;
