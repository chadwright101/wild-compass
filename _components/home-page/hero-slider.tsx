"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

interface Props {
  cssClasses?: string;
  data: string[];
}

const HeroSlider = ({ cssClasses, data }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 6000,
      }}
      spaceBetween={12}
      speed={1500}
      modules={[Autoplay, Pagination, EffectFade, Navigation]}
      className={cssClasses}
      effect="fade"
      pagination={{
        dynamicBullets: true,
      }}
      loop
      style={
        {
          "--swiper-pagination-color": "#AE8F5F",
          "--swiper-pagination-bullet-inactive-color": "#AE8F5F",
          "--swiper-pagination-bullet-inactive-opacity": "0.8",
        } as React.CSSProperties
      }
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index} className="pb-7">
          <Image
            src={slide}
            alt={`Wild Compass - Image ${index + 1}`}
            className="rounded-none w-full h-full object-cover"
            width={900}
            height={540}
            loading={index < 1 ? "eager" : "lazy"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
