# Electronic Portfolio

A professional educator **ePortfolio** built with **Next.js 16 + React 19 + Tailwind CSS v4**,
organized around the **ISTE Standards for Educators** (Learner · Leader · Citizen · Designer).

Warm-editorial design, responsive navigation with a mobile menu, dark/light mode,
and an artifact/evidence card system with click-to-expand reflection modals.

---

## Quick start

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:3000
npm run build    # production build (all pages prerender as static)
npm run start    # serve the production build
npm run lint     # lint
```

---

## ✏️ How to make it yours — edit ONE file

**Everything personal lives in [`content/site.ts`](content/site.ts).** You rarely need to touch
the components. Placeholders are marked with `«…»`.

| What to change | Where in `content/site.ts` |
| --- | --- |
| Your name, role, school, headline, intro | `person` |
| Contact links (email, LinkedIn, X) | `socials` (uncomment/add entries) |
| Navigation labels | `nav` |
| Each ISTE domain's narrative + artifacts | `domains[]` → `narrative`, `artifacts` |

### Adding an artifact (evidence)
Add an object to the relevant domain's `artifacts` array:

```ts
{
  id: "learner-artifact-2",           // unique
  title: "Google Classroom Redesign",
  summary: "How I restructured my LMS to reduce cognitive load.",
  tags: ["Google Classroom", "UDL"],
  reflection: [
    "Context: what the artifact is and why I made it.",
    "Reflection: what I learned and its impact on students.",
  ],
  evidence: { label: "View slides", href: "https://…" },  // optional
  image: "/artifacts/classroom.jpg",                       // optional
}
```

### Images
- **Headshot:** drop a file in `public/` (e.g. `public/headshot.jpg`) and set
  `person.photo = "/headshot.jpg"`. Leave empty for an auto-generated initials avatar.
- **Artifact images:** drop files in `public/artifacts/` and reference them as
  `"/artifacts/your-file.jpg"`.

### Re-skinning colors
All colors are CSS variables at the top of [`app/globals.css`](app/globals.css).
Change `--accent` (and its dark-mode value under `.dark`) to shift the whole palette.

---

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, theme, header/footer
  globals.css           Design tokens (colors, fonts) + dark-mode variant
  page.tsx              Home (hero, about, four-domain index)
  learner/page.tsx      ┐
  leader/page.tsx       │ Thin wrappers → <DomainPage domain={…} />
  citizen/page.tsx      │
  designer/page.tsx     ┘
components/
  site-header.tsx       Sticky responsive nav + mobile menu
  site-footer.tsx       Contact + nav footer
  theme-provider.tsx    Dark/light state (no-flash)
  theme-toggle.tsx      Toggle button
  domain-page.tsx       Shared template for the 4 ISTE pages
  artifact-card.tsx     Evidence card + reflection modal
  icons.tsx             Inline SVG icon set
content/
  site.ts               ⭐ ALL personal content lives here
public/
  artifacts/            Drop artifact images here
```

---

## Design system

- **Type:** Fraunces (editorial serif display) + Inter (UI/body sans)
- **Palette:** warm ivory paper, warm-black ink, teal-pine accent, terracotta highlight
- **Dark mode:** class-based, respects system preference, remembers your choice
- **Accessibility:** skip link, visible focus rings, semantic landmarks, reduced-motion aware

---

## Deploying

Static-friendly — deploys anywhere. Common options:

- **Vercel:** import the repo; zero config.
- **GitHub Pages / Netlify:** `npm run build`. For a fully static export, add
  `output: "export"` to `next.config.ts` and deploy the `out/` folder.

Set `site.url` in `content/site.ts` to your final domain so social/SEO metadata is correct.
