import { Metadata } from 'next';
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import HomeClient from '@/components/sections/HomeClient';
import Preloader from '@/components/ui/Preloader';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
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

  // Redirect legacy query params to new routes
  if (category && category !== 'tout') {
    redirect(`/categories/${category}`);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kashoot Loc',
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
