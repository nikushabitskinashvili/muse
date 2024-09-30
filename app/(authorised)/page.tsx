"use client";

import { useEffect, useState } from "react";
import { Slider } from "../components/Slider/Slider";
import { playlistData } from "../data/CarouselData";
import styles from "./page.module.css";
import Hero from "@/app/components/Hero/Hero";
import { ForYouComp } from "@/app/components/forYouComp/forYouComp";
import { Music } from "../Interfaces/Interfaces";
import Axios from "../Helpers/Axios";
import { getClientCookie } from "../Helpers/GetCookieValue";
import { AUTH_COOKIE_KEY } from "../constant";

const useClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
};

export default function Home() {
  const isClient = useClient();
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  console.log(albums);
  console.log(artists);

  useEffect(() => {
    const fetchAlbums = async () => {
      const token = getClientCookie(AUTH_COOKIE_KEY);
      try {
        const response = await Axios.get(`/album`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAlbums(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAlbums();
  }, []);

  useEffect(() => {
    const fetchAlbums = async () => {
      const token = getClientCookie(AUTH_COOKIE_KEY);
      try {
        const response = await Axios.get(`/artist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setArtists(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAlbums();
  }, []);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const token = getClientCookie(AUTH_COOKIE_KEY);
      try {
        const response = await Axios.get(`/playlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPlaylist(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlaylists();
  }, []);
  return (
    <main className={styles.main}>
      {isClient && (
        <>
          <Hero />
          <div className={styles.bg}>
            <div className={styles.content}>
              <Slider data={albums} title="Popular Album" />
              <Slider data={artists} title="Artists" />
              <ForYouComp onSongSelect={(music: Music) => {}} />
              <Slider data={playlist} title="My Playlists" />
            </div>
          </div>
        </>
      )}
    </main>
  );
}