import type { PromoCardData } from '../ui/interfaces/promoCard';

export const peopleStudioPortraitsPackages: PromoCardData[] = [
  {
    title: "Essence Portrait",
    description: "Capture the essence of your loved ones in a warm and professional setting. Ideal for: family portraits, couples, or individual sessions.",
    descriptionItems: [
      "10 professionally edited photos",
      "High-resolution digital gallery delivery",
      "1 complimentary Polaroid print as a keepsake",
      "Session for 1 to 6 people",
      "*Studio located in Granby, Quebec",
      "*Additional people can be included for an extra fee"
    ],
    price: ["$250 CAD"],
    imagePath: "/src/assets/family_session_banner.png"
  },
  {
    title: "Timeless Portrait",
    description: "Perfect for creating a fuller visual story. Ideal for: family, couples, or solo portraits.",
    descriptionItems: [
      "20 professionally edited photos",
      "Delivery via private high-resolution online gallery",
      "1 complimentary Polaroid print",
      "Studio or outdoor location",
      "Up to 6 people included"
    ],
    price: ["$400 CAD - Studio", "$450 CAD - On-Location"],
    imagePath: "/src/assets/couple.png"
  },
  {
    title: "Legacy Portrait",
    description: "Ideal for preserving a complete and artistic memory of your special moment. Perfect for: families, couples, or individual portraits.",
    descriptionItems: [
      "30 professionally edited photos",
      "Online high-resolution gallery",
      "1 complimentary Polaroid print",
      "Studio or outdoor location in Montreal or nearby areas",
      "Up to 6 people included, with option to add more for an additional fee"
    ],
    price: ["$550 CAD - Studio", "$600 CAD - On-Location"],
    imagePath: "/src/assets/gai_cat.png"
  }
];
