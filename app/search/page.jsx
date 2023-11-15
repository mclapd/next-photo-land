"use client";

import useProdcutsStore from "@/libs/productsstore";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const params = useSearchParams();
  const searchTerm = params?.get("query");
  const { products } = useProdcutsStore();

  // const compactItems = products.filter((item) => item.category === "compact");
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="mb-[30px] pt-40 lg:pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <div>
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {filteredProducts?.length > 0
                ? `${filteredProducts.length} results for ${searchTerm}`
                : `no result found for ${searchTerm}`}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {filteredProducts.map((product, index) => {
                return <Product key={index} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
