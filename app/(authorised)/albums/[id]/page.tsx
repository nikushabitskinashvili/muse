'use client'
import styles from './page.module.scss';
import { AlbumHero } from '@/app/components/AlbumHero/AlbumHero';
import { PlaylistItem } from '@/app/components/PlaylistItem/PlaylistItem';

const AlbumDetailsPage = () => {

    const album = {
        title: 'sdhsdsdhc',
        image: '/images/1.png',
        total: 2
    }
    const playlist = [
        {
            id: 1,
            title: "Happier Than Ever (Official Music Video)",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            duration: 202,
        },
        {
            id: 2,
            title: "Bad Guy",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            duration: 202,
        },
        {
            id: 3,
            title: "Therefore I Am",
            image: "/images/foryou.png",
            name: "Billie Eilish",
            duration: 202,
        }
    ];




    return (
        <div className={styles.albumDetails}>
            <AlbumHero title={album.title} image={album.image} total={album.total} />
            <div className={styles.list}>
                {playlist.map(album => (
                    <PlaylistItem
                        key={album.id}
                        title={album.title}
                        image={album.image}
                        duration={album.duration}
                        icon={'dots'}
                        name={album.name} />
                ))}
            </div>
        </div>
    );
};

export default AlbumDetailsPage;