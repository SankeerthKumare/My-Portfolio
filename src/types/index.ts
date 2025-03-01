// Navigation
export interface NavLink {
  label: string;
  href: string;
}

// Projects
export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Skills
export interface Skill {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: "Languages" | "Backend" | "Cloud & DevOps" | "Databases";
  years?: number;
  featured?: boolean;
  tagline?: string;
}

// Experience
export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  techStack: string[];
}
