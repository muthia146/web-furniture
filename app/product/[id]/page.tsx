import BackButton from "@/app/components/BackButton";
import LikeButton from "@/app/components/LikeButton";
import AddToCartButton from "@/app/components/AddToCartButton";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Fetch data produk tetap di sisi server agar cepat dan stabil
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  if (!product.title) return <div className="pt-40 text-center">Product not found</div>;

  return (
    <main className="min-h-screen bg-[#f5f2ed] text-stone-900">
      {/* Container Utama: pt-9 agar pas di bawah Navbar HP, pt-13 di Desktop */}
      <div className="max-w-6xl mx-auto px-6 pt-9 md:pt-13 pb-20">
        
        {/* Tombol Back */}
        <div className="mb-6 md:mb-10">
          <BackButton />
        </div>
  
        {/* Grid: Di HP tumpuk vertikal (flex-col), di Desktop berjajar (md:flex-row) */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          
          {/* Gambar Produk: Ukuran kita kunci agar tidak raksasa di HP */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full aspect-square max-w-[300px] md:max-w-none bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-200/50 overflow-hidden">
              <div className="absolute w-40 h-40 bg-amber-100/40 blur-[50px] rounded-full"></div>
              <img 
                src={product.thumbnail} 
                alt={product.title}
                className="relative z-10 w-4/5 object-contain drop-shadow-lg" 
              />
            </div>
          </div>
  
          {/* Info Produk */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <p className="text-amber-700 tracking-[0.3em] text-[10px] uppercase font-bold">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-6xl font-serif text-stone-800 leading-tight">
                {product.title}
              </h1>
              <p className="text-2xl md:text-3xl text-amber-600 font-light italic">
                ${product.price}
              </p>
            </div>
            
            <div className="h-[1px] w-12 bg-amber-200"></div>
            <p className="text-stone-600 leading-relaxed font-light text-base md:text-lg italic">
              "{product.description}"
            </p>
  
            <div className="pt-4 flex gap-4">
              <AddToCartButton product={product} /> 
              <LikeButton product={product} />
            </div>
  
            {/* Info Detail: Rating, Stock, Brand */}
            {/* Info Detail: Diubah agar tidak terpotong di HP */}
            <div className="flex flex-wrap gap-y-6 pt-6 border-t border-stone-200">
              <div className="w-1/2 md:w-1/3">
                  <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-stone-400 mb-1">Rating</p>
                  <p className="text-xs md:text-sm font-serif text-stone-800">{product.rating} / 5</p>
              </div>
              <div className="w-1/2 md:w-1/3">
                  <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-stone-400 mb-1">Stock</p>
                  <p className="text-xs md:text-sm font-serif text-stone-800">{product.stock} units</p>
              </div>
              <div className="w-full md:w-1/3"> {/* Brand jadi satu baris penuh di HP jika panjang */}
                  <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-stone-400 mb-1">Brand</p>
                  <p className="text-xs md:text-sm font-serif text-stone-800 break-words">
                    {product.brand || 'Artisan Made'}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}