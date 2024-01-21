import Image from "next/image";
import React from "react";
import styles from "./Lightbox.module.css";

export default function Lightbox({ imageUrl }: { imageUrl: string }) {
  return (
    <div className={styles.lightbox}>
      <Image
        src={imageUrl}
        width={800}
        height={600}
        className={styles.lightboxImage}
        loading="eager"
        alt={""}
      />
    </div>
  );
}
