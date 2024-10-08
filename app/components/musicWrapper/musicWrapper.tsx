"use client";
import { useEffect, useState } from "react";
import styles from "@/app/(authorised)/foryou/foryou.module.scss";
import { PlaylistItem } from "@/app/components/PlaylistItem/PlaylistItem";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { useRecoilState } from "recoil";
import {audioPlayerState, SongsState} from "@/app/atoms/states";
import Axios from "@/app/Helpers/Axios";
import { Music } from "@/app/Interfaces/Interfaces";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import { getClientCookie } from "@/app/Helpers/GetCookieValue";
import { AUTH_COOKIE_KEY } from "@/app/constant";
import { decodeJwt } from "jose";

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
  const [musics, setMusics] = useRecoilState(SongsState);
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
    if (text === "playlistId") {
      const token = getClientCookie(AUTH_COOKIE_KEY);
      if (!token) {
        console.error("No token found");
        setIsLoading(false);
        return;
      }

      const user = decodeJwt(token);
      if (!user || !user.id) {
        console.error("Invalid token payload");
        setIsLoading(false);
        return;
      }

      Axios.get(`/playlist/${user.id}`)
          .then((response) => {
            const playlistData = response.data;
            if (playlistData.length > 0 && playlistData[0].music) {
              setMusics(playlistData[0].music);
              setDataLength(playlistData[0].music.length);
            } else {
              console.error("No music found in playlist data");
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
    } else {
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
                  (music: Music) => music.id.toString() === musicId
              );
              if (musicIndex !== -1) {
                handleSongClick(musicIndex); // Set the current song
              }
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
    }

  }
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

  console.log(currentIndex, 'curentindex')
  console.log(musics, 'musics')

  return (
    <div className={styles.list}>
      {musics.length > 0 ? (
        musics.map((music, idx) => (
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
        ))
      ) : (
        <p style={{color:"white"}}>No music available.</p>
      )}
      {/*{renderAudio && musics.length > 0 && <AudioPlayer musics={musics} />}*/}
    </div>
  );
};
