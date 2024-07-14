import Image from "next/image";
import styles from "./StackTag.module.css";

interface StackTagProps {
  stack: string;
}

export default function StackTag({ stack }: StackTagProps) {
  return (
    <Image
      className={styles.stack}
      src={`/stacks/${stack}.svg`}
      alt={stack}
      priority
      quality={100}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "auto", height: "auto" }}
    />
  );
}
