import MovieCard from "../MovieCard";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper";

export default function App({ movies }) {
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
        {movies?.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
