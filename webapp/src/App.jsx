// @ts-check
import { useState, useEffect } from 'react'

/**
 * @typedef {Object} Question
 * @property {string} id - Unique identifier for the question
 * @property {string} skillLevel - Skill level (novice, intermediate, expert, master)
 * @property {string} category - Core skill category
 * @property {string} question - The interview question text
 * @property {string} type - Type of question (technical, behavioral, etc.)
 * @property {string[]} topics - Related topics/skills
 */

/**
 * @typedef {Object} CategoryData
 * @property {string} category - Category name
 * @property {Object.<string, string[]>} questions - Questions by skill level
 */

/**
 * Skill level configuration
 * @type {Object.<string, {name: string, description: string, color: string}>}
 */
const skillLevels = {
  novice: {
    name: 'Novice',
    description: 'Fundamental concepts and basic understanding',
    color: 'bg-green-500 hover:bg-green-600'
  },
  intermediate: {
    name: 'Intermediate',
    description: 'Practical experience and technical skills',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  expert: {
    name: 'Expert',
    description: 'Advanced system design and architecture',
    color: 'bg-purple-500 hover:bg-purple-600'
  },
  master: {
    name: 'Master',
    description: 'Strategic thinking and leadership',
    color: 'bg-red-500 hover:bg-red-600'
  }
}

/**
 * Available category files (to be discovered dynamically)
 * @type {string[]}
 */
const categoryFiles = [
  'ai-product-q.json',
  // Add more category files here as they're created
  // 'rag-q.json',
  // 'prompt-engineering-q.json',
  // etc.
]

/**
 * Generate a URL-friendly slug from category name
 * @param {string} categoryName - Full category name
 * @returns {string} URL slug
 */
const generateCategorySlug = (categoryName) => {
  return categoryName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

/**
 * Transform loaded category data into question objects
 * @param {CategoryData} categoryData - Raw category data from JSON
 * @param {string} categorySlug - Category slug identifier
 * @returns {Question[]} Array of question objects
 */
const transformCategoryData = (categoryData, categorySlug) => {
  const questions = []
  let questionCounter = 1

  Object.entries(categoryData.questions).forEach(([skillLevel, questionTexts]) => {
    questionTexts.forEach((questionText) => {
      questions.push({
        id: `${categorySlug}-${skillLevel.toLowerCase()}-${questionCounter++}`,
        skillLevel: skillLevel.toLowerCase(),
        category: categorySlug,
        categoryName: categoryData.category,
        question: questionText,
        type: 'interview-question',
        topics: []
      })
    })
  })

  return questions
}

/**
 * Main App component for AI Product Engineer Interview Questions
 * @returns {JSX.Element}
 */
function App() {
  const [currentView, setCurrentView] = useState('home')
  const [browseModeType, setBrowseModeType] = useState(null) // 'skill-level' or 'category'
  const [selectedSkillLevel, setSelectedSkillLevel] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  // Data loading state
  const [categories, setCategories] = useState({}) // Map of categorySlug -> CategoryData
  const [questions, setQuestions] = useState([]) // All questions combined
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * Load category data from JSON files
   */
  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true)
        setError(null)

        const loadedCategories = {}
        const allQuestions = []

        // Load each category file
        for (const fileName of categoryFiles) {
          try {
            const response = await fetch(`/${fileName}`)
            if (!response.ok) {
              console.warn(`Failed to load ${fileName}: ${response.status}`)
              continue
            }

            const categoryData = await response.json()
            const categorySlug = generateCategorySlug(categoryData.category)
            
            // Store category data
            loadedCategories[categorySlug] = {
              ...categoryData,
              slug: categorySlug,
              fileName: fileName
            }

            // Transform and add questions
            const categoryQuestions = transformCategoryData(categoryData, categorySlug)
            allQuestions.push(...categoryQuestions)

          } catch (err) {
            console.warn(`Error loading ${fileName}:`, err)
          }
        }

        setCategories(loadedCategories)
        setQuestions(allQuestions)

      } catch (err) {
        setError(err.message)
        console.error('Error loading categories:', err)
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  /**
   * Handle navigation to browse questions
   */
  const handleBrowseQuestions = () => {
    setCurrentView('browse-mode')
  }

  /**
   * Handle browse mode selection
   * @param {string} mode - 'skill-level' or 'category'
   */
  const handleBrowseModeSelect = (mode) => {
    setBrowseModeType(mode)
    setCurrentView('browse')
  }

  /**
   * Handle skill level selection
   * @param {string} skillLevel - Selected skill level
   */
  const handleSkillLevelSelect = (skillLevel) => {
    setSelectedSkillLevel(skillLevel)
    setCurrentView('questions')
  }

  /**
   * Handle category selection
   * @param {string} categorySlug - Selected category slug
   */
  const handleCategorySelect = (categorySlug) => {
    setSelectedCategory(categorySlug)
    setCurrentView('questions')
  }

  /**
   * Handle back navigation
   */
  const handleBack = () => {
    if (currentView === 'questions') {
      setCurrentView('browse')
      setSelectedSkillLevel(null)
      setSelectedCategory(null)
    } else if (currentView === 'browse') {
      setCurrentView('browse-mode')
      setBrowseModeType(null)
    } else {
      setCurrentView('home')
    }
  }

  /**
   * Get questions based on current selection
   * @returns {Question[]}
   */
  const getFilteredQuestions = () => {
    return questions.filter(q => {
      if (selectedSkillLevel) return q.skillLevel === selectedSkillLevel
      if (selectedCategory) return q.category === selectedCategory
      return true
    })
  }

  /**
   * Get page title for questions view
   * @returns {string}
   */
  const getQuestionsTitle = () => {
    if (selectedSkillLevel) return `${skillLevels[selectedSkillLevel].name} Questions`
    if (selectedCategory) {
      const categoryData = categories[selectedCategory]
      return categoryData ? `${categoryData.category} Questions` : 'Questions'
    }
    return 'Questions'
  }

  /**
   * Get page description for questions view
   * @returns {string}
   */
  const getQuestionsDescription = () => {
    if (selectedSkillLevel) return skillLevels[selectedSkillLevel].description
    if (selectedCategory) {
      const categoryData = categories[selectedCategory]
      return categoryData ? `Questions focused on ${categoryData.category}` : ''
    }
    return ''
  }

  /**
   * Get question count for a skill level
   * @param {string} skillLevel - Skill level to count
   * @returns {number}
   */
  const getSkillLevelQuestionCount = (skillLevel) => {
    return questions.filter(q => q.skillLevel === skillLevel).length
  }

  /**
   * Get question count for a category
   * @param {string} categorySlug - Category slug to count
   * @returns {number}
   */
  const getCategoryQuestionCount = (categorySlug) => {
    return questions.filter(q => q.category === categorySlug).length
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Questions...</h2>
          <p className="text-gray-600">Fetching interview questions from category files</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Failed to Load Questions</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  // Home View
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            AI PRODUCT ENGINEER<br />INTERVIEW QUESTIONS
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Explore a collection of interview questions for AI product engineering roles.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            {Object.keys(categories).length} categories • {questions.length} questions loaded
          </p>
          <button
            onClick={handleBrowseQuestions}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 border-4 border-gray-700"
          >
            Browse Questions
          </button>
        </div>
      </div>
    )
  }

  // Browse Mode Selection View
  if (currentView === 'browse-mode') {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="mb-8 text-gray-600 hover:text-gray-800 flex items-center"
          >
            ← Back to Home
          </button>
          
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Browse Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <button
              onClick={() => handleBrowseModeSelect('skill-level')}
              className="bg-blue-600 hover:bg-blue-700 text-white p-8 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 border-4 border-blue-500 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Browse by Skill Level</h3>
              <p className="text-sm opacity-90 mb-4">Novice → Intermediate → Expert → Master</p>
              <p className="text-xs opacity-75">Questions organized by experience level</p>
            </button>
            
            <button
              onClick={() => handleBrowseModeSelect('category')}
              className="bg-purple-600 hover:bg-purple-700 text-white p-8 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 border-4 border-purple-500 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Browse by Core Skills</h3>
              <p className="text-sm opacity-90 mb-4">{Object.keys(categories).length} AI product engineering categories</p>
              <p className="text-xs opacity-75">Model Selection, RAG, Prompt Engineering, etc.</p>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Browse by Skill Level or Category View
  if (currentView === 'browse') {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={handleBack}
            className="mb-8 text-gray-600 hover:text-gray-800 flex items-center"
          >
            ← Back to Browse Options
          </button>
          
          {browseModeType === 'skill-level' && (
            <>
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Skill Levels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {Object.entries(skillLevels).map(([key, level]) => {
                  const questionCount = getSkillLevelQuestionCount(key)
                  return (
                    <button
                      key={key}
                      onClick={() => handleSkillLevelSelect(key)}
                      className={`${level.color} text-white p-8 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105 border-4 border-gray-600 shadow-lg`}
                    >
                      <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{level.description}</p>
                      <p className="text-xs opacity-75">{questionCount} questions</p>
                    </button>
                  )
                })}
              </div>
            </>
          )}

          {browseModeType === 'category' && (
            <>
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Core AI Product Engineering Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(categories).map(([categorySlug, categoryData]) => {
                  const questionCount = getCategoryQuestionCount(categorySlug)
                  return (
                    <button
                      key={categorySlug}
                      onClick={() => handleCategorySelect(categorySlug)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 rounded-lg text-left transition duration-300 ease-in-out transform hover:scale-105 border-2 border-indigo-500 shadow-lg"
                    >
                      <h3 className="text-lg font-bold mb-3">{categoryData.category}</h3>
                      <p className="text-xs opacity-75 mb-2">Source: {categoryData.fileName}</p>
                      <p className="text-xs opacity-75">{questionCount} questions</p>
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  // Questions View
  if (currentView === 'questions') {
    const filteredQuestions = getFilteredQuestions()
    const title = getQuestionsTitle()
    const description = getQuestionsDescription()

    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="mb-8 text-gray-600 hover:text-gray-800 flex items-center"
          >
            ← Back
          </button>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          <div className="space-y-6">
            {filteredQuestions.map((question, index) => (
              <div
                key={question.id}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Question {index + 1}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      {skillLevels[question.skillLevel].name}
                    </span>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    {question.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {question.question}
                </h3>
                {!selectedCategory && (
                  <div className="text-xs text-gray-500 mt-2">
                    Category: {question.categoryName}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Questions Found</h3>
              <p className="text-gray-600">No questions available for the selected criteria.</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

export default App
