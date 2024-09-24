import styles from "./ArtistPage.module.scss";
import { ArtistCard } from "../../components/ArtistCard/ArtistCard";
import { artists } from "../../data/CarouselData";

export default function Artist() {
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
