import Image from "next/image";
import React from "react";
import styles from "./ArtistCard.module.scss";

export const ArtistCard = ({ title, item }: { title: string; item: any }) => {
  const imageClass = title === "Artists" ? styles.imageSize : "";
  return (
    <div className={styles.artistCardContainer}>
      <Image
        src={item.img}
        width={176}
        height={171}
        alt={item.title}
        className={`${styles.cardImage} ${imageClass}`}
      />
      <div>
        <h2>{item.title}</h2>
        <h3>{item.subTitle}</h3>
      </div>
    </div>
  );
};
