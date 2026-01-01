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
        <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2>Coming Soon</h2>
          <p>Events packages will be available soon.</p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default EventsPage;

