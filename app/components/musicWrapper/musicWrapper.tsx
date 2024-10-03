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

  useEffect(() => {
    if (text === "playlistId") return;

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, text]);

  useEffect(() => {
    if (text !== "playlistId") return;

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

    setIsLoading(true); // Set loading to true before fetch
    Axios.get(`/playlist/${user.id}`)
      .then((response) => {
        const playlistData = response.data;

        if (playlistData.length > 0 && playlistData[0].music) {
          setMusics(playlistData[0].music); // Safely access music property
          setDataLength(playlistData[0].music.length);
        } else {
          console.error("No music found in playlist data");
        }
      })
      .finally(() => {
        setIsLoading(false); // Turn off loading after fetch
      });
  }, [text]);

  // Reset currentIndex when reaching dataLength
  useEffect(() => {
    if (currentIndex.currentMusicIndex === dataLength) {
      setCurrentIndex((prevState) => ({
        ...prevState,
        currentMusicIndex: 0, // Reset the music index if it reaches the end
      }));
      setRenderAudio(true);
    }
  }, [currentIndex.currentMusicIndex, dataLength]);

  // Show a loading indicator while fetching data
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
        />
      ))}
      {renderAudio && <AudioPlayer musics={musics} />}
    </div>
  );
};
