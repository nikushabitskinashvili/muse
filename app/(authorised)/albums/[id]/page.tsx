import styles from "./page.module.scss";
import { AlbumHero } from "@/app/components/AlbumHero/AlbumHero";
import { MusicWrapper } from "@/app/components/musicWrapper/musicWrapper";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import { popularAlbum } from "@/app/data/CarouselData";
import Axios from "@/app/Helpers/Axios";
import { cookies } from "next/headers";

const fetchAlbum = async (id: string) => {
  const token = cookies()?.get(AUTH_COOKIE_KEY)?.value;

  try {
    const response = await Axios.get(`/album/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const AlbumDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const albumDetail = await fetchAlbum(id);

  console.log(albumDetail);

  const album = popularAlbum[+id];

  return (
    <div className={styles.main}>
      <div className={styles.albumDetails}>
        <AlbumHero title={album.title} img={album.img} total={album.total} />
        <div className={styles.list}>
          <MusicWrapper />
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailsPage;
