import { Metadata } from 'next';
import { Suspense } from 'react';
import HomeClient from '@/components/sections/HomeClient';
import Preloader from '@/components/ui/Preloader';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const category = searchParams.category;
  
  if (category && typeof category === 'string' && category !== 'tout') {
    const titles: Record<string, string> = {
      cameras: 'Location Caméras Sony & Cinéma Paris',
      objectifs: 'Location Objectifs Photo & Vidéo Paris',
      drones: 'Location Drones & Stabilisateurs Paris',
      lumieres: 'Location Éclairage Vidéo Professionnel',
      audio: 'Location Matériel Son & Micro Paris',
      accessoires: 'Location Accessoires Tournage & Trépieds',
      moniteurs: 'Location Moniteurs & Enregistreurs Vidéo'
    };
    
    const title = titles[category] || 'Location Matériel Vidéo Paris';
    return {
      title: `${title} | Kashoot Premium`,
      description: `Découvrez notre gamme de ${category} en location à Paris. Matériel professionnel disponible immédiatement.`,
      alternates: {
        canonical: `https://www.kashootloc.fr/?category=${category}`
      }
    };
  }

  return {
    title: 'Kashoot Premium - Location Matériel Vidéo & Cinéma Paris',
    description: 'Service de location de matériel audiovisuel premium à Paris. Caméras, objectifs, drones, lumières. Réservation simple via WhatsApp.',
    alternates: {
      canonical: 'https://www.kashootloc.fr'
    }
  };
}

export default function Home({ searchParams }: Props) {
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kashoot Premium',
    url: 'https://www.kashootloc.fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.kashootloc.fr/?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<Preloader />}>
        <HomeClient initialCategoryProp={category} />
      </Suspense>
    </>
  );
}
