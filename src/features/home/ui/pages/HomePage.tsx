import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import NextSection from '../components/NextSection';
import LetsContact from '../components/LetsContact';
import PortfolioSection from '../components/PortfolioSection';
import { useApp } from '../../../../core/contexts/AppContext';
import homeBanner from '../../../../assets/home_banner.png';
import weddingImg from '../../../../assets/wedding_img.png';
import contactBg from '../../../../assets/contact_me_bg.png'; 



const HomePage: React.FC = () => {
  const { setIsHero } = useApp();

  useEffect(() => {
    // Establecer isHero como true en la página de inicio
    setIsHero(true);
    
    // Cleanup: establecer isHero como false al salir de la página
    return () => {
      setIsHero(false);
    };
  }, [setIsHero]);

  return (
    <main>
      <Hero 
        title="PHARUS PHOTOGRAPHY"
        subtitle="Histoires d'amour illuminées par l'art"
        imageUrl={homeBanner}
        imageAlt="Pikachu surfing - Test image"
      />
      
      <NextSection 
        title="MEANINGFUL MEMORIES THROUGH AUTHENTIC AND PROFESSIONAL IMAGES"
        description="I capture unique moments from the love of weddings to the essence of a product, the warmth of a family, or the strength of an individual portrait. My photography adapts to every story, brand, or emotion you want to share."
        buttonText="Contact Me"
        imageUrl={weddingImg}
        imageAlt="Wedding couple embrace"
      />
      
      <PortfolioSection />
      
      <LetsContact 
        title="Let's Connect"
        description="Let's talk and bring your vision to life — every great story begins with a conversation."
        buttonText="Contact Me"
        imageUrl={contactBg}
        imageAlt="Wedding ceremony in church"
      />
    </main>
  );
};

export default HomePage;
