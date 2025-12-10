'use client';

import { useState } from 'react';

import EquipmentGrid from '@/components/sections/EquipmentGrid';
import { equipmentItems } from '@/data/equipment';

export default function Catalog({ children, activeCategory }: { children: React.ReactNode, activeCategory: string }) {
  

  const filteredItems = activeCategory === 'tout'
    ? equipmentItems
    : equipmentItems.filter(item => item.category === activeCategory);

  return (
    <EquipmentGrid items={filteredItems} />
  );
}
