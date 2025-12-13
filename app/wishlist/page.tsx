'use client';

import { useWishlist } from '@/context/WishlistContext';
import { equipmentItems } from '@/data/equipment';
import EquipmentGrid from '@/components/sections/EquipmentGrid';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  const wishlistItems = equipmentItems.filter(item => wishlist.includes(item.id));

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Ma Wishlist
          </h1>
          <p className="text-neutral-500 text-lg">
            {wishlistItems.length} articles sauvegardés
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <EquipmentGrid items={wishlistItems} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-neutral-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Votre wishlist est vide</h2>
            <p className="text-neutral-500 mb-8 max-w-md">
              Parcourez notre catalogue et sauvegardez vos équipements préférés pour plus tard.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-all transform hover:scale-105"
            >
              Découvrir le catalogue
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
