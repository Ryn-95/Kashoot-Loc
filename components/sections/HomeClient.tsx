'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import Catalog from '@/components/sections/Catalog';
import SeoContent from '@/components/sections/SeoContent';
import Preloader from '@/components/ui/Preloader';
import CategoryNav from '@/components/layout/CategoryNav';

export default function HomeClient({ initialCategoryProp }: { initialCategoryProp?: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = initialCategoryProp || 'tout';
  const initialSearch = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Sync state with URL params when they change
  useEffect(() => {
    // If the prop changes (due to navigation), update the state
    if (initialCategoryProp) {
      setActiveCategory(initialCategoryProp);
    } else {
       // If we are on home page (no prop), it might be 'tout'
       // But wait, if we navigate from /categories/cameras to /, initialCategoryProp might be undefined
       // So we should check if we are on the home path, or just trust the prop.
       // Actually, if we are on /, initialCategoryProp is undefined in app/page.tsx if no search param.
       // So we should default to 'tout'.
       setActiveCategory(initialCategoryProp || 'tout');
    }

    const search = searchParams.get('search');
    if (search) setSearchQuery(search);
    else setSearchQuery('');
  }, [searchParams, initialCategoryProp]);

  // Removed handleCategoryChange as we now use Link in CategoryNav

  return (
    <main className="min-h-screen bg-white pt-[60px] md:pt-[68px]">
      <Preloader />
      <CategoryNav 
        activeCategory={activeCategory} 
      />
      <HeroBanner />
      <Catalog activeCategory={activeCategory} searchQuery={searchQuery} />
      <SeoContent />
    </main>
  );
}
