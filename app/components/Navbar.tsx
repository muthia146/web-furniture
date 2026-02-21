'use client';
import { useState } from 'react';
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from 'next/link';


export default function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-5 md:py-7 flex justify-between items-center bg-[#1a1614]/95 backdrop-blur-md border-b border-white/5 font-serif">
      <Link href="/" className="text-xl md:text-3xl tracking-[0.2em] md:tracking-[0.3em] text-stone-100 uppercase">
        LUXÉ <span className="italic text-amber-600 font-bold">A.</span>
      </Link>
      
      <div className="flex gap-2 md:gap-8 text-[7px] min-[390px]:text-[9px] md:text-[11px] font-bold uppercase tracking-tight md:tracking-[0.2em] text-stone-300 items-center">
        {/* Link Collection tetap ada tapi jarak huruf (tracking) dipersempit di HP */}
        <Link href="/" className="hover:text-amber-500 transition block">Collection</Link>
        
        {/* Menu Categories - Sekarang Stabil di HP */}
        <div 
          className="relative py-2"
          onMouseEnter={() => setIsDropdownOpen(true)} // Untuk Desktop: Muncul saat hover
          onMouseLeave={() => setIsDropdownOpen(false)} // Untuk Desktop: Hilang saat kursor keluar
        >
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Khusus HP: Klik untuk buka/tutup
            className="hover:text-amber-500 transition uppercase outline-none flex items-center gap-1"
          >
            Categories 
            <span className={`text-[8px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>↓</span>
          </button>

          {/* Panel Dropdown - Muncul berdasarkan state isDropdownOpen */}
          <div className={`
            absolute bg-stone-900 p-5 top-full left-[-60px] md:left-0 w-48 shadow-2xl border border-white/10 z-50 transition-all duration-200
            ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
          `}>
            <div className="flex flex-col gap-4">
              <Link 
                href="/category/furniture" 
                onClick={() => setIsDropdownOpen(false)} // Tutup dropdown setelah pilih
                className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors"
              >
                Furniture
              </Link>
              <Link 
                href="/category/home-decoration" 
                onClick={() => setIsDropdownOpen(false)}
                className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors"
              >
                Home Decor
              </Link>
              <Link 
                href="/category/kitchen-accessories" 
                onClick={() => setIsDropdownOpen(false)}
                className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors"
              >
                Kitchen Accessories
              </Link>
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