'use client'
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./page.module.css";

const Albums = () => {

    const albums = [
        {
            id: 1,
            title: 'dnckkkk',
            image: '/images/caver.svg',
            name: 'eminem'
        },
        {
            id: 2,
            title: 'dnckkkk',
            image: '/images/caver.svg',
            name: 'eminem'
        }
    ]
    return (
        <main className={styles.main}>
            {albums.map(album => (
                <AlbumCard key={album.id} id={album.id} title={album.title} image={album.image} name={album.name} />
            ))}


        </main>
    );
}

export default Albums;

