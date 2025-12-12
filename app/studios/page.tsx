'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Mock Data for Studios
const studiosData = [
  {
    id: 'paris-1',
    name: 'STUDIO A - CYCLO',
    city: 'Paris',
    district: 'Paris 11ème',
    description: '120m² • Cyclo 3 faces • Hauteur 4.5m • Loge make-up • Cuisine équipée',
    whatsapp: 'https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Studio%20A%20Paris'
  },
  {
    id: 'paris-2',
    name: 'STUDIO B - DAYLIGHT',
    city: 'Paris',
    district: 'Paris 3ème',
    description: '80m² • Verrière zénithale • Parquet • Mobilier design • Coin HMC',
    whatsapp: 'https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Studio%20B%20Paris'
  },
  {
    id: 'lyon-1',
    name: 'LOFT DES QUAIS',
    city: 'Lyon',
    district: 'Lyon Confluence',
    description: '150m² • Style Industriel • Briques apparentes • Accès camion • Hauteur 6m',
    whatsapp: 'https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Loft%20des%20Quais%20Lyon'
  },
  {
    id: 'marseille-1',
    name: 'LE SUD - CYCLO',
    city: 'Marseille',
    district: 'Marseille 8ème',
    description: '200m² • Cyclo blanc + Fond vert • Terrasse • Loge VIP',
    whatsapp: 'https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Studio%20Sud%20Marseille'
  },
  {
    id: 'bordeaux-1',
    name: 'L\'ATELIER',
    city: 'Bordeaux',
    district: 'Bordeaux Chartrons',
    description: '90m² • Lumière naturelle • Espace HMC séparé • Coin client',
    whatsapp: 'https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20l%27Atelier%20Bordeaux'
  },
  {
    id: 'lille-1',
    name: 'LA BRIQUETERIE',
    city: 'Lille',
    district: 'Vieux Lille',
    description: '180m² • Plateau modulable • Gril technique motorisé • Cuisine',
    whatsapp: 'https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20La%20Briqueterie%20Lille'
  },
  {
    id: 'nantes-1',
    name: 'STUDIO LOIRE',
    city: 'Nantes',
    district: 'Île de Nantes',
    description: '100m² • Fond noir/blanc • Espace détente • Parking privé',
    whatsapp: 'https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Studio%20Loire%20Nantes'
  }
];

function StudiosContent() {
  const searchParams = useSearchParams();
  const cityFilter = searchParams.get('city');

  const filteredStudios = cityFilter
    ? studiosData.filter(studio => studio.city.toLowerCase() === cityFilter.toLowerCase())
    : studiosData;

  return (
    <div className="bg-white min-h-screen pt-[88px] font-sans">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600 mb-4 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Kashoot Studios
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-brand text-neutral-900 mb-6 leading-[0.9]">
            ESPACES DE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              CRÉATION
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed mb-8">
            Des plateaux équipés au cœur de vos villes. Cyclo, fond vert, lumière du jour.
            Tout le matériel Kashoot à portée de main.
          </p>
          
          {/* Active Filter Display */}
          {cityFilter && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-neutral-900">
                Filtre actif : <span className="font-bold text-purple-600">{cityFilter.charAt(0).toUpperCase() + cityFilter.slice(1)}</span>
              </span>
              <Link 
                href="/studios" 
                className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 border-b border-transparent hover:border-neutral-900 transition-all"
              >
                Voir tous les studios
              </Link>
            </div>
          )}
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50 to-transparent -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-[100px] -z-10 opacity-40"></div>
      </section>

      {/* Studios Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {filteredStudios.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {filteredStudios.map((studio) => (
                <div key={studio.id} className="group relative aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100">
                  {/* Image Placeholder - Dynamic colors based on id hash or random for variety */}
                  <div className={`absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700`}></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest w-fit mb-4">
                      {studio.district}
                    </span>
                    <h3 className="text-3xl font-black italic tracking-tight text-white mb-2">{studio.name}</h3>
                    <p className="text-white/80 text-sm mb-6 max-w-md">
                      {studio.description}
                    </p>
                    <div className="flex gap-4">
                      <a 
                        href={studio.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-colors"
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-100">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Aucun studio trouvé à {cityFilter}</h3>
              <p className="text-neutral-500 mb-6">Nous ouvrons bientôt dans cette ville !</p>
              <Link 
                href="/studios"
                className="inline-block px-6 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Voir tous les studios
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="bg-neutral-50 py-24 px-6 lg:px-8 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div>
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-purple-600">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Matériel Sur Place</h3>
              <p className="text-sm text-neutral-500">Accès direct au catalogue Kashoot sans frais de livraison.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-purple-600">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Accès 24/7</h3>
              <p className="text-sm text-neutral-500">Flexibilité totale pour vos tournages de nuit ou week-end.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-purple-600">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Service Premium</h3>
              <p className="text-sm text-neutral-500">Assistant plateau dédié et café à volonté.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function StudiosPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white pt-[88px] flex items-center justify-center">Chargement...</div>}>
      <StudiosContent />
    </Suspense>
  );
}
