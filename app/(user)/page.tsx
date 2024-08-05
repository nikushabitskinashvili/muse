"use client";
import { useEffect, useState } from "react";
import { Slider } from "../components/Slider/Slider";
import { artists, playlistData, popularAlbum } from "../data/CarouselData";
import styles from "./page.module.css";
import Hero from "@/app/components/Hero/Hero";
<<<<<<< Updated upstream

import Navbar from "../components/Navbar/Navbar";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import songs from "../array";
=======
import {AlbumHero} from "@/app/components/AlbumHero/AlbumHero";
import {ReusableModal} from "@/app/components/reusableModal/reusableModal";
import {YourPlaylistModal} from "@/app/components/yourPlaylistModal/yourPlaylistModal";
import {DeleteModal} from "@/app/components/deleteModal/deleteModal";
import { title } from "process";
import AuthTitle from "../components/AuthTitle/AuthTitle";
>>>>>>> Stashed changes

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main className={styles.main} style={{ backgroundColor: "black" }}>
      {isClient && (
        <>
          <Hero />
          <Slider data={popularAlbum} title="Popular Album" />
          <Slider data={artists} title="Artists" />
          <Slider data={playlistData} title="My Playlists" />
          <AudioPlayer songs={songs}/>
        </>
      )}
    </main>
  );
}
