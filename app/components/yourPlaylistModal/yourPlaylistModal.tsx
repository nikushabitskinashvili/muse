"use client";
import styles from "./yourPlaylistModal.module.scss";
import { XButton } from "@/app/components/xButton/xButton";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import { playlistData } from "@/app/data/CarouselData";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import Axios from "../../Helpers/Axios";
import { useEffect, useState } from "react";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import { decodeJwt } from "jose";
import { ToastContainer } from "react-toastify";

interface Props {
  onClose: () => void;
  musicId: number;
}

export const YourPlaylistModal = (props: Props) => {
  const [playlist, setPlaylist] = useState([]);
  console.log(props.musicId);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const token = getClientCookie(AUTH_COOKIE_KEY);

      // Check if token is null or undefined
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const user = decodeJwt(token);

        if (!user || !user.id) {
          console.error("Invalid token payload");
          return;
        }

        const response = await Axios.get(`/playlist/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPlaylist(response.data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.title}>Your playlist</span>
        <XButton onClick={props.onClose} bg={false} />
      </div>
      <div className={styles.cards}>
        {playlist.map((item: any) => (
          <AlbumCard onClose={props.onClose} isModal={true} musicId={props.musicId}  className={styles.card} key={item.id} item={item} />
        ))}
      </div>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        autoClose={5000}
        theme="colored"
        newestOnTop={false}
        draggable
        pauseOnHover
        closeOnClick
      />
    </div>
  );
};
