import type { SocialMediaCard } from "../interfaces/socialMedia";
import weddingImage from '../../../assets/wedding_service.png';
import coupleImage from '../../../assets/family_session_service.png';
import paprikaImage from '../../../assets/product_photo_service.png';
import eventsImage from '../../../assets/events.png'; 

export const serviceCardData: SocialMediaCard[] = [
  {
    title: 'Weddings',
    imagePath: weddingImage,
    description: 'Where every glance becomes an eternal memory'
  },
  {
    title: 'Family Sessions, Individual or Couple Studio Portraits',
    imagePath: coupleImage,
    description: 'The most valuable portrait is the one that tells your story'
  },
  {
    title: 'Product Photography',
    imagePath: paprikaImage,
    description: 'Let your brand speak without saying a word'
  },
  {
    title: 'Events',
    imagePath: eventsImage,
    description: 'To be determined'
  }
];
