## UTM Conventions

We use canonical UTM parameters on every link shared externally. Never share bare links.

- **utm_source**: channel or referrer (e.g., `linkedin`, `x`, `hn`, `producthunt`, `newsletter`, `email`)
- **utm_medium**: content type (e.g., `post`, `thread`, `comment`, `reply`, `dm`, `share`)
- **utm_campaign**: campaign identifier; prefer `launch_YYYYMMDD` or named campaigns (e.g., `launch_20250808`, `evergreen_q3`)
- **utm_content**: variant identifier (e.g., `carousel`, `gif_demo`, `cta_top`, `cta_footer`, `v1`)
- **utm_term**: optional, for paid/keyword if relevant

Base site: `https://aiproductengineerinterview.com/`

Examples:

```
https://aiproductengineerinterview.com/?utm_source=linkedin&utm_medium=post&utm_campaign=launch_20250808&utm_content=carousel
```

### Workflow

1) Add rows to `marketing/utm-links.csv`.
2) Run `npm run utm:generate` from repository root.
3) Use links from `marketing/dist/utm-links.csv` (final) or `marketing/dist/utm-links.json`.

### Notes

- Keep values lowercase, kebab-case or snake_case.
- Avoid spaces and punctuation in UTM values.
- For ad hoc shares from the app UI, the header share button appends:
  - `utm_source=header`, `utm_medium=share`, `utm_campaign=launch`.
- ATTN: If campaign naming changes, update `webapp/src/components/Header.jsx` accordingly.

