# Penn HCI Lab Website

Source for [pennhci.com](https://pennhci.com), built with [Astro](https://astro.build) and deployed automatically via GitHub Actions to GitHub Pages.

## Setup

```sh
git clone git@github.com:Penn-HCI/penn-hci.github.io.git
cd penn-hci.github.io
npm install
```

Requires Node 20+.

## Local development

```sh
npm run dev
```

Starts a live-reloading dev server (default `http://localhost:4321`) — edit files and see changes immediately.

To check the production build before pushing:

```sh
npm run build
npm run preview
```

## Common content updates

All lab content lives in `src/data/*.json` and `public/`. You don't need to touch any `.astro` template files for these.

### Adding or updating a person / picture

1. Add the photo to `public/people/` (any common image format — jpg/png/webp — file name doesn't matter beyond being unique and reasonably named.
2. Edit `src/data/people.json`. Each person is added under one of these category arrays: `pis`, `postdocs`, `phds`, `alumni`, `students`, `collaborators`.

   ```json
   {
     "name": "Your Name",
     "role": "PhD Student",
     "affiliation": "University of Pennsylvania",
     "picture": "/people/your_name.jpg",
     "website": "https://yourname.com/"
   }
   ```

   - `picture` is the path under `public/`, starting with `/people/...`.
   - Optional: add `"aliases": ["Alternate Name"]` if the person publishes under a different name than what's listed here — this makes the publications page's author filter match both names.

3. To move someone (e.g. PhD student → alumni), cut their entry from one category array and paste it into another.

### Adding a publication

Edit `src/data/publications.json` and add an entry to the array:

```json
{
  "title": "Paper Title",
  "authors": "First Author, Second Author, ...",
  "venue": "CHI",
  "year": 2026,
  "pdf": "/papers/venue-year-shortname.pdf",
  "image": "/papers/venue-year-shortname.png"
}
```

- `pdf` and `image` are both optional, but if included, drop the actual files into `public/papers/` first (PDF of the paper, PNG/JPG teaser image respectively) — the paths just need to match what's in `public/`.
- `venue` and `year` populate the filter dropdowns on the publications page automatically — no need to register a new venue anywhere else.

### Adding a course

Edit `src/data/courses.json`:

```json
{
  "code": "CIS 4120",
  "title": "Course Title",
  "description": "...",
  "links": []
}
```

### Adding a news item

Edit `src/data/news.json` (shows on the homepage, newest generally first). `content` supports Markdown, including links:

```json
{
  "date": "2026-06-25",
  "content": "Our group has [3 papers](/publications?venue=FAccT&year=2026) at FAccT 2026!"
}
```

## Committing and publishing

We commit directly to `main` — no PRs necessary. But a couple of rules matter because everyone pushes straight to `main`:

- **Pull before you start editing** if it's been a while (`git pull`), so you're not working from a stale copy.
- **Never force-push** (`git push --force` / `-f`) to `main`. This can cause loss of already-published content/history.
- Any push to `main` automatically triggers a GitHub Actions build and deploy — check the **Actions** tab on GitHub if the live site doesn't reflect your change after a few minutes; that's where build errors (e.g. invalid JSON) show up.

Typical flow:

```sh
git pull
# edit src/data/*.json, add files to public/
npm run build   # safety check that it builds before pushing
git add -A
git commit -m "content: add CHI 2026 papers"
git push
```
