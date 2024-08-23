"use client"

import styles from './Button.module.scss'
import {IconEnum} from "@/app/utils/Icon/Icon";
import React, {useEffect, useState} from "react";
import Image from "next/image";

interface Props {
    bg: string
    title: string
    type?: string
    size?: 'normal' | 'big' | 'huge'
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


    if(props.size === 'huge') classes.push(styles.huge)
    else if(props.size === 'big') classes.push(styles.big)

    if (props.bg === 'blue') classes.push(styles.blue)
    else if (props.bg === 'pink') classes.push(styles.pink)
    else classes.push(styles.none)

    const showTitle = () => {
        return !(props.title == 'Shuffle' && isSmallScreen)
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
            {currentIcon && <Image className={styles.icon} src={IconEnum[currentIcon]} alt={''} width={24} height={24}/>}</button>
    )
}