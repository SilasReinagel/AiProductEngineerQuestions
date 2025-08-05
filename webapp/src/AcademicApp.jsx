// @ts-check
import React, { useState, useEffect } from 'react'
import { useQuestionData } from './hooks/useQuestionData.js'

/**
 * Academic Researcher variant
 * Target: AI researchers, PhD students, academic professionals
 * Focus: Deep technical content, research methodologies, citations
 */
function AcademicApp() {
  const { categories, questions, loading, error } = useQuestionData()
  const [selectedTopic, setSelectedTopic] = useState(/** @type {string | null} */(null))
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showReferences, setShowReferences] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading research database...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Database Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  const filteredQuestions = questions.filter(q => {
    const matchesTopic = !selectedTopic || q.category === selectedTopic
    const matchesDifficulty = selectedDifficulty === 'all' || q.skillLevel === selectedDifficulty
    const matchesSearch = !searchQuery || q.question.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTopic && matchesDifficulty && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Academic Header */}
      <header className="bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif text-gray-800">
                AI Product Engineering Research Compendium
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Systematic Investigation of Product Engineering Methodologies in Artificial Intelligence
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowReferences(!showReferences)}
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded border"
              >
                {showReferences ? 'Hide' : 'Show'} References
              </button>
              <a href="/dev" className="text-xs text-blue-600 hover:underline">
                [Dev Mode]
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Research Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Research Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className={`w-full text-left p-2 rounded text-sm ${
                    !selectedTopic ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'
                  }`}
                >
                  All Domains
                </button>
                {Object.entries(categories).map(([slug, category]) => (
                  <button
                    key={slug}
                    onClick={() => setSelectedTopic(slug)}
                    className={`w-full text-left p-2 rounded text-sm ${
                      selectedTopic === slug ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Complexity Filter</h3>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-2 border rounded text-sm"
              >
                <option value="all">All Levels</option>
                <option value="novice">Foundational</option>
                <option value="intermediate">Applied</option>
                <option value="expert">Advanced</option>
                <option value="master">Research Frontier</option>
              </select>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search research questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  {filteredQuestions.length} findings
                </div>
              </div>
            </div>

            {/* Research Questions */}
            <div className="space-y-6">
              {filteredQuestions.map((question, index) => (
                <div key={question.id} className="bg-white rounded-lg shadow-lg">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-mono">
                          Q{String(index + 1).padStart(3, '0')}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          question.skillLevel === 'novice' ? 'bg-green-100 text-green-800' :
                          question.skillLevel === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                          question.skillLevel === 'expert' ? 'bg-purple-100 text-purple-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {question.skillLevel === 'novice' ? 'Foundational' :
                           question.skillLevel === 'intermediate' ? 'Applied' :
                           question.skillLevel === 'expert' ? 'Advanced' : 'Research Frontier'}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                          {question.categoryName}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium text-gray-800 mb-4 leading-relaxed">
                      {question.question}
                    </h3>

                    {showReferences && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Related Research Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            Machine Learning Systems
                          </span>
                          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            Human-Computer Interaction
                          </span>
                          <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                            Software Engineering
                          </span>
                          <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded">
                            Product Development
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredQuestions.length === 0 && (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <div className="text-gray-400 text-4xl mb-4">🔬</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">No Research Found</h3>
                <p className="text-gray-600">
                  No questions match your current research criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Academic Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Academic Research Compendium • {questions.length} Research Questions • 
            {Object.keys(categories).length} Domains
          </p>
          <p className="text-xs text-gray-400 mt-2">
            For research and educational purposes. Methodologies based on current industry practices.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AcademicApp 