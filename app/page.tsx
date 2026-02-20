import Link from 'next/link';

export default async function HomePage() {
  const res = await fetch('https://dummyjson.com/products/category/furniture');
  const data = await res.json();
  const products = data.products;

  return (
    <main className="min-h-screen">
      {/* Hero Section dengan Gambar Latar Belakang yang Elegan */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gambar background furniture yang di-overlay gelap agar tulisan terbaca */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1614]"></div>
        
        <div className="relative text-center z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-white">
            LUXÉ <span className="italic font-serif text-amber-600">ATELIER</span>
          </h1>
          <div className="h-[1px] w-32 bg-amber-600 mx-auto my-6"></div>
          <p className="text-stone-400 tracking-[0.5em] uppercase text-[10px]">
            Masterpieces for Your Sanctuary
          </p>
        </div>
      </section>

      {/* Grid Produk dengan Spotlight Effect */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item: any) => (
            <Link href={`/product/${item.id}`} key={item.id} className="classic-card group rounded-2xl overflow-hidden p-6">
              <div className="relative aspect-square flex items-center justify-center">
                {/* Cahaya di belakang produk agar gambar tidak gelap */}
                <div className="absolute w-48 h-48 bg-amber-900/20 blur-[60px] rounded-full group-hover:bg-amber-600/30 transition-all duration-700"></div>
                <img 
                  src={item.thumbnail} 
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700" 
                  alt={item.title}
                />
              </div>
              <div className="mt-8 text-center border-t border-stone-800/50 pt-6">
                <h3 className="text-xl font-serif text-stone-100 group-hover:text-amber-500 transition-colors">{item.title}</h3>
                <p className="text-amber-700 font-light mt-2 tracking-[0.3em] uppercase text-xs">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}