"use client";
import React from "react";
import styles from "./Name.module.css";
import { motion } from "framer-motion";

const container = {
  initial: {},
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  initial: { y: -15, opacity: 0 },
  exit: { y: 15, opacity: 1 },
};

export default function Name() {
  return (
    <motion.h1
      className={styles.name}
      variants={container}
      initial="initial"
      animate="exit"
      transition={{ repeat: Infinity, repeatType: "loop" }}
    >
      {"Zhaovan".split("").map((char, idx) => {
        return (
          <motion.span
            key={idx}
            variants={item}
            transition={{ duration: 0.3 }}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
