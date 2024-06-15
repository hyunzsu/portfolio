import Image from "next/image";
import styles from "./page.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.text}>
          <span>FRONTED</span>
          <br />
          <span>DEVELOPER</span>
        </p>
        <Image
          className={styles.image}
          src="/hyunzsu-photo.svg"
          alt="내 사진"
          width={700}
          height={350}
        />
      </div>
      <div className={styles["name-text"]}>hyunzsu</div>
    </div>
  );
}
