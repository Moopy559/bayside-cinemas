"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({
  children,
  slidesPerView = 1.5,
  pagination = true,
}: {
  children: React.ReactNode;
  slidesPerView?: number;
  pagination?: boolean;
}) {
  const childArray = React.Children.toArray(children);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={slidesPerView}
      modules={[Pagination]}
      pagination={pagination}
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
