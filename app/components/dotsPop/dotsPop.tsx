import Image from "next/image";
import {IconEnum} from "@/app/utils/Icon/Icon";
import styles from './dotsPop.module.scss'
import React from "react";

interface Props {
    className?: string;
    createNewPlaylist: (event: React.MouseEvent) => void;
    addToPlaylist?: (event: React.MouseEvent) => void;
    onClick?: () => void;
}

export const DotsPop = (props:Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.add} onClick={props.addToPlaylist}><Image className={styles.plus} src={IconEnum.PLUS} alt={''} width={16} height={16}/><span className={styles.text}>Add to your playlist</span></div>
            <div className={styles.line}></div>
            <span className={styles.text} onClick={props.createNewPlaylist}>Create new playlist</span>
        </div>
    )
}