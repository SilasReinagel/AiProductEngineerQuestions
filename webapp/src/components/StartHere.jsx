// @ts-check
import React from 'react'

/**
 * Start Here Guide Component
 * Routes users by experience level and provides guidance for hiring managers
 * @param {Object} props
 * @param {(categorySlug: string) => void} [props.onSelectCategory]
 */
function StartHere({ onSelectCategory }) {

  const handleCategoryClick = (categorySlug) => {
    if (onSelectCategory) {
      onSelectCategory(categorySlug)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Start Here: Your AI Engineering Interview Journey
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Navigate your path based on your experience level or hiring needs. 
          Each track is designed to build knowledge progressively.
        </p>
      </div>

      {/* Learning Paths */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        
        {/* Beginner Path */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">New to AI Engineering</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Start with fundamentals and build core AI product skills. Perfect for developers transitioning into AI roles.
          </p>
          
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900 text-sm">Recommended Learning Path:</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleCategoryClick('prompt-engineering')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-emerald-700">1. Prompt Engineering</span>
                <p className="text-gray-600 text-xs mt-1">Learn to communicate effectively with LLMs</p>
              </button>
              <button 
                onClick={() => handleCategoryClick('context-engineering')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-emerald-700">2. Context Engineering</span>
                <p className="text-gray-600 text-xs mt-1">Structure and optimize context for better results</p>
              </button>
              <button 
                onClick={() => handleCategoryClick('ai-model-api-selection-product-lens')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-emerald-700">3. Model/API Selection</span>
                <p className="text-gray-600 text-xs mt-1">Choose the right models for your product needs</p>
              </button>
            </div>
          </div>
        </div>

        {/* Intermediate Path */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Building AI Systems</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Ready to build production AI systems? Focus on architecture, RAG, and system design.
          </p>
          
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900 text-sm">Recommended Learning Path:</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleCategoryClick('retrieval-augmented-generation-rag')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-blue-700">1. RAG Systems</span>
                <p className="text-gray-600 text-xs mt-1">Build knowledge-grounded AI applications</p>
              </button>
              <button 
                onClick={() => handleCategoryClick('ai-agent-engineering')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-blue-700">2. AI Agents</span>
                <p className="text-gray-600 text-xs mt-1">Create autonomous, tool-using AI systems</p>
              </button>
              <button 
                onClick={() => handleCategoryClick('ai-system-evaluation')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-blue-700">3. System Evaluation</span>
                <p className="text-gray-600 text-xs mt-1">Measure and benchmark AI system performance</p>
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Path */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Advanced AI Engineering</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Scale AI systems, optimize performance, and handle complex multimodal scenarios.
          </p>
          
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900 text-sm">Recommended Learning Path:</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleCategoryClick('agentic-techniques')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-purple-700">1. Agentic Techniques</span>
                <p className="text-gray-600 text-xs mt-1">Advanced patterns for complex AI workflows</p>
              </button>
              <button 
                onClick={() => handleCategoryClick('model-optimization')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-purple-700">2. Model Optimization</span>
                <p className="text-gray-600 text-xs mt-1">Performance tuning and cost optimization</p>
              </button>
              <button 
                onClick={() => handleCategoryClick('multimodal-ai')}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all text-sm"
              >
                <span className="font-medium text-purple-700">3. Multimodal AI</span>
                <p className="text-gray-600 text-xs mt-1">Combine text, vision, and audio capabilities</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hiring Managers Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 mb-12">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Hiring Managers</h2>
            <p className="text-gray-700 mb-6">
              Use this guide to assess AI engineering candidates and structure your interview process effectively.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Essential Categories for All Roles:</h3>
                <div className="space-y-2">
                  <button 
                    onClick={() => handleCategoryClick('prompt-engineering')}
                    className="block w-full text-left p-2 rounded text-sm text-indigo-700 hover:bg-indigo-100 transition-colors"
                  >
                    • Prompt Engineering (Communication with LLMs)
                  </button>
                  <button 
                    onClick={() => handleCategoryClick('ai-system-evaluation')}
                    className="block w-full text-left p-2 rounded text-sm text-indigo-700 hover:bg-indigo-100 transition-colors"
                  >
                    • AI System Evaluation (Quality assessment)
                  </button>
                  <button 
                    onClick={() => handleCategoryClick('responsible-ai')}
                    className="block w-full text-left p-2 rounded text-sm text-indigo-700 hover:bg-indigo-100 transition-colors"
                  >
                    • Responsible AI (Ethics and safety)
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Role-Specific Deep Dives:</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="p-2">
                    <span className="font-medium">Product Engineers:</span> RAG, AI UX Design, Rapid Prototyping
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Infrastructure Engineers:</span> Model Optimization, Agentic Techniques
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Research Engineers:</span> Multimodal AI, Advanced Evaluation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interview Preparation Tips</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">For Candidates</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Practice with real scenarios, not just theory</li>
              <li>• Understand trade-offs between different approaches</li>
              <li>• Prepare examples from your experience</li>
              <li>• Stay current with latest AI developments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">For Interviewers</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Focus on practical problem-solving</li>
              <li>• Ask about system design decisions</li>
              <li>• Evaluate understanding of limitations</li>
              <li>• Test ability to explain complex concepts</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Best Practices</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Start with fundamentals, build complexity</li>
              <li>• Use consistent evaluation criteria</li>
              <li>• Include diverse perspectives in assessment</li>
              <li>• Focus on growth potential, not just current skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartHere
