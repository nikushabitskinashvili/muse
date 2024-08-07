import styles from './xButton.module.scss'
import {IconEnum} from "@/app/utils/Icon/Icon";

interface Props {
    bg: boolean
    onClick?: () => void
}

export const XButton = (props: Props) => {

    const classes = [styles.x]

    if (!props.bg) classes.push(styles.bgNone)

    return (
        <button className={classes.join(' ')}><img src={IconEnum.DELETE}/></button>
    )
}