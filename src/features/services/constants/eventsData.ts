import eventsBanner from '../../../assets/events_banner_page.png';
import eventsBannerContact from '../../../assets/events_banner_contact.png';

// ========== INTERFACES ==========

export interface WorkStep {
  number: number;
  title: string;
  description: string;
}

export interface EventsPageData {
  banner: {
    title: string;
    image: string;
    alt: string;
  };
  description: {
    lines: string[];
  };
  coverage: {
    title: string;
    items: string[];
  };
  howItWorks: {
    title: string;
    steps: WorkStep[];
  };
  contact: {
    title: string;
    buttonText: string;
    image: string;
    imageAlt: string;
  };
}

// ========== DATA ==========

export const eventsPageData: EventsPageData = {
  banner: {
    title: 'EVENTS',
    image: eventsBanner,
    alt: 'Events banner'
  },
  description: {
    lines: [
      'Every event has its own energy, rhythm, and story.',
      'I document real moments as they happen — from intimate gatherings to large-scale celebrations.'
    ]
  },
  coverage: {
    title: 'Events I cover include:',
    items: [
      'Corporate events & brand activations',
      'Concerts & nightlife',
      'Private parties & birthdays',
      'Weddings & engagements',
      'Cultural & community events',
      'Launch events & pop-ups'
    ]
  },
  howItWorks: {
    title: 'How event coverage works',
    steps: [
      {
        number: 1,
        title: 'We talk first',
        description: 'We discuss the type of event, duration, location, and expectations.'
      },
      {
        number: 2,
        title: 'Tailored coverage',
        description: 'Each event is quoted based on its real needs — hours, deliverables, complexity, and usage.'
      },
      {
        number: 3,
        title: 'Professional execution',
        description: 'Discreet presence, adaptability to changing environments, and focus on real moments.'
      },
      {
        number: 4,
        title: 'Delivery',
        description: 'Digital high-resolution gallery, delivered within an agreed timeframe.'
      },
      {
        number: 5,
        title: 'What the coverage includes',
        description: 'Event coverage includes professional photography, high-resolution edited images, and an online gallery for easy access and download. Image selection is adapted to the client\'s intended use, whether for social media, press, internal use, or personal memories.'
      }
    ]
  },
  contact: {
    title: 'Let\'s Talk About Your Event',
    buttonText: 'Contact Me',
    image: eventsBannerContact,
    imageAlt: 'Event photography background'
  }
};

