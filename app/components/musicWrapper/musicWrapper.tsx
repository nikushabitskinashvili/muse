'use client';
import styles from '@/app/(authorised)/foryou/foryou.module.scss';
import { PlaylistItem } from '@/app/components/PlaylistItem/PlaylistItem';
import { useEffect, useState } from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { ForYouCompProps, Music } from '@/app/Interfaces/Interfaces';
import { useRecoilState } from 'recoil';
import { audioPlayerState } from '@/app/atoms/states';
import axios from 'axios';
import Axios from '@/app/Helpers/Axios';

export const MusicWrapper = () => {
  const [dottedId, setDottedId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  // const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useRecoilState(audioPlayerState);
  const [renderAudio, setRenderudio] = useState<boolean>(false);
  const [musics, setMusics] = useState<Music[]>([]);
  const [dataLength, setDataLength] = useState<any>();
  const handleSongClick = (index: number) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      currentMusicIndex: index,
    }));

    setRenderudio(true);
  };
   useEffect(() => {
    Axios.get("/music").then((response) => {
      setMusics(response.data);
      setDataLength(response.data.length)
    });
  }, []);
  if(currentIndex == dataLength) {
    setCurrentIndex((prevState) => ({
      ...prevState,
      currentMusicIndex: 0,
    }));
    setRenderudio(true);
  }
  return (
    <div className={styles.list}>
      {musics.map((music, idx) => (
        <PlaylistItem
          key={music.id}
          image={music.image}
          musicSrc={music.musicSrc}
          title={music.name}
          name={music.name}
          duration={music.duration}
          id={music.id}
          icon="dots"
          isPlaying={currentIndex.currentMusicIndex === music.id}
          setActiveId={setActiveId}
          activeId={activeId}
          setDottedId={setDottedId}
          dottedId={dottedId}
          onClick={() => handleSongClick(idx)}
          setOpenCreatePopId={function (): void {
            throw new Error('Function not implemented.');
          } }    />
      ))}
      {renderAudio && <AudioPlayer musics={musics} />}
    </div>
  );
};

