"use client";

import useProdcutsStore from "@/libs/productsstore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../slider.css";
import Product from "./Product";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch to products");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

const ProductSlider = () => {
  const { products } = useProdcutsStore();

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

export default ProductSlider;
