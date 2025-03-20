'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { CartItem, Product } from '@/types/types';

// Tip za context state
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  updateAddonQuantity: (
    itemId: string,
    addonId: string,
    increment: boolean,
  ) => void;
  clearCart: () => void;
}

// Kreiranje context-a
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider komponenta
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        id: uuid(),
        title: product.title,
        price: product.price,
        quantity: 1,
        addons:
          product.addons?.map((addonTitle) => ({
            id: uuid(),
            title: addonTitle,
            quantity: 1,
            price: 0,
          })) || [],
      },
    ]);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const incrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const updateAddonQuantity = (
    itemId: string,
    addonId: string,
    increment: boolean,
  ) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            addons: item.addons.map((addon) =>
              addon.id === addonId
                ? {
                    ...addon,
                    quantity: increment
                      ? Math.min(addon.quantity + 1, 2)
                      : Math.max(addon.quantity - 1, 0),
                  }
                : addon,
            ),
          };
        }
        return item;
      }),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        updateAddonQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook za lakši pristup contextu
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
