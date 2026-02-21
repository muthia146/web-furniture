'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const WishlistContext = createContext<any>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);

  const toggleWishlist = (product: any) => {
    setWishlistItems((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  // Pastikan properti ini ada dan namanya benar!
  return (
    <WishlistContext.Provider value={{ wishlistItems, wishlistCount: wishlistItems.length, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) return { wishlistItems: [], wishlistCount: 0, toggleWishlist: () => {} };
  return context;
};