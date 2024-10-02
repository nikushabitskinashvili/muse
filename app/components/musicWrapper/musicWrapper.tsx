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
  const [data, setData] = useState<Music[]>([]);
  const handleSongClick = (index: number) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      currentMusicIndex: index,
    }));
    setRenderudio(true);
  };

  useEffect(() => {
    Axios.get('/music').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className={styles.list}>
      {data.map((music) => (
        <PlaylistItem
          key={music.id}
          image={music.image}
          musicSrc={music.musicSrc}
          title={music.title}
          name={music.name}
          duration={music.duration}
          id={music.id}
          icon="dots"
          setActiveId={setActiveId}
          activeId={activeId}
          setDottedId={setDottedId}
          dottedId={dottedId}
          onClick={() => handleSongClick(music.id)}
          setOpenCreatePopId={function (): void {
            throw new Error('Function not implemented.');
          } } isPlaying={false}        />
      ))}
      {renderAudio && <AudioPlayer musics={data} />}
    </div>
  );
};

