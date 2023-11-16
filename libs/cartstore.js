import { create } from "zustand";

const useCartStore = create((set) => ({
  isCartOpen: false,
  setIsCartOpen: (status) => set({ isCartOpen: status }),
  itemAmount: 0,
  setItemAmount: (value) => set({ itemAmount: value }),
  amount: 0,
  setAmount: (value) => set({ amount: value }),
  total: 0,
  setTotal: (value) => set({ total: value }),
  cart: [],
  addCart: (newObject) =>
    set((state) => ({ cart: [...state.cart, newObject] })),
  removeCart: (objectId) =>
    set((state) => {
      const newArray = state.cart.filter((obj) => obj._id !== objectId);
      return { cart: newArray };
    }),
}));

export default useCartStore;
