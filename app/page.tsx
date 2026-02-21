import Link from 'next/link';

export default async function HomePage() {
  const res = await fetch('https://dummyjson.com/products/category/furniture');
  const data = await res.json();
  const products = data.products;

  return (
    <main className="min-h-screen bg-[#1a1614]">
      {/* Hero Section - Ditambah -mt-20 agar naik menempel ke Navbar */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden -mt-24">
        {/* Gambar background dengan opacity lebih tinggi agar lebih terlihat mewah */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2000')] bg-cover bg-center opacity-40"></div>
        
        {/* Gradient diperhalus agar transisi ke bawah Navbar mulus */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614]/80 via-transparent to-[#1a1614]"></div>
        
        <div className="relative text-center z-10 px-6 mt-20">
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-white">
            LUXÉ <span className="italic font-serif text-amber-600">ATELIER</span>
          </h1>
          <div className="h-[1px] w-32 bg-amber-600 mx-auto my-6"></div>
          <p className="text-stone-400 tracking-[0.5em] uppercase text-[10px]">
            Masterpieces for Your Sanctuary
          </p>
        </div>
      </section>

      {/* SEKSI PERKENALAN SINGKAT */}
      <section className="bg-[#1a1614] py-16 px-6 text-center border-y border-stone-800/50">
        <div className="max-w-2xl mx-auto">
          <p className="text-stone-400 font-serif italic text-xl leading-relaxed">
            "Kami percaya bahwa furnitur bukan sekadar benda, melainkan jiwa dari sebuah hunian. 
            Setiap karya di LUXÉ Atelier dipilih dengan ketelitian tinggi untuk menghadirkan kenyamanan yang artistik."
          </p>
        </div>
      </section>

      {/* Grid Produk */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item: any) => (
            <Link href={`/product/${item.id}`} key={item.id} className="classic-card group rounded-2xl overflow-hidden p-6 hover:bg-stone-800/30 transition-all duration-500">
              <div className="relative aspect-square flex items-center justify-center">
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
      </div>
    </main>
  );
}