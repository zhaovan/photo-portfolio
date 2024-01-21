"use client";
import React, { useState } from "react";
import styles from "./Photo.module.css";
import Image from "next/image";

type PhotoProps = {
  src: string;
};

export default function Photo({ src }: PhotoProps) {
  return (
    <div className={styles.photoWrapper}>
      <Image
        src={src}
        width={500}
        height={200}
        alt=""
        className={styles.photo}
      />
    </div>
  );
}
