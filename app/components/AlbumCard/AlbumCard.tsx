'use client';
import styles from "./AlbumCard.module.scss";
import Link from "next/link";
import Image from "next/image";

const AlbumCard = ({item, className, playlist}: { item: any, className?: string, playlist?:boolean}) => {

    let link

    if(playlist) link = `{playlists/${item.id}`
    else link = `{albums/${item.id}}`

    return (
            <Link className={`${styles.albumCard} ${className}`} href={`${link}`}>
                    <Image className={styles.albumImg} src={item.img} alt={item.title} width={150} height={146}/>
                    <div className={styles.albumName}>
                        <span className={styles.albumTitle}>{item.title}</span>
                        <span className={styles.artistName}>{item.subTitle}</span>
                    </div>
            </Link>
    );
}

export default AlbumCard;
