// "use client";

// import useCartStore from "@/libs/cartstore";

const Qty = ({ purchasedProduct }) => {
  // const { cart } = useCartStore();

  const inputHandler = (e) => {
    // const value = parseInt(e.target.value);
    // const cartItem = cart.find((item) => {
    //   return item._id === purchasedProduct._id;
    // });
    // console.log(cartItem);
    // if (cartItem) {
    //   const newCart = cart.map((item) => {
    //     if (item._id === purchasedProduct._id) {
    //     }
    //   })
    // }
  };

  return (
    <div className="flex gap-x-6 items-center text-primary">
      {purchasedProduct.amount > 10 ? (
        <select
          value={purchasedProduct.amount}
          className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      ) : (
        <input
          onBlur={inputHandler}
          className="text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent"
          type="text"
          placeholder={purchasedProduct.amount}
        />
      )}
    </div>
  );
};

export default Qty;
