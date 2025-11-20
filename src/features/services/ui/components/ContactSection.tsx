import React from 'react';
import '../css/ContactSection.css';
import { Button } from '../../../../core/common/ui/components';
import { SOCIAL_LINKS } from '../../../../core/constants/contactInfo';

const ContactSection: React.FC = () => {
  const handleContactClick = () => {
    window.open(SOCIAL_LINKS.whatsapp, '_blank');
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <p className="contact-text">
          *If you're looking to book a newborn session, feel free to message us directly so we can design a session tailored to your needs. We're happy to customize any package to fit your vision.*
        </p>
        <Button 
            text="Contact Me"
            onClick={handleContactClick}
            variant="tertiary"
            className="section-button"
          />
      </div>
    </div>
  );
};

export default ContactSection;
