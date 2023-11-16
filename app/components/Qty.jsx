import useCartStore from "@/libs/cartstore";

const Qty = ({ purchasedProduct }) => {
  // const { isCartOpen, setIsCartOpen, cart } = useCartStore();

  return (
    <div>
      {purchasedProduct.length > 10 ? (
        <select>select</select>
      ) : (
        <input
          className="text-primary placeholder:text-primary h-12 rounded-md p-4"
          type="text"
          // placeholder={`${purchasedProduct.length}`}
          placeholder={1}
        />
      )}
    </div>
  );
};

export default Qty;
