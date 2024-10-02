'use client';
import styles from './forYouComp.module.scss';
import { PlaylistItem } from '@/app/components/PlaylistItem/PlaylistItem';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ForYouCompProps, Music } from '@/app/Interfaces/Interfaces';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { audioPlayerState } from '@/app/atoms/states';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { MusicForYou } from './for-you-props.interface';
import Axios from '@/app/Helpers/Axios';

// export const musics: Music[] = [
//   {
//     id: 0,
//     title: "Happier Than Ever (Official Music Video)",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc: "musics/ირაკლი ჩარკვიანი - მე შენთან მოვალ.mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 1,
//     title: "Bad Guy",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc:
//       "musics/Barry White - Let The Music Play (Official Music Video) (1).mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 2,
//     title: "Therefore I Am",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc: "musics/ირაკლი ჩარკვიანი - მე შენთან მოვალ.mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 3,
//     title: "Everything I Wanted",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc: "musics/ირაკლი ჩარკვიანი - მე შენთან მოვალ.mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 4,
//     title: "Lovely",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc: "musics/ირაკლი ჩარკვიანი - მე შენთან მოვალ.mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 5,
//     title: "Ocean Eyes",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc: "musics/ირაკლი ჩარკვიანი - მე შენთან მოვალ.mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 6,
//     title: "When The Party's Over",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc: "musics/ირაკლი ჩარკვიანი - მე შენთან მოვალ.mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 7,
//     title: "You Should See Me In A Crown",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc: "musics/ირაკლი ჩარკვიანი - მე შენთან მოვალ.mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 8,
//     title: "Bury A Friend",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc:
//       "musics/Barry White - Let The Music Play (Official Music Video) (1).mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
//   {
//     id: 9,
//     title: "No Time To Die",
//     image: "/images/foryou.png",
//     name: "Billie Eilish",
//     audioSrc: "musics/ირაკლი ჩარკვიანი - მე შენთან მოვალ.mp3",
//     duration: 202,
//     src: "",
//     music: "",
//     artist: "",
//   },
// ];

export const ForYouComp: React.FC<ForYouCompProps> = () => {
  const [dottedId, setDottedId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [renderAudio, setRenderudio] = useState<boolean>(false);
  // const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useRecoilState(audioPlayerState);
  const [musics, setMusics] = useState<Music[]>([]);

  const handleSongClick = (index: number) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      currentMusicIndex: index,
    }));

    setRenderudio(true);
  };

  useEffect(() => {
    Axios.get('/music').then((response) => {
      setMusics(response.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.title}>For You</span>
        <Link href={'/foryou'} className={styles.link}>
          See all
        </Link>
      </div>
      <div className={styles.list}>
        {musics.slice(0, 3).map((music) => (
          <PlaylistItem
            key={music.id}
            // image={music.image}
            audioSrc={music.musicSrc}
            title={music.name}
            name={music.name}
            // duration={music.}
            id={music.id}
            icon="dots"
            setActiveId={setActiveId}
            activeId={activeId}
            setDottedId={setDottedId}
            dottedId={dottedId}
            onClick={() => handleSongClick(music.id)}
            setOpenCreatePopId={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        ))}
      </div>

      {renderAudio && <AudioPlayer musics={musics} />}
    </div>
  );
};
