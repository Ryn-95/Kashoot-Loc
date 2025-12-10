import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import Catalog from '@/components/sections/Catalog';
import Preloader from '@/components/ui/Preloader';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Kashoot - Location de matériel vidéo professionnel',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Preloader />
      <Catalog>
        <HeroBanner />
      </Catalog>
    </main>
  );
}
