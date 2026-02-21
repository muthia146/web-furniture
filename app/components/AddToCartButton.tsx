'use client';
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const context = useCart() as any;

  // Safety check agar tidak error 'reading id'
  if (!context || !product) {
    return <button className="flex-1 bg-stone-400 text-white py-5 px-8 uppercase text-[11px]">Loading...</button>;
  }

  return (
    <button 
      onClick={() => context.addToCart(product)}
      className="flex-1 bg-stone-900 hover:bg-amber-800 text-white py-5 px-8 tracking-[0.2em] uppercase text-[11px] transition-all duration-500 shadow-xl active:scale-95"
    >
      Add to Selection
    </button>
  );
}