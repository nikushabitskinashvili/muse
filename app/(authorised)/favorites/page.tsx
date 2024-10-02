"use client";
import { useState, useEffect } from "react";
import styles from "./favorites.module.scss";
import { FavoritesHero } from "@/app/components/FavoritesHero/FavoritesHero";
import axios from "axios";
import { MusicWrapper } from "@/app/components/musicWrapper/musicWrapper";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<{ image: string; totalTracks: number; totalTime: number } | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/api/favorites'); 
        setFavorites(response.data);
      } catch (error) {
        console.error("Failed to load favorites:", error);
        setFavorites(null);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.favoritesWrapper}>
        <FavoritesHero
          image={favorites?.image || ""}
          totalTracks={favorites?.totalTracks || 0}
          totalTime={favorites?.totalTime || 0}
        />
        <div className={styles.favoritesForyou}>
          <MusicWrapper/>
        </div>
      </div>
    </div>
  );
}




