import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Qty from "./Qty";
import useCartStore from "@/libs/cartstore";
import { useEffect } from "react";

const CartItem = ({ purchasedProduct }) => {
  const { removeCart, cartAmount, setCartAmount, cart } = useCartStore();

  useEffect(() => {
    console.log("USEEFFECT");
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);

    setCartAmount(amount);
  }, [cart, setCartAmount]);

  const cartRemoveHanlder = () => {
    if (cartAmount - purchasedProduct.amount >= 0)
      setCartAmount(cartAmount - purchasedProduct.amount);
    else setCartAmount(0);

    removeCart(purchasedProduct._id);
  };

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
            onClick={cartRemoveHanlder}
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
                $ {purchasedProduct.price * purchasedProduct.amount}
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
