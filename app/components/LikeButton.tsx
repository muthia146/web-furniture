'use client';
import { useWishlist } from "@/context/WishlistContext";

export default function LikeButton({ product }: { product: any }) {
  const context = useWishlist() as any;

  // Safety check agar tombol tidak hilang dan tidak error id
  if (!context || !product) {
    return <button className="p-5 border border-stone-300 text-stone-300">♡</button>;
  }

  const isLiked = context.wishlistItems?.some((item: any) => item.id === product.id);

  return (
    <button 
      onClick={() => context.toggleWishlist(product)}
      className={`p-5 border transition-all duration-300 ${
        isLiked ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-300 text-stone-600'
      }`}
    >
      <span className="text-xl">{isLiked ? '❤' : '♡'}</span>
    </button>
  );
}