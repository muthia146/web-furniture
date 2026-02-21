'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button 
      onClick={() => router.back()} 
      className="mb-8 text-stone-500 hover:text-amber-700 transition-colors text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 group w-fit"
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
    </button>
  );
}