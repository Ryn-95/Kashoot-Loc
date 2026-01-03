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
  alternates: {
    canonical: 'https://www.kashootloc.fr/services',
  },
};

export default function ServicesPage() {
  const jsonLd = [
    {
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
      'priceRange': '€€',
      'image': 'https://www.kashootloc.fr/images/logo.png',
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Accueil',
          'item': 'https://www.kashootloc.fr'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': 'https://www.kashootloc.fr/services'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment fonctionne la livraison express ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Une fois votre commande validée, nous planifions un coursier qui livre le matériel directement sur votre lieu de tournage ou à domicile en Île-de-France. Le délai moyen est de 2h pour Paris intramuros.'
          }
        },
        {
          '@type': 'Question',
          'name': 'L\'assurance est-elle obligatoire ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'L\'assurance est incluse dans tous nos contrats de location pour garantir votre tranquillité. Elle couvre les dommages accidentels et le vol avec effraction. Une franchise reste à la charge du locataire en cas de sinistre.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Puis-je louer un technicien sans matériel ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nos techniciens sont prioritairement disponibles pour accompagner la location de notre matériel, afin de garantir une parfaite maîtrise des équipements. Contactez-nous pour des demandes spécifiques.'
          }
        }
      ]
    }
  ];

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
