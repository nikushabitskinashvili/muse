import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  albumInterface,
  artistInterface,
  Music,
  musicInterface,
} from "@/app/Interfaces/Interfaces";
import Axios from "@/app/Helpers/Axios";
import { useRecoilState } from "recoil";
import { audioPlayerState } from "@/app/atoms/states";
import MusicList from "./MusicList/MusicList";
import styles from "./Input.module.scss";

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [data, setData] = useState<{
    albums: albumInterface[];
    artists: artistInterface[];
    musics: musicInterface[];
  }>({ albums: [], artists: [], musics: [] });

  

  const router = useRouter();
  const pathname = usePathname();
  const searchRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(async () => {
    if (!inputValue) return;
    try {
      const response = await Axios.get(`/search?value=${inputValue}`);
      setData({
        albums: response.data.albums || [],
        artists: response.data.artists || [],
        musics: response.data.music || [],
      });
    } catch (error) {
      throw new Error("Error");
    }
  }, [inputValue]);

  useEffect(() => {
    fetchData();
  }, [inputValue, fetchData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActive(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAlbumClick = (albumId: string) => {
    setIsActive(false); // Close dropdown on album click
    router.push(`/albums/${albumId}`);
    setInputValue("");
  };

  const handleMusicClick = (id: number) => {
  
    setIsActive(false);
    setInputValue("");
  
    // Push the music id into the URL
    router.push(`/foryou?musicId=${id}`);
  };
  

  const handleArtistClick = (artistId: string) => {
    setIsActive(false); // Close dropdown on artist click
    router.push(`/artists/${artistId}`);
    setInputValue("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsActive(event.target.value.length > 0);
  };

  const hasNoResults =
    data.albums.length === 0 &&
    data.artists.length === 0 &&
    data.musics.length === 0;

  return (
    <div className={styles.wrapper} ref={searchRef}>
      <div
        className={`${inputValue ? styles.inputTyping : styles.container} ${
          pathname === "/" ? styles.homecontainer : ""
        }`}
      >
        <Image
          src={"/images/search.png"}
          alt="search"
          className={styles.searchIcon}
          width={15}
          height={15}
        />
        <input
          type="text"
          placeholder="Search album, artist, or music"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>

      {isActive && (
        <ul className={styles.results}>
          {hasNoResults && (
            <li className={styles.noResults}>No results found</li>
          )}

          {data.albums.map((album) => (
            <li
              key={album.id}
              className={styles.albumLiStyle}
              onClick={() => handleAlbumClick(album.id)}
            >
              <p className={styles.albumParagraphStyle}>
                <span className={styles.albumStyle}>Album: </span>
                {album.title}
              </p>
            </li>
          ))}

          {data.artists.map((artist) => (
            <li
              key={artist.id}
              className={styles.artistLiStyle}
              onClick={() => handleArtistClick(artist.id)}
            >
              <p className={styles.artistParagraphStyle}>
                <span className={styles.artistStyle}>Artist: </span>
                {artist.name}
              </p>
            </li>
          ))}

          {data.musics.map((music) => (
            <MusicList
              key={music.id}
              musicSrc={music.musicSrc}
              isPlaying={false}
              name={music.name}
              onClick={()=>handleMusicClick(music.id)}
              id={music.id}
              duration={music.duration}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;

