export interface Experience {
  id: number;
  company: string;
  period: string;
  description: string[];
}

export interface License {
  id: number;
  name: string;
  date: string;
}

export interface Education {
  id: number;
  school: string;
  period: string;
  description: string[];
}

export interface Skill {
  id: number;
  name: string;
  description: string[];
}

export type AboutData = {
  experiences: Experience[];
  licenses: License[];
  educations: Education[];
  skills: Skill[];
};
