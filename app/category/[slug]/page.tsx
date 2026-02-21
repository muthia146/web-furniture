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
          <Link href={`/product/${item.id}`} key={item.id} className="group">
            <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-stone-800">
              <img src={item.thumbnail} className="w-3/4 group-hover:scale-110 transition-transform duration-700" alt={item.title} />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-stone-100 font-serif">{item.title}</h3>
              <p className="text-amber-700 text-sm">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}