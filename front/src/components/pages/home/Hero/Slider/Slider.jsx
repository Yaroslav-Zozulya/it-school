"use client";
import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/scss/autoplay";
import "./slider.scss";
import s from "./slider.module.scss";

const sliderData = [
  {
    id: "1",
    imageUrl: "",
    title: "НЕЙМОВІРНІ ПРИГОДИ В SPACEIT ЧЕКАЮТЬ НА ВАС!",
  },
  {
    id: "2",
    imageUrl: "",
    title: "1НЕЙМОВІРНІ ПРИГОДИ В SPACEIT ЧЕКАЮТЬ НА ВАС!",
  },
  {
    id: "3",
    imageUrl: "",
    title: "2НЕЙМОВІРНІ ПРИГОДИ В SPACEIT ЧЕКАЮТЬ НА ВАС!",
  },
  {
    id: "4",
    imageUrl: "",
    title: "3НЕЙМОВІРНІ ПРИГОДИ В SPACEIT ЧЕКАЮТЬ НА ВАС!",
  },
];

export default function Slider() {
  return (
    <div className={s.swiper_container}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: `.hero_pag_container`,
          type: "bullets",
          bulletClass: `${s.custom_bullet}`,
          bulletActiveClass: `${s.custom_bullet_active}`,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={s.swiper_block}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className={s.hero_slide_wrap}>
            <Image
              src="/images/hero/slider/slider-desc-hero.jpg"
              width={353}
              height={297}
              alt="descr"
              className={s.slider_image}
            />
            <p className={s.slide_description}>{slide.title}</p>
          </SwiperSlide>
        ))}
        <div className={`hero_pag_container`}></div>
      </Swiper>
    </div>
  );
}
