'use client'

import { useEffect, useState } from "react";
import { Slider } from "../components/Slider/Slider";
import { artists, playlistData, popularAlbum } from "../data/CarouselData";
import styles from "./page.module.css";
import Hero from "@/app/components/Hero/Hero";
import { ForYouComp } from "@/app/components/forYouComp/forYouComp";
import { Song } from "../Interfaces/Interfaces";

const useClient = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
      setIsClient(true);
    }, []);
    return isClient;
  };
  

  export default function Home() {
    const isClient = useClient();
  
    return (
      <main className={styles.main}>
        {isClient && (
          <>
            <Hero />
            <div className={styles.bg}>
              <div className={styles.content}>
                <Slider data={popularAlbum} title="Popular Album" />
                <Slider data={artists} title="Artists" />
                <ForYouComp onSongSelect={function (song: Song): void {
                  throw new Error("Function not implemented.");
                } }             
                />
                <Slider data={playlistData} title="My Playlists" />
              </div>
            </div>
          </>
        )}
      </main>
    );
  }
  
