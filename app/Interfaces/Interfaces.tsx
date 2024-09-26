import { IconEnum } from "../utils/Icon/Icon";

export interface MusicPhotoProps {
  src: string;
  music: string;
  artist: string;
}

export interface Player {
  playing: boolean;
  currentTime: number;
  duration: number;
  progressRef: React.RefObject<HTMLInputElement>;
  ipadProgressRef: React.RefObject<HTMLInputElement>;
  onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTenSecondsBack: () => void;
  onVolumeDown: () => void;
  onVolumeUp: () => void;
  onPreviousSong: () => void;
  onNextSong: () => void;
  onPlayMusic: () => void;
}

export interface Song {
  id: number;
  src: string;
  music: string;
  artist: string;
  audioSrc: string;
  duration: number;
  title: string;
}

export interface InputRangeProps {
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  progressRef: React.RefObject<HTMLInputElement>;
}

export interface SongsProps {
  songs: Song[];
}

export interface ForYouCompProps {
  onSongSelect: (song: Song) => void;
}

export interface PlaylistItemProps {
  setOpenCreatePopId(arg0: null): void;
  image: string;
  audioSrc: string;
  title: string;
  name: string;
  duration: number;
  id: number;
  icon: "dots" | "bin";
  setActiveId: (id: number | null) => void;
  activeId: number | null;
  setDottedId: (id: number | null) => void;
  dottedId: number | null;
  onClick: () => void;
  
}
