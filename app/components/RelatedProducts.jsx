"use client";

import ProductsSlideViewer from "./ProductsSlideViewer";
import useProdcutsStore from "@/libs/productsstore";

const RelatedProducts = ({ categoryTitle }) => {
  const { products } = useProdcutsStore();
  const filteredProducts = products.filter(
    (item) => item.category === categoryTitle
  );
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductsSlideViewer products={filteredProducts} />
      </div>
    </div>
  );
};

export default RelatedProducts;
