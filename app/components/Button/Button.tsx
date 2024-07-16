"use client"
import { ReactNode } from 'react';
import styles from './Button.module.scss';
import { IconEnum } from '../Icon/Icon';
import { colorsEnum } from '@/app/utils/colors.enum';

type Props = {
    title: string;
    className?: string;
    disabled?: boolean;
    Icon?: keyof typeof IconEnum;

    color?: string;
    variant?: 'main' | 'play' | 'shuffle' | 'create' | 'delete' | 'cancel';
    onClick?: () => void

}

export default (props : Props) => {
    const classes = [];
    if(props.variant == 'main') classes.push(styles.container)
    else if(props.variant == 'play') classes.push(styles.play)
    if(props.color == 'pink' ) classes.push(styles.playPink)
    if(props.variant == 'shuffle') classes.push(styles.shuffle)
    if(props.variant == 'create') classes.push(styles.create)
    if(props.variant == 'delete') classes.push(styles.delete)
    if(props.variant == 'cancel') classes.push(styles.cancel)
    
    
    return(
        <button className={classes.join(' ')}>
            {props.title} {props.Icon && <img className={styles.icon} src={IconEnum[props.Icon]} alt='img' />} 
        </button>
    )
}