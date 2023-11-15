"use client";

import useProdcutsStore from "@/libs/productsstore";
import ProductsSlideViewer from "./ProductsSlideViewer";

const ProductSlider = () => {
  const { products } = useProdcutsStore();

  return (
    <div>
      <ProductsSlideViewer products={products} />
    </div>
  );
};

export default ProductSlider;
