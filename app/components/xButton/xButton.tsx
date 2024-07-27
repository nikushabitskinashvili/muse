import styles from './xButton.module.scss'
import {IconEnum} from "@/app/utils/Icon/Icon";

export const XButton = () => {
    return (
        <button className={styles.x}><img src={IconEnum.DELETE}/></button>
    )
}