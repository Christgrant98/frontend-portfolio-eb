import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import EventContact from '../components/EventContact';
import EventsDescription from '../components/EventsDescription';
import EventsCoverageBox from '../components/EventsCoverageBox';
import HowItWorks from '../components/HowItWorks';
import { eventsPageData } from '../../constants/eventsData';
import { SOCIAL_LINKS } from '../../../../core/constants/contactInfo';
import '../css/EventsPage.css';

const EventsPage: React.FC = () => {
  const handleContactClick = () => {
    window.open(SOCIAL_LINKS.whatsapp, '_blank');
  };

  return (
    <div className="events-page">
      <div className="events-banner">
        <TitlePageCard 
          assetPath={eventsPageData.banner.image}
          title={eventsPageData.banner.title}
          alt={eventsPageData.banner.alt}
        />
      </div>
      
      <div className="events-content">
        <EventsDescription lines={eventsPageData.description.lines} />

        <EventsCoverageBox 
          title={eventsPageData.coverage.title}
          items={eventsPageData.coverage.items}
        />

        <HowItWorks 
          title={eventsPageData.howItWorks.title}
          steps={eventsPageData.howItWorks.steps}
        />
      </div>

      <EventContact 
        title={eventsPageData.contact.title}
        buttonText={eventsPageData.contact.buttonText}
        onButtonClick={handleContactClick}
        imageUrl={eventsPageData.contact.image}
        imageAlt={eventsPageData.contact.imageAlt}
      />
    </div>
  );
};

export default EventsPage;

