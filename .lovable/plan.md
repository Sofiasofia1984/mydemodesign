## WordPress Specialist Portfolio

A single-page bold & modern portfolio in the "Structural Engineering" direction — high-contrast monochrome, heavy borders, oversized Anton display type, JetBrains Mono accents.

### Sections (single home route)
1. **Sticky nav** — logo + Projects / Capabilities / Contact links
2. **Hero** — "Engineering Scalable Web" headline + status card (location, availability, specialty)
3. **Selected Builds** — 2-card project grid with cover image, tech tags, title, description
4. **Capabilities** — 3-column block: Custom Dev, User Exp, and a Tech Stack card
5. **CTA** — oversized "Ready to build the next level?" with contact button
6. **Footer** — copyright + social links

### Design tokens (added to `src/styles.css`)
- Background `hsl(230 15% 4%)`, foreground near-white, primary `hsl(199 100% 55%)` (electric blue accent)
- Fonts: Anton (display), Inter (body), JetBrains Mono (mono) — loaded via `<link>` in `__root.tsx`
- Subtle reveal + line-grow keyframe animations

### Files
- `src/styles.css` — add `@theme` tokens, fonts, keyframes
- `src/routes/__root.tsx` — add Google Fonts `<link>` tags + SEO title/description
- `src/routes/index.tsx` — replace placeholder with the full portfolio page
- `src/assets/` — generate 2 project cover images (Nordic Form furniture store, The Pulse editorial)

### Placeholders to fill in later
Name, location, email, real project names/descriptions, and social links are filled with sensible defaults you can edit via Visual Edits.
