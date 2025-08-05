// @ts-check
import React from 'react'

/**
 * Fixed Left Navbar Component
 * @param {Object} props
 * @param {Object} props.categories
 * @param {string | null} props.selectedTopic
 * @param {(categorySlug: string) => void} props.onSelectCategory
 */
function LeftNavbar({ categories, selectedTopic, onSelectCategory }) {
  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-white border-r-2 border-gray-200 shadow-sm z-10 overflow-y-auto">
      <div className="py-4">
        {/* Quick Start Navigation */}
        <div className="mb-8">
          <div className="flex flex-col px-4 justify-between">
            <h3 className="font-semibold text-gray-800 mb-2">Quick Start</h3>
            <p className="text-sm text-gray-600 mb-4">
              Jump right into exploring questions:
            </p>
          </div>
          <div className="">
            {Object.entries(categories).map(([slug, category]) => (
              <button
                key={slug}
                onClick={() => onSelectCategory(slug)}
                className={`w-full text-left p-3 rounded-none text-sm transition-colors ${
                  selectedTopic === slug 
                    ? 'text-indigo-800' 
                    : 'hover:bg-gray-50 hover:text-indigo-600'
                }`}
              >
                <div className="font-medium">{category.category}</div>
                <div className="text-xs text-gray-500">
                  {Object.values(category.questions).flat().length} questions
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftNavbar 