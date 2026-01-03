'use client';

import Link from 'next/link';

export default function ServicesContent() {
  return (
    <div className="bg-white min-h-screen pt-[88px] font-sans">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Kashoot Premium
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-brand text-neutral-900 mb-6 leading-[0.9]">
            SERVICES <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              PREMIUM
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
            Location de matériel vidéo avec livraison express à Paris. 
            Techniciens qualifiés, post-production et assurance incluse.
            Simplifiez vos tournages avec nos solutions tout-en-un.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 sr-only">Nos services de location audiovisuelle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Service 1: Livraison */}
            <div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
              <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Livraison Express Paris</h3>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
                Ne perdez plus de temps dans les bouchons. Nous livrons votre matériel vidéo (Caméra, Lumière, Drone) en <strong>2h sur Paris et Île-de-France</strong>. 
                Service disponible 7j/7 avec option de récupération 24/24 pour les urgences de tournage.
              </p>
            </div>

            {/* Service 2: Techniciens */}
            <div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
              <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Techniciens Vidéo Certifiés</h3>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
                Besoin de renfort ? Réservez nos experts certifiés directement avec votre matériel : 
                <strong>Chef Opérateur, Assistant Caméra, Ingénieur Son, Pilote de Drone</strong>. 
                Une équipe technique fiable et expérimentée pour vos productions.
              </p>
            </div>

            {/* Service 3: Assurance */}
            <div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
              <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Assurance Multirisque</h3>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
                Louez l'esprit tranquille. Notre <strong>assurance incluse</strong> couvre la casse accidentelle et le vol. 
                Caution simplifiée par empreinte bancaire (Swikly) sans débit immédiat.
                Protection totale pour votre tournage.
              </p>
            </div>

            {/* Service 4: Post-Production */}
            <div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
              <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Post-Production & Montage</h3>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
                Du dérushage à l'étalonnage. Confiez-nous vos rushes pour un rendu cinéma professionnel. 
                Services de <strong>Montage, Color Grading, Sound Design et VFX</strong>.
                Livraison des fichiers finaux aux normes broadcast et web.
              </p>
            </div>

            {/* Service 5: Conseil */}
            <div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-900 transition-all duration-500 hover:shadow-2xl border border-neutral-100 hover:border-neutral-800">
              <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
                <svg className="w-6 h-6 text-neutral-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-3">Conseil Sur-Mesure</h3>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">
                Un doute sur le choix de la caméra ? Nos experts vous guident pour trouver le matériel adapté à votre projet et budget.
                <strong>Devis personnalisé sous 1h</strong> et recommandations techniques gratuites.
              </p>
            </div>
            
            {/* CTA Card */}
            <Link href="/contact" className="group p-8 rounded-3xl bg-blue-600 hover:bg-blue-700 transition-all duration-500 hover:shadow-2xl border border-blue-500 flex flex-col justify-center items-center text-center cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-2">Un projet spécifique ?</h3>
              <p className="text-blue-100 text-sm mb-6">Demandez un devis personnalisé</p>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 lg:px-8 pb-24 bg-neutral-50/50">
        <div className="max-w-3xl mx-auto py-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Questions Fréquentes sur nos Services</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
              <h3 className="font-bold text-neutral-900 mb-2">Comment fonctionne la livraison express ?</h3>
              <p className="text-sm text-neutral-500">
                Une fois votre commande validée, nous planifions un coursier qui livre le matériel directement sur votre lieu de tournage ou à domicile en Île-de-France. Le délai moyen est de 2h pour Paris intramuros.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
              <h3 className="font-bold text-neutral-900 mb-2">L'assurance est-elle obligatoire ?</h3>
              <p className="text-sm text-neutral-500">
                L'assurance est incluse dans tous nos contrats de location pour garantir votre tranquillité. Elle couvre les dommages accidentels et le vol avec effraction. Une franchise reste à la charge du locataire en cas de sinistre.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
              <h3 className="font-bold text-neutral-900 mb-2">Puis-je louer un technicien sans matériel ?</h3>
              <p className="text-sm text-neutral-500">
                Nos techniciens sont prioritairement disponibles pour accompagner la location de notre matériel, afin de garantir une parfaite maîtrise des équipements. Contactez-nous pour des demandes spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
