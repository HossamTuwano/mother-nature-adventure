import {} from // TrekkingItem,
// MountKiliItem,
// DestinationItem
"./types";

export const TREKKING_DATA = [
  {
    category: "Adventure Peaks",
    links: [
      {
        label: "Machame Route",
        path: "/src/assets/img/materuni.jpg",
        description: "The most popular route",
        image: "/src/assets/img/machame.jpg",
      },
      {
        label: "Lemosho Route",
        path: "/routes/lemosho",
        description: "A more scenic approach",
        image: "/src/assets/img/lemosho.jpg",
      },
      {
        label: "Marangu Route",
        path: "/routes/marangu",
        description: "The classic comfort route",
        image: "/src/assets/img/marangu.png",
      },
      {
        label: "Rongai Route",
        path: "/routes/rongai",
        description: "The quietest path",
        image: "/src/assets/img/rongai.png",
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
        image: "/src/assets/img/beginner.png",
      },
      {
        label: "Intermediate",
        path: "/trekking/intermediate",
        description: "Challenging heights",
        image: "/src/assets/img/intermmediate.png",
      },
      {
        label: "Pro Climber",
        path: "/trekking/pro",
        description: "Extreme endurance",
        image: "/src/assets/img/hard.png",
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
        image: "/src/assets/img/materuni.jpg",
      },
      {
        label: "Lemosho",
        path: "/kili/lemosho",
        description: "Gradual ascent",
        image: "/src/assets/img/lemosho.jpg",
      },
      {
        label: "Marangu",
        path: "/kili/marangu",
        description: "Hut accommodations",
        image: "/src/assets/img/marangu.png",
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
        image: "/src/assets/img/machame.jpg",
      },
      {
        label: "Training Guide",
        path: "/kili/training",
        description: "Get fit for the peak",
        image: "/src/assets/img/training-guide.jpg",
      },
      {
        label: "Permit Info",
        path: "/kili/permits",
        description: "Legal requirements",
        image: "/src/assets/img/info.jpg",
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
        image: "/src/assets/img/arusha.jpg",
      },
      {
        label: "Moshi",
        path: "/dest/moshi",
        description: "The Kili basecamp",
        image: "/src/assets/img/moshi.jpg",
      },
      {
        label: "Ngorongoro",
        path: "/dest/ngorongoro",
        description: "The lost paradise",
        image: "/src/assets/img/ngorongoro.jpg",
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
        image: "/src/assets/img/dar.jpg",
      },
      {
        label: "Zanzibar",
        path: "/dest/zanzibar",
        description: "Spice island",
        image: "/src/assets/img/znz.jpg",
      },
      {
        label: "Selous Game Reserve/Nyerere Nation Park",
        path: "/dest/selous",
        description: "Wild frontiers",
        image: "/src/assets/img/selous.jpg",
      },
    ],
  },
];
