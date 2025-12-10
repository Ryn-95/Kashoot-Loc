import { Metadata } from 'next';
import EquipmentListing from '@/components/sections/EquipmentListing';

export const metadata: Metadata = {
  title: 'Vidéo',
  description: 'Location de matériel vidéo professionnel',
};

const videoEquipment = [
  {
    id: 1,
    title: 'Caméra RED Komodo',
    description: 'Caméra cinéma 6K',
    price: '500€',
    period: 'par jour',
    image: '/equipment/red-1.jpg',
    available: true,
  },
  {
    id: 2,
    title: 'Sony FX6',
    description: 'Caméra vidéo professionnelle',
    price: '350€',
    period: 'par jour',
    image: '/equipment/fx6-1.jpg',
    available: true,
  },
  {
    id: 3,
    title: 'Canon C300 Mark III',
    description: 'Caméra cinéma 4K',
    price: '400€',
    period: 'par jour',
    image: '/equipment/c300-1.jpg',
    available: true,
  },
  {
    id: 4,
    title: 'Gimbal DJI RS 3',
    description: 'Stabilisateur 3 axes',
    price: '80€',
    period: 'par jour',
    image: '/equipment/gimbal-1.jpg',
    available: true,
  },
  {
    id: 5,
    title: 'Microphone Rode VideoMic Pro',
    description: 'Micro-canon directionnel',
    price: '40€',
    period: 'par jour',
    image: '/equipment/mic-1.jpg',
    available: true,
  },
  {
    id: 6,
    title: 'Éclairage Aputure 300D',
    description: 'LED 300W avec contrôleur',
    price: '60€',
    period: 'par jour',
    image: '/equipment/light-1.jpg',
    available: true,
  },
];

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
          Matériel Vidéo
        </h1>
        <EquipmentListing items={videoEquipment} />
      </div>
    </main>
  );
}

