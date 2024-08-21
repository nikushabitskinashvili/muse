"use client";
import React, {useState} from "react";
import {Mousewheel, Keyboard} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {SwiperTitle} from "../Swiper-Title/SwiperTitle";
import {ArtistCard} from "../ArtistCard/ArtistCard";
import {artists, playlistData, popularAlbum} from "@/app/data/CarouselData";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";

export const Slider = ({data, title}: { data: any; title: string }) => {
    const [swiperReady, setSwiperReady] = useState(false);
    const [swiper, setSwiper] = useState(null);

    const handleSwiper = (s: any) => {
        if (!swiperReady) {
            setSwiper(s);
            setSwiperReady(true);
        }
    };

    const conditionalStyle = title === "Artists" ? styles.artistsRoundedCard : "";

    const popularSectionClass =
        title === "Popular Album" ? styles.marginTopLargeScreen : "";

    const artistsSectionClass = title === "Artists" ? styles.artistMargin : "";

    let info = artists

    if (title === 'Popular Album') info = popularAlbum
    else if (title === 'My Playlists') info = playlistData

    return (
        <section
            className={`${styles.carouselSection} ${popularSectionClass} ${artistsSectionClass} ${title === "Popular Album" ? styles.marginTop : ''}`}
        >
            <SwiperTitle swiper={swiper} title={title}/>
            <div className={styles.swiperContainer}>
                <Swiper
                    onSwiper={handleSwiper}
                    cssMode={true}
                    pagination={true}
                    modules={[Mousewheel, Keyboard]}
                    breakpoints={{
                        0: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        767: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {info.map((item) => {
                        return (
                            <SwiperSlide
                                className={`${styles.sliderCard} ${conditionalStyle} ${title === "Popular Album" ? styles.forSub : ''}`}
                                key={item.id}
                            >
                                {title === "Artists" && <ArtistCard title={title} item={item}/>}
                                {title === "Popular Album" &&
                                    <AlbumCard item={item}/>}
                                {title === "My Playlists" &&
                                    <AlbumCard item={item}/>}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};
