"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3초 후에 Navbar를 보이게 합니다. 이 시간은 메인 페이지의 로딩 시간과 맞춰야 합니다.

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <div className={styles["header-container"]}>
        <div className={styles["first-inner"]}>
          <div></div>
          <Link href="/" className={styles.logo}>
            H.
          </Link>
          <div className={styles["link-container"]}>
            <a
              href="https://github.com/hyunzsu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>Github</span>
              <TfiArrowTopRight />
            </a>
            <a
              href="https://www.rallit.com/resumes/36530@kkkm5169/%ED%98%84%EC%A7%80%EC%88%98"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>Resume</span>
              <TfiArrowTopRight />
            </a>
          </div>
        </div>
        <ul className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
          <li>
            <a href="#about" className={styles.button}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.button}>
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.button}>
              contact
            </a>
          </li>
          <li className={styles["link-item"]}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>Github</span>
              <TfiArrowTopRight />
            </a>
          </li>
          <li className={styles["link-item"]}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>Resume</span>
              <TfiArrowTopRight />
            </a>
          </li>
        </ul>
        <div
          className={`${styles["hamburger-menu"]} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className={styles["hamburger-icon"]}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </header>
  );
}
