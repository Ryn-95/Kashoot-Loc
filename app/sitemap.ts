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

  const cities = ['paris', 'lyon', 'marseille', 'bordeaux', 'lille', 'nice', 'toulouse', 'nantes', 'strasbourg', 'montpellier'];
  const locationUrls = cities.map((city) => ({
    url: `${baseUrl}/location/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
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
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...categoryUrls,
    ...locationUrls,
    ...productUrls,
  ];
}
