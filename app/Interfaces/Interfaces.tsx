export interface MusicPhotoProps {
    src: string;
    music: string;
    artist: string;
};

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
};

export interface Song {
    src: string;
    music: string;
    artist: string;
    audioSrc: string;
};

export interface MainAudioProps {
    playing: boolean;
    currentTime: number;
    duration: number;
    progressRef: React.RefObject<HTMLInputElement>;
    ipadProgressRef: React.RefObject<HTMLInputElement>;
    onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onVolumeDown: () => void;
    onVolumeUp: () => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
}
export interface InputRangeProps  {
    defaultValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    progressRef: React.RefObject<HTMLInputElement>;
};

export interface SongsProps  {
    songs: Song[];
};

export interface MainAdjustProps  {
    onVolumeDown: () => void;
    onVolumeUp: () => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
    playing: boolean;
};