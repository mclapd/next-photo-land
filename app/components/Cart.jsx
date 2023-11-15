import { IoClose } from "react-icons/io5";
import useProdcutsStore from "@/libs/productsstore";

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useProdcutsStore();

  return (
    <div className="w-full h-full px-4 text-white">
      <div>
        <div
          onClick={() => setIsCartOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default Cart;
