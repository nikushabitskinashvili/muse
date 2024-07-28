"use client";
import { useEffect, useState } from "react";
import { Slider } from "../components/Slider/Slider";
import { artists, playlistData, popularAlbum } from "../data/CarouselData";
import styles from "./page.module.css";
import {IconEnum} from "@/app/utils/Icon/Icon";
import Hero from "@/app/components/Hero/Hero";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main className={styles.main} style={{ backgroundColor: "black" }}>
      {isClient && (
        <>
          <Hero/>
          <Slider data={popularAlbum} title="Popular Album" />
          <Slider data={artists} title="Artists" />
          <Slider data={playlistData} title="My Playlists" />
        </>
      )}
    </main>
  );
}