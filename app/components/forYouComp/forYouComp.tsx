"use client";
import styles from "./forYouComp.module.scss";
import { PlaylistItem } from "@/app/components/PlaylistItem/PlaylistItem";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ForYouCompProps, Music } from "@/app/Interfaces/Interfaces";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import {audioPlayerState, SongsState} from "@/app/atoms/states";
import { useRecoilState } from "recoil";
import Axios from "@/app/Helpers/Axios";

export const ForYouComp: React.FC<ForYouCompProps> = (props) => {
  const [dottedId, setDottedId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [renderAudio, setRenderudio] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useRecoilState(audioPlayerState);
  const [songs, setSongs] = useRecoilState(SongsState);
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
      setSongs(response.data);
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
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.title}>For You</span>
        <Link href={"/foryou"} className={styles.link}>
          See all
        </Link>
      </div>
      <div className={styles.list}>
        {songs.slice(0, 3).map((music, idx) => (
          <PlaylistItem
            key={music.id}
            refreshPlaylist={props.refreshPlaylist}
            musicSrc={music.musicSrc}
            title={music.name}
            // albumImg={music.albumImg}
            artistId={music.artistId}
            name={music.name}
            isPlaying={currentIndex.currentMusicIndex === music.id}
            id={music.id}
            icon="dots"
            setActiveId={setActiveId}
            activeId={activeId}
            setDottedId={setDottedId}
            dottedId={dottedId}
            onClick={() => handleSongClick(idx)}
            setOpenCreatePopId={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>

      {/*{renderAudio && <AudioPlayer musics={musics} />}*/}
    </div>
  );
};
