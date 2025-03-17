import { create } from 'zustand';

// Definišemo tip podataka za stavke u korpi
export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Definišemo tip za stanje korpe
interface CartStore {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item: CartItemType) =>
    set((state: CartStore) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      } else {
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }
    }),
  removeItem: (id: number) =>
    set((state: CartStore) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));

export default useCart;
