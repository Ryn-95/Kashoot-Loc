'use client';

import { useState, useEffect } from 'react';

import EquipmentGrid from '@/components/sections/EquipmentGrid';
import { equipmentItems } from '@/data/equipment';

export default function Catalog({ activeCategory }: { activeCategory: string }) {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const filteredItems = activeCategory === 'tout'
    ? equipmentItems
    : equipmentItems.filter(item => item.category === activeCategory);

  return (
    <EquipmentGrid items={filteredItems} />
  );
}
