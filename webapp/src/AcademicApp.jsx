// @ts-check
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useStaticQuestionData } from './hooks/useStaticQuestionData.js'
import QuestionCard from './components/QuestionCard.jsx'
import Header from './components/Header.jsx'
import LeftNavbar from './components/LeftNavbar.jsx'
import MainHero from './components/MainHero.jsx'
import DomainsSection from './components/DomainsSection.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import PressKit from './components/PressKit.jsx'

/**
 * Landing Page Component
 */
function LandingPage({ sortedCategoriesEntries, onSelectCategory }) {
  return (
    <div className="max-w-4xl mx-auto">
      <MainHero />
      <DomainsSection 
        sortedCategoriesEntries={sortedCategoriesEntries} 
        onSelectCategory={onSelectCategory}
      />
    </div>
  )
}

/**
 * Questions View Component
 */
function QuestionsView({ categories, questions, selectedTopic, onTopicChange }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredQuestions = questions.filter(q => {
    const matchesTopic = !selectedTopic || q.category === selectedTopic
    const matchesDifficulty = selectedDifficulty === 'all' || q.skillLevel === selectedDifficulty
    const matchesSearch = !searchQuery || q.question.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTopic && matchesDifficulty && matchesSearch
  })

  const currentCategory = selectedTopic ? categories[selectedTopic] : null

  return (
    <div className="max-w-4xl mx-auto">
      {/* Domain Header */}
      {currentCategory && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-serif text-gray-800 mb-2">{currentCategory.category}</h2>
          <p className="text-gray-600">
            Interview questions for {currentCategory.category.toLowerCase()} engineering roles
          </p>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Questions</label>
            <input
              type="text"
              placeholder="Search interview questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full p-3 border rounded-lg"
            >
              <option value="all">All Levels</option>
              <option value="novice">Entry Level</option>
              <option value="intermediate">Mid Level</option>
              <option value="expert">Senior Level</option>
              <option value="master">Staff/Principal</option>
            </select>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredQuestions.length} questions
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
  )
}

/**
 * AI Product Engineering Interview Guide
 * Target: Interview candidates, hiring managers, developers building AI skills
 * Focus: Interview preparation, skill assessment, practical knowledge building
 */
function AcademicApp({ initialView }) {
  const { categories, questions, loading, error, sortedCategoriesEntries } = useStaticQuestionData()
  const [selectedTopic, setSelectedTopic] = useState(/** @type {string | null} */(null))
  const [showLanding, setShowLanding] = useState(true)
  const [showAbout, setShowAbout] = useState(false)
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'auto' })
    } catch {
      window.scrollTo(0, 0)
    }
  }

  // Sync state from router path or query params (for backwards compatibility)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const queryCategory = urlParams.get('category')
    const queryAbout = urlParams.get('about')

    // Path-based routing has priority
    if (location.pathname === '/about' || initialView === 'about' || queryAbout === '1') {
      setShowAbout(true)
      setShowLanding(false)
      setSelectedTopic(null)
      return
    }

    if (location.pathname === '/press') {
      setShowAbout(false)
      setShowLanding(false)
      setSelectedTopic(null)
      return
    }

    const pathCategory = params.categorySlug
    if (pathCategory && categories[pathCategory]) {
      setSelectedTopic(pathCategory)
      setShowLanding(false)
      setShowAbout(false)
      return
    }

    if (queryCategory && categories[queryCategory]) {
      setSelectedTopic(queryCategory)
      setShowLanding(false)
      setShowAbout(false)
    }
  }, [location.pathname, location.search, params.categorySlug, categories, initialView])

  const handleSelectCategory = (categorySlug) => {
    setSelectedTopic(categorySlug)
    setShowLanding(false)
    setShowAbout(false)
    
    // Route navigation
    navigate(`/${categorySlug}`)

    try {
      // @ts-ignore
      window.plausible && window.plausible('Select Category', { props: { category: categorySlug } })
    } catch {}

    scrollToTop()
  }

  const handleBackToLanding = () => {
    setShowLanding(true)
    setSelectedTopic(null)
    setShowAbout(false)
    
    navigate('/')

    scrollToTop()
  }

  const handleTopicChange = (categorySlug) => {
    setSelectedTopic(categorySlug)
    setShowAbout(false)
    
    navigate(`/${categorySlug}`)

    scrollToTop()
  }

  const handleShowAbout = () => {
    setShowAbout(true)
    setShowLanding(false)
    setSelectedTopic(null)

    navigate('/about')

    try {
      // @ts-ignore
      window.plausible && window.plausible('View About')
    } catch {}

    scrollToTop()
  }

  // No loading states needed with static compilation!

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        showLanding={showLanding}
        onBackToLanding={handleBackToLanding}
        onShowAbout={handleShowAbout}
      />

      <LeftNavbar 
        sortedCategoriesEntries={sortedCategoriesEntries}
        selectedTopic={selectedTopic}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Area - responsive margins */}
      <div className="lg:ml-80 pt-20">
        <div className="container mx-auto px-4 py-8">
          {location.pathname === '/press' ? (
            <PressKit />
          ) : showAbout ? (
            <About />
          ) : showLanding ? (
            <LandingPage 
              sortedCategoriesEntries={sortedCategoriesEntries} 
              onSelectCategory={handleSelectCategory}
            />
          ) : (
            <QuestionsView
              categories={categories}
              questions={questions}
              selectedTopic={selectedTopic}
              onTopicChange={handleTopicChange}
            />
          )}
        </div>

        <Footer 
          questionsCount={questions.length}
          categoriesCount={Object.keys(categories).length}
          onShowAbout={handleShowAbout}
          onSelectCategory={handleSelectCategory}
        />
      </div>
    </div>
  )
}

export default AcademicApp 