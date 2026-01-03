import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services Location Matériel Vidéo Paris & Île-de-France | Kashoot Loc',
  description: 'Kashoot Loc : Livraison express 2h, techniciens vidéo certifiés, assurance multirisque incluse et post-production. La location de caméra simplifiée pour les pros.',
  keywords: 'livraison caméra paris, technicien vidéo tournage, assurance location audiovisuel, montage vidéo paris, location matériel cinéma, kashoot services, assistant caméra, chef opérateur',
  openGraph: {
    title: 'Services Premium - Location Matériel Vidéo Paris | Kashoot Loc',
    description: 'Livraison Express 24/7, Techniciens Qualifiés, Assurance Incluse. Louez votre matériel vidéo en toute sérénité avec Kashoot Loc.',
    url: 'https://www.kashootloc.fr/services',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Kashoot Loc Services',
    'url': 'https://www.kashootloc.fr/services',
    'description': 'Services de location de matériel vidéo à Paris : livraison express, techniciens, assurance et post-production.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Paris',
      'addressRegion': 'Île-de-France',
      'addressCountry': 'FR'
    },
    'areaServed': 'Paris, Île-de-France',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Services Audiovisuels',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Livraison Express Matériel Vidéo Paris'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Techniciens Vidéo (Chef Opérateur, Assistant)'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Assurance Location Audiovisuelle'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Post-Production et Montage Vidéo'
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
      <ServicesContent />
    </>
  );
}
