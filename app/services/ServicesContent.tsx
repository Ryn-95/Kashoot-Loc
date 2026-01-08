'use client';

import Link from 'next/link';

export default function ServicesContent() {
  return (
    <div className="bg-white min-h-screen pt-[88px] font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Breadcrumb - SEO & UX */}
      <nav aria-label="Breadcrumb" className="px-6 lg:px-8 py-4 bg-neutral-50 border-b border-neutral-100">
        <ol className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-neutral-500">
          <li>
            <Link href="/" className="hover:text-neutral-900 transition-colors">Accueil</Link>
          </li>
          <li>
            <svg className="w-3 h-3 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <span className="text-neutral-900" aria-current="page">Services</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section with Pattern */}
      <section className="relative px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-neutral-50">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 bg-white px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Kashoot Loc Services
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-brand text-neutral-900 mb-8 leading-[0.95] tracking-tight">
            L'EXPÉRIENCE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-300% animate-gradient">
              CINÉMA
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-600 font-light max-w-2xl leading-relaxed text-balance">
            Plus qu'une location, un accompagnement complet. <br className="hidden md:block" />
            <strong className="font-medium text-neutral-900">Livraison, Crew, Post-prod.</strong> Tout pour votre tournage.
          </p>
        </div>
      </section>

      {/* Services Grid - Bento Style */}
      <section className="px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Service 1: Livraison (Large Card) */}
            <article className="md:col-span-2 group relative p-8 md:p-12 rounded-[2rem] bg-neutral-900 overflow-hidden hover:shadow-2xl hover:shadow-neutral-900/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-colors"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Livraison Express 2H</h2>
                  <p className="text-neutral-400 leading-relaxed text-lg max-w-md mb-6">
                    Paris & Île-de-France. Nous livrons vos <Link href="/categories/cameras" className="text-white hover:underline decoration-blue-500 underline-offset-4" title="Louer des caméras cinéma">caméras</Link>, <Link href="/categories/lumieres" className="text-white hover:underline decoration-blue-500 underline-offset-4" title="Location éclairage vidéo">lumières</Link> et <Link href="/categories/drones" className="text-white hover:underline decoration-blue-500 underline-offset-4" title="Location drone professionnel">drones</Link> directement sur le set.
                  </p>
                  <ul className="flex flex-wrap gap-3">
                    <li className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">Paris Intramuros</li>
                    <li className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">Banlieue Proche</li>
                    <li className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">Récupération 24/7</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Service 2: Techniciens */}
            <article className="group p-8 md:p-10 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-3">Crew Certifié</h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                Chef Op', Assistant Caméra, Ingé Son. Des profils vérifiés pour accompagner votre location.
              </p>
            </article>

            {/* Service 3: Assurance */}
            <article className="group p-8 md:p-10 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:shadow-purple-900/5">
               <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-3">Assurance Zen</h2>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Casse & Vol couverts. Caution simplifiée via Swikly (empreinte bancaire uniquement).
              </p>
            </article>

            {/* Service 4: Post-Production (Large Card) */}
            <article className="md:col-span-2 group relative p-8 md:p-12 rounded-[2rem] bg-white border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50">
               <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-[100px] pointer-events-none"></div>
               <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                 <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex-shrink-0 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                 </div>
                 <div className="flex-1">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-3">Studio de Post-Production</h2>
                    <p className="text-neutral-500 leading-relaxed text-base mb-4">
                      Confiez-nous vos rushes. Montage, Étalonnage, VFX. Un workflow intégré pour une qualité cinéma garantie de la prise de vue à l'export final.
                    </p>
                    <div className="flex gap-4 text-sm font-bold text-neutral-900">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Davinci Resolve
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Premiere Pro
                      </span>
                    </div>
                 </div>
               </div>
            </article>

             {/* CTA Card */}
            <Link href="/contact" className="group p-8 md:p-10 rounded-[2rem] bg-blue-600 flex flex-col justify-center items-center text-center cursor-pointer relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative z-10">
                 <h2 className="text-2xl font-bold text-white mb-2">Un projet ?</h2>
                 <p className="text-blue-100 text-sm mb-6">Devis en 1h chrono</p>
                 <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-600 group-hover:scale-110 transition-transform shadow-lg">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                 </span>
               </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Internal Linking Section - SEO Boost */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-lg font-bold text-neutral-900 mb-6">Découvrez notre matériel</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Louer Sony FX3", href: "/categories/cameras" },
              { label: "Location Sony FX6", href: "/categories/cameras" },
              { label: "Objectifs G Master", href: "/categories/objectifs" },
              { label: "Lumière Aputure 300d", href: "/categories/lumieres" },
              { label: "Drone DJI Mavic 3", href: "/categories/drones" },
              { label: "Micro Sennheiser", href: "/categories/audio" },
              { label: "Moniteur Atomos", href: "/categories/moniteurs" },
            ].map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-sm text-neutral-600 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Redesigned */}
      <section className="px-6 lg:px-8 pb-24 bg-white pt-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Questions Fréquentes</h2>
            <p className="text-neutral-500">Tout ce que vous devez savoir avant de louer.</p>
          </div>
          
          <div className="space-y-4">
            <details className="group bg-neutral-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-neutral-100 transition-colors">
              <summary className="flex items-center justify-between font-bold text-neutral-900">
                Comment fonctionne la livraison express ?
                <span className="text-neutral-400 group-open:rotate-45 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </span>
              </summary>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                Une fois votre commande validée, nous planifions un coursier qui livre le matériel directement sur votre lieu de tournage ou à domicile en Île-de-France. Le délai moyen est de 2h pour Paris intramuros.
              </p>
            </details>

            <details className="group bg-neutral-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-neutral-100 transition-colors">
              <summary className="flex items-center justify-between font-bold text-neutral-900">
                L'assurance est-elle obligatoire ?
                <span className="text-neutral-400 group-open:rotate-45 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </span>
              </summary>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                L'assurance est incluse dans tous nos contrats de location pour garantir votre tranquillité. Elle couvre les dommages accidentels et le vol avec effraction. Une franchise reste à la charge du locataire en cas de sinistre.
              </p>
            </details>

             <details className="group bg-neutral-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-neutral-100 transition-colors">
              <summary className="flex items-center justify-between font-bold text-neutral-900">
                Puis-je louer un technicien sans matériel ?
                <span className="text-neutral-400 group-open:rotate-45 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </span>
              </summary>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                Nos techniciens sont prioritairement disponibles pour accompagner la location de notre matériel, afin de garantir une parfaite maîtrise des équipements. Contactez-nous pour des demandes spécifiques.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
