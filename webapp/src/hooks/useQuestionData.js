// @ts-check
import { useState, useEffect } from 'react'
import { getCategorySortOrder } from '../config/categoryOrder.js'

/**
 * @typedef {Object} Question
 * @property {string} id - Unique identifier for the question
 * @property {string} skillLevel - Skill level (novice, intermediate, expert, master)
 * @property {string} category - Core skill category slug
 * @property {string} categoryName - Full category name
 * @property {string} question - The interview question text
 * @property {string} type - Type of question (technical, behavioral, etc.)
 * @property {string[]} topics - Related topics/skills
 */

/**
 * @typedef {Object} CategoryData
 * @property {string} category - Category name
 * @property {string} slug - URL-friendly slug
 * @property {string} fileName - Source file name
 * @property {Object.<string, string[]>} questions - Questions by skill level
 */

/**
 * Discover question files dynamically
 * @returns {Promise<string[]>} Array of question file names
 */
const discoverQuestionFiles = async () => {
  const knownFiles = [
    'q-agent.json',
    'q-ai-product.json', 
    'q-rag.json',
    'q-model-optimization.json',
    'q-agentic-techniques.json',
    'q-prompt-engineering.json',
    'q-context-engineering.json',
    'q-evaluation.json',
    'q-responsible-ai.json',
    'q-ai-ux.json',
    'q-feedback-loops.json',
    'q-multimodal.json',
    'q-rapid-prototyping.json'
  ]

  // Test which files actually exist
  const existingFiles = []
  for (const fileName of knownFiles) {
    try {
      const response = await fetch(`/questions/${fileName}`, { method: 'HEAD' })
      if (response.ok) {
        existingFiles.push(fileName)
      }
    } catch (error) {
      console.warn(`File ${fileName} not accessible:`, error)
    }
  }

  return existingFiles
}

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
 * Get categories sorted by the central sort order configuration
 * @param {Object.<string, CategoryData>} categories - Categories object
 * @returns {Array<[string, CategoryData]>} Sorted array of [slug, category] entries
 */
const getSortedCategoriesEntries = (categories) => {
  return Object.entries(categories).sort((a, b) => {
    const sortOrderA = getCategorySortOrder(a[0]) // a[0] is the category slug
    const sortOrderB = getCategorySortOrder(b[0]) // b[0] is the category slug
    return sortOrderA - sortOrderB
  })
}

/**
 * Custom hook for loading and managing question data
 * @returns {Object} Question data and loading state
 */
export function useQuestionData() {
  const [categories, setCategories] = useState({}) // Map of categorySlug -> CategoryData
  const [questions, setQuestions] = useState([]) // All questions combined
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadQuestionData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Discover available question files
        const questionFiles = await discoverQuestionFiles()
        console.log('Found question files:', questionFiles)
        
        if (questionFiles.length === 0) {
          console.error('No question files found in /questions/ directory')
          throw new Error('No question files found')
        }

        const loadedCategories = {}
        const allQuestions = []

        // Load each category file
        for (const fileName of questionFiles) {
          try {
            console.log(`Loading ${fileName}...`)
            const response = await fetch(`/questions/${fileName}`)
            if (!response.ok) {
              console.error(`Failed to load ${fileName}: ${response.status} ${response.statusText}`)
              continue
            }

            const categoryData = await response.json()
            console.log(`Successfully loaded ${fileName}:`, categoryData)
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

        if (Object.keys(loadedCategories).length === 0) {
          throw new Error('Failed to load any question categories')
        }

        setCategories(loadedCategories)
        setQuestions(allQuestions)

      } catch (err) {
        setError(err.message)
        console.error('Error loading question data:', err)
      } finally {
        setLoading(false)
      }
    }

    loadQuestionData()
  }, [])

  // Get sorted categories entries
  const sortedCategoriesEntries = getSortedCategoriesEntries(categories)

  return {
    categories,
    questions,
    loading,
    error,
    sortedCategoriesEntries
  }
} 