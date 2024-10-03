"use client";
import React, { useRef } from "react";
import styles from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArtistCard } from "../ArtistCard/ArtistCard";
import { artists, playlistData, popularAlbum } from "@/app/data/CarouselData";
import AlbumCard from "@/app/components/AlbumCard/AlbumCard";
import Image from "next/image";
import leftArrow from "@/public/images/left-arrow.svg";
import rightArrow from "@/public/images/Arrow.svg";

type Artist = {
  id: number;
  title: string;
};

type PopularAlbum = {
  id: string;
  title: string | undefined;
};

type Playlist = {
  id: string;
  title: string;
};

export const Slider = ({ data, title }: { data: any; title: string }) => {
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

  let info: Artist[] | PopularAlbum[] | Playlist[];

  if (title === "Popular Album") {
    info = data;
  } else if (title === "My Playlists") {
    info = data;
  } else {
    info = data;
  }

  return (
    <div
      className={`${styles.container} ${
        title === "Popular Album" ? styles.marginTop : ""
      }`}
    >
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
      <section className={styles.carouselSection}>
        <div className={styles.main} ref={scrollRef}>
          {info.map((item) => {
            if (title === "Artists") {
              return (
                <div className={`${styles.sliderCard}`} key={item.id}>
                  <ArtistCard title={title} item={item as Artist} />
                </div>
              );
            }
            if (title === "Popular Album") {
              return (
                <div
                  className={`${styles.sliderCard} ${styles.forSub}`}
                  key={item.id}
                >
                  <AlbumCard title={title} item={item as PopularAlbum} />
                </div>
              );
            }
            if (title === "My Playlists") {
              return (
                <div className={`${styles.sliderCard}`} key={item.id}>
                  <AlbumCard playlist={true} item={item as Playlist} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>
    </div>
  );
};
