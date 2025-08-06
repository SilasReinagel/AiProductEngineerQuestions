// @ts-check
import React from 'react'

/**
 * @typedef {Object} Question
 * @property {string} id - Unique identifier for the question
 * @property {string} skillLevel - Skill level (novice, intermediate, expert, master)
 * @property {string} category - Core skill category
 * @property {string} categoryName - Display name for the category
 * @property {string} question - The interview question text
 */

/**
 * Get skill level display configuration
 * @param {string} skillLevel 
 * @returns {{label: string, className: string}}
 */
const getSkillLevelConfig = (skillLevel) => {
  const configs = {
    novice: { label: 'Entry Level', className: 'bg-green-100 text-green-800' },
    intermediate: { label: 'Mid Level', className: 'bg-blue-100 text-blue-800' },
    expert: { label: 'Senior Level', className: 'bg-purple-100 text-purple-800' },
    master: { label: 'Staff/Principal', className: 'bg-red-100 text-red-800' }
  }
  return configs[skillLevel] || configs.master
}

/**
 * Interview question card component
 * @param {Object} props
 * @param {Question} props.question - The question data
 * @param {number} props.index - Question index for numbering
 * @param {boolean} [props.showReferences] - Whether to show related topic tags (optional)
 * @returns {JSX.Element}
 */
function QuestionCard({ question, index, showReferences = false }) {
  const skillConfig = getSkillLevelConfig(question.skillLevel)
  
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-mono flex-shrink-0">
              Q{String(index + 1).padStart(3, '0')}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${skillConfig.className} flex-shrink-0`}>
              {skillConfig.label}
            </span>
            <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded flex-shrink-0">
              {question.categoryName}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-medium text-gray-800 mb-4 leading-relaxed">
          {question.question}
        </h3>

        {showReferences && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Related Topics:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                System Design
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                ML Engineering
              </span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                Product Strategy
              </span>
              <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded">
                Technical Leadership
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionCard 