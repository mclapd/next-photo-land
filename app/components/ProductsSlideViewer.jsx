"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../slider.css";
import Product from "./Product";

const ProductsSlideViewer = ({ products }) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1140: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
    >
      <>
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductsSlideViewer;
