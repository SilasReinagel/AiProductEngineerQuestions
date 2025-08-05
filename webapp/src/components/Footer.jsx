// @ts-check
import React from 'react'

/**
 * Site Footer Component
 * @param {Object} props
 * @param {number} props.questionsCount
 * @param {number} props.categoriesCount
 */
function Footer({ questionsCount, categoriesCount }) {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          AI Engineering Interview Guide • {questionsCount} Interview Questions • 
          {categoriesCount} Categories
        </p>
        <p className="text-xs text-gray-400 mt-2">
          For interview preparation, hiring decisions, and skill development in AI product engineering.
        </p>
        <p className="text-xs text-gray-400 mt-3">
          Site by <a href="https://silasreinagel.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">Silas Reinagel</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer 