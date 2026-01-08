import React from 'react';
import Link from 'next/link';

export default function SeoContent() {
  return (
    <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-neutral max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            Kashoot Loc : Votre expert en location audiovisuelle à Paris
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Bienvenue chez <strong>Kashoot Loc</strong>, la référence pour la 
                <strong> location de matériel vidéo professionnel à Paris</strong> et en Île-de-France (Goussainville, Roissy, Aulnay-sous-Bois).
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Nous sommes une société dédiée aux réalisateurs, 
                photographes et créateurs de contenu. Nous proposons les dernières caméras 
                <strong> Sony (FX3, A7S III)</strong>, des drones DJI, et des optiques d'exception.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Pourquoi louer chez Kashoot ?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-600"><strong>Disponibilité immédiate</strong> sur Paris et Île-de-France</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-600"><strong>Tarifs compétitifs</strong> (ex: Sony A7S III dès 60€/jour)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-600"><strong>Pas de caution bancaire bloquée</strong> (selon dossier)</span>
                </li>
              </ul>
            </div>
          </div>



          <h3 className="text-xl font-bold text-neutral-900 mb-4">Nos zones de livraison</h3>
          <p className="text-sm text-neutral-500 mb-6">
            Basés près de Roissy CDG, nous livrons rapidement sur Paris, Saint-Denis, Aulnay-sous-Bois, 
            Goussainville, et toute la région parisienne. Retrait possible 7j/7.
          </p>

          <div className="flex flex-wrap gap-2">
            <Link href="/categories/cameras" className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
              Location Caméra Paris
            </Link>
            <Link href="/categories/objectifs" className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
              Objectifs Sony G Master
            </Link>
            <Link href="/categories/drones" className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
              Location Drone DJI
            </Link>
            <Link href="/categories/lumieres" className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
              Éclairage Tournage
            </Link>
            <Link href="/categories/audio" className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors">
              Matériel Son
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-3">Kashoot Loc : La référence audiovisuelle en Île-de-France</h3>
            <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
              Si vous cherchez <strong>Kashoot Loc</strong>, vous êtes au bon endroit. Nous sommes les spécialistes de la location de matériel cinéma et broadcast pour les productions indépendantes, les clips, et les reportages.
              Notre parc matériel est constamment renouvelé avec les dernières nouveautés (Sony FX30, FX6, A7S3, Ronin 4D...).
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              <strong>Pourquoi choisir Kashoot Loc ?</strong> Contrairement aux loueurs parisiens classiques, nous offrons une flexibilité totale : horaires étendus, réponse immédiate sur WhatsApp, et conseils personnalisés pour optimiser votre budget tournage.
              Que vous soyez à <strong>Paris (75)</strong>, <strong>Saint-Denis (93)</strong>, <strong>Aulnay-sous-Bois</strong>, ou <strong>Roissy-en-France</strong>, nous sommes votre partenaire local privilégié.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
