// @ts-check
import React from 'react'

/**
 * Main Hero Section Component
 */
function MainHero() {
  return (
    <div className="text-center mb-16 lg:mb-36 px-4">
      <div className="mb-12 lg:mb-16 mt-6 lg:mt-8">
        <img 
          src="/icon.png" 
          alt="AI Interview Guide" 
          className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mx-auto mb-4 lg:mb-6"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4 lg:mb-8 leading-tight">
          AI Product Engineering<br className="sm:hidden"/>
          <span className="hidden sm:inline"> </span>Interview Guide
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Master your AI engineering interviews with curated questions covering all essential domains.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto mt-3 lg:mt-4 leading-relaxed">
          Perfect for candidates preparing for interviews, hiring managers conducting assessments, 
          and developers building AI product skills.
        </p>
      </div>

      {/* Quick Stats for Mobile */}
      <div className="mb-8 lg:hidden">
        <div className="bg-indigo-50 rounded-lg p-4 max-w-sm mx-auto">
          <div className="text-2xl font-bold text-indigo-600">500+</div>
          <div className="text-sm text-gray-600">Interview Questions</div>
          <div className="text-xs text-gray-500 mt-1">Across 13 AI Domains</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 max-w-5xl mx-auto">
        <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-md border border-gray-100">
          <div className="text-2xl lg:text-3xl mb-3 lg:mb-4">🎯</div>
          <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">Interview Ready</h3>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            Questions crafted by experienced AI engineers to mirror real interview scenarios across all skill levels.
          </p>
        </div>
        <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-md border border-gray-100">
          <div className="text-2xl lg:text-3xl mb-3 lg:mb-4">🧠</div>
          <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">Domain Focused</h3>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            Deep dive into specific AI domains - from RAG systems to prompt engineering to model optimization.
          </p>
        </div>
        <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-md border border-gray-100 sm:col-span-2 lg:col-span-1">
          <div className="text-2xl lg:text-3xl mb-3 lg:mb-4">📈</div>
          <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">Progressive Learning</h3>
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            Questions organized by experience level from entry to staff/principal engineering roles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainHero 