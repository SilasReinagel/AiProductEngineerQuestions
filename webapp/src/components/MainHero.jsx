// @ts-check
import React from 'react'

/**
 * Main Hero Section Component
 */
function MainHero() {
  return (
    <div className="text-center mb-12">
      <div className="mb-8">
        <img 
          src="/icon.png" 
          alt="AI Interview Guide" 
          className="h-24 w-24 mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
          AI Product Engineering Interview Guide
        </h1>
        <p className="text-xl text-gray-600">
          Master your AI engineering interviews with curated questions covering all essential domains. 
          Perfect for candidates preparing for interviews, hiring managers conducting assessments, 
          and developers building AI product skills.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Interview Ready</h3>
          <p className="text-gray-600">
            Questions crafted by experienced AI engineers to mirror real interview scenarios across all skill levels.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-3xl mb-4">🧠</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Domain Focused</h3>
          <p className="text-gray-600">
            Deep dive into specific AI domains - from RAG systems to prompt engineering to model optimization.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <div className="text-3xl mb-4">📈</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Progressive Learning</h3>
          <p className="text-gray-600">
            Questions organized by experience level from entry to staff/principal engineering roles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainHero 