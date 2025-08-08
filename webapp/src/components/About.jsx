// @ts-check
import React from 'react'

/**
 * About / Methodology Page
 * Explains curation approach, taxonomy, and update cadence.
 */
function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-2xl font-serif text-gray-900 mb-2">About This Guide</h2>
        <p className="text-gray-700">
          The AI Product Engineering Interview Guide is a curated set of 500+ questions across 13
          essential domains. It is designed for candidates preparing for interviews, hiring managers
          building structured interview loops, and practitioners strengthening their foundations.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-2">Methodology</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Grounded in hands-on AI product development and evaluation practices.</li>
          <li>Balanced coverage: fundamentals, applied engineering, and product thinking.</li>
          <li>Tiered difficulty labels to support novice → principal levels.</li>
          <li>Continuously refined with feedback from candidates and interviewers.</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-2">Taxonomy</h3>
        <p className="text-gray-700 mb-2">
          Questions are grouped into domains such as Prompt Engineering, Context Engineering, RAG,
          Agents, Evaluation, Model Optimization, Responsible AI, AI UX, and more. Each domain
          reflects common interview areas and day-to-day skills for AI product teams.
        </p>
        <p className="text-gray-700">
          Within a domain, questions span conceptual understanding, practical tradeoffs, and
          implementation details to enable signal-rich discussions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-serif text-gray-900 mb-2">Update Cadence</h3>
        <p className="text-gray-700">
          Content is reviewed periodically to track emerging patterns (e.g., agentic workflows,
          evaluation practices, retriever strategies). Suggestions are welcome via GitHub issues or
          direct feedback. Significant updates will be summarized in follow-up posts.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-serif text-gray-900 mb-2">Attribution & License</h3>
        <p className="text-gray-700">
          The site maintains a permissive license and attributes external sources where relevant.
          Community contributions are encouraged to improve coverage and clarity.
        </p>
      </div>
    </div>
  )
}

export default About


