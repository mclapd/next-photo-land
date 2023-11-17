import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import useCartStore from "@/libs/cartstore";
import CartItem from "./CartItem";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartTotal, cart, clearCart } =
    useCartStore();

  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-auto overflow-x-hidden h-[75vh]">
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
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div>$ {cartTotal}</div>
          </div>
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>$ {cartTotal}</div>
          </div>
        </div>
      )}
      <div className="px-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={() => clearCart()}
              className="btn btn-accent hover:bg-accent-hover text-primary"
            >
              clear cart
            </button>
            <button className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
              Checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
            <div className="text-2xl">Your cart is empyt</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
