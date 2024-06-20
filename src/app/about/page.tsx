import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Title from "@/components/UI/Title/Title";
import List from "@/components/UI/List/List";
import { getAboutData } from "@/app/api/supabaseClient";

export default async function About() {
  const {
    experiences = [],
    licenses = [],
    educations = [],
    skills = [],
  } = await getAboutData();

  return (
    <div className={styles.container}>
      <div className={styles["h1-wrapper"]}>
        <div className={styles["h1-inner"]}>
          <span>GET T</span>
          <Image
            className={styles.image}
            src="/about-photo.svg"
            alt="내 사진"
            width={100}
            height={100}
          />
        </div>
        <span className={styles.h1}>KNOW ME</span>
      </div>

      <ul className={styles.content}>
        <li className={styles["bio-wrapper"]}>
          <Title title="Bio" />
          <p>
            직관적이고 사용자 중심의 인터페이스를 만들기 위해 노력하며, 복잡한
            문제에 몰두 다양한 사용자의 환경을 고려하여 웹 접근성을 준수하는
            서비스를 개발하기 위해 노력하고, 새로운 분야에 대한 두려움보다는
            호기심과 열정으로 접근하며, 직관적이고 사용자 중심의 인터페이스를
            만들기 위해 노력합니다.
          </p>
        </li>
        <li>
          <Title title="Experience" />
          <List
            items={experiences.map((experience) => [
              <React.Fragment key={experience.id}>
                <p>
                  <span>{experience.company}</span>
                  <span>{experience.period}</span>
                </p>
                <List
                  items={experience.description.map((desc) => (
                    <span key={desc}>{desc}</span>
                  ))}
                />
              </React.Fragment>,
            ])}
          />
        </li>
        <li>
          <Title title="License" />
          <List
            items={licenses.map((license) => [
              <React.Fragment key={license.id}>
                <p>{license.name}</p>
                <span>{license.date}</span>
              </React.Fragment>,
            ])}
          />
        </li>
        <li>
          <Title title="Education" />
          <List
            items={educations.map((education) => [
              <React.Fragment key={education.id}>
                <p>
                  <span>{education.school}</span>
                  <span>{education.period}</span>
                </p>
                <List
                  items={education.description.map((desc) => (
                    <span key={desc}>{desc}</span>
                  ))}
                />
              </React.Fragment>,
            ])}
          />
        </li>
        <li>
          <Title title="Skills" />
          <List
            items={skills.map((skill) => [
              <React.Fragment key={skill.id}>
                <p>
                  <span>{skill.name}</span>
                </p>
                <List
                  items={skill.description.map((desc) => (
                    <span key={desc}>{desc}</span>
                  ))}
                />
              </React.Fragment>,
            ])}
          />
        </li>
      </ul>
    </div>
  );
}
