import { use } from "react";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Fetch data produk dari API DummyJSON
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    // Background diubah ke Cream/Bone yang cerah tapi tetap hangat
    <div className="min-h-screen bg-[#f5f2ed] text-stone-900 p-8 md:p-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Container Gambar: Putih bersih dengan bayangan lembut */}
        <div className="relative aspect-square bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-sm border border-stone-200/50">
          <div className="absolute w-72 h-72 bg-amber-100/40 blur-[100px] rounded-full"></div>
          <img 
            src={product.thumbnail} 
            alt={product.title}
            className="relative z-10 w-4/5 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Informasi Produk: Tipografi lebih tegas dan cerah */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-2">
            <span className="text-amber-700 tracking-[0.4em] text-[10px] uppercase font-bold">Premium Collection</span>
            <h1 className="text-5xl md:text-7xl font-serif text-stone-800 leading-tight">
              {product.title}
            </h1>
            <p className="text-3xl text-amber-600 font-light tracking-widest mt-4">
              ${product.price}
            </p>
          </div>
          
          <div className="h-[1px] w-20 bg-amber-200"></div>

          <p className="text-stone-600 leading-relaxed font-light text-lg italic max-w-md">
            "{product.description}"
          </p>

          <div className="pt-6 flex gap-4">
            <button className="flex-1 bg-stone-900 hover:bg-amber-800 text-white py-5 px-8 tracking-[0.2em] uppercase text-[11px] transition-all duration-500 shadow-xl">
              Add to Selection
            </button>
            <button className="p-5 border border-stone-300 hover:border-amber-600 hover:text-amber-600 transition-all group">
              <span className="text-xl group-hover:scale-125 inline-block transition-transform">❤</span>
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
}