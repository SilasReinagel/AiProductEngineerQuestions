# Sitemap Generation

This project includes automatic sitemap generation for SEO optimization.

## How It Works

The sitemap generator (`scripts/generate-sitemap.js`) creates an XML sitemap that includes:

1. **Main landing page** (`/`) - Priority 1.0, updated weekly
2. **Category pages** (`/?category=<slug>`) - Priority 0.8, updated monthly

## Generated URLs

The sitemap includes URLs for all 13 AI engineering domains:

- `/?category=prompt-engineering`
- `/?category=context-engineering`
- `/?category=ai-agent-engineering`
- `/?category=retrieval-augmented-generation-rag`
- `/?category=ai-model-api-selection-product-lens`
- `/?category=agentic-techniques`
- `/?category=model-optimization`
- `/?category=ai-system-evaluation`
- `/?category=responsible-ai`
- `/?category=ai-ux-design`
- `/?category=feedback-loops`
- `/?category=rapid-prototyping`
- `/?category=multimodal-ai`

## Scripts

### Generate Sitemap
```bash
npm run generate-sitemap
```

### Build (includes sitemap generation)
```bash
npm run build
```

## Files

- **`scripts/generate-sitemap.js`** - Sitemap generator script
- **`public/sitemap.xml`** - Generated XML sitemap
- **`public/robots.txt`** - References the sitemap location

## SEO Features

- ✅ **XML Sitemap** - Helps search engines discover all pages
- ✅ **URL Parameters** - Direct category access via URL
- ✅ **History API** - Clean URL updates without page refresh
- ✅ **Robots.txt** - References sitemap location
- ✅ **Automatic Generation** - Runs on every build

## Updating Categories

When adding new categories:

1. Update `src/config/categoryOrder.js`
2. Update `scripts/generate-sitemap.js` with new category slugs
3. Run `npm run generate-sitemap`

## Deployment

The sitemap is automatically generated during the build process and deployed with the site. Make sure your hosting setup serves static files from the `public/` directory. 