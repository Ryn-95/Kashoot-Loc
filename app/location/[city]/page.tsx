import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EquipmentGrid from '@/components/sections/EquipmentGrid';
import { equipmentItems } from '@/data/equipment';

// Define the cities we want to target for SEO
const cities = [
  { slug: 'paris', name: 'Paris', zip: '75000' },
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

  const title = `Location Matériel Vidéo ${city.name} - Caméras, Drones, Lumières | Kashoot Premium`;
  const description = `Louez votre matériel audiovisuel à ${city.name} et en région. Caméras Sony, Drones DJI, Lumières Cinéma. Devis immédiat sur WhatsApp. Livraison possible.`;

  return {
    title,
    description,
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
    '@type': 'LocalBusiness',
    name: `Kashoot Premium ${city.name}`,
    description: `Service de location de matériel vidéo et cinéma professionnel à ${city.name}.`,
    url: `https://www.kashootloc.fr/location/${city.slug}`,
    telephone: '+33600000000',
    areaServed: {
      '@type': 'City',
      name: city.name
    },
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
            Kashoot Premium vous accompagne avec du matériel professionnel disponible immédiatement.
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
           <h2 className="text-2xl font-bold mb-6">Pourquoi louer chez Kashoot Premium à {city.name} ?</h2>
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
