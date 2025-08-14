import React from 'react';
import '../css/LetsContact.css';

interface LetsContactProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const LetsContact: React.FC<LetsContactProps> = ({ 
  title = "Let's Connect",
  description = "Let's talk and bring your vision to life — every great story begins with a conversation.",
  buttonText = "Contact Me",
  imageUrl,
  imageAlt = "Contact background"
}) => {
  return (
    <section className="lets-contact">
      {/* Imagen de fondo */}
      {imageUrl && (
        <div className="contact-background">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="contact-image"
          />
          <div className="contact-overlay"></div>
        </div>
      )}
      
      {/* Contenido centrado */}
      <div className="contact-content">
        <div className="contact-text-container">
          <h2 className="contact-title font-heading">{title}</h2>
          <p className="contact-description font-body">{description}</p>
          <button className="contact-button font-body">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default LetsContact;
