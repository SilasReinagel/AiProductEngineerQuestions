# AI Product Engineering Interview Guide — Launch and Growth Plan

This document outlines a pragmatic, repeatable go-to-market plan to get this site in front of a large audience of candidates, hiring managers, and AI practitioners. It covers structural needs, linking/SEO, launch day execution, distribution channels, and ongoing growth.

## Positioning and Value Proposition

- Audience: AI engineers (junior → staff), hiring managers, tech recruiters, AI-curious developers
- Promise: 500+ curated interview questions across 13 essential AI domains in one clean, fast site
- Proof: Professional UI, academic tone, well-organized taxonomy, continually updated

## Success Metrics (90 days)

- Traffic: 100k pageviews; 20k unique visitors
- Engagement: 2.5+ pages/session, 60+ sec avg. time on page
- Shares: 2k+ combined across X/LinkedIn/Reddit
- Stars/Backlinks: 300+ GitHub stars or 50+ quality backlinks
- Email: 2k+ subscribers (if capture enabled)

---

## Structural Needs (Pre-Launch Hardening)

1) Technical SEO and Shareability
- OpenGraph/Twitter cards: Global OG complete; add per-category OG images later for upgrades
- Sitemap: Generated and linked in `robots.txt` (already present)
- Canonical: Present on root; consider adding canonicals to category routes if we create static pages
- Structured data: Keep Website schema. Optional future: `ItemList` for categories, `FAQPage` slices
- Performance: Lighthouse 90+ mobile/desktop; remove unused CSS, lazy load heavy modules
- Favicons/manifest: Already present

2) Analytics & Attribution
- Add privacy-friendly analytics (Plausible or Umami) or GA4
- Define UTM scheme: `?utm_source=channel&utm_medium=post&utm_campaign=launch_YYYYMMDD&utm_content=variant`
- Create a simple dashboard view (Plausible goals: outbound clicks, share clicks, search usage)

3) Conversion & Credibility
- Primary CTA: “Share this Guide” + “Star on GitHub” or “Subscribe for Updates” (if email capture)
- Add lightweight email capture (Buttondown/ConvertKit/Beehiiv page link) — optional but recommended
- Add “About/Methodology” page to boost trust and attract backlinks
- Add press kit page: logo, OG images, description, screenshots

4) Distribution-Ready Assets
- OG images: site-level (done), consider category-level variants later
- Social post images: 1200×630 (X/LinkedIn), 1200×1200 (square), 240×240 (Product Hunt thumbnail)
- Short URL list with UTMs for each channel (X, LinkedIn, HN, PH, Reddit, newsletters)

---

## Internal Linking & Site Structure

- Home hero links to top categories (Prompt Engineering, RAG, Agents, Evaluation, Model Optimization)
- Category landing anchors with explanatory copy (1–2 paragraphs per category for SEO intent)
- Cross-link categories within content (e.g., Prompt Engineering → Context Engineering → RAG)
- Footer: add compact sitemap links to all 13 categories
- Add a “Start here” guide linking to beginner → intermediate → expert paths

Optional (future SEO upgrade):
- Generate static category pages (pre-rendered) so each category has unique meta + OG and indexable copy

---

## Backlink & Mention Strategy (Hit List)

1) Communities & Forums
- Hacker News (Show HN) — weekend U.S. morning or weekday off-peak
- Reddit: r/MachineLearning, r/LanguageTechnology, r/MLQuestions, r/learnmachinelearning, r/datascience, r/programming, r/cscareerquestions (follow each sub’s self-promotion rules)
- Indie Hackers (Product + Growth stories)
- Dev.to, Hashnode, Medium (canonical to site or dev.to)

2) Newsletters (submit/pitch)
- Ben’s Bites, TLDR AI, Latent Space, The Rundown AI, Import AI (if angle), Console (dev tools), TLDR (general dev), This Week in React (if React angle)

3) Educational Partners
- Bootcamps and universities (career services newsletters)
- Recruiters specializing in AI/ML
- AI meetup organizers (chapter newsletters)

4) Content Creators
- YouTube/Podcast hosts in AI careers/interviews (offer a concise walk-through + link)

5) Curated Lists/Directories
- Awesome lists (Awesome-LLM, Awesome-Interviews), Product directories (AI tooling lists), GitHub topic pages

Outreach approach: personable 5–7 sentence pitch, one-liner value prop, 2 bullets of why it helps their audience, suggested headline/snippet, and a tracking link with UTM.

---

## Launch Plan (T-7 → T+14)

T-7 to T-4 (Preparation)
- Finalize OG image, favicon set, sitemap, robots, canonical (done)
- Add “About/Methodology” and “Press Kit” pages (if possible)
- Set up analytics + UTM spreadsheet
- Draft copy: HN post, Product Hunt assets, LinkedIn/X threads, Reddit posts per subreddit rules
- Prepare 3 short demos/gifs (scrolling categories, search/filter, mobile view)

T-3 to T-1 (Seeding)
- Quietly share with 10–20 trusted peers for early feedback + initial stars/shares
- Submit to 3–5 newsletters with “heads-up” of launch day
- Schedule LinkedIn + X posts for launch morning (native image + link)

Launch Day (Pick Tue–Thu 7–9am PT)
- Post “Show HN: AI Product Engineering Interview Guide (link)” with crisp description
- Launch on Product Hunt (thumbnail, gallery, first comment explaining who it’s for + how it’s curated)
- Post LinkedIn (personal account + company page), X thread (5–7 tweets), and 1–2 Reddit subs that allow product posts
- Engage comments for first 12 hours (answer questions, share context, thank people)
- DM 10–20 creators/curators with tracking links

T+1 to T+3 (Amplify)
- Post case-study/article on Dev.to/Medium: “How we curated 500+ AI interview questions”
- Share “Top 50” carousel on LinkedIn (native images) linking back to site
- Small follow-up post on HN thread with improvements and gratitude
- Reach out to additional 10–20 curators, meetup organizers, and recruiters

T+4 to T+14 (Sustain)
- Publish 2 short posts/week: domain deep-dive (e.g., RAG interview set), “Interview signals to look for,” etc.
- Start guest post swap with 3 blogs/newsletters
- Create a downloadable PDF sample (email gate optional) to capture subscribers

---

## Social Copy Templates (Fill-in-ready)

Hacker News (Show HN)
- Title: “Show HN: AI Product Engineering Interview Guide — 500+ Questions across 13 Domains”
- Body: 3–6 sentences: what it is, who it’s for, how it’s curated, how it’s different; invite feedback

LinkedIn (launch)
- Hook: “Hiring or interviewing for AI roles? We compiled 500+ questions across 13 domains.”
- Value bullets: Prompt Eng, RAG, Agents, Evaluation, Model Optimization, UX, more
- CTA: “Explore and share with your team” + link

X/Twitter (thread)
- 1/ Launching a free AI Product Engineering Interview Guide — 500+ questions, 13 domains.
- 2/ Covers Prompt Eng, Context Eng, Agents, RAG, Evaluation, Model Optimization, and more.
- 3/ Designed for candidates, hiring managers, and recruiters.
- 4/ Fast, clean UI. Save/share. Contributions welcome.
- 5/ Link + OG image

Reddit (where allowed)
- Context: “Free resource for preparing and hiring AI engineers”
- Details: How we curated, what’s included, why it helps; invite critique

Newsletter pitch (to curators)
- Subject: “Free AI Interview Guide: 500+ Questions across 13 Domains”
- Body: 4–6 sentences: audience fit, selection highlights, 30-sec skim bullets, link w/ UTM

---

## Link Strategy (Internal, External, and UTMs)

Internal
- Ensure footer/site nav links to all categories; from each category, cross-link 2 related domains
- Add “Start Here” and “For Hiring Managers” hubs that link out to category subsets

External
- Backlink outreach to 50–100 high-signal domains over 4 weeks (newsletters, universities, bootcamps, blogs)
- Guest posts with canonical pointing to root or category pages
- Submit to curated lists and “awesome” repos

UTM Discipline
- Maintain a single sheet listing every link and UTM parameters; never share a bare link in outreach
- Example: `https://aiproductengineerinterview.com/?utm_source=linkedin&utm_medium=post&utm_campaign=launch_2025_08&utm_content=carousel`

---

## Risk Management & Compliance

- Community guidelines: Respect sub rules; use self-posts where required; no spam
- Throttle: Space out subreddit posts; rotate angles and images
- Accessibility: Alt text for images; contrast and font sizes
- Legal: Keep content under permissive license; attribute where relevant

---

## Operations Checklist

Pre-Launch
- [ ] Lighthouse >90 mobile/desktop
- [ ] OG/Twitter validators pass (FB Sharing Debugger, Card Validator)
- [ ] Analytics live; test UTMs
- [ ] About/Methodology page and Press Kit (optional but recommended)
- [ ] Social assets exported (1200×630, 1200×1200, 240×240)

Launch Day
- [ ] HN Show post
- [ ] Product Hunt live + first comment
- [ ] LinkedIn post + X thread
- [ ] 1–2 Reddit posts (per rules)
- [ ] Reply to every comment for 12h

Post-Launch (Week 1–2)
- [ ] Dev.to/Medium article
- [ ] Outreach to 20+ curators/creators
- [ ] 2–4 follow-up social posts highlighting categories
- [ ] Begin guest post pipeline

---

## 30/60/90 Roadmap (Growth)

30 Days
- Stabilize analytics baseline and top channels; add per-category OGs
- Publish 4–6 short educational posts; secure 10+ backlinks

60 Days
- Create static category pages with unique meta/OG (if not already)
- Partner with 2–3 bootcamps or university programs
- Reach 1k newsletter subscribers (if capture enabled)

90 Days
- Release v2 with additional categories or mastery tracks
- Publish a downloadable guide/e-book (gated or ungated)
- 50+ quality backlinks; 100k+ pageviews cumulative

---

## Owner Assignments (suggested)

- Product/Content: Curate and update questions; write About/Methodology
- Growth/Outreach: Community posts, newsletter submissions, partner outreach, UTMs
- Design: Social assets, per-category OGs, press kit
- Eng: Optional static category pages, light email capture component

---

## Notes

- Keep tone academic, helpful, and neutral. Invite critique and contributions.
- Favor native posts (upload image + link) for higher reach on LinkedIn/X.
- Reuse assets: turn category highlights into carousels and threads.


