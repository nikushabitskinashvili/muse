import { playlistData } from "@/app/data/CarouselData";
import styles from "./playlists.module.scss";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import Axios from "../../Helpers/Axios";

const fetchPlaylist = async () => {
  const token = cookies()?.get(AUTH_COOKIE_KEY)?.value;
  try {
    const response = await Axios.get("/playlist", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function page() {
  const playlistD = await fetchPlaylist();

  console.log(playlistD);

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
