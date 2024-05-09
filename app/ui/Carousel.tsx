"use client";

import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const childArray = React.Children.toArray(children);
  return (
    <Swiper slidesPerView={3}>
      {childArray.map((child, index) => {
        return <SwiperSlide key={index}>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
}
