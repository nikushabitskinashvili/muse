import React from 'react';
import Image from 'next/image';
import styles from './AdjustButtons.module.scss';
import { IconEnum } from '../../Icon/Icon';

type Props = {
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
    playing: boolean;
    toggleShuffle: () => void;
    isShuffleActive: boolean; 
};

const AdjustButtons: React.FC<Props> = ({
    onPreviousSong,
    onNextSong,
    onPlayMusic,
    playing,
    toggleShuffle,
    isShuffleActive, 
}) => {
    return (
        <div className={styles.adjustButtons}>
            <div className={styles.adjustButton}>
                <Image
                    src={isShuffleActive ? IconEnum.SHUFFLE_ACTIVE : IconEnum.SHUFFLE} 
                    width={24}
                    height={24}
                    alt='shuffle'
                    onClick={toggleShuffle}
                />
            </div>
            <div className={styles.adjustButton}>
                <Image src={IconEnum.PREVOUS} width={24} height={24} alt='previousMusicButton' onClick={onPreviousSong} />
            </div>
            <div className={styles.mainButton}>
                <Image
                    src={playing ? IconEnum.PAUSE : IconEnum.PLAY}
                    width={24}
                    height={24}
                    alt='playbutton'
                    onClick={onPlayMusic}
                />
            </div>
            <div className={styles.adjustButton}>
                <Image src={IconEnum.NEXT} width={24} height={24} alt='nextMusicButton' onClick={onNextSong} />
            </div>
            <div className={styles.adjustButton}>
                <Image src={IconEnum.ROTATE} width={24} height={24} alt='loop' />
            </div>
        </div>
    );
};

export default AdjustButtons;
