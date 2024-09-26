"use client";
import { MusicWrapper } from "@/app/components/musicWrapper/musicWrapper";
import styles from "./ArtistPage.module.scss";
import { ArtistHero } from "@/app/components/ArtistHero/ArtistHero";
import { artists } from "@/app/data/CarouselData";
import { useParams } from "next/navigation";

export default function Artist() {
  const { id } = useParams();

  const artist = artists[+id];

  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <ArtistHero
          artistName={artist.title}
          imgSrc="/images/ArtistHero.png"
          songsCount={56000}
        />
      </div>
      <div className={styles.MusicWrapper}>
        <MusicWrapper />
      </div>
    </div>
  );
}
