import React from "react";
import styles from "./page.module.css";
import Title from "@/components/UI/Title/Title";
import List from "@/components/UI/List/List";
import { getAboutData } from "@/app/api/supabaseClient";
import {
  Experience,
  License,
  Education,
  Skill,
  AboutData,
} from "@/types/about";

export default async function About() {
  const data = await getAboutData();

  const experiences: Experience[] = data.experiences || [];
  const licenses: License[] = data.licenses || [];
  const educations: Education[] = data.educations || [];
  const skills: Skill[] = data.skills || [];

  return (
    <div id="about" className={styles.container}>
      <h1 className={styles.h1}>About Me</h1>

      <div className={styles.content}>
        <article className={styles.article}>
          <Title title="Bio" className={styles.h2} />
          <p className={styles["bio-text"]}>
            직관적이고 사용자 중심의 인터페이스를 구현하는 데 주력하며, 다양한
            사용자의 눈높이에서 서비스를 개발하는 데 열정을 가지고 있습니다.
            새로운 기술이나 툴에 대해 학습하는 것에 두려움이 없으며, 이를
            작업물에 응용하여 개발 경험을 더욱 풍부하게 만드는 것을 즐깁니다.
          </p>
        </article>

        <article className={styles.article}>
          <Title title="Experience" className={styles.h2} />
          <div className={styles["experience-container"]}>
            <List
              items={experiences.map((experience: Experience) => (
                <div key={experience.id} className={styles.experience}>
                  <p className={styles.itemHeader}>
                    <span className={styles.h3}>{experience.company}</span>
                    <span className={styles.period}>{experience.period}</span>
                  </p>
                  <List
                    items={experience.description.map((desc: string) => (
                      <span key={desc} className={styles["li-text"]}>
                        {desc}
                      </span>
                    ))}
                  />
                </div>
              ))}
            />
          </div>
        </article>

        <article className={styles.article}>
          <Title title="License" className={styles.h2} />
          <div className={styles["license-container"]}>
            <List
              items={licenses.map((license: License) => (
                <div key={license.id} className={styles.license}>
                  <span className={styles["li-text"]}>{license.name}</span>
                  <span className={styles.period}>{license.date}</span>
                </div>
              ))}
            />
          </div>
        </article>

        <article className={styles.article}>
          <Title title="Education" className={styles.h2} />
          <div className={styles["education-container"]}>
            <List
              items={educations.map((education: Education) => (
                <div key={education.id} className={styles.education}>
                  <p className={styles.itemHeader}>
                    <span className={styles.h3}>{education.school}</span>
                    <span className={styles.period}>{education.period}</span>
                  </p>
                  <List
                    items={education.description.map((desc: string) => (
                      <span key={desc} className={styles["li-text"]}>
                        {desc}
                      </span>
                    ))}
                  />
                </div>
              ))}
            />
          </div>
        </article>

        <article className={styles.article}>
          <Title
            title="Skills"
            className={`${styles.h2} ${styles["skill-article"]}`}
          />
          <div className={styles["skill-grid"]}>
            {skills.map((skill: Skill) => (
              <div key={skill.id} className={styles["skill-box"]}>
                <p className={`${styles.h3} ${styles["skills-name"]}`}>
                  {skill.name}
                </p>
                <List
                  items={skill.description.map((desc: string) => (
                    <span key={desc} className={styles["li-text"]}>
                      {desc}
                    </span>
                  ))}
                />
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
