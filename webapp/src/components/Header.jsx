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
      <div className="mx-auto px-4 py-6 h-full w-full">
        <div className="flex justify-between h-full cursor-pointer w-full" onClick={onBackToLanding} role="link">
          <div className="flex items-center">
            <img 
              src="/icon.png" 
              alt="AI Interview Guide" 
              className="h-12 w-12 mr-4"
            />
            <div>
              <h1 className="text-2xl font-serif text-gray-800">
                AI Product Engineering Interview Guide
              </h1>
              <p className="text-sm text-gray-600 mt-1">
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