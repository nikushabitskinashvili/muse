import React, { useState, useEffect } from "react";
import styles from "./AudioPlayer.module.scss";
import { Music } from "@/app/Interfaces/Interfaces";
import { useAudioPlayer } from "@/app/Helpers/Helpers";
import MusicPhoto from "./MusicPhoto/MusicPhoto";
import Player from "./Player/Player";
import VolumeControl from "./VolumeControl/VolumeControl";

type Props = {
  musics: Music[];
};

const AudioPlayer = ({ musics }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const {
    audioRef,
    progressRef,
    ipadProgressRef,
    audioPlayer,
    handleProgressChange,
    PlayMusic,
    handleNextSong,
    handlePreviousSong,
    handleShuffleClick,
  } = useAudioPlayer(musics);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      PlayMusic();
    }
  }, [audioPlayer.currentMusicIndex, PlayMusic, audioRef]); 


  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <audio
          ref={audioRef}
          src={musics[audioPlayer.currentMusicIndex]?.audioSrc}
          controls
        ></audio>
        <MusicPhoto
          src={musics[audioPlayer.currentMusicIndex]?.src}
          music={musics[audioPlayer.currentMusicIndex]?.music}
          artist={musics[audioPlayer.currentMusicIndex]?.artist}
        />
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
          toggleShuffle={handleShuffleClick}
          isShuffleActive={audioPlayer.shuffle}
        />
        
        <VolumeControl audioRef={audioRef} />

      </div>
    </>
  );
};

export default AudioPlayer;
