import styles from "./ArtistPage.module.scss";
import { ArtistCard } from "../../components/ArtistCard/ArtistCard";
import { artists } from "../../data/CarouselData";

export default function Artist() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <span className={styles.title}>The Artists</span>
        <div className={styles.wrapper}>
          {artists.map((item) => (
            <ArtistCard key={item.id} title={item.name} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
