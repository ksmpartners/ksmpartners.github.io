# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (localhost:4321)
npm run build      # production build → dist/
npm run preview    # preview built site locally
npx astro check    # type-check .astro files
```

There are no tests in this project.

## Architecture

This is an **Astro 5 static site** deployed to GitHub Pages at `https://ksmpartners.github.io/ksm-website/`. The `base` is set to `/ksm-website/` in `astro.config.mjs`, so all internal links must use Astro's `BASE_URL` or relative paths — **never hardcode absolute paths starting with `/`**.

### Layout hierarchy

```
BaseLayout.astro       ← <html> shell, <head>, global CSS import
  └─ PageLayout.astro  ← wraps BaseLayout with <Header>, <main>, <Footer>
       └─ BlogPostLayout.astro  ← extends PageLayout for blog posts
```

All pages use `PageLayout` (which includes the nav/footer). `BaseLayout` is only used directly when building `PageLayout`.

### Content collections (`src/content/`)

Defined in `src/content/config.ts` with Zod schemas:

| Collection | Key fields |
|---|---|
| `services` | `title`, `description`, `order` (for home sort), `image` |
| `case-studies` | `title`, `client`, `vertical` (enum: Utilities/Life Sciences/Other), `summary`, `image` |
| `blog` | `title`, `date`, `author`, `tags[]`, `excerpt`, `image` |

Content files are `.md` (not `.mdx`) by default. Slug derivation strips `.md`/`.mdx` extensions from `cs.id` — e.g., `cs.id.replace(/\.mdx?$/, '')`.

### Routing

- Static pages: `src/pages/*.astro`
- Dynamic collection pages: `src/pages/[collection]/[slug].astro` using `getStaticPaths()` + `getCollection()`
- Index pages for each collection: `src/pages/case-studies/index.astro`, `src/pages/blog/index.astro`

### Styling

Single global stylesheet at `src/styles/global.css`, imported only in `BaseLayout.astro`. CSS custom properties define the brand palette:

- `--color-primary: #004D71` (navy — headings, header bg)
- `--color-accent: #3CB4E5` (sky blue — links, buttons)
- Utility classes like `.section`, `.section-pale`, `.grid-3`, `.card`, `.btn`, `.tag`, `.prose` are defined globally — use these rather than adding inline styles or scoped styles where possible.

Font is **General Sans** (loaded via `@font-face` from an external CDN URL in `global.css`).

### Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yaml`) which builds with `withastro/action@v5` and deploys to GitHub Pages.
