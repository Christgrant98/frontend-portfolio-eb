import type { SocialMediaCard } from "../interfaces/socialMedia";
import weddingImage from '../../../assets/wedding_service.png';
import coupleImage from '../../../assets/family_session_service.png';
import paprikaImage from '../../../assets/product_photo_service.png';
import cupsImage from '../../../assets/cups.png';

export const serviceCardData: SocialMediaCard[] = [
  {
    imagePath: weddingImage,
    title: 'Weddings',
    description: 'Where every glance becomes an eternal memory'
  },
  {
    imagePath: coupleImage,
    title: 'Family Sessions, Individual or Couple Studio Portraits',
    description: 'The most valuable portrait is the one that tells your story'
  },
  {
    imagePath: paprikaImage,
    title: 'Product Photography',
    description: 'Let your brand speak without saying a word'
  },
  {
    imagePath: cupsImage,
    title: 'Social Media Management',
    description: 'Turning your brand into a story everyone wants to follow'
  }
];
