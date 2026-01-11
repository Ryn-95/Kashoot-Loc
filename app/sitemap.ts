import { MetadataRoute } from 'next';
import { equipmentItems } from '@/data/equipment';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kashootloc.fr';
  
  const productUrls = equipmentItems.map((item) => ({
    url: `${baseUrl}/equipment/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const categories = ['cameras', 'objectifs', 'drones', 'lumieres', 'audio', 'accessoires', 'moniteurs'];
  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const citiesIDF = [
    'paris', 'saint-denis', 'aulnay-sous-bois', 'montreuil', 'aubervilliers', 'drancy', 'pantin', 'saint-ouen', 'noisy-le-grand', 'bagnolet', 'bondy', 'epinay-sur-seine', 'sevran', 'le-blanc-mesnil', 'bobigny', // 93
    'boulogne-billancourt', 'nanterre', 'courbevoie', 'colombes', 'asnieres-sur-seine', 'rueil-malmaison', 'levallois-perret', 'issy-les-moulineaux', 'neuilly-sur-seine', 'clichy', 'antony', // 92
    'creteil', 'vitry-sur-seine', 'champigny-sur-marne', 'saint-maur-des-fosses', 'ivry-sur-seine', 'villejuif', 'maisons-alfort', 'fontenay-sous-bois', 'vincennes', // 94
    'roissy-en-france', 'goussainville', 'argenteuil', 'cergy', 'sarcelles', 'garges-les-gonesse', 'franconville', 'pontoise', // 95
    'versailles', 'sartrouville', 'saint-germain-en-laye', // 78
    'evry-courcouronnes', 'massy', // 91
    'chelles', 'meaux', 'marne-la-vallee' // 77
  ];
  const citiesFrance = ['lyon', 'marseille', 'bordeaux', 'lille', 'nice', 'toulouse', 'nantes', 'strasbourg', 'montpellier'];
  
  const locationUrlsIDF = citiesIDF.map((city) => ({
    url: `${baseUrl}/location/${city}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  const locationUrlsFrance = citiesFrance.map((city) => ({
    url: `${baseUrl}/location/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/photo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/video`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...categoryUrls,
    ...locationUrlsIDF,
    ...locationUrlsFrance,
    ...productUrls,
  ];
}
