'use client';
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from 'next/link';

export default function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-5 md:py-7 flex justify-between items-center bg-[#1a1614]/95 backdrop-blur-md border-b border-white/5 font-serif">
      <Link href="/" className="text-xl md:text-3xl tracking-[0.2em] md:tracking-[0.3em] text-stone-100 uppercase">
        LUXÉ <span className="italic text-amber-600 font-bold">A.</span>
      </Link>
      
      <div className="flex gap-2 md:gap-8 text-[7px] min-[390px]:text-[9px] md:text-[11px] font-bold uppercase tracking-tight md:tracking-[0.2em] text-stone-300 items-center">
        {/* Link Collection tetap ada tapi jarak huruf (tracking) dipersempit di HP */}
        <Link href="/" className="hover:text-amber-500 transition block">Collection</Link>
        
        {/* Menu Categories */}
        <div className="relative group py-2">
          <button className="hover:text-amber-500 transition uppercase outline-none">Categories</button>
          <div className="absolute hidden group-hover:block group-active:block bg-stone-900 p-4 top-full left-[-80px] md:left-0 w-48 shadow-2xl border border-white/5 z-50">
            <div className="flex flex-col gap-3">
              <Link href="/category/furniture" className="text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors">Furniture</Link>
              <Link href="/category/home-decoration" className="text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors">Home Decor</Link>
              <Link href="/category/kitchen-accessories" className="text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors">Kitchen Accessories</Link>
            </div>
          </div>
        </div>
        
        {/* Wishlist diperpendek jadi simbol atau angka saja di HP jika masih sesak, 
            tapi kita coba kecilkan font dulu */}
        <Link href="/wishlist" className="hover:text-amber-500 transition">Wishlist ({wishlistCount})</Link>

        {/* Selection (Cart) dibuat lebih ramping padding-nya */}
        <Link href="/cart" className="relative group bg-amber-700/10 px-1.5 md:px-4 py-1 md:py-2 rounded-full border border-amber-600/20 hover:bg-amber-700/20 transition">
          <span className="text-stone-100 italic">Selection ({cartCount})</span>
        </Link>
      </div>
    </nav>
  );
}