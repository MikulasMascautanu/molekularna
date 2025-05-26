export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  contentType: 'video' | 'pdf' | 'text';
  contentUrl: string;
  order: number;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatar?: string;
  role: 'student' | 'admin';
}

export interface Purchase {
  id: string;
  userId: string;
  courseId: string;
  purchaseDate: Date;
  expiryDate?: Date;
}