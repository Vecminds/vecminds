import type { MetadataRoute } from 'next'
import { SERVICES, SERVICES_BASE_PATH } from '@/lib/services'

// Update these dates when content actually changes — don't use new Date()
// which stamps every build as "modified now" and erodes Google's recrawl trust.
const HOMEPAGE_LAST_MODIFIED       = new Date('2026-06-03')
const SERVICES_INDEX_LAST_MODIFIED = new Date('2026-06-21')
const SERVICES_LAST_MODIFIED       = new Date('2026-06-03')
const PRIVACY_LAST_MODIFIED        = new Date('2026-06-03')

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vecminds.com'

  return [
    {
      url: baseUrl,
      lastModified: HOMEPAGE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}${SERVICES_BASE_PATH}`,
      lastModified: SERVICES_INDEX_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...SERVICES.map((s) => ({
      url: `${baseUrl}${SERVICES_BASE_PATH}/${s.slug}`,
      lastModified: SERVICES_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: PRIVACY_LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
}
