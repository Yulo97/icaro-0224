import { create } from "zustand";

const useCartStore = create((set) => ({
  userId: "1",
  cart: [],
  addCart: (product) => {
    set((state) => ({ cart: [...state.cart, product] }));
  },
}));

export { useCartStore };

// addCart: Agregar productos
