import Image from "next/image";
import React from "react";
import styles from "./ArtistCard.module.scss";
import Link from "next/link";

export const ArtistCard = ({ title, item }: { title: string; item: any }) => {
  const imageClass = title === "Artists" ? styles.imageSize : "";
  return (
      <Link href={`artists/${item.id}`}>
    <div className={styles.artistCardContainer}>
      <Image
        src={item.img}
        width={130}
        height={126}
        alt={item.title}
        className={`${styles.cardImage} ${imageClass}`}
      />
      <div>
        <h2 className={styles.title}>{item.title}</h2>
        <h3>{item.subTitle}</h3>
      </div>
    </div>
      </Link>
  );
};
