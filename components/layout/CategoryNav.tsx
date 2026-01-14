'use client';

const categories = [
  {
    id: 'tout',
    label: 'Tout',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
      </svg>
    )
  },
  {
    id: 'cameras',
    label: 'Caméras',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    )
  },
  {
    id: 'objectifs',
    label: 'Objectifs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
      </svg>
    )
  },
  {
    id: 'lumieres',
    label: 'Lumières',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    )
  },
  {
    id: 'audio',
    label: 'Audio',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    )
  },
  {
    id: 'drones',
    label: 'Drones',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    id: 'accessoires',
    label: 'Accessoires',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    id: 'moniteurs',
    label: 'Moniteurs',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
];

import Link from 'next/link';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange?: (id: string) => void;
}

export default function CategoryNav({ activeCategory }: CategoryNavProps) {
  return (
    <div className="bg-white sticky top-[60px] md:top-[68px] z-30 transition-all duration-300 border-b border-neutral-100/50 shadow-sm md:shadow-none">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-center gap-2 sm:gap-8 overflow-x-auto no-scrollbar py-2 px-4 sm:px-6 lg:px-8 mask-linear-fade">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.id === 'tout' ? '/' : `/categories/${category.id}`}
              className={`
                flex flex-col items-center justify-center gap-1.5 min-w-[72px] sm:min-w-[80px] pb-2 transition-all duration-300 group relative flex-shrink-0
                ${activeCategory === category.id 
                  ? 'text-black opacity-100' 
                  : 'text-neutral-500 opacity-60 hover:opacity-100 hover:text-black'
                }
              `}
            >
              <div className="transition-transform duration-300 group-hover:scale-105 p-2 rounded-xl bg-neutral-50 group-hover:bg-neutral-100">
                {category.icon}
              </div>
              <span className={`text-[10px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap ${activeCategory === category.id ? 'font-bold' : ''}`}>
                {category.label}
              </span>
              
              {/* Active Indicator Line (Turismo Style) */}
              <div className={`
                absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-black rounded-full transition-all duration-300
                ${activeCategory === category.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
              `} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
