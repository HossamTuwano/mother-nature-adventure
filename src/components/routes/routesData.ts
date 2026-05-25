export interface Route {
  id: string;
  name: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  description: string;
  image: string;
}

const CDN_URL = import.meta.env.VITE_CDN_URL;

export const routesData: Route[] = [
  {
    id: 'marangu',
    name: 'Marangu Route',
    duration: '5-6 Days',
    difficulty: 'Moderate',
    description: 'The "Coca-Cola" route, known for its comfort and unique huts.',
    image: `${CDN_URL}/src/assets/img/marangu.png`,
  },
  {
    id: 'machame',
    name: 'Machame Route',
    duration: '6-7 Days',
    difficulty: 'Hard',
    description: 'The "Whiskey Route", offering stunning scenery and higher success rates.',
    image: `${CDN_URL}/src/assets/img/machame.jpg`,
  },
  {
    id: 'lemosho',
    name: 'Lemosho Route',
    duration: '7-8 Days',
    difficulty: 'Hard',
    description: 'A scenic route that starts in the forest and provides a gradual ascent.',
    image: `${CDN_URL}/src/assets/img/lemosho.jpg`,
  },
  {
    id: 'rongai',
    name: 'Rongai Route',
    duration: '6-7 Days',
    difficulty: 'Moderate',
    description: 'The driest route, ideal for those wanting to avoid rain.',
    image: `${CDN_URL}/src/assets/img/rongai.png`,
  },
];
