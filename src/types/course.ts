export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: number;
  enrolled: number;
}