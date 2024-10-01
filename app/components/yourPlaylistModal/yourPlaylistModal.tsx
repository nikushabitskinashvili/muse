"use client";
import styles from "./yourPlaylistModal.module.scss";
import { XButton } from "@/app/components/xButton/xButton";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import { playlistData } from "@/app/data/CarouselData";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import Axios from "../../Helpers/Axios";
import { useEffect, useState } from "react";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";

const albums = [
  { id: 1, title: "Album 1", image: "/images/playlist.png", name: "Artist 1" },
  { id: 2, title: "Album 2", image: "/images/playlist1.png", name: "Artist 2" },
  { id: 3, title: "Album 3", image: "/images/playlist2.png", name: "Artist 3" },
  { id: 4, title: "Album 4", image: "/images/playlist3.png", name: "Artist 4" },
  { id: 5, title: "Album 5", image: "/images/playlist4.png", name: "Artist 5" },
  { id: 6, title: "Album 6", image: "/images/playlist5.png", name: "Artist 6" },
  { id: 7, title: "Album 7", image: "/images/playlist6.png", name: "Artist 7" },
  { id: 8, title: "Album 8", image: "/images/3.png", name: "Artist 8" },
];

interface Props {
  onClose: () => void;
}

export const YourPlaylistModal = (props: Props) => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const token = getClientCookie(AUTH_COOKIE_KEY);
      try {
        const response = await Axios.get("/playlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPlaylist(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlaylist();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.title}>Your playlist</span>
        <XButton onClick={props.onClose} bg={false} />
      </div>
      <div className={styles.cards}>
        {playlist.map((item: any) => (
          <AlbumCard className={styles.card} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
