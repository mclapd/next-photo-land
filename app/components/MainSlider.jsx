"use client";

import useProdcutsStore from "@/libs/productsstore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../slider.css";
import CameraImg from "../../public/images/camera.png";
import Image from "next/image";

const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
];

const MainSlider = () => {
  const { products } = useProdcutsStore();

  return (
    <Swiper
      loop={true}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">
                    {slide.pretitle}
                  </div>
                  <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3} <br />
                  </div>
                  <button className="btn btn-accent mx-auto lg:mx-0">
                    Shop now
                  </button>
                </div>
                <div className="flex-1">
                  <Image
                    className="xl:absolute xl:-right-16 xl:-bottom-12"
                    src={slide.img}
                    width={608}
                    height={481}
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
