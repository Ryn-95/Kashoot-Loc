'use client';

import Link from 'next/link';

export default function InsurancePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8">
          ASSURANCE &<br />CAUTION
        </h1>
        
        <div className="space-y-12 text-lg text-neutral-600">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Caution et Responsabilité</h2>
            <p className="mb-4">
              Chez Kashoot Premium, nous faisons confiance à nos créateurs. Cependant, la location de matériel professionnel implique une responsabilité importante.
            </p>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 mt-6">
              <p className="font-medium text-neutral-900 mb-2">
                ⚠️ En cas de casse ou de dommage
              </p>
              <p>
                Le locataire est entièrement responsable du matériel durant la période de location. 
                <strong> En cas de détérioration, de casse ou de vol, les frais de réparation ou de remplacement seront intégralement à votre charge.</strong>
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mt-4">
              <p className="font-medium text-orange-900 mb-2">
                🧹 Propreté du matériel
              </p>
              <p className="text-orange-800">
                Le matériel doit être restitué dans le même état de propreté qu'au départ. 
                <strong> Si le matériel est rendu sale ou non nettoyé, des frais de nettoyage pourront être déduits de la caution.</strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Documents requis</h2>
            <p>
              Pour établir le contrat de location lors du retrait du matériel, vous devrez présenter impérativement :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 font-medium text-neutral-900">
              <li>Une pièce d'identité <u>originale</u> (CNI ou Passeport) en cours de validité.</li>
              <li>Un justificatif de domicile de <u>moins de 2 mois</u> à votre nom.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contrat de Location</h2>
            <p>
              Pour chaque location, un contrat est établi entre Kashoot Premium et le locataire. Ce document formalise :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>L'état du matériel au départ (Check-in)</li>
              <li>La durée de la location</li>
              <li>Le montant de la caution (empreinte bancaire non débitée)</li>
              <li>Les conditions générales de location</li>
            </ul>
          </section>

          <div className="pt-8 border-t border-neutral-200">
            <p className="mb-6">
              Vous avez des questions spécifiques sur nos conditions ?
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
