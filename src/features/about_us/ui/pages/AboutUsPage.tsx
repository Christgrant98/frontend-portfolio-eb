import React from 'react';
import AboutUs from '../components/AboutUs';
import { SOCIAL_LINKS } from '../../../../core/constants/contactInfo';


const AboutUsPage: React.FC = () => {
  const handleContactClick = () => {
    window.open(SOCIAL_LINKS.whatsapp, '_blank');
  };

  return (
    <div className="about-page">
      <AboutUs 
        title="ABOUT US"
        description="Pharus Creative is a studio specializing in photography, video production, content creation, and digital marketing. We illuminate emotion, build identity, and leave a mark. Our inspiration comes from a personal journey, and we are based in Montreal."
        buttonText="Contact Me"
        onButtonClick={handleContactClick}
        imageUrl="src/assets/gai_cat.png"
        imageAlt="Gai cat - About us image"
      />
    </div>
  );
};

export default AboutUsPage;
