# Heritage Classical Academy — Website

A static, classic-collegiate site for Heritage Classical Academy (Ruston, LA). Plain HTML/CSS/JS, no build step — pushes to GitHub and auto-deploys on Netlify, the same setup as the church site.

## Structure

```
heritage-classical-academy/
├── index.html                 Home
├── welcome.html               About → Welcome
├── our-story.html             About → Our Story
├── our-mission.html           About → Mission, core values, statement of faith
├── our-team.html              About → Faculty + Board
├── employment.html            About → Employment
├── support-us.html            About → Pray / Volunteer / Give + 5K
├── application-process.html   Admissions → 4-step process (Google Form application)
├── tuition-fees.html          Admissions → Tuition & Fees
├── tuition-assistance.html    Admissions → ACE / LA Gator / HCA scholarships
├── faqs.html                  Admissions → FAQs
├── open-house.html            Admissions → Open House (embedded Google Form)
├── grammar-school.html        Academics → Grammar School
├── classical-education.html   Academics → Classical
├── christian-education.html   Academics → Christian
├── charlotte-mason.html       Academics → Charlotte Mason
├── assets/
│   ├── styles.css             Design system (navy + gold, serif headings)
│   ├── include.js             Shared header + footer + white logo (edit once → all pages)
│   └── heritage-logo-white.svg  Standalone white logo
├── _redirects                 301s from old WordPress URLs → new pages (SEO)
├── netlify.toml               Netlify config (no build needed)
└── .gitignore
```

## Editing

- **Header / footer / nav / logo:** all live in `assets/include.js`. Edit once, every page updates.
- **Colors, fonts, spacing:** `assets/styles.css`.
- **Page content:** the individual `.html` files.

## Local preview

Double-click `index.html` to open it in a browser. (Everything works locally except the
`_redirects` rules, which only apply once deployed on Netlify.)

## Deploy — GitHub → Netlify

This mirrors the church site. **Ryan owns the GitHub + Netlify accounts**; the assistant
helps with the repo contents and walks through each step.

### 1. Create the GitHub repo
1. On github.com → **New repository**.
2. Name it e.g. `heritage-classical-academy`, set **Public**, no README/.gitignore (this
   folder already has them). Create.

### 2. Push this folder to the repo
Pick whichever is easiest:
- **GitHub Desktop:** Add → Add Existing Repository → choose this folder → Publish.
- **Drag-and-drop (no tools):** on the empty repo page, "uploading an existing file" →
  drag everything inside this folder (not the folder itself) → Commit.
- **Command line (Personal Access Token at push time):**
  ```
  git init && git add . && git commit -m "Initial Heritage site"
  git branch -M main
  git remote add origin https://github.com/<you>/heritage-classical-academy.git
  git push -u origin main
  ```

### 3. Connect Netlify
1. Netlify → **Add new site → Import an existing project → GitHub** → pick the repo.
2. Build command: **(leave empty)**.  Publish directory: **`.`**  → Deploy.
3. Netlify gives you a `*.netlify.app` URL — that's the live site.

### 4. Point the domain (heritageruston.com)
When ready to go live: in Netlify → **Domain settings → Add a custom domain** →
`heritageruston.com`, then update the domain's DNS to Netlify (Netlify shows the exact
records) and let it provision HTTPS. Do this only after the new site is approved, since it
replaces the current WordPress site at that address.

## Before launch — checklist

- [ ] **Hero image:** drop a wide photo of students/children at `assets/img/hero.jpg`.
- [ ] **Open House form:** the embed on `open-house.html` currently points at the live
      *application* Google Form as a working placeholder. Swap the iframe `src` for the
      dedicated Open House signup form's embed URL.
- [ ] **Images:** logo is local (`assets/`). Team photos, distinctive icons, and the
      president photo still load from the existing heritageruston.com server — fine for now,
      but download them into `assets/img/` before retiring the old site.
- [ ] **Verify** dates, tuition figures, and fundraising goals are current.
