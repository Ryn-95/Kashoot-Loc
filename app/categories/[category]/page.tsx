import { Suspense } from 'react';
import { Metadata } from 'next';
import HomeClient from '@/components/sections/HomeClient';
import { notFound } from 'next/navigation';

type Props = {
  params: { category: string }
}

const categoryContent: Record<string, { title: string; description: string; h1: string; intro: string; features: string[] }> = {
  cameras: {
    title: 'Location Caméra Sony Paris (FX3, A7S III) - Kashoot Loc',
    description: 'Louez les meilleures caméras (Sony A7S III, FX3, GoPro) chez Kashoot Loc à Paris. Matériel cinéma et vidéo disponible immédiatement pour vos tournages.',
    h1: 'Location de Caméras Professionnelles à Paris',
    intro: 'Découvrez notre gamme de caméras cinéma et hybrides disponibles à la location sur Paris et l\'Île-de-France. Du boîtier compact Sony A7S III à la caméra cinéma FX3, nous proposons le matériel idéal pour vos clips, courts-métrages et reportages.',
    features: ['Capteurs Plein Format', 'Enregistrement 4K 120fps', 'Boîtiers stabilisés']
  },
  objectifs: {
    title: 'Location Objectif Sony G Master Paris - Kashoot Loc',
    description: 'Large gamme d\'objectifs Sony G Master à louer chez Kashoot Loc : 24-70mm, 70-200mm, 50mm f/1.2. La qualité optique pro pour vos productions.',
    h1: 'Location d\'Objectifs Sony G Master',
    intro: 'Sublimez vos images avec notre sélection d\'optiques Sony G Master. Que vous cherchiez un zoom polyvalent comme le 24-70mm GM II ou une focale fixe ultra-lumineuse comme le 50mm f/1.2, nous avons l\'objectif qu\'il vous faut.',
    features: ['Piqué exceptionnel', 'Autofocus rapide', 'Ouverture constante']
  },
  drones: {
    title: 'Location Drone DJI Paris (Mini 4 Pro) - Kashoot Loc',
    description: 'Location de drones DJI et stabilisateurs chez Kashoot Loc. Prises de vues aériennes professionnelles. Matériel récent et entretenu.',
    h1: 'Location de Drones DJI & Vues Aériennes',
    intro: 'Prenez de la hauteur avec nos drones DJI de dernière génération. Idéal pour des plans aériens époustouflants en 4K. Matériel compact, performant et facile à transporter pour tous vos tournages en extérieur.',
    features: ['Vidéo 4K HDR', 'Détection d\'obstacles', 'Autonomie longue durée']
  },
  lumieres: {
    title: 'Location Éclairage Vidéo Paris (Aputure, Nanlite) - Kashoot Loc',
    description: 'Panneaux LED, Softbox, éclairage studio à louer chez Kashoot Loc. Tout le matériel lumière pour sublimer vos vidéos.',
    h1: 'Location d\'Éclairage Studio & Cinéma',
    intro: 'Maîtrisez votre lumière avec nos panneaux LED et projecteurs professionnels. De l\'interview posée au clip dynamique, nos solutions d\'éclairage Aputure et Nanlite garantissent un rendu cinématique à vos productions.',
    features: ['Température variable', 'Haut CRI/TLCI', 'Effets intégrés']
  },
  audio: {
    title: 'Location Micro HF & Enregistreur Paris - Kashoot Loc',
    description: 'Location micros Rode Wireless, Sennheiser, enregistreurs Zoom chez Kashoot Loc. Son de qualité broadcast pour vos interviews et reportages.',
    h1: 'Location Matériel Prise de Son',
    intro: 'Ne négligez pas le son de vos vidéos. Louez nos kits micros HF sans fil et enregistreurs portables pour capturer un audio cristallin. Parfait pour les interviews, vlogs et documentaires.',
    features: ['Transmission sans fil stable', 'Qualité Broadcast', 'Micros cravate discrets']
  },
  accessoires: {
    title: 'Location Trépied & Accessoire Tournage Paris - Kashoot Loc',
    description: 'Trépieds, monopodes, cages, batteries, cartes SD chez Kashoot Loc. Tous les accessoires indispensables pour un tournage réussi.',
    h1: 'Accessoires de Tournage Indispensables',
    intro: 'Les détails font la perfection. Trépieds fluides, monopodes, cages, batteries V-Mount... Retrouvez tous les accessoires essentiels pour sécuriser et optimiser votre workflow de tournage.',
    features: ['Stabilité garantie', 'Autonomie étendue', 'Ergonomie pro']
  },
  moniteurs: {
    title: 'Location Moniteur & Atomos Paris - Kashoot Loc',
    description: 'Moniteurs retour, enregistreurs Atomos Ninja V chez Kashoot Loc. Contrôlez votre image avec précision.',
    h1: 'Location Moniteurs & Enregistreurs Externes',
    intro: 'Contrôlez votre cadre et votre exposition avec précision grâce à nos moniteurs de terrain. Les enregistreurs Atomos vous permettent en plus de capturer des formats RAW pour une post-production sans limite.',
    features: ['Écrans haute luminosité', 'Outils d\'exposition (Waveform)', 'Enregistrement ProRes RAW']
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = categoryContent[params.category];
  if (!meta) return {
    title: 'Catégorie non trouvée | Kashoot Loc'
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
  return Object.keys(categoryContent).map((category) => ({
    category,
  }));
}

export default function CategoryPage({ params }: Props) {
  const content = categoryContent[params.category];
  
  if (!content) {
    notFound();
  }

  // Adding Schema Markup for CollectionPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: content.title,
    description: content.description,
    url: `https://www.kashootloc.fr/categories/${params.category}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: content.features.map((feature, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: feature
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* SEO Header Section */}
      <div className="bg-neutral-50 border-b border-neutral-100 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {content.h1}
            </h1>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              {content.features.map((feature, i) => (
                <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-neutral-200 text-neutral-700 shadow-sm">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <HomeClient initialCategoryProp={params.category} />
      </Suspense>
    </>
  );
}
