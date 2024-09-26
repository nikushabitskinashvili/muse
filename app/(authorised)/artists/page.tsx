import styles from "./ArtistPage.module.scss";
import { ArtistCard } from "../../components/ArtistCard/ArtistCard";
import { artists } from "../../data/CarouselData";
import { title } from "process";
import Axios from "@/app/Helpers/Axios";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/app/constant";

const fetchArtists = async () => {
  const token = cookies()?.get(AUTH_COOKIE_KEY)?.value;

  try {
    const response = await Axios.get("/artist", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Artist() {
  const artistsData = await fetchArtists();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <span className={styles.title}>The Artists</span>
        <div className={styles.wrapper}>
          {artists.map((item) => (
            <ArtistCard title={title} key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
