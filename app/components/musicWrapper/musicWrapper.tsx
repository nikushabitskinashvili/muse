"use client";
import styles from "@/app/(authorised)/foryou/foryou.module.scss";
import { PlaylistItem } from "@/app/components/PlaylistItem/PlaylistItem";
import { useEffect, useState } from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { ForYouCompProps, Music } from "@/app/Interfaces/Interfaces";
import { useRecoilState } from "recoil";
import { audioPlayerState } from "@/app/atoms/states";
import Axios from "@/app/Helpers/Axios";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import { decodeJwt } from "jose";

export const MusicWrapper = ({
  text,
  id,
  isBin,
  playlistId
}: {
  text: string;
  id?: string;
  isBin?: boolean;
  playlistId?:string
}) => {
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
      const filteredData = response.data.filter((item: any) => {
        if (text === "artistId") {
          return item.artistId.toString() === id;
        }
        if (text === "albumId") {
          return item.albumId.toString() === id;
        }
        if (text === "all") {
          return item;
        }
        return false;
      });

      setMusics(filteredData);
      setDataLength(filteredData.length);
    });
  }, [id, text]);

  if (text === "playlistId") {
    useEffect(() => {
      const token = getClientCookie(AUTH_COOKIE_KEY);

      if (!token) {
        console.error("No token found");
        return;
      }

      const user = decodeJwt(token);

      if (!user || !user.id) {
        console.error("Invalid token payload");
        return;
      }
      Axios.get(`/playlist/${user.id}`).then((response) => {
        const filteredData = response.data;

        console.log(filteredData);

        setMusics(filteredData[0].music);
        setDataLength(filteredData.length);
      });
    }, [id, text]);
  }

  if (currentIndex == dataLength) {
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
          playlistId={playlistId}
          musicSrc={music.musicSrc}
          title={music.name}
          name={music.name}
          duration={music.duration}
          artistId={music.artistId}
          id={music.id}
          icon={isBin ? "bin" : "dots"}
          isPlaying={currentIndex.currentMusicIndex === music.id}
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
      {renderAudio && <AudioPlayer musics={musics} />}
    </div>
  );
};
