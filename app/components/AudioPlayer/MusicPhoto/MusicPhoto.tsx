import Image from "next/image";
import styles from './MusicPhoto.module.scss';
import { MusicPhotoProps } from "@/app/Interfaces/Interfaces";
import  { IconEnum } from "../../Icon/Icon";



const MusicPhoto: React.FC<MusicPhotoProps> = ({ src, music, artist }) => (
    <div className={styles.musicPhoto}>
        <div className={styles.photo}>
            <Image src={src} width={64} height={64} alt='musicPhoto' />
        </div>
        <div className={styles.musicInfo}>
            <div className={styles.musicInfoWrapper}>
            <span className={styles.musicName}>{music}</span>
            <Image src={IconEnum.VECTOR} width={19} height={19}  alt='icon'/>
            </div>
            <span className={styles.artistName}>{artist}</span>
        </div>
    </div>
);

export default MusicPhoto;
