import Link from "next/link";
import Image from "next/image";

const Product = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden group">
        <div className="w-full h-[200px] flex items-center justify-center relative">
          {product.isNew ? (
            <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
              new
            </div>
          ) : (
            ""
          )}
          <Image
            src={product.image}
            width={200}
            height={100}
            alt="image"
            className="w-160px] h-[160px group-hover:scale-90 transition-all"
            priority
          />
        </div>
        <div className="px-6 pb-8 flex flex-col">
          <div className="text-sm text-accent capitalize mb-2">
            {product.category}
          </div>
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.title.substring(0, 35)}...
          </div>
          <div className="text-lg text-accent">${product.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
