import styles from './xButton.module.scss'
import {IconEnum} from "@/app/utils/Icon/Icon";
import {useState} from "react";
import Image from "next/image";

interface Props {
    bg: boolean;
    onClick?: () => void;
}

export const XButton = (props: Props) => {

    const classes = [styles.x]

    if (!props.bg) classes.push(styles.bgNone)

    return (
        <button className={classes.join(' ')} onClick={props.onClick}><Image alt={''} src={IconEnum.DELETE} width={24} height={24}/></button>
    )
}