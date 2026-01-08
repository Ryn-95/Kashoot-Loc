import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Questions Fréquentes | Kashoot Loc',
  description: 'Tout savoir sur la location de matériel vidéo chez Kashoot Loc. Réservation, caution, assurance, livraison. Réponses à vos questions.',
  openGraph: {
    title: 'FAQ - Questions Fréquentes | Kashoot Loc',
    description: 'Tout savoir sur la location de matériel vidéo chez Kashoot Loc.',
  },
  alternates: {
    canonical: 'https://www.kashootloc.fr/faq'
  }
};

export default function FAQPage() {
  const faqItems = [
    {
      question: "Comment réserver du matériel ?",
      answer: "La réservation est simple : sélectionnez votre matériel sur le site, ajoutez-le au panier, et finalisez votre demande. Vous serez redirigé vers WhatsApp pour valider la disponibilité et le devis avec notre équipe."
    },
    {
      question: "Quels documents sont nécessaires pour louer ?",
      answer: "Pour une première location, nous demandons une pièce d'identité (CNI ou Passeport), un justificatif de domicile de moins de 3 mois, et un extrait Kbis pour les sociétés. Une caution sera également demandée."
    },
    {
      question: "Comment fonctionne la caution ?",
      answer: "Une empreinte bancaire (non débitée) est requise avant le départ du matériel. Le montant dépend de la valeur du matériel loué. Elle est libérée au retour du matériel après vérification."
    },
    {
      question: "Proposez-vous une assurance ?",
      answer: "Le matériel est sous votre responsabilité durant la location. Nous recommandons fortement de souscrire à une assurance production couvrant le bris de machine et le vol. Nous pouvons vous conseiller des partenaires."
    },
    {
      question: "Faites-vous la livraison et l'installation ?",
      answer: "Oui, nous proposons un service de livraison et d'installation sur site. Notre équipe peut se déplacer pour vous assister dans la mise en place du matériel. Contactez-nous pour connaître les tarifs et disponibilités."
    },
    {
      question: "Que se passe-t-il si je rends le matériel sale ?",
      answer: "Le matériel doit être restitué dans le même état de propreté qu'au départ. Si un nettoyage approfondi est nécessaire au retour, des frais de remise en état vous seront facturés (dédommagement nettoyage)."
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer: "L'annulation est gratuite jusqu'à 48h avant le début de la location. Entre 48h et 24h, 50% du montant est dû. Moins de 24h avant, la totalité de la location est due."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-3xl mx-auto">
        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
          AIDE & SUPPORT
        </span>
        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-neutral-900 mb-12">
          QUESTIONS FRÉQUENTES
        </h1>

        <div className="space-y-8">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-neutral-100 pb-8 last:border-0">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {item.question}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-neutral-50 rounded-2xl text-center">
          <h3 className="text-lg font-bold text-neutral-900 mb-2">Vous ne trouvez pas votre réponse ?</h3>
          <p className="text-neutral-500 mb-6">Notre équipe est disponible sur WhatsApp pour vous aider.</p>
          <a 
            href="https://wa.me/33600000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-green-600 transition-all"
          >
            Contacter le support
          </a>
        </div>
      </div>
    </main>
  );
}
