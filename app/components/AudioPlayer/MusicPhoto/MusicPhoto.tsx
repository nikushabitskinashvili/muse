import Image from "next/image";
import styles from './MusicPhoto.module.scss';
import { MusicPhotoProps } from "@/app/Interfaces/Interfaces";
import  { IconEnum } from "../../Icon/Icon";



const MusicPhoto: React.FC<MusicPhotoProps> = ({ src, artistImg, musicName,artistName }) => (
    <div className={styles.musicPhoto}>
        <div className={styles.photo}>
            <Image src={artistImg} width={64} height={64} alt='musicPhoto' />
        </div>
        <div className={styles.musicInfo}>
            <div className={styles.musicInfoWrapper}>
            <span className={styles.musicName}>{musicName}</span>
            <Image src={IconEnum.VECTOR} width={20} height={20}  alt='icon'/>
            </div>
            
            <span className={styles.artistName}>{artistName}</span>
        </div>
    </div>
);

export default MusicPhoto;
