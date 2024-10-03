import styles from "./Input.module.scss";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
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
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import MusicList from "./MusicList/MusicList";

const Input: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isActive, setIsActive] = useState<boolean>(false);
    const [music, setMusic] = useState([])
    const [musics, setMusics] = useState<Music[]>([]);

    const [renderaudio, setRenderaudio] = useState<boolean>(false);
    const [audio, setAudioPlayer] = useRecoilState(audioPlayerState);
    const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
    const [currentIndex, setCurrentIndex] = useRecoilState(audioPlayerState);
    const [dataLength, setDataLength] = useState<any>();


    const [data, setData] = useState<{
        albums: albumInterface[];
        artists: artistInterface[];
        musics: musicInterface[];
    }>({ albums: [], artists: [], musics: [] });


    const router = useRouter();
    const pathname = usePathname();

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
        Axios.get("/music").then((response) => {
            setMusics(response.data);
            setDataLength(response.data.length)
        });
    }, []);
    if (currentIndex == dataLength) {
        setCurrentIndex((prevState) => ({
            ...prevState,
            currentMusicIndex: 0,
        }));
        setRenderaudio(true);
    }

    useEffect(() => {
        fetchData();
    }, [inputValue, fetchData]);

    const handleAlbumClick = (albumId: string) => {
        setIsActive(false);
        router.push(`/albums/${albumId}`);
        setInputValue("");
    };

    const handleMusicClick = (id: number) => {
        for (let i = 0; i < musics.length; i++){
            if (musics[i].id == id) {
                console.log(musics[i]);
                
                setCurrentIndex((prevState) => ({
                    ...prevState,
                    currentMusicIndex: i,
                  }));
                  setRenderaudio(true)
                  break
            }
        }
        
        setCurrentSong((prevState) => ({
            ...prevState,
            currentSongId: id,
        }));
        
        setInputValue('');
        
    };




    const handleArtistClick = (artistId: string) => {
        setIsActive(false);
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
        <div className={styles.wrapper}>
            <div
                className={`${inputValue ? styles.inputTyping : styles.container} ${pathname === "/" ? styles.homecontainer : ""
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

                    {data.musics.map((music, idx) => (
                        <MusicList
                            key={idx}
                            musicSrc={music.musicSrc}
                            isPlaying={currentIndex.currentMusicIndex === music.id}
                            name={music.name}
                            onClick={() => handleMusicClick(music.id)}
                            id={music.id} 
                            duration={music.duration} />

                    ))}
                </ul>
            )}
            {renderaudio && <AudioPlayer musics={musics} />}
        </div>
        
    );
};

export default Input;
