import React from 'react';
import '../../css/AboutUs.css';

interface AboutUsProps {
  title?: string;
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ 
  title = "ABOUT US",
  buttonText = "Contact Me",
  imageUrl,
  imageAlt = "Black and white cat portrait"
}) => {
  return (
    <section className="about-us">
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
              <span>Cat Portrait</span>
            </div>
          )}
        </div>

        {/* Columna Derecha - Contenido */}
        <div className="about-content">
          <h2 className="about-title font-heading">{title}</h2>
          <div className="about-description">
            <p className="about-text font-body">
              Pharus Creative was born with a clear vision: to be a lighthouse for ideas, stories, and moments that deserve to be told with art.
            </p>
            <p className="about-text font-body">
              We are a creative studio based in Montreal, specializing in photography, video production, content creation, and digital marketing. From intimate weddings to brand campaigns, we offer a complete experience where every visual detail is crafted with intention and soul.
            </p>
            <p className="about-text font-body">
              Our focus is to guide, support, and help you see your story from a new perspective.
            </p>
            <p className="about-text font-body">
              It's not just about capturing images — it's about illuminating emotion, building identity, and leaving a mark.
            </p>
            <p className="about-text font-body">
              The inspiration behind this project comes from a personal journey: a first camera, the encouragement of friends, the support of family, and a passion that grew into something real. Today, Pharus Creative is more than just one person — it's a shared light, a team that believes in the beauty of authenticity and the power of thoughtful visuals.
            </p>
            <p className="about-text font-body">
              We are based in Montreal, but we connect with people and ideas anywhere.
            </p>
            <p className="about-text font-body">
              Because here at Pharus Creative, love stories, brands, and moments are illuminated with art.
            </p>
          </div>
          <button className="about-button font-body">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
