'use client';
import styles from "./AlbumCard.module.scss";
import Link from "next/link";


// export interface Album {
//     id?: number;
//     item: string;
//     title?: string;
//     image?: string;
//     name?: string;
//     className?: string;
//     onClick?: void;
// }

const AlbumCard = ({item}: {item: any }) => {
    return (
            <Link className={styles.albumCard} href={`album/${item.id}`}>
                <div className={styles.albumCard}>
                    <img className={styles.albumImg} src={item.img} alt={item.title} />
                    <div className={styles.albumName}>
                        <span className={styles.albumTitle}>{item.title}</span>
                        <span className={styles.artistName}>{item.subTitle}</span>
                    </div>
                </div>
            </Link>
    );
}

export default AlbumCard;
