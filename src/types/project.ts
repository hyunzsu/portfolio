export interface Project {
  id: string | number;
  title: string;
  main_images: string[];
  category: string[];
  start_date: string;
  end_date: string;
  intro: string;
  stacks: string[];
  github_url?: string;
  service_url?: string;
}
