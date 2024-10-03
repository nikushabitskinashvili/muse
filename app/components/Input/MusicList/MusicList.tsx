import Image from "next/image";
import styles from "./MusicList.module.scss";
import { playerProps } from "@/app/Interfaces/Interfaces";

const MusicList: React.FC<playerProps> = (props) => {


    const handlePlayClick = async () => {

        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <li className={styles.result} onClick={handlePlayClick}>
            <p className={styles.musicParagraphStyle}>
                <span className={styles.musicStyle}>Music: </span>
                {props.name}
            </p>
        </li>
    )
}

export default MusicList;