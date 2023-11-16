import { create } from "zustand";

const useCartStore = create((set) => ({
  isCartOpen: false,
  setIsCartOpen: (status) => set({ isCartOpen: status }),
  itemAmount: 0,
  setItemAmount: (value) => set({ itemAmount: value }),
  cartAmount: 0,
  setCartAmount: (value) => set({ cartAmount: value }),
  total: 0,
  setTotal: (value) => set({ total: value }),
  cart: [],
  addCart: (newObject) =>
    set((state) => {
      const existingObjectIndex = state.cart.findIndex(
        (obj) => obj._id === newObject._id
      );
      if (existingObjectIndex !== -1) {
        const newArray = [...state.cart];
        newArray[existingObjectIndex].amount += 1;
        return { cart: newArray };
      } else {
        return { cart: [...state.cart, { ...newObject, amount: 1 }] };
      }
    }),
  removeCart: (objectId) =>
    set((state) => {
      const newArray = state.cart.filter((obj) => obj._id !== objectId);
      return { cart: newArray };
    }),
}));

export default useCartStore;
