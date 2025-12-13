'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import Catalog from '@/components/sections/Catalog';
import Preloader from '@/components/ui/Preloader';
import CategoryNav from '@/components/layout/CategoryNav';

export default function HomeClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get('category') || 'tout';
  const initialSearch = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Sync state with URL params when they change
  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    if (category) setActiveCategory(category);
    else setActiveCategory('tout');
    
    if (search) setSearchQuery(search);
    else setSearchQuery('');
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Update URL without full reload
    const newParams = new URLSearchParams(searchParams.toString());
    if (category === 'tout') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    // Reset search when changing category if desired, or keep it. Let's keep it flexible.
    router.push(`/?${newParams.toString()}`, { scroll: false });
  };

  return (
    <main className="min-h-screen bg-white pt-[60px] md:pt-[68px]">
      <Preloader />
      <CategoryNav 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <HeroBanner />
      <Catalog activeCategory={activeCategory} searchQuery={searchQuery} />
    </main>
  );
}
