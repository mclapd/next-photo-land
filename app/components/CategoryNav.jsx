"use client";

import useProdcutsStore from "@/libs/productsstore";
import Link from "next/link";

const CategoryNav = () => {
  const categories = ["compact", "dslr", "flim", "mirrorless", "professional"];
  // const { products } = useProdcutsStore();

  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {categories.map((category, index) => {
            return (
              <Link key={index} href={"#"} className="cursor-pointer uppercase">
                {category}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
