import type { PromoCardData } from '../ui/interfaces/promoCard';

export const weddingPackages: PromoCardData[] = [
  {
    title: "Intimate Moments",
    description: "Ideal for small weddings or intimate celebrations:",
    descriptionItems: [
      "Coverage up to 3 hours (mainly reception)",
      "100 to 200 professionally edited photos",
      "Brief studio-style photo session of the couple during the reception",
      "2 Instax Polaroid prints delivered on the event day",
      "1-minute highlight trailer video",
      "Delivery via online gallery within 1 to 2 weeks"
    ],
    price: ["$300 CAD"],
    imagePath: "/src/assets/couple.png"
  },
  {
    title: "Timeless Story",
    description: "Perfect to capture all key moments of your wedding day:",
    descriptionItems: [
      "Coverage up to 6 hours (ceremony, reception, and couple session)",
      "200 to 300 professionally edited photos",
      "Studio-style photo session of the couple on the event day",
      "2 Instax Polaroid prints delivered on the event day",
      "2 to 3-minute highlight trailer video",
      "Delivery via online gallery within 1 to 2 weeks"
    ],
    price: ["$600 CAD"],
    imagePath: "/src/assets/wedding.png"
  },
  {
    title: "Eternal Love",
    description: "The full wedding experience, captured in detail:",
    descriptionItems: [
      "Full-day coverage (up to 10 hours)",
      "500 to 700 professionally edited photos",
      "Pre-wedding engagement-style session to announce the ceremony",
      "Engagement photos delivered within 1 week",
      "Coverage of bride and groom preparation, ceremony, and reception",
      "10 Instax Polaroid prints delivered on the event day",
      "2 highlight trailer videos:",
      "1-minute video from the engagement-style session",
      "2 to 3-minute video from the wedding day",
      "Delivery of wedding day photos within 1 to 2 weeks"
    ],
    price: ["$1,500 CAD"],
    imagePath: "/src/assets/wedding_banner.png"
  }
];
