export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Trees' | 'Building' | 'PenTool' | 'Layers';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  imageUrl: string;
  description: string;
  overview: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
