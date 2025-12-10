'use client';

import Link from 'next/link';

interface EquipmentItem {
  id: number;
  title: string;
  description: string;
  price: string;
  period: string;
  image: string;
  available: boolean;
}

interface EquipmentListingProps {
  items: EquipmentItem[];
}

export default function EquipmentListing({ items }: EquipmentListingProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/equipment/${item.id}`}
          className="group cursor-pointer"
        >
          <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100 mb-3">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
              <span className="text-neutral-400 text-sm">{item.title}</span>
            </div>
            {item.available && (
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium text-neutral-900">
                Disponible
              </div>
            )}
          </div>
          <div>
            <h3 className="text-base font-medium text-neutral-900 mb-1 group-hover:underline">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-2">{item.description}</p>
            <p className="text-base font-medium text-neutral-900">
              {item.price} <span className="text-sm font-normal text-neutral-600">{item.period}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

