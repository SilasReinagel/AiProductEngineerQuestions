// @ts-check
import React, { useState, useEffect } from 'react'
import { useQuestionData } from './hooks/useQuestionData.js'
import QuestionCard from './components/QuestionCard.jsx'

/**
 * AI Product Engineering Interview Guide
 * Target: Interview candidates, hiring managers, developers building AI skills
 * Focus: Interview preparation, skill assessment, practical knowledge building
 */
function AcademicApp() {
  const { categories, questions, loading, error } = useQuestionData()
  const [selectedTopic, setSelectedTopic] = useState(/** @type {string | null} */(null))
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading interview questions...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Error</h2>
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
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Topic Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Interview Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className={`w-full text-left p-2 rounded text-sm ${
                    !selectedTopic ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'
                  }`}
                >
                  All Topics
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
              <h3 className="font-semibold text-gray-800 mb-4">Experience Level</h3>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-2 border rounded text-sm"
              >
                <option value="all">All Levels</option>
                <option value="novice">Entry Level</option>
                <option value="intermediate">Mid Level</option>
                <option value="expert">Senior Level</option>
                <option value="master">Staff/Principal</option>
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
                    placeholder="Search interview questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  {filteredQuestions.length} questions
                </div>
              </div>
            </div>

            {/* Interview Questions */}
            <div className="space-y-6">
              {filteredQuestions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  index={index}
                />
              ))}
            </div>

            {filteredQuestions.length === 0 && (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <div className="text-gray-400 text-4xl mb-4">🤔</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">No Questions Found</h3>
                <p className="text-gray-600">
                  No questions match your current criteria. Try adjusting your filters or search terms.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            AI Engineering Interview Guide • {questions.length} Interview Questions • 
            {Object.keys(categories).length} Categories
          </p>
          <p className="text-xs text-gray-400 mt-2">
            For interview preparation, hiring decisions, and skill development in AI product engineering.
          </p>
          <p className="text-xs text-gray-400 mt-3">
            Site by <a href="https://silasreinagel.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">Silas Reinagel</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default AcademicApp 