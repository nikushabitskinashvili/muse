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

export default (props : Props) => {
    const classes = [];
    if(props.className == 'container') classes.push(styles.container)
    else if(props.className == 'play') classes.push(styles.play)
    if(props.color == 'pink' ) classes.push(styles.playPink)
    if(props.className == 'shuffle') classes.push(styles.shuffle)
    if(props.className == 'create') classes.push(styles.create)
    if(props.className == 'delete') classes.push(styles.delete)
    if(props.className == 'cancel') classes.push(styles.cancel)
    
    
    return(
        <button className={classes.join(' ')}>
            {props.title} {props.Icon && <img className={styles.icon} src={IconEnum[props.Icon]} alt='img' />} 
        </button>
    )
}