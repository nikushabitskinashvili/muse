import styles from "./PlaylistItem.module.scss";
import {IconEnum} from "@/app/components/Icon/Icon";


interface Props {
    image?: string,
    title?: string,
    name?: string,
    duration: number,
    img?: IconEnum,
    id: number;
    onClick?: () => void,
    icon: 'dots' | 'bin',
    className?: string;
    setActiveId: (data: number | null) => void;
    activeId: number | null;
}


export const PlaylistItem = (props: Props) => {
    const isActive = props.activeId === props.id

    const icon =  props.icon === "bin"? IconEnum.BIN: IconEnum.DOTS
    const onClick = () => {
        isActive ? props.setActiveId(null) : props.setActiveId(props.id);
    }
    const classNames = [styles.playlistItem];

    if (isActive) classNames.push(styles.active);

    return (
            <div className={classNames.join(' ').trim()} onClick={onClick}>
                <div className={styles.leftSection}>
                    <div className={styles.imageSection}>
                        <img className={styles.icon} src={IconEnum.AUDIO} alt="audio"/>
                        <img className={styles.image} src={props.image} alt={`album`}/>
                    </div>
                    <div className={styles.text}>
                        <span>{`${props.title} - ${props.name}`}</span>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.time}>
                        <img src={IconEnum.CLOCK} alt={''}/>
                        <span className={styles.text}>{(props.duration / 60).toFixed(2)}</span>
                    </div>
                    <img className={`${styles.icon} ${styles.heart}`} src={IconEnum.HEART} alt={''}/>
                    <img className={styles.dots} src={icon} alt={''}/>
                </div>
            </div>
    )
}
