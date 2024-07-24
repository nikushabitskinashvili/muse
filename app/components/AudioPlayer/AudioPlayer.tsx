import React from 'react';
import styles from './AudioPlayer.module.scss';
import { Song } from '@/app/Interfaces/Interfaces';
import { useAudioPlayer } from '@/app/Helpers/Helpers';
import MusicPhoto from './MusicPhoto/MusicPhoto';
import Player from './Player/Player';
import Volume from './Wrapper/Volume/Volume';
type Props = {
    songs: Song[];
};

const AudioPlayer = ({ songs }: Props) => {
    const { audioRef, progressRef, ipadProgressRef, audioPlayer, handleProgressChange, PlayMusic,  handleNextSong, handlePreviousSong
    } = useAudioPlayer(songs);

    const isPlaying = audioRef.current ? audioRef.current.paused : false;

    return (
        <>
            <audio ref={audioRef} src={songs[audioPlayer.currentSongIndex].audioSrc}></audio>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <MusicPhoto src={songs[audioPlayer.currentSongIndex].src} music={songs[audioPlayer.currentSongIndex].music} artist={songs[audioPlayer.currentSongIndex].artist} />
                    <Player playing={isPlaying} currentTime={audioPlayer.currentTime} duration={audioPlayer.duration} progressRef={progressRef} ipadProgressRef={ipadProgressRef} onProgressChange={handleProgressChange}  onPreviousSong={handlePreviousSong} onNextSong={handleNextSong} onPlayMusic={PlayMusic} />
                    <Volume/>
                </div>
            </div>
        </>
    );
};

export default AudioPlayer;