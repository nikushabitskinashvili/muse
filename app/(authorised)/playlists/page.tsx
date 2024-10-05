"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./playlists.module.scss";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import Axios from "../../Helpers/Axios";
import { decodeJwt } from "jose";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";

const fetchPlaylist = async () => {
  const token = getClientCookie(AUTH_COOKIE_KEY);
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
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default function Page() {
  const [playlistData, setPlaylistData] = useState([]);
  const router = useRouter();

  const getData = async () => {
    const data = await fetchPlaylist();
    setPlaylistData(data || []);
  };

  useEffect(() => {
    getData();
  }, [router]);

  return (
    <main className={styles.playlistMainContainer}>
      <div className={styles.playlistWrapper}>
        <h1 className={styles.mainTitle}>Your Playlists</h1>
        <div className={styles.playlistItemContainer}>
          {playlistData.map((item: any) => {
            return <AlbumCard key={item.id} playlist={true} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
}
