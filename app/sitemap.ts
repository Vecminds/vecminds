import type { MetadataRoute } from 'next'
import { SERVICES, SERVICES_BASE_PATH } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vecminds.com'
  const now = new Date()

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...SERVICES.map((s) => ({
      url: `${baseUrl}${SERVICES_BASE_PATH}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
