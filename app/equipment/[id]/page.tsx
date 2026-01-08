import { Metadata, ResolvingMetadata } from 'next';
import { equipmentItems } from '@/data/equipment';
import EquipmentClient from '@/components/sections/EquipmentClient';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = Number(params.id);
  const item = equipmentItems.find((i) => i.id === id);

  if (!item) {
    return {
      title: 'Produit non trouvé | Kashoot Loc',
    };
  }

  // SEO Optimization
  const title = `Location ${item.brand} ${item.model} - ${item.subtext} | Kashoot Loc`;
  const description = `Louez votre ${item.brand} ${item.model} chez Kashoot Loc. ${item.subtext} dispo à Paris, Aulnay, Goussainville. Matériel pro, tarif imbattable. Devis WhatsApp immédiat.`;
  
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [item.image, ...previousImages],
      type: 'website',
      url: `https://www.kashootloc.fr/equipment/${id}`,
    },
    alternates: {
      canonical: `https://www.kashootloc.fr/equipment/${id}`,
    },
  };
}

export async function generateStaticParams() {
  return equipmentItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function EquipmentPage({ params }: Props) {
  const id = Number(params.id);
  const item = equipmentItems.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  // Logic for related items
  let relatedItems: typeof equipmentItems = [];
  if (item.suggestedAccessories && item.suggestedAccessories.length > 0) {
     relatedItems = equipmentItems.filter(i => item.suggestedAccessories?.includes(i.id));
  } 
  
  // If not enough suggestions, fill with same category
  if (relatedItems.length < 4) {
     const sameCategory = equipmentItems
       .filter(i => i.category === item.category && i.id !== item.id && !relatedItems.find(r => r.id === i.id))
       .slice(0, 4 - relatedItems.length);
     relatedItems = [...relatedItems, ...sameCategory];
  }

  // Add JSON-LD for Product
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${item.brand} ${item.model}`,
    image: `https://www.kashootloc.fr${item.image}`,
    description: `Location ${item.brand} ${item.model} - ${item.subtext}. Louez ce matériel professionnel au meilleur prix.`,
    brand: {
      '@type': 'Brand',
      name: item.brand,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: item.price,
      availability: item.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: `https://www.kashootloc.fr/equipment/${id}`,
      priceValidUntil: '2025-12-31',
      areaServed: "France"
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '124'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EquipmentClient item={item} relatedItems={relatedItems} />
    </>
  );
}
