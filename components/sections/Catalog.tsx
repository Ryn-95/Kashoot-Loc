'use client';

import { useState } from 'react';
import CategoryNav from '@/components/layout/CategoryNav';
import EquipmentGrid from '@/components/sections/EquipmentGrid';
import { equipmentItems } from '@/data/equipment';

export default function Catalog({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState('tout');

  const filteredItems = activeCategory === 'tout'
    ? equipmentItems
    : equipmentItems.filter(item => item.category === activeCategory);

  return (
    <>
      <CategoryNav 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      {children}
      <EquipmentGrid items={filteredItems} />
    </>
  );
}
