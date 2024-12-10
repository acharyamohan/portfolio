import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    duration: '8 weeks',
    level: 'Beginner',
    modules: 12,
    enrolled: 1234
  },
  {
    id: '2',
    title: 'Data Science Essentials',
    description: 'Master the fundamentals of data analysis and machine learning.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    duration: '10 weeks',
    level: 'Intermediate',
    modules: 15,
    enrolled: 892
  },
  {
    id: '3',
    title: 'UX/UI Design Masterclass',
    description: 'Create beautiful and functional user interfaces with modern design principles.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    duration: '6 weeks',
    level: 'Advanced',
    modules: 8,
    enrolled: 567
  }
];