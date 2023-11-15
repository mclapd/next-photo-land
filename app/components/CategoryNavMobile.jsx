import { FiX } from "react-icons/fi";
import useProdcutsStore from "@/libs/productsstore";
import Link from "next/link";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { categories } = useProdcutsStore();

  return (
    <div className="w-full h-full bg-primary p-8">
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {categories?.map((category, index) => {
          return (
            <Link
              key={index}
              href={`/products/${category.title}`}
              className="uppercase"
            >
              {category.title} Cameras
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
