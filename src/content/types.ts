export interface ContactLinks {
  linkedin: string;
  email: string;
  github?: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  contact: ContactLinks;
  stats?: { value: string; label: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  periodLabel: string;
  description?: string;
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  role?: string;
  url?: string;
  repo?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startYear: string;
  endYear?: string;
  periodLabel: string;
}

export interface SiteContent {
  profile: Profile;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  lastUpdated: string;
}
