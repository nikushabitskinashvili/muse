"use client";
import React, { useState } from "react";
import { Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { SwiperTitle } from "../Swiper-Title/SwiperTitle";

export const Slider = ({ data, title }: { data: any; title: string }) => {
  const [swiperReady, setSwiperReady] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const handleSwiper = (s: any) => {
    if (!swiperReady) {
      setSwiper(s);
      setSwiperReady(true);
    }
  };

  const conditionalStyles =
    title === "Artists"
      ? { backgroundColor: "#1C1C1C", padding: "23px", borderRadius: "12px" }
      : {};

  return (
    <section className={styles.carouselSection}>
      <SwiperTitle swiper={swiper} title={title} />
      <div className={styles.swiperContainer}>
        <Swiper
          onSwiper={handleSwiper}
          cssMode={true}
          pagination={true}
          modules={[Mousewheel, Keyboard]}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1080: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1700: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item: any) => {
            return (
              <SwiperSlide
                style={conditionalStyles}
                className={styles.sliderCard}
                key={item.id}
              >
                <Image
                  src={item.img}
                  width={176}
                  height={171}
                  alt={item.title}
                  className={styles.cardImage}
                />
                <div>
                  <h2>{item.title}</h2>
                  <h3>{item.subTitle}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
