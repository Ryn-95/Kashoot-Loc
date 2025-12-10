import { Metadata } from 'next';
import HomeClient from '@/components/sections/HomeClient';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Kashoot - Location de matériel vidéo professionnel',
};

export default function Home() {
  return <HomeClient />;
}
