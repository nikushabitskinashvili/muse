"use client";
import React, { useState } from "react";
import { Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperTitle } from "../Swiper-Title/SwiperTitle";
import { ArtistCard } from "../ArtistCard/ArtistCard";

export const Slider = ({ data, title }: { data: any; title: string }) => {
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

  return (
    <section
      className={`${styles.carouselSection} ${popularSectionClass} ${artistsSectionClass}`}
    >
      <SwiperTitle swiper={swiper} title={title} />
      <div className={styles.swiperContainer}>
        <Swiper
          onSwiper={handleSwiper}
          cssMode={true}
          pagination={true}
          modules={[Mousewheel, Keyboard]}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            667: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item: any) => {
            return (
              <SwiperSlide
                className={`${styles.sliderCard} ${conditionalStyle}`}
                key={item.id}
              >
                <ArtistCard title={title} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
