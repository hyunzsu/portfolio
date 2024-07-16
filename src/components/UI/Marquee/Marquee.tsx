import styles from "./Marquee.module.css";

export default function Marquee() {
  const text = "LET'S BUILD TOGETHER";
  const repeatCount = 12;

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {[...Array(repeatCount)].map((_, index) => (
          <span key={index} className={styles.text}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
