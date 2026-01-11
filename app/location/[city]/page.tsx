import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EquipmentGrid from '@/components/sections/EquipmentGrid';
import { equipmentItems } from '@/data/equipment';

// Define the cities we want to target for SEO
const cities = [
  // Île-de-France (Priorité absolue)
  // 75 - Paris
  { slug: 'paris', name: 'Paris', zip: '75000' },
  
  // 93 - Seine-Saint-Denis (Zone prioritaire - Base)
  { slug: 'saint-denis', name: 'Saint-Denis', zip: '93200' },
  { slug: 'aulnay-sous-bois', name: 'Aulnay-sous-Bois', zip: '93600' },
  { slug: 'montreuil', name: 'Montreuil', zip: '93100' },
  { slug: 'aubervilliers', name: 'Aubervilliers', zip: '93300' },
  { slug: 'drancy', name: 'Drancy', zip: '93700' },
  { slug: 'pantin', name: 'Pantin', zip: '93500' },
  { slug: 'saint-ouen', name: 'Saint-Ouen', zip: '93400' },
  { slug: 'noisy-le-grand', name: 'Noisy-le-Grand', zip: '93160' },
  { slug: 'bagnolet', name: 'Bagnolet', zip: '93170' },
  { slug: 'bondy', name: 'Bondy', zip: '93140' },
  { slug: 'epinay-sur-seine', name: 'Épinay-sur-Seine', zip: '93800' },
  { slug: 'sevran', name: 'Sevran', zip: '93270' },
  { slug: 'le-blanc-mesnil', name: 'Le Blanc-Mesnil', zip: '93150' },
  { slug: 'bobigny', name: 'Bobigny', zip: '93000' },

  // 92 - Hauts-de-Seine (Business & Prod)
  { slug: 'boulogne-billancourt', name: 'Boulogne-Billancourt', zip: '92100' },
  { slug: 'nanterre', name: 'Nanterre', zip: '92000' },
  { slug: 'courbevoie', name: 'Courbevoie', zip: '92400' },
  { slug: 'colombes', name: 'Colombes', zip: '92700' },
  { slug: 'asnieres-sur-seine', name: 'Asnières-sur-Seine', zip: '92600' },
  { slug: 'rueil-malmaison', name: 'Rueil-Malmaison', zip: '92500' },
  { slug: 'levallois-perret', name: 'Levallois-Perret', zip: '92300' },
  { slug: 'issy-les-moulineaux', name: 'Issy-les-Moulineaux', zip: '92130' },
  { slug: 'neuilly-sur-seine', name: 'Neuilly-sur-Seine', zip: '92200' },
  { slug: 'clichy', name: 'Clichy', zip: '92110' },
  { slug: 'antony', name: 'Antony', zip: '92160' },

  // 94 - Val-de-Marne
  { slug: 'creteil', name: 'Créteil', zip: '94000' },
  { slug: 'vitry-sur-seine', name: 'Vitry-sur-Seine', zip: '94400' },
  { slug: 'champigny-sur-marne', name: 'Champigny-sur-Marne', zip: '94500' },
  { slug: 'saint-maur-des-fosses', name: 'Saint-Maur-des-Fossés', zip: '94100' },
  { slug: 'ivry-sur-seine', name: 'Ivry-sur-Seine', zip: '94200' },
  { slug: 'villejuif', name: 'Villejuif', zip: '94800' },
  { slug: 'maisons-alfort', name: 'Maisons-Alfort', zip: '94700' },
  { slug: 'fontenay-sous-bois', name: 'Fontenay-sous-Bois', zip: '94120' },
  { slug: 'vincennes', name: 'Vincennes', zip: '94300' },

  // 95 - Val-d'Oise (Proche Roissy)
  { slug: 'roissy-en-france', name: 'Roissy-en-France', zip: '95700' },
  { slug: 'goussainville', name: 'Goussainville', zip: '95190' },
  { slug: 'argenteuil', name: 'Argenteuil', zip: '95100' },
  { slug: 'cergy', name: 'Cergy', zip: '95000' },
  { slug: 'sarcelles', name: 'Sarcelles', zip: '95200' },
  { slug: 'garges-les-gonesse', name: 'Garges-lès-Gonesse', zip: '95140' },
  { slug: 'franconville', name: 'Franconville', zip: '95130' },
  { slug: 'pontoise', name: 'Pontoise', zip: '95000' },

  // 78 - Yvelines
  { slug: 'versailles', name: 'Versailles', zip: '78000' },
  { slug: 'sartrouville', name: 'Sartrouville', zip: '78500' },
  { slug: 'saint-germain-en-laye', name: 'Saint-Germain-en-Laye', zip: '78100' },

  // 91 - Essonne
  { slug: 'evry-courcouronnes', name: 'Évry-Courcouronnes', zip: '91000' },
  { slug: 'massy', name: 'Massy', zip: '91300' },

  // 77 - Seine-et-Marne
  { slug: 'chelles', name: 'Chelles', zip: '77500' },
  { slug: 'meaux', name: 'Meaux', zip: '77100' },
  { slug: 'marne-la-vallee', name: 'Marne-la-Vallée', zip: '77420' },

  // Grandes villes (Secondaire)
  { slug: 'lyon', name: 'Lyon', zip: '69000' },
  { slug: 'marseille', name: 'Marseille', zip: '13000' },
  { slug: 'bordeaux', name: 'Bordeaux', zip: '33000' },
  { slug: 'lille', name: 'Lille', zip: '59000' },
  { slug: 'nice', name: 'Nice', zip: '06000' },
  { slug: 'toulouse', name: 'Toulouse', zip: '31000' },
  { slug: 'nantes', name: 'Nantes', zip: '44000' },
  { slug: 'strasbourg', name: 'Strasbourg', zip: '67000' },
  { slug: 'montpellier', name: 'Montpellier', zip: '34000' }
];

type Props = {
  params: { city: string }
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find(c => c.slug === params.city);
  if (!city) return {};

  const title = `Location Matériel Vidéo ${city.name} - Caméras, Drones, Lumières | Kashoot Loc`;
  const description = `Louez votre matériel audiovisuel à ${city.name} et en région. Caméras Sony, Drones DJI, Lumières Cinéma. Devis immédiat sur WhatsApp. Livraison possible.`;

  return {
    title,
    description,
    keywords: [
      `location caméra ${city.name}`,
      `location matériel vidéo ${city.name}`,
      `louer drone ${city.name}`,
      `matériel cinéma ${city.name}`,
      "Sony FX3",
      "Sony A7S III",
      "Kashoot Loc"
    ],
    openGraph: {
      title,
      description,
      url: `https://www.kashootloc.fr/location/${city.slug}`,
    },
    alternates: {
      canonical: `https://www.kashootloc.fr/location/${city.slug}`
    }
  };
}

export default function LocationPage({ params }: Props) {
  const city = cities.find(c => c.slug === params.city);
  if (!city) notFound();

  // LocalBusiness Schema for this specific location/service area
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CameraStore',
    name: `Kashoot Loc ${city.name}`,
    description: `Service de location de matériel vidéo et cinéma professionnel à ${city.name}. Caméras, Drones, Lumières.`,
    url: `https://www.kashootloc.fr/location/${city.slug}`,
    telephone: '+33779570959',
    areaServed: {
      '@type': 'City',
      name: city.name
    },
    knowsAbout: [
      "Location Caméra",
      "Matériel Vidéo",
      "Cinéma",
      "Production Audiovisuelle"
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      postalCode: city.zip,
      addressCountry: 'FR'
    },
    priceRange: '€€',
    image: 'https://www.kashootloc.fr/images/logo.png'
  };

  return (
    <main className="min-h-screen pt-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section Localisé */}
      <section className="px-6 pb-12 pt-10 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
            LOCATION MATÉRIEL AUDIOVISUEL {city.name.toUpperCase()}
          </span>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-neutral-900 mb-6 max-w-4xl">
            LOUEZ VOTRE MATÉRIEL VIDÉO À {city.name.toUpperCase()}.
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed">
            Besoin d'une caméra Sony, d'un drone DJI ou d'éclairage cinéma pour votre tournage à {city.name} ? 
            Kashoot Loc vous accompagne avec du matériel professionnel disponible immédiatement.
          </p>
          <div className="mt-8 flex gap-4">
             <a href="#catalogue" className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-all">
               Voir le matériel
             </a>
             <a href="/contact" className="bg-neutral-100 text-neutral-900 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all">
               Demander un devis
             </a>
          </div>
        </div>
      </section>

      {/* SEO Text Content */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-2xl font-bold mb-6">Pourquoi louer chez Kashoot Loc à {city.name} ?</h2>
           <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-bold mb-2">Matériel Pro</h3>
                <p className="text-sm text-neutral-600">Dernières caméras Sony FX3, A7S III et optiques G Master vérifiées avant chaque départ. Idéal pour vos productions à {city.name}.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Service Rapide</h3>
                <p className="text-sm text-neutral-600">Réservation simple via WhatsApp. Récupération facile ou livraison sur {city.name} et sa région.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Tarifs Flexibles</h3>
                <p className="text-sm text-neutral-600">Prix dégressifs pour vos tournages longs métrages, clips ou documentaires en région {city.name === 'Paris' ? 'Île-de-France' : 'française'}.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Catalog */}
      <div id="catalogue">
        <EquipmentGrid />
      </div>

    </main>
  );
}
