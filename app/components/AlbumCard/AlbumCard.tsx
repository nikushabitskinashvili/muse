'use client'; 
import Link from "next/link";
import styles from "./AlbumCard.module.scss";

export interface Album {
    id: number;
    title: string;
    image: string;
    name?: string;
}

const AlbumCard: React.FC<Album> = ({ id, title, image, name }) => {
    return (
        <Link href={`/albums/${id}`}>
            <div className={styles.albumCard}>
                <img className={styles.albumImg} src={image} alt={title} />
                <div className={styles.albumName}>
                    <span className={styles.albumTitle}>{title}</span>
                    <span className={styles.artistName}>{name}</span>
                </div>
            </div>
        </Link>
    );
}

export default AlbumCard;
