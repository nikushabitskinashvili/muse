import { MusicWrapper } from "@/app/components/musicWrapper/musicWrapper";
import styles from "./ArtistPage.module.scss";
import { ArtistHero } from "@/app/components/ArtistHero/ArtistHero";
import { artists } from "@/app/data/CarouselData";
import Axios from "@/app/Helpers/Axios";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import { Music } from "@/app/Interfaces/Interfaces";
import { ArtistBio } from "@/app/components/ArtistBio/ArtistBio";

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

export default async function Artist({ params }: { params: { id: string } }) {
  const { id } = params;

  const artistData = await fetchArtist(id);
  console.log(artistData);

  const artist = artists[+id];

  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <ArtistHero
          artistName={artistData.name}
          imgSrc={artistData.cover}
          monthlyListeners={56000}
        />
      </div>
      <div className={styles.bio}>
        <ArtistBio
          heading={`${artistData.name} Biography`}
          bio={artistData.biography}
        />
      </div>
      <div className={styles.MusicWrapper}>
        <MusicWrapper text={"artistId"} id={id} />
      </div>
    </div>
  );
}
