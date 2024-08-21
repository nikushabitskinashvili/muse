'use client';
import styles from "./AlbumCard.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Props{
    className?: string;
}

const AlbumCard = ({item, className}: { item: any, className?: string }) => {
    return (
            <Link className={`${styles.albumCard} ${className}`} href={`albums/${item.id}`}>
                <div className={styles.albumCard}>
                    <Image className={styles.albumImg} src={item.img} alt={item.title} width={150} height={146}/>
                    <div className={styles.albumName}>
                        <span className={styles.albumTitle}>{item.title}</span>
                        <span className={styles.artistName}>{item.subTitle}</span>
                    </div>
                </div>
            </Link>
    );
}

export default AlbumCard;
