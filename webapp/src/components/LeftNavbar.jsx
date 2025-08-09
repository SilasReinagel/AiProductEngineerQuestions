// @ts-check
import React, { useState } from 'react'

/**
 * Fixed Left Navbar Component
 * @param {Object} props
 * @param {Array<[string, Object]>} props.sortedCategoriesEntries
 * @param {string | null} props.selectedTopic
 * @param {(categorySlug: string) => void} props.onSelectCategory
 */
function LeftNavbar({ sortedCategoriesEntries, selectedTopic, onSelectCategory }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleCategorySelect = (slug) => {
    onSelectCategory(slug)
    setIsMobileMenuOpen(false) // Close mobile menu after selection
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-2 left-4 z-30 lg:hidden bg-white rounded-lg shadow-lg p-2 border"
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-80 bg-white z-30 overflow-y-auto transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:z-10
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
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
                onClick={() => handleCategorySelect(slug)}
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
    </>
  )
}

export default LeftNavbar 