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
        path: "/routes/machame",
        description: "The most popular route",
      },
      {
        label: "Lemosho Route",
        path: "/routes/lemosho",
        description: "A more scenic approach",
      },
      {
        label: "Marangu Route",
        path: "/routes/marangu",
        description: "The classic comfort route",
      },
      {
        label: "Rongai Route",
        path: "/routes/rongai",
        description: "The quietest path",
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
      },
      {
        label: "Intermediate",
        path: "/trekking/intermediate",
        description: "Challenging heights",
      },
      {
        label: "Pro Climber",
        path: "/trekking/pro",
        description: "Extreme endurance",
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
      },
      {
        label: "Lemosho",
        path: "/kili/lemosho",
        description: "Gradual ascent",
      },
      {
        label: "Marangu",
        path: "/kili/marangu",
        description: "Hut accommodations",
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
      },
      {
        label: "Training Guide",
        path: "/kili/training",
        description: "Get fit for the peak",
      },
      {
        label: "Permit Info",
        path: "/kili/permits",
        description: "Legal requirements",
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
      },
      { label: "Moshi", path: "/dest/moshi", description: "The Kili basecamp" },
      {
        label: "Ngorongoro",
        path: "/dest/ngorongoro",
        description: "The lost paradise",
      },
    ],
  },
  {
    category: "South Tanzania",
    links: [
      {
        label: "Dar es Salaam",
        path: "/dest/dar",
        description: "Coastal vibes",
      },
      {
        label: "Zanzibar",
        path: "/dest/zanzibar",
        description: "Spice island",
      },
      {
        label: "Selous Game Reserve",
        path: "/dest/selous",
        description: "Wild frontiers",
      },
    ],
  },
];
