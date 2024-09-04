import { playlistData } from "@/app/data/CarouselData";
import styles from "./playlists.module.scss";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";

export default function page() {
  return (
    <main className={styles.playlistMainContainer}>
      <div className={styles.playlistWrapper}>
        <h1 className={styles.mainTitle}>Your Playlists</h1>
        <div className={styles.playlistItemContainer}>
          {playlistData.map((item) => {
            return <AlbumCard key={item.id} playlist={true} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
}
