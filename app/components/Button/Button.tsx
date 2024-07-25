"use client"

import styles from './Button.module.scss'
import {IconEnum} from "@/app/utils/Icon/Icon";
import {useEffect, useState} from "react";

interface Props {
    bg: string
    title: string
    size?: 'normal' | 'big'
    icon?: keyof typeof IconEnum;
    hoverIcon?: keyof typeof IconEnum;
    activeIcon?: keyof typeof IconEnum;
}

export const Button = (props: Props) => {

    const [currentIcon, setCurrentIcon] = useState(props.icon);
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 767);
        };

        handleResize();
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    const handleMouseOver = () => {
        setCurrentIcon(props.hoverIcon);
    }

    const handleMouseOut = () => {
        setCurrentIcon(props.icon);

    }

    const handleMouseDown = () => {
        setCurrentIcon(props.activeIcon);
    }
    console.log(currentIcon)

    const handleMouseUp = () => {
        setCurrentIcon(currentIcon);
    }


    const classes = [styles.container]


    props.size === 'big' ? classes.push(styles.big) : classes.push('normal')

    if (props.bg === 'blue') classes.push(styles.blue)
    else if (props.bg === 'pink') classes.push(styles.pink)
    else classes.push(styles.none)

    const showTitle = () => {
        const show = !(props.title == 'Shuffle' && isSmallScreen)
        return show
    }

    return (
        <button
            className={classes.join(' ')}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {showTitle() && <span className={styles.title}>{props.title}</span>}
            {currentIcon && <img className={styles.icon} src={IconEnum[currentIcon]} alt={''}/>}</button>
    )
}