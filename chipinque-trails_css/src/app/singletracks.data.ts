import { Trail } from './trail.interface';

export const SingleTracks: Trail[] = [
  {
    code: 'chile',
    name: 'Del Chile',
    description: 'Una de las brechas principales del parque',
    walk_up: {
      difficulty: 1,
      banned: false,
      description: 'muy buena'
    },
    walk_down: {
      difficulty: 2,
      banned: false,
      description: 'muy buena'
    },
    bike_up: {
      difficulty: 3,
      banned: false,
      description: 'muy buena'
    },
    bike_down: {
      difficulty: 4,
      banned: false,
      description: 'muy buena'
    }
  },
  {
    code: 'coati-1',
    name: 'Coatí 1',
    description: 'Una las mejores vistas',
    walk_up: {
      difficulty: 5,
      banned: false,
      description: 'muy buena'
    },
    walk_down: {
      difficulty: 1,
      banned: false,
      description: 'muy buena'
    },
    bike_up: {
      difficulty: 2,
      banned: false,
      description: 'muy buena'
    },
    bike_down: {
      difficulty: 3,
      banned: false,
      description: 'muy buena'
    }
  }
];
