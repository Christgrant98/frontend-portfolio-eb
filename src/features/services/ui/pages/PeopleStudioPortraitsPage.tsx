import React from 'react';
import { TitlePageCard } from '../../../../core/common/ui/components';
import '../css/PeopleStudioPortraitsPage.css';
import PackagesSection from '../components/PackagesSection';
import ContactSection from '../components/ContactSection';
import { peopleStudioPortraitsPackages } from '../../constants/peopleStudioPortraitsPackages';
import familySessionBanner from '../../../../assets/family_session_banner_page.png';

const PeopleStudioPortraitsPage: React.FC = () => {
  return (
    <div className="people-studio-portraits-page">
      <div className="people-studio-portraits-banner">
        <TitlePageCard 
          assetPath={familySessionBanner}
          title="FAMILY SESSIONS, INDIVIDUAL OR COUPLE STUDIO PORTRAITS"
          alt="Family session banner with studio portraits"
        />
      </div>
      
      <div className="people-studio-portraits-content">
        <PackagesSection packages={peopleStudioPortraitsPackages} />
      </div>
      <ContactSection />
    </div>
  );
};

export default PeopleStudioPortraitsPage;
