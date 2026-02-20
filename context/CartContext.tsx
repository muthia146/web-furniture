'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// Membuat context untuk keranjang belanja (State Management Kompleks)
const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount((prev) => prev + 1);

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);