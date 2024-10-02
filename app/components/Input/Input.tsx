import styles from "./Input.module.scss";
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import { albumInterface, artistInterface, musicInterface } from "@/app/Interfaces/Interfaces";
import Axios from "@/app/Helpers/Axios";

const Input: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);
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
                musics: response.data.musics || [],
            });
        } catch (error) {
           throw new Error('Error')
        }
    }, [inputValue]);

    useEffect(() => {
        fetchData();
    }, [inputValue, fetchData]);

    const handleAlbumClick = (albumId: string) => {
        setIsActive(false);
        router.push(`/albums/${albumId}`);
        setInputValue('');
    };

    const handleArtistClick = (artistId: string) => {
        setIsActive(false);
        router.push(`/artists/${artistId}`);
        setInputValue('');
    };

    const handleMusicClick = (music: musicInterface) => {
        setIsActive(false);
        setInputValue('');
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setIsActive(event.target.value.length > 0);
    };

    const hasNoResults = data.albums.length === 0 && data.artists.length === 0 && data.musics.length === 0;

    return (
        <div className={styles.wrapper}>
            <div className={`${inputValue ? styles.inputTyping : styles.container} ${pathname === "/" ? styles.homecontainer : ''}`}>
                <Image src={'/images/search.png'} alt="search" className={styles.searchIcon} width={15} height={15} />
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
                        <li
                            key={music.id}
                            className={styles.musicLiStyle}
                            onClick={() => handleMusicClick(music)}
                        >
                            <p className={styles.musicParagraphStyle}>
                                <span className={styles.musicStyle}>Music: </span>
                                {music.name}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Input;
