// @ts-check
import React from 'react'

/**
 * Site Footer Component
 * @param {Object} props
 * @param {number} props.questionsCount
 * @param {number} props.categoriesCount
 * @param {() => void} [props.onShowAbout]
 */
function Footer({ questionsCount, categoriesCount, onShowAbout }) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-700">
          AI Engineering Interview Guide
          <span className="hidden sm:inline"> • </span>
          <span className="block sm:inline">{questionsCount} Interview Questions • {categoriesCount} Categories</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          For interview preparation, hiring decisions, and skill development in AI product engineering.
        </p>
        <div className="text-xs text-gray-500 mt-3 space-x-4">
          <button onClick={onShowAbout} className="underline hover:text-gray-700">About/Methodology</button>
          <a href="/sitemap.xml" className="underline hover:text-gray-700">Sitemap</a>
          <a href="https://silasreinagel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Silas Reinagel</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 