# AI Product Engineering Interview Guide

> **Curated questions covering the complete AI product engineering stack. Perfect for interview preparation, hiring decisions, and skill development.**

## 🎯 The Pitch

The AI landscape is evolving rapidly, but interview preparation hasn't kept up. Most resources focus on theory or research, leaving a gap for **practical AI product engineering skills**. This guide bridges that gap.

### Why This Matters

- **For Candidates**: Master the skills that actually matter in AI product roles
- **For Hiring Managers**: Assess candidates on real-world AI engineering capabilities  
- **For Teams**: Identify skill gaps and create learning paths
- **For the Industry**: Standardize expectations for AI product engineering roles

### What Makes This Different

- **500+ Curated Questions** across 13 essential domains
- **Progressive Difficulty**: Entry level → Staff/Principal engineering
- **Product-Focused**: Real scenarios, not academic theory
- **Battle-Tested**: Questions from experienced AI engineers at top companies
- **Always Current**: Regular updates as the field evolves

## 🚀 Live Site

**👉 [aiproductengineerinterview.com](https://aiproductengineerinterview.com/)**

## 📋 Question Categories

1. **Prompt Engineering** - Communicating effectively with LLMs
2. **Context Engineering** - Structuring and optimizing context
3. **RAG (Retrieval-Augmented Generation)** - Knowledge-grounded AI systems
4. **Model/API Selection** - Choosing the right tools for your product
5. **AI Agent Engineering** - Building autonomous, tool-using systems
6. **Agentic Techniques** - Advanced patterns for complex workflows
7. **Model Optimization** - Performance tuning and cost optimization
8. **AI System Evaluation** - Measuring and benchmarking performance
9. **Responsible AI** - Ethics, safety, and governance
10. **AI UX Design** - Designing user experiences for AI features
11. **Feedback Loops** - Learning from user and model feedback
12. **Rapid Prototyping** - Fast iteration with AI systems
13. **Multimodal AI** - Combining text, vision, and audio

## 🛠 Local Development Setup

### Prerequisites

- **Node.js** 18+ and npm
- **Git** for version control

### Quick Start

```bash
# Clone the repository
git clone https://github.com/SilasReinagel/AiProductEngineerQuestions.git
cd AiProductEngineerQuestions

# Install dependencies
cd webapp && npm install && cd ..

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Building
npm run build            # Build for production
npm run preview          # Preview production build locally

# Deployment
npm run deploy           # Deploy to Netlify (production)
npm run deploy:preview   # Deploy preview to Netlify

# Marketing
npm run utm:generate     # Generate UTM tracking links
```

### Project Structure

```
AiProductEngineerQuestions/
├── design/              # Design docs and specifications
├── marketing/           # UTM tracking and marketing assets
│   ├── scripts/         # UTM link generator
│   └── dist/           # Generated marketing links
├── pmt/                # Project management and tasks
├── webapp/             # Main React application
│   ├── public/         # Static assets and question data
│   │   └── questions/  # JSON question files
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── data/       # Compiled question data
│   │   └── config/     # Configuration files
│   └── scripts/        # Build and compilation scripts
└── README.md           # This file
```

## 📝 Contributing

We welcome contributions! Here's how to get involved:

### Types of Contributions

- **Question Improvements**: Better wording, new examples, difficulty adjustments
- **New Questions**: Fill gaps in existing categories
- **Category Expansion**: Propose new domains as AI evolves
- **Bug Fixes**: UI issues, mobile improvements, accessibility
- **Feature Requests**: New functionality to improve the experience

### How to Contribute

1. **Fork the Repository**
   ```bash
   git fork https://github.com/SilasReinagel/AiProductEngineerQuestions.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Questions: Edit JSON files in `webapp/public/questions/`
   - Code: Follow existing patterns and add JSDoc comments
   - UI: Test on mobile and desktop, maintain accessibility

4. **Test Locally**
   ```bash
   npm run dev
   # Verify your changes work correctly
   ```

5. **Submit a Pull Request**
   - Clear title and description
   - Link any related issues
   - Include screenshots for UI changes

### Question Contribution Guidelines

When adding or modifying questions:

- **Practical Focus**: Real scenarios over theoretical concepts
- **Clear Wording**: Unambiguous, professional language
- **Appropriate Difficulty**: Match the target skill level
- **Diverse Perspectives**: Consider different company sizes and contexts
- **Current Relevance**: Reflect modern AI engineering practices

### Code Contribution Guidelines

- **Plain JavaScript + JSDoc**: No TypeScript, use `// @ts-check`
- **ES6 Modules**: Use `import`/`export`, not CommonJS
- **Tailwind CSS**: For styling, follow existing patterns
- **Accessibility**: Maintain WCAG 2.1 AA compliance
- **Mobile-First**: Ensure responsive design

## 🏗 Technical Architecture

### Frontend Stack

- **React 18** with hooks and functional components
- **Vite** for fast development and building
- **TailwindCSS** for styling with custom design system
- **React Router** for client-side routing
- **Static Data Compilation** for fast loading

### Key Features

- **Static Question Compilation**: Questions compiled at build time for performance
- **Responsive Design**: Mobile-first with excellent tablet/desktop experience
- **Progressive Enhancement**: Works without JavaScript for core functionality
- **Analytics Integration**: Plausible Analytics with custom event tracking
- **SEO Optimized**: Proper meta tags, sitemap, and structured data

### Performance Optimizations

- **Static Data**: No runtime API calls for questions
- **Code Splitting**: Lazy loading for optimal bundle sizes
- **Image Optimization**: Proper formats and sizes
- **Caching Strategy**: Aggressive caching for static assets

## 📊 Analytics & Tracking

We use privacy-focused analytics to understand usage patterns:

- **Plausible Analytics**: Privacy-friendly, no cookies
- **UTM Tracking**: Campaign attribution for marketing
- **Custom Events**: Category selections, search usage, shares

## 🚀 Deployment

The site is deployed on **Netlify** with:

- **Automatic Deploys**: From main branch
- **Preview Deploys**: For pull requests  
- **Form Handling**: For any future contact forms
- **Edge Functions**: For any server-side logic

### Getting the Netlify Badge

After deploying to Netlify:
1. Go to your site's dashboard in Netlify
2. Navigate to **Site Settings** → **General** → **Status badges**
3. Copy the badge markdown and replace the commented badge at the top of this README

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

- **Contributors**: All the engineers who've shared their interview experiences
- **Community**: AI engineering community for feedback and validation
- **Open Source**: Built with amazing open source tools

## 📬 Contact

- **Website**: [aiproductengineerinterview.com](https://aiproductengineerinterview.com/)
- **GitHub**: [Issues and Discussions](https://github.com/SilasReinagel/AiProductEngineerQuestions)
- **Author**: [Silas Reinagel](https://silasreinagel.com)

---

**⭐ Star this repo if it helps you land your next AI engineering role or hire great AI talent!**
