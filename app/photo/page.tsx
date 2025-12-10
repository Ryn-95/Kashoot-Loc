import { Metadata } from 'next';
import EquipmentListing from '@/components/sections/EquipmentListing';

export const metadata: Metadata = {
  title: 'Photo',
  description: 'Location de matériel photo professionnel',
};

const photoEquipment = [
  {
    id: 1,
    title: 'Canon EOS R5',
    description: 'Caméra plein format 45MP',
    price: '150€',
    period: 'par jour',
    image: '/equipment/camera-1.jpg',
    available: true,
  },
  {
    id: 2,
    title: 'Sony A7 IV',
    description: 'Caméra hybride 33MP',
    price: '140€',
    period: 'par jour',
    image: '/equipment/camera-2.jpg',
    available: true,
  },
  {
    id: 3,
    title: 'Nikon Z6 II',
    description: 'Caméra plein format 24MP',
    price: '130€',
    period: 'par jour',
    image: '/equipment/camera-3.jpg',
    available: true,
  },
  {
    id: 4,
    title: 'Objectif 24-70mm f/2.8',
    description: 'Objectif zoom professionnel',
    price: '45€',
    period: 'par jour',
    image: '/equipment/lens-1.jpg',
    available: true,
  },
  {
    id: 5,
    title: 'Objectif 85mm f/1.4',
    description: 'Objectif portrait premium',
    price: '50€',
    period: 'par jour',
    image: '/equipment/lens-2.jpg',
    available: true,
  },
  {
    id: 6,
    title: 'Flash Profoto A1',
    description: 'Flash portable professionnel',
    price: '35€',
    period: 'par jour',
    image: '/equipment/flash-1.jpg',
    available: true,
  },
];

export default function PhotoPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
          Matériel Photo
        </h1>
        <EquipmentListing items={photoEquipment} />
      </div>
    </main>
  );
}

