const CDN_URL = import.meta.env.VITE_CDN_URL;

export const packagesData = [
  {
    id: 1,
    title: "Budget Safari",
    description: "Experience the magic of the wild without breaking the bank. Essential tours for a thrilling adventure.",
    // price: "1,200",
    features: ["3 Days / 2 Nights", "Game Drives", "Standard Camping", "Guide Services"],
    image: `${CDN_URL}/src/assets/img/package-3.jpg`, // Placeholder paths
  },
  {
    id: 2,
    title: "Luxury Expedition",
    description: "Indulge in the ultimate African luxury. Premium lodges and exclusive sightings for the discerning traveler.",
    // price: "4,500",
    features: ["7 Days / 6 Nights", "Private Villa", "Gourmet Dining", "VIP Logistics"],
    image: `${CDN_URL}/src/assets/img/package-2.jpeg`,
  },
  {
    id: 3,
    title: "Mountain Trek",
    description: "Conquer the peaks of Kilimanjaro. A challenging journey rewarding you with the most breathtaking views.",
    // price: "2,800",
    features: ["5 Days / 4 Nights", "Professional Guides", "Mountain Gear", "Summit Certificate"],
    image: `${CDN_URL}/src/assets/img/package-1.jpg`,
  },
];
