import Link from 'next/link';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Menggunakan SSR (Server-Side Rendering) sesuai materi tugas
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
  const data = await res.json();
  const products = data.products;

  return (
    // 1. pt-24 agar tidak tertutup navbar di HP, px-4 agar tidak terlalu mepet
    <main className="min-h-screen bg-[#1a1614] pt-5 md:pt-9 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Judul Responsif */}
        <h1 className="text-2xl md:text-4xl font-serif text-white mb-2 uppercase tracking-widest">{slug.replace('-', ' ')}</h1>
        <p className="text-amber-600 text-[8px] md:text-[10px] mb-8 md:mb-10 tracking-[0.5em]">Curated Collection</p>
        
        {/* 2. GRID: grid-cols-2 (HP) dan md:grid-cols-3 (Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 pb-20">
          {products.map((item: any) => (
            <Link 
              href={`/product/${item.id}`} 
              key={item.id} 
              className="group rounded-2xl overflow-hidden p-3 md:p-6 bg-[#1a1614] border border-stone-800/50 flex flex-col h-full"
            >
              <div className="relative aspect-square flex items-center justify-center bg-stone-900/50 rounded-xl overflow-hidden">
                {/* Efek Cahaya */}
                <div className="absolute w-32 h-32 md:w-48 md:h-48 bg-amber-900/10 blur-[40px] md:blur-[60px] rounded-full group-hover:bg-amber-600/20 transition-all duration-700"></div>
                
                <img 
                  src={item.thumbnail} 
                  className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" 
                  alt={item.title}
                />
              </div>

              {/* 3. Text Center & Ukuran Font Adaptif */}
              <div className="mt-4 md:mt-8 text-center border-t border-stone-800/50 pt-4 md:pt-6 flex-grow">
                <h3 className="text-[10px] md:text-xl font-serif text-stone-100 group-hover:text-amber-500 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-amber-700 font-bold mt-1 md:mt-2 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-xs">
                  ${item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}