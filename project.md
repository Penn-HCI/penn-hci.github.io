### Agentic rule

- On every new chat in this repo, load and keep in working memory:
  - The "Project context" section below
  - The "Open tasks" checklist below
- Always update this file when tasks are added/completed and reference it in status updates.

### Project context

- **Goal**: Build a static Astro website for the research lab, deployable on GitHub Pages.
- **Pages**:
  - **Index**: News + shortened previews of People and Publications, with links to full pages.
  - **People**: Complete listing of members (bios, roles, images).
  - **Publications**: Complete listing of papers.
  - **Courses**: Complete listing of courses taught/hosted.
- **Current codebase highlights**:
  - Layout: `src/layouts/Base.astro`
  - Home: `src/pages/index.astro`
  - Styles: `src/styles/global.scss`, `src/styles/index.scss`
  - Assets: `public/` (including `public/people/*` images)
  - Data: `src/data/people.json`, `src/data/publications.json`
- **Constraints**: Static site (no server). Host on GitHub Pages.
- **Navigation**: Should include links to `/`, `/people`, `/publications`, `/courses`.

### Decisions and conventions

- **Routes**: `/` (index), `/people`, `/publications`, `/courses`.
- **Content & data**:
  - JSON under `src/data/`: `people.json`, `publications.json`
  - Single Markdown files under `src/content/`: `courses.md`, `news.md`
- **Images**: Store under `public/people/` and other appropriate folders in `public/`.
- **Index previews**: Show a small subset (e.g., top 3–6) for People/Publications with "View all" links.
- **Deployment**: Configure `astro.config.mjs` (`site` and `base` if needed) for GitHub Pages. Add a GitHub Actions workflow when ready.

- **CSS naming (BEM) & SCSS usage**:
  - Use BEM for all new and refactored styles: `block`, `block__element`, `block__element--modifier`.
  - High-level structural elements (sections, headers, unique containers) should have a single block class.
  - Utility classes (e.g., `content-width`, color/text utilities) are fine on minor inline elements.
  - Always nest SCSS rules under their block using `&__element` and `&--modifier`.
  - Mirror the HTML hierarchy in nesting: block → elements → modifiers; avoid flat, top-level selectors for elements.
  - Prefer rem-based sizing and spacing for consistency and scalability.

- **Conventional Commits**:
  - Use one-line Conventional Commits: `<type>[: scope]: <subject>` (lowercase, imperative).
  - Examples: `build: cursor & lint setup`, `feat(home): BEM refactor`, `docs: add BEM guidelines to project.md`.
  - Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `build`, `ci`, `chore`, `content`.
  - In particular, `content` should be used when adding/changing content (markdown, json, file, etc.) without changing the site source.

### Open tasks

- [ ] Update `src/pages/index.astro` with People/Publications previews and "View all" links
- [ ] Configure repo for GitHub Pages deployment (Astro `site`/`base`; add CI workflow)
- [ ] Test locally and validate on GitHub Pages
- [ ] Redesign
  - [ ] Remove background gradients
  - [ ] Incorporate brand colors into headers/section separators
  - [ ] Layout: denser first fold
  - [ ] Layout: news first?
- [ ] Reusable configurable people list
  - [ ] Filtered for main page
  - [ ] Unfiltered for /people
- [ ] Reusable configurable publication list
  - [ ] Filtered for main page
  - [ ] Unfiltered for /publications

- [ ] Mobile breakpoints & responsive styles
  - [ ] Hero: scale titles/subtitle and reduce margins
  - [ ] People: 2-up and 1-up cards with comfortable spacing
  - [ ] News: stack date above content and tighten padding
  - [ ] Nav: wrap or collapse links on small screens

### Completed tasks

- [x] Switch courses/news to single Markdown docs; render in pages — 2025-09-13
- [x] Remove `src/data/courses.json` and content collections config — 2025-09-13

- [x] Create `project.md` with agentic rule and initial project context — 2025-09-13
- [x] Seed `project.md` with initial TODOs/work items — 2025-09-13
- [x] Add Cursor rule to auto-load `project.md` context each chat — 2025-09-13
- [x] Update navigation in `src/layouts/Base.astro` to four links — 2025-09-13
- [x] Create pages: `/people`, `/publications`, `/courses` — 2025-09-13
- [x] Add placeholder data: `publications.json`, `courses.json` — 2025-09-13
- [x] Consolidate styles to SCSS (`global.scss`, `index.scss`) — 2025-09-13

- [x] Refactor site styles to BEM; nest SCSS under blocks — 2025-09-13
- [x] Update homepage, People, Publications, Courses to BEM classes — 2025-09-13

- [x] Initial mobile responsive layout pass — 2025-10-18

### Changelog

- 2025-09-13: Switched courses/news to single Markdown files and refactored pages.

- 2025-09-13: Added `project.md` with agentic rule, context, and initial tasks.
- 2025-09-13: Added `.cursor/rules/00-project-context.md` to auto-load project context.
- 2025-09-13: Updated navigation and scaffolded People/Publications/Courses pages with data.
- 2025-09-13: Consolidated styles, replaced inline styles with SCSS imports.
- 2025-09-13: Adopted BEM naming and SCSS nesting; refactored pages and homepage hero.

- 2025-10-18: Initial mobile responsive layout pass; added breakpoints and spacing tweaks in `src/styles/global.scss` and `src/styles/index.scss`; minor nav/header adjustments in `src/layouts/Base.astro`.
