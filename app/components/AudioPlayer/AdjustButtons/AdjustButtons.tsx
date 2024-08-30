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
                <img src={IconEnum.SHUFFLE} alt='shuffle' />
            </div>
            <div className={styles.adjustButton}>
                <img src={IconEnum.PREVOUS} alt='previousMusicButton'  onClick={onPreviousSong} />
            </div>
            <div  className={styles.mainButton}>
                <img src={playing ? IconEnum.PAUSE : IconEnum.PLAY} alt='playbutton'  onClick={onPlayMusic} />
            </div>
            <div className={styles.adjustButton}>
                <img src={IconEnum.NEXT} alt='nextMusicButton' onClick={onNextSong} />
            </div>
            <div className={styles.adjustButton}>
                <img src={IconEnum.ROTATE} alt='loop'  />
            </div>
            
        </div>
    );
};

export default AdjustButtons;
