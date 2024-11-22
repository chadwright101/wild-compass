"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
  Thumbs,
} from "swiper/modules";

import data from "@/app/_data/general-data.json";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
  desktop?: boolean;
}

const { gallerySlider } = data;
const ThumbnailSlider = ({ cssClasses, desktop }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [toggleLightbox, setToggleLightbox] = useState(false);

  useEffect(() => {
    if (toggleLightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleLightbox]);

  if (desktop) {
    return (
      <div className={`hidden tablet:block ${cssClasses}`}>
        <Swiper
          spaceBetween={12}
          speed={1500}
          modules={[Pagination, EffectFade, Navigation, Thumbs]}
          effect="fade"
          loop
          thumbs={{ swiper: thumbsSwiper }}
        >
          {gallerySlider.map((slide, index) => (
            <SwiperSlide key={index} className="pb-0 -mb-2">
              <Image
                src={slide}
                alt={`Wild Compass - Image ${index + 1}`}
                className="w-full h-full object-cover"
                width={900}
                height={540}
                loading={index < 1 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <div className="hidden tablet:block overflow-hidden">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            slidesPerGroup={2}
            loop={true}
            modules={[Thumbs, Navigation]}
            navigation={{
              enabled: true,
            }}
            breakpoints={{
              1000: {
                slidesPerView: 6,
                slidesPerGroup: 3,
              },
            }}
            className="mt-4 relative px-8"
          >
            {gallerySlider.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer opacity-50 hover:opacity-100 [&.swiper-slide-thumb-active]:opacity-100"
                style={{
                  transition: "opacity 0.2s ease-in-out",
                }}
              >
                <Image
                  src={slide}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={150}
                  height={90}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`tablet:hidden ${cssClasses}`}>
        <Swiper
          spaceBetween={16}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          speed={1500}
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
          className={cssClasses}
          effect="slide"
          pagination={{
            dynamicBullets: true,
          }}
          loop
          thumbs={{ swiper: thumbsSwiper }}
        >
          {gallerySlider.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="mb-7 aspect-square"
              onClick={() => setToggleLightbox(true)}
            >
              <Image
                src={slide}
                alt={`Wild Compass - Image ${index + 1}`}
                className="w-full h-full object-cover"
                width={800}
                height={800}
                loading={index < 1 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <div
          className={classNames("fixed bg-white/90 inset-0 z-50", {
            hidden: !toggleLightbox,
            block: toggleLightbox,
          })}
        >
          <button
            onClick={() => setToggleLightbox(false)}
            className="p-3 -m-3 fixed top-8 right-8 z-50"
          >
            <Image
              src="/assets/icons/close-icon-grey.svg"
              alt="Close icon"
              width={55}
              height={55}
              className="bg-khaki/80 p-2"
            />
          </button>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Thumbs]}
            effect="fade"
            className="h-full"
          >
            {gallerySlider.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full grid place-items-center">
                  <Image
                    src={slide}
                    alt={`Thumbnail ${index + 1}`}
                    className="max-w-[90vw] max-h-[90vh]"
                    width={800}
                    height={600}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
};

export default ThumbnailSlider;
