// @ts-check
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const SITE_URL = 'https://ai-interview-guide.com'
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml')

// Category slugs from our categoryOrder.js config
const CATEGORY_SLUGS = [
  'prompt-engineering',
  'context-engineering', 
  'ai-agent-engineering',
  'retrieval-augmented-generation-rag',
  'ai-model-api-selection-product-lens',
  'agentic-techniques',
  'model-optimization',
  'ai-system-evaluation',
  'responsible-ai',
  'ai-ux-design',
  'feedback-loops',
  'rapid-prototyping',
  'multimodal-ai'
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

  // Add category pages (these would be the domain-specific question views)
  CATEGORY_SLUGS.forEach(slug => {
    sitemap += `
  
  <!-- Category: ${slug} -->
  <url>
    <loc>${SITE_URL}/?category=${encodeURIComponent(slug)}</loc>
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
    console.log(`📄 Sitemap contains ${CATEGORY_SLUGS.length + 1} URLs`)
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

// Run the generator
writeSitemap() 