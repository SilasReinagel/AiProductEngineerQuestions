// @ts-check
import React, { useMemo } from 'react'
import { CATEGORY_SORT_ORDER } from '../config/categoryOrder.js'

/**
 * Site Footer Component
 * @param {Object} props
 * @param {number} props.questionsCount
 * @param {number} props.categoriesCount
 * @param {() => void} [props.onShowAbout]
 * @param {(categorySlug: string) => void} [props.onSelectCategory]
 */
function Footer({ questionsCount, categoriesCount, onShowAbout, onSelectCategory }) {
  const categoryLinks = useMemo(() => {
    const entries = Object.entries(CATEGORY_SORT_ORDER)
      .sort((a, b) => a[1] - b[1])
      .map(([slug]) => ({ slug, name: slugToTitle(slug) }))
    return entries
  }, [])

  const handleScrollTop = () => {
    try { window.scrollTo({ top: 0, behavior: 'smooth' }) } catch { window.scrollTo(0, 0) }
  }

  return (
    <footer className="mt-24 bg-gray-50/50 border-t border-gray-200/80" aria-label="Site Footer">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                AI Engineering Interview Guide
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                Curated questions covering the complete AI product engineering stack. 
                Perfect for interview preparation and skill development.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex gap-6 text-sm">
              <div>
                <div className="font-semibold text-gray-900">{questionsCount.toLocaleString()}</div>
                <div className="text-gray-500">Questions</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{categoriesCount}</div>
                <div className="text-gray-500">Categories</div>
              </div>
            </div>
          </div>

          {/* Categories grid */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
              Interview Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {categoryLinks.map(({ slug, name }) => (
                <button
                  key={slug}
                  onClick={() => onSelectCategory && onSelectCategory(slug)}
                  className="group block p-3 rounded-lg border border-gray-200/60 bg-white/60 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:border-indigo-300 text-left w-full"
                >
                  <div className="text-xs font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">
                    {name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a 
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 rounded"
            >
              About
            </a>
            <a 
              href="/press" 
              className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 rounded"
            >
              Press Kit
            </a>
            <a 
              href="/sitemap.xml" 
              className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 rounded"
            >
              Sitemap
            </a>
            <a 
              href="https://github.com/SilasReinagel/AiProductEngineerQuestions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 rounded"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
                <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.86 2.33.65.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleScrollTop} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 15l6-6 6 6"/>
              </svg>
              Back to top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200/60 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AI Engineering Interview Guide. Built by{' '}
          <a 
            className="text-gray-600 hover:text-gray-900 transition-colors" 
            href="https://silasreinagel.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Silas Reinagel
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 

/**
 * Convert the canonical slug into a short readable title
 * @param {string} slug
 */
function slugToTitle(slug) {
  // Preserve known shorter labels for a clean footer sitemap
  if (slug === 'retrieval-augmented-generation-rag') return 'RAG'
  if (slug === 'ai-model-api-selection-product-lens') return 'Model/API Selection'
  if (slug === 'ai-agent-engineering') return 'AI Agents'
  if (slug === 'agentic-techniques') return 'Agentic Techniques'
  if (slug === 'ai-system-evaluation') return 'AI System Evaluation'
  if (slug === 'ai-ux-design') return 'AI UX'
  if (slug === 'multimodal-ai') return 'Multimodal AI'
  if (slug === 'rapid-prototyping') return 'Rapid Prototyping'
  if (slug === 'feedback-loops') return 'Feedback Loops'
  if (slug === 'prompt-engineering') return 'Prompt Engineering'
  if (slug === 'context-engineering') return 'Context Engineering'
  if (slug === 'model-optimization') return 'Model Optimization'
  if (slug === 'responsible-ai') return 'Responsible AI'
  // Fallback: Title Case
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}