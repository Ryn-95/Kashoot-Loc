'use client';

import Link from 'next/link';

export default function StudiosPage() {
  return (
    <div className="bg-white min-h-screen pt-[88px] font-sans">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600 mb-4 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Kashoot Studios
          </span>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-neutral-900 mb-6 leading-[0.9]">
            ESPACES DE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              CRÉATION
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
            Des plateaux équipés au cœur de Paris. Cyclo, fond vert, lumière du jour.
            Tout le matériel Kashoot à portée de main.
          </p>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50 to-transparent -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-[100px] -z-10 opacity-40"></div>
      </section>

      {/* Studios Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Studio 1 */}
          <div className="group relative aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100">
            {/* Image Placeholder - In real app, replace with actual image */}
            <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest w-fit mb-4">
                Paris 11ème
              </span>
              <h3 className="text-3xl font-black italic tracking-tight text-white mb-2">STUDIO A - CYCLO</h3>
              <p className="text-white/80 text-sm mb-6 max-w-md">
                120m² • Cyclo 3 faces • Hauteur 4.5m • Loge make-up • Cuisine équipée
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Studio%20A"
                  target="_blank"
                  className="px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Réserver
                </a>
              </div>
            </div>
          </div>

          {/* Studio 2 */}
          <div className="group relative aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100">
             {/* Image Placeholder */}
             <div className="absolute inset-0 bg-neutral-300 group-hover:scale-105 transition-transform duration-700"></div>
             
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
               <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest w-fit mb-4">
                 Paris 3ème
               </span>
               <h3 className="text-3xl font-black italic tracking-tight text-white mb-2">STUDIO B - DAYLIGHT</h3>
               <p className="text-white/80 text-sm mb-6 max-w-md">
                 80m² • Verrière zénithale • Parquet • Mobilier design • Coin HMC
               </p>
               <div className="flex gap-4">
                 <a 
                   href="https://wa.me/33779570959?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Studio%20B"
                   target="_blank"
                   className="px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-colors"
                 >
                   Réserver
                 </a>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-neutral-50 py-24 px-6 lg:px-8 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
