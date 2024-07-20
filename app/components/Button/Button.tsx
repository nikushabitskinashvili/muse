"use client"

import styles from './Button.module.scss';
import { IconEnum } from '../../utils/Icon/Icon';


type Props = {
    title: string;
    className: string;
    disabled?: boolean;
    Icon?: keyof typeof IconEnum;
    color?: string;

    onClick?: () => void

}

export const Button = (props : Props) => {
    const classes = [];
    if(props.className == 'container') classes.push(styles.container)
    else if(props.className == 'play') classes.push(styles.play)
    else if(props.className == 'shuffle') classes.push(styles.shuffle)
    else if(props.className == 'create') classes.push(styles.create)
    else if(props.className == 'delete') classes.push(styles.delete)
    else if(props.className == 'cancel') classes.push(styles.cancel)

    if(props.color == 'pink' ) classes.push(styles.playPink)

    return(
        <button className={classes.join(' ')}>
            {props.title} {props.Icon && <img className={styles.icon} src={IconEnum[props.Icon]} alt='img' />} 
        </button>
    )
}