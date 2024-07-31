// components/AlbumCard/AlbumCard.tsx
'use client';
import styles from "./AlbumCard.module.scss";
import Link from "next/link";

export interface Album {
    id: number;
    title: string;
    image: string;
    name?: string;
    className?: string;
    onClick?: void;
}

const AlbumCard = (props: Album) => {
    return (
        <Link href={`/album/${props.id}`}>
            <div className={styles.albumCard}>
                <img className={styles.albumImg} src={props.image} alt={props.title} />
                <div className={styles.albumName}>
                    <span className={styles.albumTitle}>{props.title}</span>
                    <span className={styles.artistName}>{props.name}</span>
                </div>
            </div>
        </Link>
    );
}

export default AlbumCard;
