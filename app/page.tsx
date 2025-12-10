import { Metadata } from 'next';
import { Suspense } from 'react';
import HomeClient from '@/components/sections/HomeClient';
import Preloader from '@/components/ui/Preloader';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Kashoot - Location de matériel vidéo professionnel',
};

export default function Home() {
  return (
    <Suspense fallback={<Preloader />}>
      <HomeClient />
    </Suspense>
  );
}
