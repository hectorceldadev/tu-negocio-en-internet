import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.metadataInfo.siteUrl

  const staticRoutes = [
    '',           
    '/contacto',
    '/sobre-nosotros',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8, 
  }))

  return [ ...staticRoutes ]
}