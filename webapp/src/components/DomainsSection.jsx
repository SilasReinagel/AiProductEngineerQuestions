// @ts-check
import React from 'react'

/**
 * Domains Section Component
 * @param {Object} props
 * @param {Object} props.categories
 * @param {(categorySlug: string) => void} props.onSelectCategory
 */
function DomainsSection({ categories, onSelectCategory }) {
  return (
    <div>
      {/* Domain Overview Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif text-gray-800 text-center mb-8">
          Explore Interview Domains
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(categories).map(([slug, category]) => (
            <button
              key={slug}
              onClick={() => onSelectCategory(slug)}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left border border-gray-200 hover:border-indigo-300"
            >
              <h3 className="font-semibold text-gray-800 mb-2">{category.category}</h3>
              <p className="text-sm text-gray-600">
                Explore {Object.values(category.questions).flat().length} curated interview questions
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-serif text-gray-800 mb-4">
          Start Your Interview Preparation Journey
        </h2>
        <p className="text-gray-600 mb-6">
          Select a domain from the left sidebar or click the cards above to access hundreds of carefully crafted interview questions. 
          Each domain includes questions for all experience levels with detailed coverage of essential concepts.
        </p>
        <div className="text-sm text-gray-500">
          <span className="font-medium">{Object.keys(categories).length}</span> domains • 
          <span className="font-medium ml-2">
            {Object.values(categories).reduce((total, cat) => total + Object.values(cat.questions).flat().length, 0)}
          </span> questions
        </div>
      </div>
    </div>
  )
}

export default DomainsSection 