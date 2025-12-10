'use client';

import Link from 'next/link';
import { equipmentItems } from '@/data/equipment';

type EquipmentItem = typeof equipmentItems[0];

interface EquipmentGridProps {
  items?: EquipmentItem[];
}

export default function EquipmentGrid({ items = equipmentItems }: EquipmentGridProps) {
  const fallbackImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f3f4f6"/><stop offset="100%" stop-color="%23e5e7eb"/></linearGradient></defs><rect width="400" height="300" fill="url(%23g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Inter, sans-serif" font-size="14">Image indisponible</text></svg>';
  
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/equipment/${item.id}`}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Card Image Container - Apple Style Squircle */}
              <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#F5F5F7] transition-all duration-500 group-hover:bg-[#EAEAEA]">
                {/* Image */}
                <div className="absolute inset-0 p-10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={item.image} 
                      alt={`${item.brand} ${item.model}`}
                      className="w-full h-full object-contain drop-shadow-sm"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackImage; }}
                    />
                </div>
                
                {/* Badge - Minimalist Tag */}
                {item.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`
                      px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl border border-white/50
                      ${item.badgeType === 'yellow' ? 'bg-yellow-400/20 text-yellow-800 border-yellow-400/30' : ''}
                      ${item.badgeType === 'green' ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' : ''}
                      ${item.badgeType === 'blue' ? 'bg-blue-600/10 text-blue-700 border-blue-600/20' : ''}
                      ${item.badgeType === 'neutral' ? 'bg-white/60 text-neutral-600' : ''}
                    `}>
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Status Indicator - Subtle Dot */}
                <div className="absolute top-5 right-5 z-10">
                   <div className={`w-1.5 h-1.5 rounded-full ${item.available ? 'bg-emerald-500 ring-4 ring-emerald-500/10' : 'bg-red-500 ring-4 ring-red-500/10'}`} />
                </div>
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
