import React from 'react';
import AdjustButtons from '../AdjustButtons/AdjustButtons';
import styles from './Player.module.scss';
import ProgressBars from '../ProgressBars/ProgressBars';

type Props = {
    playing: boolean;
    currentTime: number;
    duration: number;
    progressRef: React.RefObject<HTMLInputElement>;
    ipadProgressRef: React.RefObject<HTMLInputElement>;
    onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
};

const Player = ({
    playing,
    currentTime,
    duration,
    progressRef,
    ipadProgressRef,
    onProgressChange,
    onPreviousSong,
    onNextSong,
    onPlayMusic,
}: Props) => {
    return (
        <div className={styles.musicMiddle}>
            <AdjustButtons 
                onPreviousSong={onPreviousSong}
                onNextSong={onNextSong}
                onPlayMusic={onPlayMusic}
                playing={playing}
            />
            <ProgressBars
                currentTime={currentTime}
                duration={duration}
                onProgressChange={onProgressChange}
                progressRef={progressRef}
                ipadProgressRef={ipadProgressRef}
            />
        </div>
    );
};

export default Player;
