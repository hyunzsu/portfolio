import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
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

      <div className={styles["about-wrapper"]}>
        <div className={styles["bio-wrapper"]}>
          <h2>BIO</h2>
          <p>
            직관적이고 사용자 중심의 인터페이스를 만들기 위해 노력하며, 복잡한
            문제에 몰두 다양한 사용자의 환경을 고려하여 웹 접근성을 준수하는
            서비스를 개발하기 위해 노력하고, 새로운 분야에 대한 두려움보다는
            호기심과 열정으로 접근하며, 직관적이고 사용자 중심의 인터페이스를
            만들기 위해 노력합니다. 다양한 사용자의 환경을 고려하여 웹 접근성을
            준수하는 서비스를 개발하기 위해 노력하고, 새로운 분야에 대한
            두려움보다는 호기심과 열정으로 접근하며, 직관적이고 사용자 중심의
            인터페이스를 만들기 위해 노력합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
