"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [showText, setShowText] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const backgroundTimer = setTimeout(() => {
      setShowText(true);
    }, 300);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
      controls.start("visible");
    }, 3000);

    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(loadingTimer);
      document.body.style.overflow = "";
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className={styles.loadingOverlay}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence>
              {showText && (
                <motion.div
                  className={styles.textContainer}
                  variants={textContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h1 variants={itemVariants}>hyunzsu</motion.h1>
                  <motion.p className={styles.folio} variants={itemVariants}>
                    © Folio 2024
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        className={styles.container}
        variants={contentVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className={styles.inner} variants={contentVariants}>
          <motion.p className={styles.text} variants={nameVariants}>
            <motion.span variants={nameVariants}>FRONTEND</motion.span>
            <br />
            <motion.span variants={nameVariants}>DEVELOPER</motion.span>
          </motion.p>
          <motion.div variants={imageVariants}>
            <Image
              className={styles.image}
              src="/hyunzsu-photo.svg"
              alt="내 사진"
              width={700}
              height={350}
            />
          </motion.div>
        </motion.div>
        <motion.div className={styles["name-text"]} variants={nameVariants}>
          hyunzsu
        </motion.div>
      </motion.section>
    </>
  );
}
