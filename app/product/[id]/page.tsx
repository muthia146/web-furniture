'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Tambahkan ini untuk ambil ID
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams(); // Cara aman ambil ID di Client Component
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (params?.id) {
      fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        });
    }
  }, [params?.id]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-[#fdfcf9]">
      <div className="animate-pulse font-serif italic text-stone-400">Loading masterpiece...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfcf9] py-20 px-6 font-serif">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 border border-stone-200 -z-10 transition-all group-hover:inset-0"></div>
          <img src={product.thumbnail} className="w-full shadow-2xl transition-all duration-700" alt={product.title} />
        </div>
        <div className="w-full md:w-1/2 space-y-8 text-stone-800">
          <nav className="text-[10px] tracking-[.3em] uppercase text-stone-400">
             <a href="/" className="hover:text-stone-900 transition">Collection</a> / {product.category}
          </nav>
          <h1 className="text-5xl font-light leading-tight">{product.title}</h1>
          <p className="text-stone-500 leading-relaxed italic text-lg font-light italic">"{product.description}"</p>
          <div className="text-3xl text-amber-900 font-light tracking-widest">${product.price}</div>
          <div className="pt-10 flex flex-col gap-4 text-stone-800">
            <button 
              onClick={() => {
                addToCart();
                alert(`${product.title} has been added to your collection.`);
              }}
              className="bg-stone-900 text-white py-5 px-10 text-[10px] tracking-[0.3em] uppercase hover:bg-amber-950 transition-all duration-500 shadow-xl"
            >
              Add to Collection
            </button>
            <a href="/" className="text-center text-[9px] tracking-[0.2em] text-stone-400 uppercase hover:text-stone-800 transition">
              Back to Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}