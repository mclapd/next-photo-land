"use client";

import useProdcutsStore from "@/libs/productsstore";
import { useEffect } from "react";
import CategoryNav from "@/app/components/CategoryNav";
import Product from "@/app/components/Product";

const Products = ({ params }) => {
  const { products } = useProdcutsStore();
  const filteredProudcts = products.filter(
    (item) => item.category === params.productsid
  );

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <main>
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {params.productsid}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {filteredProudcts.map((product, index) => {
                return <Product key={index} product={product} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
