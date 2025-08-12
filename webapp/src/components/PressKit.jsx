// @ts-check
import React from 'react'

function AssetLink({ href, label, note }) {
  return (
    <li className="flex items-center justify-between py-2 border-b last:border-b-0">
      <a href={href} className="text-slate-800 underline underline-offset-4 hover:text-slate-900" target="_blank" rel="noopener noreferrer">
        {label}
      </a>
      {note && <span className="text-xs text-slate-500 ml-4">{note}</span>}
    </li>
  )
}

function PressKit() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-serif text-gray-900 mb-2">Press Kit</h2>
        <p className="text-gray-700">One-stop assets for posts, newsletters, and directories.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-3">Overview</h3>
        <p className="text-gray-700 mb-3"><strong>Short</strong>: 500+ curated interview questions across 13 AI domains in a fast, clean site.</p>
        <p className="text-gray-700"><strong>Long</strong>: The AI Product Engineering Interview Guide helps candidates, hiring managers, and AI-curious developers assess practical skills across Prompt Engineering, RAG, Agents, Evaluation, Model Optimization, UX, and more. The collection is academically toned, professionally organized, and continually updated.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-3">Assets</h3>
        <ul className="divide-y">
          <AssetLink href="/icon.png" label="App Icon (PNG)" note="512x512" />
          <AssetLink href="/og-image.jpg" label="Open Graph Image (PNG)" note="1200x630" />
          <AssetLink href="/favicon-32x32.png" label="Favicon 32x32 (PNG)" />
          <AssetLink href="/favicon-16x16.png" label="Favicon 16x16 (PNG)" />
          <AssetLink href="/android-chrome-192x192.png" label="Android Chrome 192x192 (PNG)" />
          <AssetLink href="/android-chrome-512x512.png" label="Android Chrome 512x512 (PNG)" />
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-3">Brand</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
          <div>
            <div className="font-medium mb-2">Colors</div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-6 h-6 rounded bg-brand-dark border" />
              <span>Brand Dark</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-6 h-6 rounded bg-brand-mid border" />
              <span>Brand Mid</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block w-6 h-6 rounded bg-brand-light border" />
              <span>Brand Light</span>
            </div>
          </div>
          <div>
            <div className="font-medium mb-2">Typography</div>
            <div>UI: system sans-serif</div>
            <div>Headings: serif (Tailwind font-serif)</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-3">Screenshots</h3>
        <ul className="divide-y">
          <AssetLink href="/og-image.jpg" label="Homepage (OG image)" note="1200x630" />
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-3">Usage</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Please link to the homepage</li>
          <li>Do not modify the logo or icon; keep clear space</li>
          <li>Alt text recommended for accessibility</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-serif text-gray-900 mb-3">Contact</h3>
        <p className="text-gray-700">Site by <a href="https://silasreinagel.com" target="_blank" rel="noopener noreferrer" className="underline">Silas Reinagel</a>. GitHub: <a href="https://github.com/SilasReinagel/AiProductEngineerQuestions" target="_blank" rel="noopener noreferrer" className="underline">repository</a>.</p>
      </div>
    </div>
  )
}

export default PressKit


