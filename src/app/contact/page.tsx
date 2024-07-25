import Marquee from "@/components/UI/Marquee/Marquee";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <Marquee />
      <div className={styles.content}>
        <span className={styles.logo}>H.</span>
        <span>Phone. 010-2739-5166</span>
        <span>Email. hyunzsu@kakao.com</span>
      </div>
      <div className={styles.footer}>
        ⓒ 2024 hyunzsu FE Portfolio | All Rights Reserved.
      </div>
    </div>
  );
}
