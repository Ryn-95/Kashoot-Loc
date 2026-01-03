import { Suspense } from 'react';
import { Metadata } from 'next';
import HomeClient from '@/components/sections/HomeClient';
import { notFound } from 'next/navigation';

type Props = {
  params: { category: string }
}

const categoryMetadata: Record<string, { title: string; description: string }> = {
  cameras: {
    title: 'Location Caméra Sony Paris (FX3, A7S III) - Kashoot Loc',
    description: 'Louez les meilleures caméras (Sony A7S III, FX3, GoPro) chez Kashoot Loc à Paris. Matériel cinéma et vidéo disponible immédiatement pour vos tournages.'
  },
  objectifs: {
    title: 'Location Objectif Sony G Master Paris - Kashoot Loc',
    description: 'Large gamme d\'objectifs Sony G Master à louer chez Kashoot Loc : 24-70mm, 70-200mm, 50mm f/1.2. La qualité optique pro pour vos productions.'
  },
  drones: {
    title: 'Location Drone DJI Paris (Mini 4 Pro) - Kashoot Loc',
    description: 'Location de drones DJI et stabilisateurs chez Kashoot Loc. Prises de vues aériennes professionnelles. Matériel récent et entretenu.'
  },
  lumieres: {
    title: 'Location Éclairage Vidéo Paris (Aputure, Nanlite) - Kashoot Loc',
    description: 'Panneaux LED, Softbox, éclairage studio à louer chez Kashoot Loc. Tout le matériel lumière pour sublimer vos vidéos.'
  },
  audio: {
    title: 'Location Micro HF & Enregistreur Paris - Kashoot Loc',
    description: 'Location micros Rode Wireless, Sennheiser, enregistreurs Zoom chez Kashoot Loc. Son de qualité broadcast pour vos interviews et reportages.'
  },
  accessoires: {
    title: 'Location Trépied & Accessoire Tournage Paris - Kashoot Loc',
    description: 'Trépieds, monopodes, cages, batteries, cartes SD chez Kashoot Loc. Tous les accessoires indispensables pour un tournage réussi.'
  },
  moniteurs: {
    title: 'Location Moniteur & Atomos Paris - Kashoot Loc',
    description: 'Moniteurs retour, enregistreurs Atomos Ninja V chez Kashoot Loc. Contrôlez votre image avec précision.'
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = categoryMetadata[params.category];
  if (!meta) return {
    title: 'Catégorie non trouvée | Kashoot Premium'
  };
  
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: `https://www.kashootloc.fr/categories/${params.category}`
    },
    alternates: {
      canonical: `https://www.kashootloc.fr/categories/${params.category}`
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryMetadata).map((category) => ({
    category,
  }));
}

export default function CategoryPage({ params }: Props) {
  if (!categoryMetadata[params.category]) {
    notFound();
  }

  // Adding Schema Markup for CollectionPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryMetadata[params.category].title,
    description: categoryMetadata[params.category].description,
    url: `https://www.kashootloc.fr/categories/${params.category}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <HomeClient initialCategoryProp={params.category} />
      </Suspense>
    </>
  );
}
