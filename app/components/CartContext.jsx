// "use client";

// import React from "react";
// import useProdcutsStore from "../../libs/productsstore";
// import CartItem from "./CartItem";
// const CartContext = () => {
//   console.log("KKND");
//   return <div>CartContext</div>;
// };

// export default CartContext;

"use client";

import useCartStore from "@/libs/cartstore";

export const AddToCart = (product) => {
  const { cart, addCart } = useCartStore();

  // const cartItem = cart.find((item) => {
  //   return item.id === itemID;
  // });

  CartItem(product);
  console.log("AddToCart1");
  return <div>{/* <CartItem product={product} /> */}</div>;
};
