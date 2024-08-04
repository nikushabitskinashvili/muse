import React from 'react';
import Image from 'next/image';
import styles from './AdjustButtons.module.scss';
import { IconEnum } from '../../Icon/Icon';

type Props = {
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
    playing: boolean;
};

const AdjustButtons: React.FC<Props> = ({
    onPreviousSong,
    onNextSong,
    onPlayMusic,
    playing,
}) => {
    return (
        <div className={styles.adjustButtons}>
            <div className={styles.adjustButton}>
                <Image src={IconEnum.SHUFFLE} alt='shuffle' width={24} height={24} />
            </div>
            <div className={styles.adjustButton}>
                <Image src={IconEnum.PREVOUS} alt='previousMusicButton' width={24} height={24} onClick={onPreviousSong} />
            </div>
            <div  className={styles.mainButton}>
                <Image src={playing ? IconEnum.PAUSE : IconEnum.PLAY} alt='playbutton' width={24} height={24} onClick={onPlayMusic} />
            </div>
            <div className={styles.adjustButton}>
                <Image src={IconEnum.NEXT} alt='nextMusicButton' width={24} height={24} onClick={onNextSong} />
            </div>
            <div className={styles.adjustButton}>
                <Image src={IconEnum.ROTATE} alt='loop' width={24} height={24} />
            </div>
            
        </div>
    );
};

export default AdjustButtons;
