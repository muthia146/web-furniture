import Link from 'next/link';
import LikeButton from "@/app/components/LikeButton";
import AddToCartButton from "@/app/components/AddToCartButton";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Fetch data produk tetap di sisi server agar cepat dan stabil
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  if (!product.title) return <div className="pt-40 text-center">Product not found</div>;

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-stone-900 p-8 md:p-20 pt-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Tombol Kembali menggunakan Link sederhana agar tidak butuh 'use client' */}
        <Link 
          href="/" 
          className="mb-8 text-stone-500 hover:text-amber-700 transition-colors text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 group w-fit"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Gambar Produk */}
          <div className="relative aspect-square bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-sm border border-stone-200/50">
            <div className="absolute w-72 h-72 bg-amber-100/40 blur-[100px] rounded-full"></div>
            <img 
              src={product.thumbnail} 
              alt={product.title}
              className="relative z-10 w-4/5 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Info Produk */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                 <span className="text-amber-700 tracking-[0.4em] text-[10px] uppercase font-bold">Premium Collection</span>
                 <span className="h-[1px] w-8 bg-amber-700/30"></span>
                 <span className="text-stone-400 tracking-[0.4em] text-[10px] uppercase">{product.category}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-stone-800 leading-tight">{product.title}</h1>
              <p className="text-3xl text-amber-600 font-light tracking-widest mt-4">${product.price}</p>
            </div>
            
            <div className="h-[1px] w-20 bg-amber-200"></div>
            <p className="text-stone-600 leading-relaxed font-light text-lg italic max-w-md">"{product.description}"</p>

            <div className="pt-6 flex gap-4">
              <AddToCartButton product={product} /> 
              <LikeButton product={product} />
            </div>

            <div className="flex gap-8 pt-4">
               <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400">Rating</p>
                  <p className="text-sm font-serif">{product.rating} / 5</p>
               </div>
               <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400">Stock</p>
                  <p className="text-sm font-serif">{product.stock} units</p>
               </div>
               <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400">Brand</p>
                  <p className="text-sm font-serif">{product.brand || 'Artisan Made'}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}