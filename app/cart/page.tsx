'use client';
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  // Menghitung total harga belanjaan
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-[#f5f2ed] p-10 pt-32 text-stone-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif mb-2 tracking-tight">Your Selection</h1>
        <p className="text-amber-700 text-[10px] uppercase tracking-[0.4em] mb-10 font-bold">Curated Masterpieces</p>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20 border-y border-stone-300">
            <p className="italic text-stone-500 font-serif">Your selection is currently empty.</p>
            <Link href="/" className="mt-6 inline-block text-[10px] uppercase tracking-widest border-b border-stone-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors">
              Discover Collection
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Daftar Barang di Keranjang */}
            <div className="space-y-4">
              {cartItems.map((item: any, index: number) => (
                <div key={`${item.id}-${index}`} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-stone-200/50 group">
                  <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-contain group-hover:scale-110 transition-transform" />
                  
                  <div className="flex-1">
                    <h2 className="font-serif text-xl text-stone-800">{item.title}</h2>
                    <p className="text-amber-600 font-light tracking-widest">${item.price}</p>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-stone-400 hover:text-red-800 text-[10px] uppercase tracking-tighter transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Ringkasan Total */}
            <div className="pt-8 border-t border-stone-300 flex flex-col items-end gap-4">
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-stone-500">Estimated Total</p>
                <p className="text-4xl font-serif text-stone-900">${totalPrice.toFixed(2)}</p>
              </div>
              <button className="w-full md:w-64 bg-stone-900 text-white py-5 text-[11px] uppercase tracking-[0.3em] hover:bg-amber-800 transition-all shadow-xl">
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}