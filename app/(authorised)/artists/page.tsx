"use client";

import styles from "./ArtistPage.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import { ArtistCard } from "../../components/ArtistCard/ArtistCard";
import { artists } from "../../data/CarouselData";
import { title } from "process";

export default function artist() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <span className={styles.title}>The Artists</span>
        <div className={styles.wrapper}>
          {artists.map((item) => (
            <ArtistCard title={title} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
