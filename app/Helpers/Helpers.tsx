import { useRef, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import {audioPlayerState, SongsState} from "@/app/atoms/states";
import { Music } from "../Interfaces/Interfaces";

export const useAudioPlayer = () => {
  const [songs,] = useRecoilState(SongsState);
  const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const ipadProgressRef = useRef<HTMLInputElement>(null);
  const shuffledSongsRef = useRef<Music[]>([]);

  const shuffleArray = (array: Music[]) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Memoized handleNextSong to avoid recreation on every render
  const handleNextSong = useCallback(() => {
    setAudioPlayer((prev) => {
      let nextIndex: number = prev.shuffle
        ? Math.floor(Math.random() * songs.length)
        : (prev.currentMusicIndex + 1) % songs.length;

      if (nextIndex === prev.currentMusicIndex) {
        nextIndex = (nextIndex + 1) % songs.length;
      }

      return {
        ...prev,
        currentMusicIndex: nextIndex,
        currentTime: 0,
        duration: 0,
      };
    });
  }, [setAudioPlayer, songs.length]);

  console.log(audioPlayer, '1111111111111111111111111111111111111111111111111111111111111111111111')

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setAudioPlayer((prev) => ({
          ...prev,
          currentTime: audioRef.current!.currentTime,
        }));
        const progressValue = String(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
        if (progressRef.current) progressRef.current.value = progressValue;
        if (ipadProgressRef.current) ipadProgressRef.current.value = progressValue;
      }
    };

    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        setAudioPlayer((prev) => ({
          ...prev,
          duration: audioRef.current!.duration,
        }));
      }
    };

    const handleEnded = () => {
      handleNextSong();
    };

    if (audioRef.current) {
      const audio = audioRef.current;
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [handleNextSong, setAudioPlayer]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioPlayer((prev) => ({
        ...prev,
        currentTime: 0,
        duration: 0,
      }));
    }
  }, [audioPlayer.currentMusicIndex, setAudioPlayer]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioPlayer.currentMusicIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [setAudioPlayer]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = (e.target.valueAsNumber / 100) * audioPlayer.duration;
      audioRef.current.currentTime = newTime;
      setAudioPlayer((prev) => ({ ...prev, currentTime: newTime }));
    }
  };

  const PlayMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleTenSecondsBack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
      setAudioPlayer((prev) => ({
        ...prev,
        currentTime: audioRef.current!.currentTime,
      }));
    }
  };

  const handlePreviousSong = () => {
    setAudioPlayer((prev) => {
      const prevIndex = prev.shuffle
        ? (prev.currentMusicIndex - 1 + shuffledSongsRef.current.length) % shuffledSongsRef.current.length
        : (prev.currentMusicIndex - 1 + songs.length) % songs.length;
      
      return {
        ...prev,
        currentMusicIndex: prevIndex,
        currentTime: 0,
        duration: 0,
      };
    });
  };

  const handleVolumeDown = () => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, audioRef.current.volume - 5);
    }
  };

  const handleVolumeUp = () => {
    if (audioRef.current) {
      audioRef.current.volume = Math.min(25, audioRef.current.volume + 5);
    }
  };

  const handleShuffleClick = () => {
    setAudioPlayer((prev) => {
      if (!prev.shuffle) {
        shuffledSongsRef.current = shuffleArray(songs);
      }
      return { ...prev, shuffle: !prev.shuffle };
    });
  };

  const toggleLoop = () => {
    setAudioPlayer((prev) => ({ ...prev, loop: !prev.loop }));
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop;
    }
  };

  return {
    audioRef,
    progressRef,
    ipadProgressRef,
    audioPlayer,
    handleProgressChange,
    PlayMusic,
    handleTenSecondsBack,
    handleNextSong,
    handlePreviousSong,
    handleVolumeDown,
    handleVolumeUp,
    handleShuffleClick,
    toggleLoop,
  };
};

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
