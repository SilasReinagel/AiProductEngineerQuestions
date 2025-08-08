# Launch Tasks (Next 10)

Source: `design/launch.md`. Focused on pre-launch hardening and preparation.

- [x] About/Methodology page
  - Create a simple page explaining curation approach, taxonomy, and update cadence. Link from header/footer.

- [x] Press Kit page
  - Include logo, OG images, short description, screenshots, and usage guidelines. Link from footer.

 - [x] Integrate analytics and goals
   - Plausible integrated with outbound/download/tagged events script and `plausible()` queue in `webapp/index.html`. Goals configured for outbound clicks, share clicks, and search usage. UTM parameters are appended on share URLs and captured by Plausible.

- [x] UTM discipline and tracking sheet
  - Canonical scheme documented in `marketing/README.md`. Source CSV `marketing/utm-links.csv` with generator script `npm run utm:generate` outputs `marketing/dist/utm-links.csv` and `.json` for sharing.

- [ ] Draft and stage launch copy
  - Prepare HN (Show HN) post body, Product Hunt assets/first comment, LinkedIn post, X thread, and subreddit-specific versions.

- [ ] Create 3 demo GIFs
  - Short screencasts: scrolling categories, search/filter usage, and mobile view.

- [ ] Footer sitemap links to all 13 categories
  - Ensure `Footer` includes compact links to each category; cross-link 2 related domains from each category page.

- [ ] "Start Here" guide
  - Add a hub page that routes beginner → intermediate → expert paths and a section for hiring managers.

- [ ] Export social asset images
  - Generate 1200×630 (X/LinkedIn), 1200×1200 (square), and 240×240 (Product Hunt thumbnail).

- [ ] Performance hardening to Lighthouse ≥90
  - Run Lighthouse (mobile/desktop), remove unused CSS, and lazy-load heavy modules as needed.


