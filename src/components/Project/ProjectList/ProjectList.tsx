import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
