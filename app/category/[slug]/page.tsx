import Link from 'next/link';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch data produk berdasarkan kategori yang diklik
  const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
  const data = await res.json();
  const products = data.products;

  return (
    <main className="min-h-screen bg-[#1a1614] pt-32 px-10">
      <h1 className="text-4xl font-serif text-white mb-2 uppercase tracking-widest">{slug}</h1>
      <p className="text-amber-600 text-[10px] mb-10 tracking-[0.5em]">Curated Collection</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20">
        {products.map((item: any) => (
            <Link href={`/product/${item.id}`} key={item.id} className="classic-card group rounded-2xl overflow-hidden p-6 bg-[#1a1614] border border-stone-800/50">
                <div className="relative aspect-square flex items-center justify-center">
                {/* Efek Cahaya di belakang produk agar tidak gelap */}
                <div className="absolute w-48 h-48 bg-amber-900/20 blur-[60px] rounded-full group-hover:bg-amber-600/30 transition-all duration-700"></div>
                
                <img 
                    src={item.thumbnail} 
                    className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700" 
                    alt={item.title}
                />
                </div>
                <div className="mt-8 text-center border-t border-stone-800/50 pt-6">
                <h3 className="text-xl font-serif text-stone-100 group-hover:text-amber-500 transition-colors">{item.title}</h3>
                <p className="text-amber-700 font-bold mt-2 tracking-[0.3em] uppercase text-xs">${item.price}</p>
                </div>
            </Link>
        ))}
      </div>
    </main>
  );
}