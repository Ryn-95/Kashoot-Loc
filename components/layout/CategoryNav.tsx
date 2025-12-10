'use client';

const categories = [
  {
    id: 'tout',
    label: 'Tout',
  },
  {
    id: 'cameras',
    label: 'Caméras',
  },
  {
    id: 'objectifs',
    label: 'Objectifs',
  },
  {
    id: 'lumieres',
    label: 'Lumières',
  },
  {
    id: 'audio',
    label: 'Audio',
  },
  {
    id: 'drones',
    label: 'Drones',
  },
  {
    id: 'accessoires',
    label: 'Accessoires',
  },
  {
    id: 'moniteurs',
    label: 'Moniteurs',
  },
];

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <div className="bg-white/80 backdrop-blur-xl sticky top-[72px] md:top-[80px] z-40 border-b border-neutral-200/60 transition-all duration-300">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-4 md:py-5">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${activeCategory === category.id 
                  ? 'bg-black text-white shadow-md shadow-black/10 scale-105' 
                  : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
