"use client";
import { useEffect, useState } from "react";
import styles from "@/app/(authorised)/foryou/foryou.module.scss";
import { PlaylistItem } from "@/app/components/PlaylistItem/PlaylistItem";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { useRecoilState } from "recoil";
import { audioPlayerState } from "@/app/atoms/states";
import Axios from "@/app/Helpers/Axios";
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import { decodeJwt } from "jose";
import { Music } from "@/app/Interfaces/Interfaces";
import { useSearchParams } from "next/navigation"; // Import useSearchParams

export const MusicWrapper = ({
  text,
  id,
  isBin,
  playlistId,
}: {
  text: string;
  id?: string;
  isBin?: boolean;
  playlistId?: string;
}) => {
  const searchParams = useSearchParams(); // Get search params
  const musicId = searchParams.get("musicId"); // Extract 'musicId' from the query parameters

  const [dottedId, setDottedId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useRecoilState(audioPlayerState);
  const [renderAudio, setRenderAudio] = useState<boolean>(false);
  const [musics, setMusics] = useState<Music[]>([]);
  const [dataLength, setDataLength] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSongClick = (index: number) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      currentMusicIndex: index,
    }));
    setRenderAudio(true);
  };

  const fetchMusics = () => {
    setIsLoading(true);
    Axios.get("/music")
      .then((response) => {
        const filteredData = response.data.filter((item: any) => {
          if (text === "artistId") return item.artistId.toString() === id;
          if (text === "albumId") return item.albumId.toString() === id;
          if (text === "all") return item;
          return false;
        });

        setMusics(filteredData);
        setDataLength(filteredData.length);

        // Automatically play the music if the musicId is in the URL
        if (musicId) {
          const musicIndex = filteredData.findIndex(
            (music:Music) => music.id.toString() === musicId
          );
          if (musicIndex !== -1) {
            handleSongClick(musicIndex); // Set the current song
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMusics();
  }, [id, text]);

  useEffect(() => {
    if (currentIndex.currentMusicIndex === dataLength) {
      setCurrentIndex((prevState) => ({
        ...prevState,
        currentMusicIndex: 0,
      }));
      setRenderAudio(true);
    }
  }, [currentIndex.currentMusicIndex, dataLength]);

  if (isLoading) {
    return <div>Loading...</div>;
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
          isPlaying={currentIndex.currentMusicIndex === idx}
          setActiveId={setActiveId}
          activeId={activeId}
          setDottedId={setDottedId}
          dottedId={dottedId}
          onClick={() => handleSongClick(idx)}
          setOpenCreatePopId={() => {
            /* Define this function */
          }}
          refreshFetch={fetchMusics} 
        />
      ))}
      {renderAudio && <AudioPlayer musics={musics} />}
    </div>
  );
};
