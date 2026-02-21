'use client';
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    // 1. pt-10 untuk mengurangi jarak kosong atas di HP
    <div className="min-h-screen bg-[#f5f2ed] p-4 md:p-10 pt-10 md:pt-13 text-stone-900">
      <div className="max-w-4xl mx-auto">
        {/* Judul responsif: text-3xl di HP */}
        <h1 className="text-3xl md:text-5xl font-serif mb-2 tracking-tight">Your Selection</h1>
        <p className="text-amber-700 text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-10 font-bold">Curated Masterpieces</p>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20 border-y border-stone-300">
            <p className="italic text-stone-500 font-serif">Your selection is currently empty.</p>
            <Link href="/" className="mt-6 inline-block text-[10px] uppercase tracking-widest border-b border-stone-800 pb-1">
              Discover Collection
            </Link>
          </div>
        ) : (
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              {cartItems.map((item: any, index: number) => (
                // 2. Gap dikurangi dan p-4 agar lebih compact
                <div key={`${item.id}-${index}`} className="flex items-center gap-3 md:gap-6 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-stone-200/50 group">
                  {/* Gambar dikunci ukurannya agar tidak raksasa */}
                  <img src={item.thumbnail} alt={item.title} className="w-16 h-16 md:w-24 md:h-24 object-contain flex-shrink-0" />
                  
                  {/* 3. flex-1 dan min-w-0 agar teks mengalah dan tidak mendorong tombol keluar */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-sm md:text-xl text-stone-800 truncate">{item.title}</h2>
                    <p className="text-amber-600 font-bold md:font-light text-xs md:text-base tracking-widest">${item.price}</p>
                  </div>

                  {/* 4. flex-shrink-0 memastikan tombol tidak gepeng atau hilang */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="flex-shrink-0 text-stone-400 hover:text-red-800 text-[9px] md:text-[10px] uppercase tracking-widest font-bold border-l pl-3 border-stone-100"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-stone-300 flex flex-col items-end gap-4">
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-stone-500">Estimated Total</p>
                <p className="text-3xl md:text-4xl font-serif text-stone-900">${totalPrice.toFixed(2)}</p>
              </div>
              <button className="w-full md:w-64 bg-stone-900 text-white py-4 md:py-5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] hover:bg-amber-800 transition-all shadow-xl">
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}