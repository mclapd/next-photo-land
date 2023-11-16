import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Qty from "./Qty";
import useCartStore from "@/libs/cartstore";

const CartItem = ({ purchasedProduct }) => {
  const { removeCart } = useCartStore();

  return (
    <div className="flex gap-x-8">
      <Link
        href={`/product/${purchasedProduct._id}`}
        className="w-[70px] h-[70px]"
      >
        <Image
          src={purchasedProduct.image}
          width={1200}
          height={1200}
          alt="image"
        />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3">
          <Link href={`/product/${purchasedProduct._id}`}>
            {purchasedProduct.title}
          </Link>
          <div
            onClick={() => removeCart(purchasedProduct._id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
          >
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          <div>
            <div className="flex gap-x-4 mb-2">
              <Qty purchasedProduct={purchasedProduct} />
              <div className="text-accent text-xl">
                $ {purchasedProduct.price}
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-accent">
            $ {purchasedProduct.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
