"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles["first-inner"]}>
          <div></div>
          <Link href="/" className={styles.logo}>
            H.
          </Link>
          <div className={styles["link-container"]}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>Github</span>
              <TfiArrowTopRight />
            </a>
            <a
              href="/"
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
            <button className={styles.button}>About</button>
          </li>
          <li>
            <button className={styles.button}>Projects</button>
          </li>
          <li>
            <button className={styles.button}>Contact</button>
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
