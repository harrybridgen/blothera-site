import fs from 'fs'
import path from 'path'
import { globby } from 'globby'

async function generateSitemap() {
  console.log('Generating sitemap...')

  const baseUrl = 'https://blothera.com'

  const pages = await globby(['app/**/page.tsx', '!app/api/**/*', '!app/_*/**/*'])

  const urls = pages.map((page) => {
    const route = page
      .replace('app', '')
      .replace('/page.tsx', '')
      .replace(/\/index$/, '')

    return {
      loc: `${baseUrl}${route}`,
      lastmod: new Date().toISOString().split('T')[0],
      priority: route === '' ? '1.0' : route.split('/').length === 1 ? '0.8' : '0.7',
    }
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap)

  console.log('Sitemap generated successfully!')
}

generateSitemap().catch((err) => {
  console.error('Error generating sitemap:', err)
})
