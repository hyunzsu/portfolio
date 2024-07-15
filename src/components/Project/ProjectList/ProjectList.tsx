import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.css";
import { Project } from "../../../types/project";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
