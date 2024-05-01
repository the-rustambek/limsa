"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, FreeMode } from "swiper/modules";
import user from "/public/user.png";
import styles from "@/srcstyles/Carousel.module.css";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={user.src} alt="User image" />
        <h5 className={styles.title}>Ismoiljon Madgaziyev</h5>
        <p className={styles.text}>
          5 yillik tajribaga ega Full stack web dasturchi va grafik dizayner
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={user.src} alt="User image" />
        <h5 className={styles.title}>Ismoiljon Madgaziyev</h5>
        <p className={styles.text}>
          5 yillik tajribaga ega Full stack web dasturchi va grafik dizayner
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={user.src} alt="User image" />
        <h5 className={styles.title}>Ismoiljon Madgaziyev</h5>
        <p className={styles.text}>
          5 yillik tajribaga ega Full stack web dasturchi va grafik dizayner
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={user.src} alt="User image" />
        <h5 className={styles.title}>Ismoiljon Madgaziyev</h5>
        <p className={styles.text}>
          5 yillik tajribaga ega Full stack web dasturchi va grafik dizayner
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
