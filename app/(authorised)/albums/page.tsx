import { popularAlbum } from '@/app/data/CarouselData';
import styles from './page.module.scss';
import AlbumCard from '@/app/components/AlbumCard/AlbumCard';

const Albums = () => {

    let info = popularAlbum

    return (
        <main className={styles.main}>
            <div className={styles.mainWrapper}>
                <div className={styles.albumTxt}>
                    <span>Popular albums</span>
                </div>
                <div className={styles.container}>
                    {info.map((item) => (
                        <AlbumCard
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Albums;
