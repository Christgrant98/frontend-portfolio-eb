import React from 'react';
import '../css/AboutUs.css';
import { ABOUT_US_CONTENT } from '../../constants/aboutUsContent';

interface AboutUsProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ 
  title = ABOUT_US_CONTENT.title,
  description,
  buttonText = "Contact Me",
  onButtonClick,
  imageUrl,
  imageAlt = ABOUT_US_CONTENT.imageAlt
}) => {
  return (
    <section className="about-us">
      <div className="about-wrapper">
        <div className="title-background">
          <h2 className="about-title font-heading">{title}</h2>
        </div>
        
        <div className="about-container">
          {/* Columna Izquierda - Imagen */}
          <div className="about-image">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="cat-image"
              />
            ) : (
              <div className="image-placeholder">
                <span>{ABOUT_US_CONTENT.imagePlaceholder}</span>
              </div>
            )}
          </div>

          {/* Columna Derecha - Contenido */}
          <div className="about-content">
            <div className="text-container">
              {ABOUT_US_CONTENT.paragraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <p className="about-text font-body">
                    {paragraph}
                  </p>
                  {index === 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
