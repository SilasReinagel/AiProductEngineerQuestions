// @ts-check
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration - use environment variable or default to canonical domain
const SITE_URL = process.env.SITE_URL || 'https://aiproductengineerinterview.com'
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml')

// Category URL mappings - clean URLs for better SEO
const CATEGORY_URLS = [
  'prompt-engineering',
  'context-engineering', 
  'ai-agent-engineering',
  'rag',
  'model-selection',
  'agentic-techniques',
  'model-optimization',
  'evaluation',
  'responsible-ai',
  'ai-ux',
  'feedback-loops',
  'rapid-prototyping',
  'multimodal'
]

/**
 * Generate XML sitemap for the site
 */
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Landing Page -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`

  // Add category pages with clean URLs
  CATEGORY_URLS.forEach(categoryUrl => {
    sitemap += `
  
  <!-- Category: ${categoryUrl} -->
  <url>
    <loc>${SITE_URL}/${categoryUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  })

  sitemap += `

</urlset>`

  return sitemap
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  try {
    const sitemapContent = generateSitemap()
    
    // Ensure directory exists
    const dir = path.dirname(OUTPUT_PATH)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(OUTPUT_PATH, sitemapContent, 'utf8')
    console.log(`✅ Sitemap generated successfully at: ${OUTPUT_PATH}`)
    console.log(`🌐 Site URL: ${SITE_URL}`)
    console.log(`📄 Sitemap contains ${CATEGORY_URLS.length + 1} URLs`)
    console.log(`🔗 Clean URLs: /${CATEGORY_URLS.join(', /')}`)
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

// Run the generator
writeSitemap() 