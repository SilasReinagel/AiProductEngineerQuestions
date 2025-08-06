// @ts-check
import { useMemo } from 'react'
import { COMPILED_CATEGORIES, COMPILED_QUESTIONS, BUILD_INFO } from '../data/compiledQuestions.js'
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
 * Custom hook for accessing statically compiled question data
 * This replaces the runtime loading with compile-time data compilation
 * @returns {Object} Question data and metadata
 */
export function useStaticQuestionData() {
  // Use memoization to ensure we only compute sorted entries once
  const sortedCategoriesEntries = useMemo(() => 
    getSortedCategoriesEntries(COMPILED_CATEGORIES), 
    []
  )

  return {
    categories: COMPILED_CATEGORIES,
    questions: COMPILED_QUESTIONS,
    loading: false, // No loading needed with static data
    error: null,    // No runtime errors possible with static data
    sortedCategoriesEntries,
    buildInfo: BUILD_INFO // Metadata about when the data was compiled
  }
} 