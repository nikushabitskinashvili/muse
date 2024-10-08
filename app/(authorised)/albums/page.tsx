import { popularAlbum } from "@/app/data/CarouselData";
import styles from "./page.module.scss";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import Axios from "@/app/Helpers/Axios";

const fetchAlbum = async () => {
  const token = cookies()?.get(AUTH_COOKIE_KEY)?.value;

  console.log(`: ${token}`);
  try {
    const response = await Axios.get("/album", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data, 'albumdataaaaaaaaaaaaaaaaaaaaa')
    return response.data;

  } catch (error) {
    console.log(error);
  }
};

const Albums = async () => {
  const albumData = await fetchAlbum();
  console.log(albumData , 'album');
  

  console.log(albumData);

  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.albumTxt}>
          <span>Popular albums</span>
        </div>
        <div className={styles.container}>
          {albumData.map((item: any) => (
            <AlbumCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;