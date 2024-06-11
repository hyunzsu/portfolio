import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <header className={styles.header}>
        <Link href="/">H.</Link>
        <nav>
          <button>About,</button>
          <button>Projects,</button>
          <button>Contact</button>
        </nav>
      </header>
    </div>
  );
}
