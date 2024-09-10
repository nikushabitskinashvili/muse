import { popularAlbum } from '@/app/data/CarouselData';
import styles from './page.module.scss';
import AlbumCard from '@/app/components/AlbumCard/AlbumCard';

const Albums = () => {


    return (
        <div className={styles.main}>
            <div className={styles.mainWrapper}>
                <div className={styles.albumTxt}>
                    <span>Popular albums</span>
                </div>
                <div className={styles.container}>
                    {popularAlbum.map((item) => (
                        <AlbumCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Albums;
