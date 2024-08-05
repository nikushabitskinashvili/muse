import Image from "next/image";
import React from "react";
import styles from "./ArtistCard.module.scss";

export const ArtistCard = ({ title, item }: { title: string; item: any }) => {
  const conditionalStyles =
    title === "Artists"
      ? { backgroundColor: "#1C1C1C", padding: "23px", borderRadius: "12px" }
      : {};
  return (
    <div className={styles.artistCardContainer}>
      <Image
        src={item.img}
        width={100}
        height={100}
        alt={item.title}
        className={styles.cardImage}
      />
      <div>
        <h2 className={styles.title}>{item.title}</h2>
        <h3>{item.subTitle}</h3>
      </div>
    </div>
  );
};
