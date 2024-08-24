"use client";
import React, {useRef} from "react";
import styles from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {ArtistCard} from "../ArtistCard/ArtistCard";
import {artists, playlistData, popularAlbum} from "@/app/data/CarouselData";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import Image from "next/image";
import leftArrow from "@/public/images/left-arrow.svg";
import rightArrow from "@/public/images/Arrow.svg";

export const Slider = ({data, title}: { data: any; title: string }) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 250;
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 250;
        }
    };

    let info = artists

    if (title === 'Popular Album') info = popularAlbum
    else if (title === 'My Playlists') info = playlistData

    return (
        <div className={`${styles.container} ${title === "Popular Album" ? styles.marginTop : ''}`}>
            <div className={styles.swiperTitleWrapper}>
                <h4>{title}</h4>
                <div className={styles.arrows}>
                    <Image
                        src={leftArrow}
                        alt="arrow"
                        width={32}
                        height={32}
                        onClick={scrollLeft}
                    />
                    <Image
                        src={rightArrow}
                        alt="arrow"
                        width={32}
                        height={32}
                        onClick={scrollRight}
                    />
                </div>
            </div>
            <section
                className={styles.carouselSection}>
                <div className={styles.main} ref={scrollRef}>
                    {info.map((item) => {
                        return (
                            <div
                                className={`${styles.sliderCard} ${title === "Popular Album" ? styles.forSub : ''}`}
                                key={item.id}
                            >
                                {title === "Artists" && <ArtistCard title={title} item={item}/>}
                                {title === "Popular Album" &&
                                    <AlbumCard item={item}/>}
                                {title === "My Playlists" &&
                                    <AlbumCard playlist={true} item={item}/>}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
        ;
};
