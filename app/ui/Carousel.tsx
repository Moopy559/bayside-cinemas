"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const childArray = React.Children.toArray(children);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.5}
      modules={[Pagination]}
      pagination
    >
      {childArray.map((child, index) => {
        return (
          <SwiperSlide key={index} className="pb-12">
            {child}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
