"use client";
import { MusicWrapper } from "@/app/components/musicWrapper/musicWrapper";
import styles from "./ArtistPage.module.scss";
import { ArtistHero } from "@/app/components/ArtistHero/ArtistHero";

export default function Artist() {
  return (
    <div className={styles.main}>
      <ArtistHero
        artistName="Lana Del Rey"
        imgSrc="./images/ArtistHero.png"
        songsCount={56000}
      />
      <div className={styles.MusicWrapper}>
        <MusicWrapper />
      </div>
    </div>
  );
}
