import { create } from "zustand";

const useCart = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
}));

export { useCart };
