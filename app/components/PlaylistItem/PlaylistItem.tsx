import styles from "./PlaylistItem.module.scss";
import Icon, {IconEnum} from "@/app/components/Icon/Icon";


interface Props {
    image: string,
    title: string,
    category: string,
    price: number,
    img: IconEnum,
    active: boolean,
}

export const PlaylistItem = (props: Props) => {
    return (
        <>
            <div className={styles.playlistItem}>
                <div className={styles.leftSection}>
                    <div className={styles.imageSection}>
                        <img className={styles.icon} src={IconEnum.AUDIO} alt="audio"/>
                        <img className={styles.image} src={props.image} alt={`album`}/>
                    </div>
                    <div className={styles.text}>
                        <span>{`${props.title} - ${props.category}`}</span>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.time}>
                        <img src={IconEnum.CLOCK} alt={''}/>
                        <span className={styles.text}>{(props.price / 60).toFixed(2)}</span>
                    </div>
                    <img className={`${styles.icon} ${styles.heart}`} src={IconEnum.HEART} alt={''}/>
                    <img className={styles.dots} src={IconEnum.DOTS} alt={''}/>
                </div>
            </div>
        </>
    )
}
