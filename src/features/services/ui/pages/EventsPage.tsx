import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import ContactSection from '../components/ContactSection';
import eventsBanner from '../../../../assets/events_banner_page.png';
import '../css/EventsPage.css';

const EventsPage: React.FC = () => {
  return (
    <div className="events-page">
      <div className="events-banner">
        <TitlePageCard 
          assetPath={eventsBanner}
          title="EVENTS"
          alt="Events banner"
        />
      </div>
      
      <div className="events-content">
        <div className="events-description">
          <h2 className="events-subtitle font-heading">
            Every event has its own energy, rhythm, and story.
            <br />
            I document real moments as they happen — from intimate gatherings to large-scale celebrations.
          </h2>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default EventsPage;

