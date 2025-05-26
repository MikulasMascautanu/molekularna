import { Course } from '@/types';

export const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Organic Chemistry Fundamentals',
    description: 'Master the basics of organic chemistry with this comprehensive course designed for beginners.',
    price: 129.99,
    level: 'beginner',
    duration: '8 weeks',
    image: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'organic-chemistry-fundamentals',
    featured: true
  },
  {
    id: '2',
    title: 'Advanced Inorganic Chemistry',
    description: 'Explore complex inorganic structures and reactions in this advanced-level course.',
    price: 149.99,
    level: 'advanced',
    duration: '10 weeks',
    image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'advanced-inorganic-chemistry',
    featured: true
  },
  {
    id: '3',
    title: 'Physical Chemistry: Thermodynamics & Kinetics',
    description: 'Understand the principles of thermodynamics and reaction kinetics with practical examples.',
    price: 139.99,
    level: 'intermediate',
    duration: '12 weeks',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'physical-chemistry-thermodynamics',
    featured: true
  }
];

export const allCourses: Course[] = [
  ...featuredCourses,
  {
    id: '4',
    title: 'Biochemistry Essentials',
    description: 'Explore the chemistry of living organisms and biological processes in this comprehensive course.',
    price: 159.99,
    level: 'intermediate',
    duration: '10 weeks',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'biochemistry-essentials',
  },
  {
    id: '5',
    title: 'Analytical Chemistry Techniques',
    description: 'Learn modern analytical methods for chemical analysis and instrumentation.',
    price: 169.99,
    level: 'advanced',
    duration: '8 weeks',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'analytical-chemistry-techniques',
  },
  {
    id: '6',
    title: 'Environmental Chemistry',
    description: 'Understand the chemical processes in air, water, soil and their impact on the environment.',
    price: 129.99,
    level: 'intermediate',
    duration: '6 weeks',
    image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'environmental-chemistry',
  },
];