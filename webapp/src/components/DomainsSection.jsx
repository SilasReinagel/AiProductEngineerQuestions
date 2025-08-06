// @ts-check
import React from 'react'

/**
 * Domains Section Component
 * @param {Object} props
 * @param {Array<[string, Object]>} props.sortedCategoriesEntries
 * @param {(categorySlug: string) => void} props.onSelectCategory
 */
function DomainsSection({ sortedCategoriesEntries, onSelectCategory }) {
  return (
    <div>
      {/* Domain Overview Cards */}
      <div className="mb-12">
        <h2 className="text-xl lg:text-2xl font-serif text-gray-800 text-center mb-6 lg:mb-8 px-4">
          Explore Interview Domains
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4">
          {sortedCategoriesEntries.map(([slug, category]) => (
            <button
              key={slug}
              onClick={() => onSelectCategory(slug)}
              className="p-4 lg:p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left border border-gray-200 hover:border-indigo-300"
            >
              <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">{category.category}</h3>
              <p className="text-xs lg:text-sm text-gray-600">
                Explore {Object.values(category.questions).flat().length} curated interview questions
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-indigo-50 rounded-lg p-6 lg:p-8">
        <h2 className="text-xl lg:text-2xl font-serif text-gray-800 mb-4">
          Start Your Interview Preparation Journey
        </h2>
        <p className="text-gray-600 mb-6 text-sm lg:text-base">
          <span className="lg:hidden">
            Select a domain above or use the menu to access hundreds of carefully crafted interview questions.
          </span>
          <span className="hidden lg:block">
            Select a domain from the left sidebar or click the cards above to access hundreds of carefully crafted interview questions. 
            Each domain includes questions for all experience levels with detailed coverage of essential concepts.
          </span>
        </p>
        <div className="text-xs lg:text-sm text-gray-500">
          <span className="font-medium">{sortedCategoriesEntries.length}</span> domains • 
          <span className="font-medium ml-2">
            {sortedCategoriesEntries.reduce((total, [slug, cat]) => total + Object.values(cat.questions).flat().length, 0)}
          </span> questions
        </div>
      </div>
    </div>
  )
}

export default DomainsSection 