"use client";
import styles from "@/app/(authorised)/foryou/foryou.module.scss";
import { PlaylistItem } from "@/app/components/PlaylistItem/PlaylistItem";
import { useState } from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { musics, ForYouComp } from "../forYouComp/forYouComp";
import { ForYouCompProps } from "@/app/Interfaces/Interfaces";
import { useRecoilState } from "recoil";
import { audioPlayerState } from "@/app/atoms/states";

export const MusicWrapper = () => {
  const [dottedId, setDottedId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useRecoilState(audioPlayerState);
  const [renderAudio, setRenderudio] = useState <boolean>(false)
  const handleSongClick = (index: number) => {

    setCurrentIndex((prevState) => ({
      ...prevState,
      currentMusicIndex: index,
    }));
    setRenderudio(true);
  };
  return (
    <div className={styles.list}>
      {musics.map((music) => (
        <PlaylistItem
          key={music.id}
          image={music.image}
          audioSrc={music.audioSrc}
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
            throw new Error("Function not implemented.");
          }}
        />
      ))}
      {renderAudio && <AudioPlayer musics={musics} />}
    </div>
  );
};

function setSelectedIndex(index: number) {
  throw new Error("Function not implemented.");
}
