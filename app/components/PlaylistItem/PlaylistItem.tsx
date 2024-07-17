import styles from "./PlaylistItem.module.scss";
import Icon, {IconEnum} from "@/app/components/Icon/Icon";
import {ReactNode, useEffect, useState} from "react";
import axios from "axios";


interface Props {
    image: string,
    title: string,
    category: string,
    price: number,
    img: IconEnum,
    active: boolean,
}

export const PlaylistItem = (props: Props) => {

    const [playlist, setPlaylist] = useState<Props[]>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setPlaylist(res.data)

            })
            .catch(err => console.error(err));
    }, []);
    console.log(playlist)



    return (
        <>
            {playlist.map((item, index) => (
                <div key={index} className={styles.playlistItem}>
                    <div className={styles.leftSection}>
                        <div className={styles.imageSection}>
                            <img className={styles.icon} src={IconEnum.AUDIO} alt="audio"/>
                            <img className={styles.image} src={item.image} alt={`album ${index}`}/>
                        </div>
                        <div className={styles.text}>
                            <span>{`${item.title} - ${item.category}`}</span>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.time}>
                            <img src={IconEnum.CLOCK} alt={''}/>
                            <span className={styles.text}>{(item.price/60).toFixed(2)}</span>
                        </div>
                        <img className={`${styles.icon} ${styles.heart}`} src={IconEnum.HEART} alt={''} />
                        <img className={styles.dots} src={IconEnum.DOTS} alt={''}/>
                    </div>
                </div>
            ))}
        </>
    )
}

