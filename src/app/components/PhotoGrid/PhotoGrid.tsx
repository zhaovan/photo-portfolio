"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./PhotoGrid.module.css";
import Photo from "../Photo/Photo";

type PhotoGridProps = {
  setLightboxPhoto: Dispatch<SetStateAction<string>>;
};

export default function PhotoGrid({ setLightboxPhoto }: PhotoGridProps) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const res = await fetch("/api/images");
      const data = await res.json();
      const images = data.images;

      // console.log(images);
      setImages(images);
    }
    getImages();
  }, []);

  return (
    <div className={styles.photoGrid}>
      {images &&
        images.map((imageUrl: string, idx: number) => {
          return (
            <div onClick={() => setLightboxPhoto(imageUrl)} key={idx}>
              <Photo src={imageUrl} />
            </div>
          );
        })}
    </div>
  );
}
