import { MusicWrapper } from "@/app/components/musicWrapper/musicWrapper";
import styles from "./ArtistPage.module.scss";
import { ArtistHero } from "@/app/components/ArtistHero/ArtistHero";
import { artists } from "@/app/data/CarouselData";
import Axios from "@/app/Helpers/Axios";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/app/constant";



const fetchArtist = async (id: string) => {
  const token = cookies()?.get(AUTH_COOKIE_KEY)?.value;

  try {
    const response = await Axios.get(`/artist/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};



export default async function Artist({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const artistData = await fetchArtist("5")
  console.log(artistData)




  const artist = artists[+id]

  return (
    <div className={styles.main}>
      <ArtistHero
        artistName={artist.title}
        imgSrc="/images/ArtistHero.png"
        songsCount={56000}
      />
      <div className={styles.MusicWrapper}>
        <MusicWrapper />
      </div>
    </div>
  );
}
