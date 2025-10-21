export interface IProject {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  code?: string;
  website?: string;
}

export interface IExperienceRole {
  title: string;
  period: string;
}

export interface IExperienceItem {
  company: string;
  roles: IExperienceRole[];
}
