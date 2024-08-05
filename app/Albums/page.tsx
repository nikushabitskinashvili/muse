
import AlbumCard from '../components/AlbumCard/AlbumCard';
import styles from './page.module.scss';

const Albums = () => {
    const albums = [
        { id: 1, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 2, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 3, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 4, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 5, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 6, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 7, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 8, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 9, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 10, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 11, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 12, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 13, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 14, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 15, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 16, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 17, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 18, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 19, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 20, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 21, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 22, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 23, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 24, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' },
        { id: 25, title: 'dnckkkk', image: '/images/1.png', name: 'eminem' }

    ];

    return (
        <main className={styles.main}>
            <div className={styles.mainWrapper}>
                <div className={styles.albumTxt}>
                    <span>Popular albums</span>
                </div>
                <div className={styles.container}>
                    {albums.map(album => (
                        <AlbumCard
                            key={album.id}
                            id={album.id}
                            title={album.title}
                            image={album.image}
                            name={album.name}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Albums;
