export interface Route {
  id: string;
  name: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  description: string;
  image: string;
}

export const routesData: Route[] = [
  {
    id: 'marangu',
    name: 'Marangu Route',
    duration: '5-6 Days',
    difficulty: 'Moderate',
    description: 'The "Coca-Cola" route, known for its comfort and unique huts.',
    image: 'https://via.placeholder.com/600x400?text=Marangu+Route',
  },
  {
    id: 'machame',
    name: 'Machame Route',
    duration: '6-7 Days',
    difficulty: 'Hard',
    description: 'The "Whiskey Route", offering stunning scenery and higher success rates.',
    image: 'https://via.placeholder.com/600x400?text=Machame+Route',
  },
  {
    id: 'lemosho',
    name: 'Lemosho Route',
    duration: '7-8 Days',
    difficulty: 'Hard',
    description: 'A scenic route that starts in the forest and provides a gradual ascent.',
    image: 'https://via.placeholder.com/600x400?text=Lemosho+Route',
  },
  {
    id: 'rongai',
    name: 'Rongai Route',
    duration: '6-7 Days',
    difficulty: 'Moderate',
    description: 'The driest route, ideal for those wanting to avoid rain.',
    image: 'https://via.placeholder.com/600x400?text=Rongai+Route',
  },
];
