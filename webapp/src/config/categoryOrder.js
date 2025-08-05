// @ts-check

/**
 * Central configuration for category display order
 * Maps category slugs to their sort order position
 */
export const CATEGORY_SORT_ORDER = {
  'prompt-engineering': 1,                    // Most fundamental: how to talk to LLMs
  'context-engineering': 2,                   // Supplying and structuring context for LLMs
  'retrieval-augmented-generation-rag': 3,    // Core technique for grounding LLMs in external data
  'ai-model-api-selection-product-lens': 4,   // Choosing and evaluating models/APIs for product use
  'ai-agent-engineering': 5,                  // Building agentic systems (multi-step, tool-using, etc.)
  'agentic-techniques': 6,                    // Advanced agentic patterns and orchestration
  'model-optimization': 7,                    // Improving model performance, efficiency, cost
  'ai-system-evaluation': 8,                  // Evaluating and benchmarking AI systems
  'responsible-ai': 9,                        // Ethics, safety, compliance, governance
  'ai-ux-design': 10,                         // Designing user experiences for AI features
  'feedback-loops': 11,                       // Closing the loop: learning from user/model feedback
  'rapid-prototyping': 12,                    // Fast iteration and prototyping with AI
  'multimodal-ai': 13,                        // Most advanced/niche: combining text, vision, etc.
}

/**
 * Get sort order for a category slug
 * @param {string} categorySlug - The category slug
 * @returns {number} Sort order (defaults to 999 if not found)
 */
export function getCategorySortOrder(categorySlug) {
  return CATEGORY_SORT_ORDER[categorySlug] || 999
} 