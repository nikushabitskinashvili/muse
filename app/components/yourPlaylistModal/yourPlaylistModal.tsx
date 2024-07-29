import styles from './yourPlaylistModal.module.scss'
import {XButton} from "@/app/components/xButton/xButton";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import {createStyleRegistry} from "styled-jsx";

const albums = [
    { id: 1, title: 'Album 1', image: '/images/playlist.png', name: 'Artist 1' },
    { id: 2, title: 'Album 2', image: '/images/playlist1.png', name: 'Artist 2' },
    { id: 3, title: 'Album 3', image: '/images/playlist2.png', name: 'Artist 3' },
    { id: 4, title: 'Album 4', image: '/images/playlist3.png', name: 'Artist 4' },
    { id: 5, title: 'Album 5', image: '/images/playlist4.png', name: 'Artist 5' },
    { id: 6, title: 'Album 6', image: '/images/playlist5.png', name: 'Artist 6' },
    { id: 7, title: 'Album 7', image: '/images/playlist6.png', name: 'Artist 7' },
    { id: 8, title: 'Album 8', image: '/images/3.png', name: 'Artist 8' },
];

export const YourPlaylistModal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <span className={styles.title}>Your playlist</span>
                <XButton/>
            </div>
            <div className={styles.cards}>
                {albums.map(album => (
                    <AlbumCard
                        className={styles.card}
                        key={album.id}
                        id={album.id}
                        title={album.title}
                        image={album.image}
                    />
                ))}
            </div>
        </div>
    )
}