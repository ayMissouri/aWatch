import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import AnimeCard from "../AnimeCard";

export default function App({ animes }) {
  return (
    <>
      <Swiper
        className="mySwiper"
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          475: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          765: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1025: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1270: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          1326: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
        }}
      >
        {animes?.map((anime) => {
          return (
            <SwiperSlide key={anime.id}>
              <AnimeCard anime={anime}></AnimeCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
