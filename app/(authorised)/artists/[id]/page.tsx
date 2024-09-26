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
          monthlyListeners={56000}
          artistBio={`Billie Eilish is an American singe r-songwriter
            born on December 18, 2001, in Los Angeles. She gained fame with her
            2015 hit "Ocean Eyes" and won multiple Grammy Awards for her debut
            album, "When We All Fall Asleep, Where Do We Go?"`}
        />
      </div>
      <div className={styles.MusicWrapper}>
        <MusicWrapper />
      </div>
    </div>
  );
}
