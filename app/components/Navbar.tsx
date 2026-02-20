'use client';
import { useCart } from "@/context/CartContext";
import Link from 'next/link';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-7 flex justify-between items-center bg-[#1a1614]/90 backdrop-blur-md border-b border-white/5 font-serif shadow-2xl">
      {/* Logo lebih besar */}
      <Link href="/" className="text-3xl tracking-[0.3em] text-stone-100 hover:text-amber-500 transition-colors">
        LUXÉ <span className="italic text-amber-600 font-bold">A.</span>
      </Link>
      
      {/* Menu Navigasi lebih besar dan tegas */}
      <div className="flex gap-12 text-[12px] font-bold uppercase tracking-[0.25em] text-stone-300 items-center">
        <Link href="/" className="hover:text-amber-500 transition-all border-b border-transparent hover:border-amber-600 pb-1">Collection</Link>
        <button className="hover:text-amber-500 transition-all border-b border-transparent hover:border-amber-600 pb-1">Categories</button>
        
        {/* Tombol Selection / Cart */}
        <div className="relative group cursor-pointer bg-stone-800/50 px-4 py-2 rounded-full border border-white/10 hover:border-amber-600 transition-all">
          <span className="text-stone-100 group-hover:text-amber-500">Selection</span>
          <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
}