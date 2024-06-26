import React from "react";
import styles from "./page.module.css";
import Title from "@/components/UI/Title/Title";
import List from "@/components/UI/List/List";
import { getAboutData } from "@/app/api/supabaseClient";
import { Experience, License, Education, Skill } from "@/types/about";

export default async function About() {
  const data = await getAboutData();

  const experiences: Experience[] = data.experiences || [];
  const licenses: License[] = data.licenses || [];
  const educations: Education[] = data.educations || [];
  const skills: Skill[] = data.skills || [];

  return (
    <div className={styles.container}>
      <div className={styles["h1-wrapper"]}>
        <span>GET TO</span>
        <span className={styles.h1}>KNOW ME</span>
      </div>

      <div className={styles.content}>
        <article className={styles.article}>
          <Title title="Bio" className={styles.h2} />
          <p className={styles["bio-text"]}>
            직관적이고 사용자 중심의 인터페이스를 만들기 위해 노력하며, 복잡한
            문제에 몰두 다양한 사용자의 환경을 고려하여 웹 접근성을 준수하는
            서비스를 개발하기 위해 노력하고, 새로운 분야에 대한 두려움보다는
            호기심과 열정으로 접근하며, 직관적이고 사용자 중심의 인터페이스를
            만들기 위해 노력합니다.
          </p>
        </article>

        <article className={styles.article}>
          <Title title="Experience" className={styles.h2} />
          <List
            items={experiences.map((experience) => (
              <div key={experience.id} className={styles.experience}>
                <p className={styles.itemHeader}>
                  <span className={styles.h3}>{experience.company}</span>
                  <span className={styles.period}>{experience.period}</span>
                </p>
                <List
                  items={experience.description.map((desc) => (
                    <span key={desc} className={styles["li-text"]}>
                      {desc}
                    </span>
                  ))}
                />
              </div>
            ))}
          />
        </article>

        <article className={styles.article}>
          <Title title="License" className={styles.h2} />
          <List
            items={licenses.map((license) => (
              <div key={license.id} className={styles.license}>
                <span className={styles["li-text"]}>{license.name}</span>
                <span className={styles.period}>{license.date}</span>
              </div>
            ))}
          />
        </article>

        <article className={styles.article}>
          <Title title="Education" className={styles.h2} />
          <List
            items={educations.map((education) => (
              <div key={education.id} className={styles.education}>
                <p className={styles.itemHeader}>
                  <span className={styles.h3}>{education.school}</span>
                  <span className={styles.period}>{education.period}</span>
                </p>
                <List
                  items={education.description.map((desc) => (
                    <span key={desc} className={styles["li-text"]}>
                      {desc}
                    </span>
                  ))}
                />
              </div>
            ))}
          />
        </article>

        <article className={styles.article}>
          <Title title="Skills" className={styles.h2} />
          <List
            items={skills.map((skill) => (
              <div key={skill.id} className={styles.skills}>
                <p className={`${styles.h3} ${styles["skills-name"]}`}>
                  {skill.name}
                </p>
                <List
                  items={skill.description.map((desc) => (
                    <span key={desc} className={styles["li-text"]}>
                      {desc}
                    </span>
                  ))}
                />
              </div>
            ))}
          />
        </article>
      </div>
    </div>
  );
}
