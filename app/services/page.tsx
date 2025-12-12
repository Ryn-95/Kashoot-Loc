'use client';

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-[88px] font-sans">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Kashoot Premium
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-brand text-neutral-900 mb-6 leading-[0.9]">
            PLUS QU'UNE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              LOCATION
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
            Un écosystème complet de services pour accompagner votre production, de la prépa à la post-prod.
            Concentrez-vous sur la création, on gère le reste.
          </p>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50 to-transparent -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] -z-10 opacity-40"></div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Service 1: Livraison */}
          <div id="livraison" className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
            <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
              <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Livraison Express</h3>
            <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
              Livraison sur le lieu de votre tournage en moins de 2h sur Paris et petite couronne. Récupération incluse.
            </p>
          </div>

          {/* Service 2: Studios */}
          <div id="studios" className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
            <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
              <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Studios Partenaires</h3>
            <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
              Accès privilégié à notre réseau de studios (Cyclo, Lumière du jour, Décor) à tarifs préférentiels.
            </p>
          </div>

          {/* Service 3: Techniciens */}
          <div id="techniciens" className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
            <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
              <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Crew & Techniciens</h3>
            <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
              Besoin d'un Chef Op, d'un Assistant Caméra ou d'un Ingé Son ? Nous bookons pour vous des experts certifiés.
            </p>
          </div>

          {/* Service 4: Assurance */}
          <div id="assurance" className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
            <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
              <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Assurance Premium</h3>
            <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
              Couverture tous risques incluse avec option rachat de franchise. Tournez l'esprit tranquille.
            </p>
          </div>

          {/* Service 5: Post-Production */}
          <div id="post-production" className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
            <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
              <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Post-Production</h3>
            <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
              Salles de montage et d'étalonnage disponibles. Stations Mac Studio Ultra avec DaVinci Resolve.
            </p>
          </div>

          {/* Service 6: Consulting */}
          <div id="consulting" className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
            <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
              <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Consulting</h3>
            <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
              Un doute sur votre configuration ? Nos experts valident votre liste matériel pour éviter les surprises.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-900 py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black italic tracking-tighter text-white mb-6">
            UN PROJET SPÉCIFIQUE ?
          </h2>
          <p className="text-neutral-400 mb-10 text-lg font-light">
            Notre équipe est disponible sur WhatsApp pour répondre à toutes vos demandes particulières en moins de 10 minutes.
          </p>
          <a 
            href="https://wa.me/33779570959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <span>Discuter sur WhatsApp</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
