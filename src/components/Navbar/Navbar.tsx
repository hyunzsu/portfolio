import Link from "next/link";
import styles from "./Navbar.module.css";
import { TfiArrowTopRight, TfiGithub } from "react-icons/tfi";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">H.</Link>
        <a href="/">
          <span>Github</span>
          <TfiArrowTopRight />
        </a>
        <a href="/">
          <span>Resume</span>
          <TfiArrowTopRight />
        </a>
        <nav>
          <button>About,</button>
          <button>Projects,</button>
          <button>Contact</button>
        </nav>
      </div>
    </header>
  );
}
