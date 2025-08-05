# AI Product Engineering Interview Guide

A comprehensive interview preparation resource for AI engineering roles with 500+ curated questions across 13 essential domains.

## 🚀 Live Site

**[aiproductengineerinterview.com](https://aiproductengineerinterview.com)**

## ✨ Features

- **13 AI Engineering Domains** - From prompt engineering to multimodal AI
- **500+ Interview Questions** - Curated by experienced AI engineers
- **Progressive Difficulty** - Entry level to Staff/Principal roles
- **Domain-Focused Navigation** - Quick access to specific areas
- **Search & Filtering** - Find questions by keyword and experience level
- **SEO Optimized** - Full sitemap and meta optimization
- **Mobile Responsive** - Works perfectly on all devices

## 🎯 Target Audience

- **Interview Candidates** - Preparing for AI engineering roles
- **Hiring Managers** - Conducting technical assessments  
- **Technical Recruiters** - Understanding AI engineering skills
- **Developers** - Building AI product engineering expertise

## 🏗️ Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS
- **Language**: JavaScript + JSDoc, TypeScript checking
- **Build**: ES Modules, Hot reload
- **Deployment**: Netlify
- **SEO**: XML Sitemap, Meta optimization, Structured data

## 📚 Interview Domains

1. **Prompt Engineering** - LLM communication fundamentals
2. **Context Engineering** - Structuring context for LLMs  
3. **AI Agent Engineering** - Multi-step, tool-using systems
4. **RAG** - Retrieval-Augmented Generation systems
5. **Model Selection** - Choosing and evaluating models/APIs
6. **Agentic Techniques** - Advanced agent patterns
7. **Model Optimization** - Performance, efficiency, cost
8. **AI System Evaluation** - Testing and benchmarking
9. **Responsible AI** - Ethics, safety, compliance
10. **AI/UX Design** - User experience for AI features
11. **Feedback Loops** - Learning from user/model feedback
12. **Rapid Prototyping** - Fast iteration with AI tools
13. **Multimodal AI** - Combining text, vision, audio

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

This project is configured for Netlify deployment:

1. **Connect Repository** - Link your GitHub repo to Netlify
2. **Build Settings** - Auto-detected from `netlify.toml`
3. **Deploy** - Automatic builds on push to main branch

Build command: `npm run build`  
Publish directory: `dist`

## 📁 Project Structure

```
webapp/
├── public/                 # Static assets
│   ├── questions/         # Question data (JSON)
│   ├── sitemap.xml        # Generated XML sitemap
│   └── robots.txt         # SEO directives
├── src/
│   ├── components/        # React components
│   ├── config/           # Configuration files
│   ├── hooks/            # Custom React hooks
│   └── AcademicApp.jsx   # Main app component
├── scripts/
│   └── generate-sitemap.js # Sitemap generator
├── netlify.toml          # Netlify configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables
None required - static site with JSON data files.

### Build Process
1. Generate XML sitemap (`npm run generate-sitemap`)
2. Build with Vite (`vite build`)  
3. Deploy to Netlify CDN

### SEO Features
- **XML Sitemap** - Auto-generated with category pages
- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media optimization
- **Structured Data** - Schema.org markup
- **Robots.txt** - Search engine directives

## 📝 Content Management

### Adding Questions
1. Edit JSON files in `public/questions/`
2. Follow existing structure: `Novice`, `Intermediate`, `Expert`, `Master`
3. Rebuild to regenerate sitemap

### Adding Categories
1. Create new JSON file in `public/questions/`
2. Update `src/config/categoryOrder.js`
3. Update `scripts/generate-sitemap.js`
4. Run `npm run generate-sitemap`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Silas Reinagel**  
Website: [silasreinagel.com](https://silasreinagel.com)  
GitHub: [@SilasReinagel](https://github.com/SilasReinagel)

---

### 🎯 Perfect for AI Engineering Interview Prep!

Whether you're preparing for your next AI engineering role or hiring the best AI talent, this guide provides the comprehensive question bank you need to succeed.
