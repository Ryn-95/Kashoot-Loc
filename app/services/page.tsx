import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Nos Services - Location Caméra & Matériel Vidéo Paris | Kashoot Loc',
  description: 'Découvrez les services premium de Kashoot Loc : livraison express en 2h sur Paris, techniciens vidéo qualifiés, assurance incluse et post-production. Location matériel audiovisuel simple et fiable.',
  keywords: 'services location vidéo, livraison caméra paris, technicien vidéo paris, assurance location audiovisuel, post-production vidéo, kashoot services',
  openGraph: {
    title: 'Services Premium - Location Matériel Vidéo Paris | Kashoot Loc',
    description: 'Livraison Express, Techniciens Qualifiés, Assurance Incluse. Louez votre matériel vidéo en toute sérénité avec Kashoot Loc.',
    url: 'https://www.kashootloc.fr/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
