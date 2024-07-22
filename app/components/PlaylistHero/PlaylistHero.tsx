import styles from './PlaylistHero.module.scss'
import {IconEnum} from "@/app/utils/Icon/Icon";
import {Button} from "@/app/components/Button/Button";


interface Props {
    image: string,
    playlistName: string,
    totalTracks: number,
    totalTime: number
}

export const PlaylistHero = (props: Props) => {

    let time

    const hours = Math.floor(props.totalTime / 3600);
    const minutes = Math.floor((props.totalTime % 3600) / 60);
    const seconds = props.totalTime % 60;

    if (props.totalTime > 3600) {
        time = `${hours}:${minutes}:${seconds}`;
    } else {
        time = `${minutes}:${seconds}`;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.h2}>Summer Vibe</h2>
                <div className={styles.icons}>
                    <img className={styles.icon} src={IconEnum.PEN} alt=""/>
                    <img className={styles.icon} src={IconEnum.BIN} alt=""/>
                </div>
            </div>
            <div className={styles.main}>
                <img className={styles.image} src={props.image}/>
                <div className={styles.control}>
                    <div className={styles.desc}>
                        <span className={styles.text}>Playlist</span>
                        <h3 className={styles.playlistName}>{props.playlistName}</h3>
                        <span className={styles.about}>{props.totalTracks} tracks - <span className={styles.time}><img className={styles.clock} src={IconEnum.CLOCK}/> {time}</span></span>
                    </div>
                    <div className={styles.buttons}>
                        <img className={styles.pause} src={IconEnum.PAUSE} alt={''}/>
                        <Button title={'shuffle'} className={'shuffle'} Icon={'SHUFFLE'} color={'pink'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}