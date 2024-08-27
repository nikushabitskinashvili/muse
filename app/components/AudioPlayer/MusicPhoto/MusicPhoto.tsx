import Image from "next/image";
import styles from './MusicPhoto.module.scss';
import { MusicPhotoProps } from "@/app/Interfaces/Interfaces";
import  { IconEnum } from "../../Icon/Icon";



const MusicPhoto: React.FC<MusicPhotoProps> = ({ src, music, artist }) => (
    <div className={styles.musicPhoto}>
        <div className={styles.photo}>
            <img src={src} alt='musicPhoto' />
        </div>
        <div className={styles.musicInfo}>
            <div className={styles.musicInfoWrapper}>
            <span className={styles.musicName}>{music}</span>
            <img src={IconEnum.VECTOR}  alt='icon'/>
            </div>
            <span className={styles.artistName}>{artist}</span>
        </div>
    </div>
);

export default MusicPhoto;
