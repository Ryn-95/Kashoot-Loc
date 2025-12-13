'use client';

import { useState, useEffect } from 'react';

import EquipmentGrid from '@/components/sections/EquipmentGrid';
import { equipmentItems } from '@/data/equipment';

export default function Catalog({ activeCategory, searchQuery }: { activeCategory: string; searchQuery: string }) {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory, searchQuery]);

  const filteredItems = equipmentItems.filter(item => {
    const matchesCategory = activeCategory === 'tout' || item.category === activeCategory;
    const matchesSearch = searchQuery 
      ? (item.brand + ' ' + item.model + ' ' + item.subtext).toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <EquipmentGrid items={filteredItems} />
  );
}
