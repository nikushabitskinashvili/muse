import styles from "./AlbumCard.module.scss";

export interface Album {
    id: number;
    title: string;
    image: string;
    name: string;
}




const AlbumCard = (props: Album) => {
    return (
        <div className={styles.albumCard}>
            <div className={styles.albumImage}>
                <img src={props.image} alt="" />
            </div>
            <div className={styles.albumName}>
                <span className={styles.albumName}>{props.title}</span>
                <span className={styles.artistName}>{props.name}</span>
            </div>

        </div>
    )
}

export default AlbumCard;
