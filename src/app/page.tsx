"use client";
import styles from "./page.module.css";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import Name from "./components/Name/Name";
import { useState } from "react";
import Lightbox from "./components/Lightbox/Lightbox";

export default function Home() {
  const [lightboxPhoto, setLightboxPhoto] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setLightboxPhoto("");
    }
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <Name />
      </div>
      <div onKeyDown={handleKeyDown} tabIndex={0}>
        <PhotoGrid setLightboxPhoto={setLightboxPhoto} />
      </div>
      {lightboxPhoto && <Lightbox imageUrl={lightboxPhoto} />}
    </main>
  );
}
