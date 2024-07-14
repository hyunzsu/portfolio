import ProjectList from "@/components/Project/ProjectList/ProjectList";
import { getProjectData } from "../api/supabaseClient";
import styles from "./page.module.css";

export default async function Projects() {
  const projects = await getProjectData();
  console.log("getProjectData", projects);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>
      <span className={styles["h1-sub"]}>
        프로젝트를 클릭하면 해당 프로젝트의 상세 페이지로 이동합니다.
      </span>

      <ProjectList projects={projects} />
    </div>
  );
}
