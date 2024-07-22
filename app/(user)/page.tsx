"use client";
import { useEffect, useState } from "react";
import { Slider } from "../components/Slider/Slider";
import { artitsts, playlistData, popularAlbum } from "../data/CarouselData";
import styles from "./page.module.css";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main className={styles.main} style={{ backgroundColor: "black" }}>
      {isClient && (
        <>
          <Slider data={popularAlbum} title="Popular Album" />
          <Slider data={artitsts} title="Artists" />
          <Slider data={playlistData} title="My Playlists" />
        </>
      )}
    </main>
  );
}
