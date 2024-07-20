import styles from "./ArtistHero.module.scss"
import {images} from "next/dist/build/webpack/config/blocks/images";

interface Props {
    artistName: string,
    imgSrc: string,
    songsCount: number,
}

export const ArtistHero = (props: Props) => {

    const style ={
        backgroundImage: `url(${props.imgSrc})`,
    }

    return (
        <div style={style} className={styles.container}>
            <h2 className={styles.h}>The artist</h2>
            <div className={styles.artist}>
                <span className={styles.artistName}>{props.artistName}</span>
                <span className={styles.songsCount}>{`${props.songsCount} total songs`}</span>
            </div>
        </div>
    )
}