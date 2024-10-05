"use client"
import React, { createContext, useContext, useRef, useState } from 'react';
import { Music } from '@/app/Interfaces/Interfaces';

interface AudioContextType {
  musics: Music[];
  currentMusicIndex: number;
  isPlaying: boolean;
  setMusics: React.Dispatch<React.SetStateAction<Music[]>>;
  playMusic: (index: number) => void;
  togglePlayPause: () => void;
  handleNextSong: () => void;
  handlePreviousSong: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [musics, setMusics] = useState<Music[]>([]);
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isPlaying = audioRef.current ? !audioRef.current.paused : false;

  const playMusic = (index: number) => {
    setCurrentMusicIndex(index);
    if (audioRef.current) {
      audioRef.current.src = musics[index].musicSrc;
      audioRef.current.play();
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleNextSong = () => {
    setCurrentMusicIndex((prev) => (prev + 1) % musics.length);
  };

  const handlePreviousSong = () => {
    setCurrentMusicIndex((prev) => (prev - 1 + musics.length) % musics.length);
  };

  return (
    <AudioContext.Provider
      value={{
        musics,
        currentMusicIndex,
        isPlaying,
        setMusics,
        playMusic,
        togglePlayPause,
        handleNextSong,
        handlePreviousSong,
      }}
    >
      {children}
      <audio ref={audioRef} src={musics[currentMusicIndex]?.musicSrc} />
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
