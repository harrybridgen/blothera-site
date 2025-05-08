import fs from "fs"
import path from "path"
import { globby } from "globby"

async function generateSitemap() {
  console.log("Generating sitemap...")

  // Base URL of your website
  const baseUrl = "https://blothera.com"

  // Get all page paths using globby
  const pages = await globby([
    "app/**/page.tsx",
    "!app/api/**/*",
    "!app/_*/**/*", // Exclude special Next.js folders
  ])

  // Convert page paths to URLs
  const urls = pages.map((page) => {
    // Convert file path to URL path
    const route = page
      .replace("app", "")
      .replace("/page.tsx", "")
      .replace(/\/index$/, "")

    // Format the URL
    return {
      loc: `${baseUrl}${route}`,
      lastmod: new Date().toISOString().split("T")[0],
      priority: route === "" ? "1.0" : route.split("/").length === 1 ? "0.8" : "0.7",
    }
  })

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  // Write sitemap to public directory
  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap)

  console.log("Sitemap generated successfully!")
}

// Run the function
generateSitemap().catch((err) => {
  console.error("Error generating sitemap:", err)
})
