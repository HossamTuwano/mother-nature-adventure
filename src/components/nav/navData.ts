import {} from // TrekkingItem,
// MountKiliItem,
// DestinationItem
"./types";

const CDN_URL = import.meta.env.VITE_CDN_URL;

export const TREKKING_DATA = [
  {
    category: "Adventure Peaks",
    links: [
      {
        label: "Machame Route",
        path: "/src/assets/img/materuni.jpg",
        description: "The most popular route",
        image: `${CDN_URL}/src/assets/img/machame.jpg`,
      },
      {
        label: "Lemosho Route",
        path: "/routes/lemosho",
        description: "A more scenic approach",
        image: `${CDN_URL}/src/assets/img/lemosho.jpg`,
      },
      {
        label: "Marangu Route",
        path: "/routes/marangu",
        description: "The classic comfort route",
        image: `${CDN_URL}/src/assets/img/marangu.png`,
      },
      {
        label: "Rongai Route",
        path: "/routes/rongai",
        description: "The quietest path",
        image: `${CDN_URL}/src/assets/img/rongai.png`,
      },
    ],
  },
  {
    category: "Difficulty Levels",
    links: [
      {
        label: "Beginner Friendly",
        path: "/trekking/beginner",
        description: "Easy paced journeys",
        image: `${CDN_URL}/src/assets/img/beginner.png`,
      },
      {
        label: "Intermediate",
        path: "/trekking/intermediate",
        description: "Challenging heights",
        image: `${CDN_URL}/src/assets/img/intermmediate.png`,
      },
      {
        label: "Pro Climber",
        path: "/trekking/pro",
        description: "Extreme endurance",
        image: `${CDN_URL}/src/assets/img/hard.png`,
      },
    ],
  },
];

export const MOUNT_KILI_DATA = [
  {
    category: "Popular Routes",
    links: [
      {
        label: "Machame",
        path: "/kili/machame",
        description: "The scenic route",
        image: `${CDN_URL}/src/assets/img/materuni.jpg`,
      },
      {
        label: "Lemosho",
        path: "/kili/lemosho",
        description: "Gradual ascent",
        image: `${CDN_URL}/src/assets/img/lemosho.jpg`,
      },
      {
        label: "Marangu",
        path: "/kili/marangu",
        description: "Hut accommodations",
        image: `${CDN_URL}/src/assets/img/marangu.png`,
      },
    ],
  },
  {
    category: "Planning Tools",
    links: [
      {
        label: "Gear List",
        path: "/kili/gear",
        description: "Everything you need",
        image: `${CDN_URL}/src/assets/img/machame.jpg`,
      },
      {
        label: "Training Guide",
        path: "/kili/training",
        description: "Get fit for the peak",
        image: `${CDN_URL}/src/assets/img/training-guide.jpg`,
      },
      {
        label: "Permit Info",
        path: "/kili/permits",
        description: "Legal requirements",
        image: `${CDN_URL}/src/assets/img/info.jpg`,
      },
    ],
  },
];

export const DESTINATIONS_DATA = [
  {
    category: "North Tanzania",
    links: [
      {
        label: "Arusha",
        path: "/dest/arusha",
        description: "The gateway city",
        image: `${CDN_URL}/src/assets/img/arusha.jpg`,
      },
      {
        label: "Moshi",
        path: "/dest/moshi",
        description: "The Kili basecamp",
        image: `${CDN_URL}/src/assets/img/moshi.jpg`,
      },
      {
        label: "Ngorongoro",
        path: "/dest/ngorongoro",
        description: "The lost paradise",
        image: `${CDN_URL}/src/assets/img/ngorongoro.jpg`,
      },
    ],
  },
  {
    category: "East Tanzania",
    links: [
      {
        label: "Dar es Salaam",
        path: "/dest/dar",
        description: "Coastal vibes",
        image: `${CDN_URL}/src/assets/img/dar.jpg`,
      },
      {
        label: "Zanzibar",
        path: "/dest/zanzibar",
        description: "Spice island",
        image: `${CDN_URL}/src/assets/img/znz.jpg`,
      },
      {
        label: "Selous Game Reserve/Nyerere Nation Park",
        path: "/dest/selous",
        description: "Wild frontiers",
        image: `${CDN_URL}/src/assets/img/selous.jpg`,
      },
    ],
  },
];
