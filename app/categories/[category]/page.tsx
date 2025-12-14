import { Suspense } from 'react';
import { Metadata } from 'next';
import HomeClient from '@/components/sections/HomeClient';
import { notFound } from 'next/navigation';

type Props = {
  params: { category: string }
}

const categoryMetadata: Record<string, { title: string; description: string }> = {
  cameras: {
    title: 'Location Caméras Sony, GoPro & Cinéma | Kashoot Premium',
    description: 'Louez les meilleures caméras (Sony A7S III, FX3, GoPro) à Paris. Matériel cinéma et vidéo disponible immédiatement pour vos tournages.'
  },
  objectifs: {
    title: 'Location Objectifs Sony G Master & Zoom | Kashoot Premium',
    description: 'Large gamme d\'objectifs Sony G Master à louer : 24-70mm, 70-200mm, 50mm f/1.2. La qualité optique pro pour vos productions.'
  },
  drones: {
    title: 'Location Drone DJI Mini 4 Pro & Accessoires | Kashoot Premium',
    description: 'Location de drones DJI et stabilisateurs. Prises de vues aériennes professionnelles. Matériel récent et entretenu.'
  },
  lumieres: {
    title: 'Location Éclairage Vidéo & Cinéma (Aputure, Nanlite) | Kashoot Premium',
    description: 'Panneaux LED, Softbox, éclairage studio à louer. Tout le matériel lumière pour sublimer vos vidéos.'
  },
  audio: {
    title: 'Location Micro HF, Enregistreurs & Son | Kashoot Premium',
    description: 'Location micros Rode Wireless, Sennheiser, enregistreurs Zoom. Son de qualité broadcast pour vos interviews et reportages.'
  },
  accessoires: {
    title: 'Location Accessoires Vidéo, Trépieds & Grips | Kashoot Premium',
    description: 'Trépieds, monopodes, cages, batteries, cartes SD. Tous les accessoires indispensables pour un tournage réussi.'
  },
  moniteurs: {
    title: 'Location Moniteurs & Enregistreurs Atomos | Kashoot Premium',
    description: 'Moniteurs retour, enregistreurs Atomos Ninja V. Contrôlez votre image avec précision.'
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
