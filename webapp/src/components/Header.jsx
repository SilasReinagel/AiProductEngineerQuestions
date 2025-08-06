// @ts-check
import React from 'react'

/**
 * Site Header Component
 * @param {Object} props
 * @param {boolean} props.showLanding
 * @param {() => void} props.onBackToLanding
 */
function Header({ showLanding, onBackToLanding }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b-2 border-gray-200 shadow-sm z-20 h-20">
      <div className="mx-auto px-4 lg:px-4 py-6 h-full w-full">
        <div className="flex justify-between h-full cursor-pointer w-full lg:pl-0 pl-16" onClick={onBackToLanding} role="link">
          <div className="flex items-center">
            <img 
              src="/icon.png" 
              alt="AI Interview Guide" 
              className="h-12 w-12 mr-4 flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-xl lg:text-2xl font-serif text-gray-800 leading-tight">
                AI Product Engineering Interview Guide
              </h1>
              <p className="text-xs lg:text-sm text-gray-600 mt-1 hidden sm:block">
                Essential Questions for AI Engineering Candidates, Hiring Managers, and Skill Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 