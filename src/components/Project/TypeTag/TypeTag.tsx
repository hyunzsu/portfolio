import styles from "./TypeTag.module.css";

interface TypeTagProps {
  type: string;
}

export default function TypeTag({ type }: TypeTagProps) {
  switch (type) {
    case "Personal":
      return <span className={styles.type}>Personal</span>;
    case "Team":
      return <span className={styles.type}>Team</span>;
    case "Hackathon":
      return <span className={styles.type}>Hackathon</span>;
  }
}
