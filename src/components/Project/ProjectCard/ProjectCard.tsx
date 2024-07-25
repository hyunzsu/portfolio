import Image from "next/image";
import styles from "./ProjectCard.module.css";
import StackTag from "../StackTag/StackTag";
import TypeTag from "../TypeTag/TypeTag";
import { Project } from "../../../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.article}>
      <div className={styles["image-container"]}>
        <Image
          className={styles.image}
          src={project.main_images[0]}
          alt={`${project.title} 이미지`}
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className={styles.content}>
        <div className={styles.first}>
          <h3 className={styles.title}>{project.title}</h3>
          <ul>
            {project.category.map((tag, index) => (
              <li key={index}>
                <TypeTag type={tag} />
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.period}>
          {project.start_date} ~ {project.end_date}
        </p>
        <p className={styles.intro}>{project.intro}</p>
      </div>
      <div className={styles.second}>
        <ul className={styles.stack}>
          {project.stacks.map((stack, index) => (
            <li key={index}>
              <StackTag stack={stack} />
            </li>
          ))}
        </ul>
        {/* <div className={styles.set}>
          <div>
            {project.github_url && (
              <a
                target="_blank"
                href={project.github_url}
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  alt="깃허브 아이콘"
                  priority
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            )}
          </div>
          <div>
            {project.service_url && (
              <a
                target="_blank"
                href={project.service_url}
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/deploy.svg"
                  alt="서비스 아이콘"
                  priority
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            )}
          </div>
        </div> */}
      </div>
    </article>
  );
}
