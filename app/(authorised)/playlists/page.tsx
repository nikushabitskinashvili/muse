import { playlistData } from "@/app/data/CarouselData";
import styles from "./playlists.module.scss";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import Axios from "../../Helpers/Axios";
import { decodeJwt } from "jose";

const fetchPlaylist = async () => {
  const token = cookies()?.get(AUTH_COOKIE_KEY)?.value;
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



export default async function page() {
  const playlistD = await fetchPlaylist();

  console.log(playlistD, "sadasdasdasdasdasdasd");

  return (
    <main className={styles.playlistMainContainer}>
      <div className={styles.playlistWrapper}>
        <h1 className={styles.mainTitle}>Your Playlists</h1>
        <div className={styles.playlistItemContainer}>
          {playlistD.map((item: any) => {
            return <AlbumCard key={item.id} playlist={true} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
}
