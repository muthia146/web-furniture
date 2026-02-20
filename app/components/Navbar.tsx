'use client';
import { useCart } from "@/context/CartContext";
import Link from 'next/link';

export default function Navbar() {
  const { cartCount } = useCart(); // Mengambil jumlah dari State Management

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#1a1614]/60 backdrop-blur-md border-b border-white/5 font-serif">
      <Link href="/" className="text-2xl tracking-[0.3em] text-stone-100">
        LUXÉ <span className="italic text-amber-600">A.</span>
      </Link>
      
      <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] text-stone-400 items-center">
        <Link href="/" className="hover:text-amber-500 transition">Collection</Link>
        <button className="hover:text-amber-500 transition">Categories</button>
        <div className="relative group cursor-pointer">
          <span className="text-stone-100">Selection</span>
          <span className="absolute -top-3 -right-4 bg-amber-700 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
}