import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://scalewithdestiny.com'
  
  // All your pages
  const pages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: 'nigeria', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: 'united-kingdom', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: 'usa', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: 'canada', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: 'australia', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: 'services', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: 'contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: 'faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: 'audit', priority: 0.7, changeFrequency: 'monthly' as const },
  ]
  
  return pages.map((page) => ({
    url: `${baseUrl}/${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}