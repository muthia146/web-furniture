'use client';
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlistItems, toggleWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-[#f5f2ed] p-10 pt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif mb-2 text-stone-900 tracking-tight">Your Wishlist</h1>
        <p className="text-amber-700 text-[10px] uppercase tracking-[0.4em] mb-12 font-bold">Saved Elegance</p>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-20 border-y border-stone-300">
            <p className="italic text-stone-500 font-serif text-lg">Your wishlist is currently empty.</p>
            <Link href="/" className="mt-6 inline-block text-[10px] uppercase tracking-widest border-b border-stone-800 pb-1 hover:text-amber-600 transition-colors">
              Continue Exploring
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {wishlistItems.map((item: any) => (
              <div key={item.id} className="group bg-white p-8 rounded-3xl shadow-sm border border-stone-200/60 hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-square mb-8 overflow-hidden rounded-2xl bg-stone-50 flex items-center justify-center">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                
                <div className="space-y-3">
                  {/* Warna Stone-900 dan Font Bold agar teks terbaca jelas */}
                  <h2 className="font-serif text-2xl text-stone-900 font-bold leading-tight">{item.title}</h2>
                  
                  {/* Harga dengan warna Amber yang lebih kontras */}
                  <p className="text-amber-700 font-bold text-xl tracking-wide">${item.price}</p>
                  
                  <div className="pt-6 flex items-center justify-between border-t border-stone-100 mt-6">
                    <Link 
                      href={`/product/${item.id}`} 
                      className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-800 border-b-2 border-amber-600 pb-1 hover:text-amber-700 transition-colors"
                    >
                      View Detail
                    </Link>
                    
                    {/* Tombol hapus agar wishlist fungsional */}
                    <button 
                      onClick={() => toggleWishlist(item)}
                      className="text-stone-400 hover:text-red-700 transition-colors text-[10px] uppercase tracking-widest"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}