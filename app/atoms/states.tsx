"use client";

import { atom } from "recoil";
import { Music } from "../Interfaces/Interfaces";


export const imageChangeState = atom({
  key: "imageChange",
  default: "",
});


export const audioPlayerState = atom({
  key: "audioPlayerState",
  default: {
    currentTime: 0,
    duration: 0,
    currentMusicIndex: 0, 
    loop: false,
    shuffle: false,
  },
});


const isClient = typeof window !== 'undefined';


export const forYouCompState = atom({
  key: "forYouCompState",
  default: {
    currentAudio: isClient ? new Audio() : null, 
    currentIndex: 0,
  },
});

export const SongsState = atom<Music[]>({
  key: 'endPoint',
  default: [],
});
