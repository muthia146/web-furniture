'use client';
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from 'next/link';

export default function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-7 flex justify-between items-center bg-[#1a1614]/95 backdrop-blur-md border-b border-white/5 font-serif">
      <Link href="/" className="text-3xl tracking-[0.3em] text-stone-100 uppercase">
        LUXÉ <span className="italic text-amber-600 font-bold">A.</span>
      </Link>
      
      <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-300 items-center">
        <Link href="/" className="hover:text-amber-500 transition">Collection</Link>
        
        {/* Menu Categories yang sudah aktif */}
        <div className="relative group">
          <button className="hover:text-amber-500 transition uppercase tracking-widest">Categories</button>
          <div className="absolute hidden group-hover:block bg-stone-900 p-4 top-full left-0 w-48 shadow-2xl border border-white/5 z-50">
            <div className="flex flex-col gap-3">
              <Link href="/category/furniture" className="text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors">
                Furniture
              </Link>
              <Link href="/category/home-decoration" className="text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors">
                Home Decor
              </Link>
              <Link href="/category/lighting" className="text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors">
                Lighting
              </Link>
            </div>
          </div>
        </div>
        
        {/* Link Wishlist mengarah ke /wishlist */}
        <Link href="/wishlist">Wishlist ({wishlistCount})</Link>

        {/* Link Selection mengarah ke /cart */}
        <Link href="/cart" className="relative group bg-amber-700/10 px-4 py-2 rounded-full border border-amber-600/20 hover:bg-amber-700/20 transition">
          <span className="text-stone-100">Selection ({cartCount})</span>
        </Link>
      </div>
    </nav>
  );
}