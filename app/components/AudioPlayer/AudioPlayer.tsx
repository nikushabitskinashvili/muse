import React from 'react';
import styles from './AudioPlayer.module.scss';
import { Song } from '@/app/Interfaces/Interfaces';
import { useAudioPlayer } from '@/app/Helpers/Helpers';
import MusicPhoto from './MusicPhoto/MusicPhoto';
import Player from './Player/Player';
import VolumeControl from './VolumeControl/VolumeControl';

type Props = {
    songs: Song[];
};

const AudioPlayer = ({ songs }: Props) => {
    const { audioRef, progressRef, ipadProgressRef, audioPlayer, handleProgressChange, PlayMusic, handleNextSong, handlePreviousSong } = useAudioPlayer(songs);

    const isPlaying = audioRef.current ? !audioRef.current.paused : false;

    return (
        <div className={styles.container}>
            <div className={styles.containerWrapper}>
                <audio ref={audioRef} src={songs[audioPlayer.currentSongIndex].audioSrc} controls></audio>
                <MusicPhoto src={songs[audioPlayer.currentSongIndex].src} music={songs[audioPlayer.currentSongIndex].music} artist={songs[audioPlayer.currentSongIndex].artist} />
                <Player 
                    playing={isPlaying} 
                    currentTime={audioPlayer.currentTime} 
                    duration={audioPlayer.duration} 
                    progressRef={progressRef} 
                    ipadProgressRef={ipadProgressRef} 
                    onProgressChange={handleProgressChange}  
                    onPreviousSong={handlePreviousSong} 
                    onNextSong={handleNextSong} 
                    onPlayMusic={PlayMusic} 
                />
                <VolumeControl audioRef={audioRef} />
            </div>
        </div>
    );
};

export default AudioPlayer;
