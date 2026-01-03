'use client';

import Image from 'next/image';
import Link from 'next/link';
import { equipmentItems } from '@/data/equipment';
import { useWishlist } from '@/context/WishlistContext';

type EquipmentItem = typeof equipmentItems[0];

interface EquipmentGridProps {
  items?: EquipmentItem[];
}

export default function EquipmentGrid({ items = equipmentItems }: EquipmentGridProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const fallbackImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f3f4f6"/><stop offset="100%" stop-color="%23e5e7eb"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Inter, sans-serif" font-size="14">Image indisponible</text></svg>';
  
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 md:gap-y-16">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/equipment/${item.id}`}
              className="group cursor-pointer flex flex-col gap-3"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(item.id);
                  }}
                  className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md hover:bg-white transition-all duration-300 group/heart shadow-sm hover:shadow-md"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill={isInWishlist(item.id) ? "#ef4444" : "none"} 
                    stroke={isInWishlist(item.id) ? "#ef4444" : "currentColor"} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover/heart:scale-110"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>

                {/* Image */}
                <div className={`absolute inset-0 ${item.imageFit === 'contain' ? ((item as any).imagePadding || 'p-2') + ' bg-white' : ''}`}>
                    <Image
                      src={item.image} 
                      alt={`${item.brand} ${item.model} - Location Paris`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`transition-transform duration-700 ease-out group-hover:scale-105 ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                      onError={(e: any) => { e.currentTarget.src = fallbackImage; }}
                    />
                </div>
                
                {/* Badge - Minimalist Tag */}
                {item.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`
                      px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl border border-white/50
                      ${item.badgeType === 'yellow' ? 'bg-yellow-400/20 text-yellow-800 border-yellow-400/30' : ''}
                      ${item.badgeType === 'green' ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' : ''}
                      ${item.badgeType === 'blue' ? 'bg-blue-600 text-white border-blue-500' : ''}
                      ${item.badgeType === 'neutral' ? 'bg-white/60 text-neutral-600' : ''}
                    `}>
                      {item.badge}
                    </span>
                  </div>
                )}


              </div>

              {/* Card Content - Clean & Typography Focused */}
              <div className="flex flex-col px-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-[17px] font-semibold text-neutral-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.brand} <span className="font-normal text-neutral-800">{item.model}</span>
                  </h3>
                  <div className="flex flex-col items-end">
                     <span className="text-[15px] font-semibold text-neutral-900">{item.price}€</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                   <p className="text-[13px] text-neutral-500 font-medium">{item.subtext}</p>
                   <span className="text-[10px] text-neutral-400 uppercase tracking-wide font-medium">/ jour</span>
                </div>

                {/* Specs - Only show on hover for cleaner look, or keep minimal */}
                <div className="mt-3 flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                   <span className="text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-1 rounded-md">
                     {item.specsBadge}
                   </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
