"use client";

import RelatedProducts from "@/app/components/RelatedProducts";
import useProdcutsStore from "@/libs/productsstore";
import Image from "next/image";
import useCartStore from "@/libs/cartstore";

const ProductDetails = ({ params }) => {
  const { products } = useProdcutsStore();
  const { addCart } = useCartStore();
  const targetProduct = products.find((item) => item._id === params.productid);

  if (!targetProduct) {
    return <div className="container mx-auto">loading...</div>;
  }

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <Image
              src={targetProduct.image}
              width={1200}
              height={1200}
              alt="image"
              className="w-full max-w-[65%]"
              priority
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            <div className="uppercase text-accent text-lg font-medium mb-2">
              {targetProduct.category} cameras
            </div>
            <h2 className="h2 mb-4">{targetProduct.title}</h2>
            <p className="mb-12">{targetProduct.description}</p>
            <div className="flex items-center gap-x-8">
              <div className="text-3xl text-accent font-semibold">
                ${targetProduct.price}
              </div>
              <button
                onClick={() => addCart(targetProduct)}
                className="btn btn-accent"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts categoryTitle={targetProduct.category} />
      </div>
    </div>
  );
};

export default ProductDetails;
