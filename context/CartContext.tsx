'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type CartContextType = {
  cartItems: any[];
  cartCount: number;
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      cartCount: cartItems.length, 
      addToCart, 
      removeFromCart 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};