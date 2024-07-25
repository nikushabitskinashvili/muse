"use client"

import styles from './Button.module.scss';
import { IconEnum } from '../../utils/Icon/Icon';


type Props = {
    title: string;
    name: string;
    disabled?: boolean;
    Icon?: keyof typeof IconEnum;
    color?: string;

    onClick?: () => void

}

export const Button = (props : Props) => {

    const classes = [];

    if(props.color === 'pink' ) classes.push(styles.playPink)

    if(props.name == 'container') classes.push(styles.container)
    else if(props.name == 'play') classes.push(styles.play)
    else if(props.name == 'shuffle') classes.push(styles.shuffle)
    else if(props.name == 'create') classes.push(styles.create)
    else if(props.name == 'delete') classes.push(styles.delete)
    else if(props.name == 'cancel') classes.push(styles.cancel)



    return(
        <button className={classes.join(' ')}>
            {props.title} {props.Icon && <img className={styles.icon} src={IconEnum[props.Icon]} alt='img' />} 
        </button>
    )
}