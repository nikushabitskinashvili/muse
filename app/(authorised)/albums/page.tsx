import { popularAlbum } from '@/app/data/CarouselData';
import styles from './page.module.scss';
import AlbumCard from '@/app/components/AlbumCard/AlbumCard';

const Albums = () => {
    //     const albums = [
    //         { id: 1, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 2, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 3, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 4, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 5, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 6, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 7, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 8, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 9, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 10, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 11, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
    //         { id: 12, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' }
    //     ];

    let info = popularAlbum

    return (
        <main className={styles.main}>
            <div className={styles.mainWrapper}>
                <div className={styles.albumTxt}>
                    <span>Popular albums</span>
                </div>
                <div className={styles.container}>
                    {info.map((item)=> (
                    <AlbumCard
                        // title={title}
                        item={item}
                    />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Albums;
