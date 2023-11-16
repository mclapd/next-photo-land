import { IoClose } from "react-icons/io5";
import useCartStore from "@/libs/cartstore";
import CartItem from "./CartItem";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cart } = useCartStore();

  return (
    <div className="w-full h-full px-4 text-white">
      <div>
        <div
          onClick={() => setIsCartOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 py-2">
          {cart.map((purchasedProduct, index) => {
            return <CartItem key={index} purchasedProduct={purchasedProduct} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
