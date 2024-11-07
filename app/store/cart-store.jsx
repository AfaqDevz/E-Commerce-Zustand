import { create } from "zustand";

export const useCartStore = create((set) => ({
    products: [],
    cart: {},
    updateProducts: (products) => set({ products }),
    updateCart: (cart) => set({ cart }),
}));
