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
    title: 'Location Matériel Vidéo Paris (Caméra, Objectif, Lumière) - Kashoot Loc',
    description: 'Le n°1 de la location matériel vidéo à Paris & Île-de-France. Louez Sony FX3, FX6, Canon, Drones, Lumières au meilleur prix. Dispo 24/7.',
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
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment louer du matériel vidéo chez Kashoot Loc ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choisissez votre caméra, objectif ou accessoire sur notre catalogue en ligne. Contactez-nous via WhatsApp pour valider la disponibilité. Le retrait se fait à Aulnay-sous-Bois ou par livraison en Île-de-France.'
          }
        },
        {
          '@type': 'Question',
          name: 'Quels documents sont nécessaires pour louer ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour toute location, nous demandons une pièce d\'identité valide et une caution (empreinte bancaire ou chèque) correspondant à la valeur du matériel loué.'
          }
        },
        {
          '@type': 'Question',
          name: 'Proposez-vous la livraison du matériel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, nous livrons votre matériel vidéo sur Paris et toute l\'Île-de-France (Saint-Denis, Roissy, etc.). Contactez-nous pour un devis de livraison.'
          }
        }
      ]
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
