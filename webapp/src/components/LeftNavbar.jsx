// @ts-check
import React from 'react'

/**
 * Fixed Left Navbar Component
 * @param {Object} props
 * @param {Array<[string, Object]>} props.sortedCategoriesEntries
 * @param {string | null} props.selectedTopic
 * @param {(categorySlug: string) => void} props.onSelectCategory
 */
function LeftNavbar({ sortedCategoriesEntries, selectedTopic, onSelectCategory }) {
  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 bg-white z-10 overflow-y-auto scrollbar-none">
      <div className="py-4 mb-16">
        <div className="flex flex-col px-3 justify-between">
          <h3 className="font-semibold text-gray-800 mb-0">Quick Start</h3>
          <p className="text-sm text-gray-600 mb-4">
            Jump right into exploring questions:
          </p>
        </div>
        <div className="">
          {sortedCategoriesEntries.map(([slug, category]) => (
            <button
              key={slug}
              onClick={() => onSelectCategory(slug)}
              className={`w-full text-left px-3 py-2 rounded-none text-sm transition-colors ${
                selectedTopic === slug 
                  ? 'bg-indigo-100 text-indigo-800' 
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
  )
}

export default LeftNavbar 