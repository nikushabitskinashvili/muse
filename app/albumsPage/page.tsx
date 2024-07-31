
import { useRouter } from 'next/router';
import styles from './AlbumHero.module.scss';

const AlbumHero = () => {
  const router = useRouter();
  const { id } = router.query;


  const album = {
    id,
    title: 'dnckkkk',
    image: '/images/1.png',
    name: 'eminem'
  };

  return (
    <div className={styles.albumHero}>
      <img src={album.image} alt={album.title} className={styles.albumImage} />
      <h1>{album.title}</h1>
      <h2>{album.name}</h2>
      <p>Album details for {album.title}</p>
    </div>
  );
};

export default AlbumHero;
