import { create } from "zustand";
import { CartProduct, Product } from "@/lib/types";
import { persist } from "zustand/middleware";

interface CartStore {
  items: CartProduct[];
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),

      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i,
              ),
            };
          }
          return { items: [...state.items, { product, quantity: 1 }] };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== id),
        })),

      increaseQty: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        })),

      decreaseQty: (id) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.product.id === id ? { ...i, quantity: i.quantity - 1 } : i,
            )
            .filter((i) => i.quantity > 0),
        })),
    }),
    {
      name: "cart",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
