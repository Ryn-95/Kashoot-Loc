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

  const citiesIDF = ['paris', 'saint-denis', 'aulnay-sous-bois', 'roissy-en-france', 'goussainville', 'montreuil', 'boulogne-billancourt'];
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
