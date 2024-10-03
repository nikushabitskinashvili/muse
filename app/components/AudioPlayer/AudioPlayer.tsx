"use client";

import React, { useEffect, useState } from "react";
import styles from "./AudioPlayer.module.scss";
import { Music } from "@/app/Interfaces/Interfaces";
import { useAudioPlayer } from "@/app/Helpers/Helpers";
import MusicPhoto from "./MusicPhoto/MusicPhoto";
import Player from "./Player/Player";
import VolumeControl from "./VolumeControl/VolumeControl";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import  Axios  from "./../../Helpers/Axios";

type Props = {
  musics: Music[];
};

const AudioPlayer = ({ musics }: Props) => {
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

  const [artist,setArtist]=useState<any>(null)

  console.log(artist)

  const isPlaying = audioRef.current ? !audioRef.current.paused : false;

  const id = musics[audioPlayer.currentMusicIndex].artistId
  useEffect(() => {
    if (id) {
      const fetchArtistName = async () => {
        const token = getClientCookie(AUTH_COOKIE_KEY);
        try {
          const response = await Axios.get(`/artist/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setArtist(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchArtistName();
    }
  }, [id]);
  

  console.log(musics[audioPlayer.currentMusicIndex])

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <audio
          ref={audioRef}
          src={musics[audioPlayer.currentMusicIndex]?.musicSrc}
          controls
        ></audio>
        <MusicPhoto
          src={musics[audioPlayer.currentMusicIndex]?.src}
          music={musics[audioPlayer.currentMusicIndex]?.music}
          musicName={musics[audioPlayer.currentMusicIndex]?.name}
          artistName={artist?.name}
          artistImg={artist?.image}
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
    </div>
  );
};

export default AudioPlayer;
