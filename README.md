
# Guanche Warriors — Development Journal

Guanche Warriors is an independent 2.5D turn-based JRPG inspired by the Canary Islands, currently in development using Unity and C#.

This repository contains the source code for its development journal: a bilingual website documenting the process of building the game, from early prototypes and programming challenges to technical decisions, experiments, and production milestones.

The goal is to share the development process, including the problems encountered, the solutions explored, and the lessons learned along the way.

## Live Website

**[Visit the Guanche Warriors Devlog](https://guancheking.github.io/guanche-warriors-devlog/)**

The website is available in two languages:

- **English (default):** [Guanche Warriors Devlog](https://guancheking.github.io/guanche-warriors-devlog/)
- **Spanish:** [Guanche Warriors Devlog — Español](https://guancheking.github.io/guanche-warriors-devlog/es/)

Visitors can switch between languages using the EN / ES selector in the website header.

**Note:** The main website pages are available in both languages. Development articles are currently published in English only.

## About Guanche Warriors

Guanche Warriors draws inspiration from the culture, landscapes, and heritage of the Canary Islands.

The project aims to combine the spirit of classic JRPGs with an original fantasy setting and a distinctive visual identity.

Development is currently focused on establishing the core gameplay systems, exploring the visual direction, and working towards a playable demo.

The project is being developed primarily with Unity and C#.

## About This Devlog

The website serves as both a development journal for Guanche Warriors and a space to document my broader learning experience as a game programmer.

Content is organized into two main editorial sections:

- **Guanche Warriors Development:** Progress updates, technical challenges, gameplay implementation, and development decisions related to the game.
- **Developer Notes:** Programming experiments, debugging experiences, and lessons learned while working with game engines and other projects.

The intention is to document how things are built, not just showcase finished results.

The website also includes:

- **Home:** Project introduction and recent publications.
- **About:** Project background, developer profile, and collaborations.
- **Roadmap:** Development milestones, current progress, and key deliverables.
- **Devlog:** Development articles and technical notes.

## Tech Stack

The website is built with the following technologies:

| Technology | Purpose |
| --- | --- |
| Astro | Static site generation, routing, and reusable components |
| TypeScript | Type-safe localization utilities and component logic |
| JavaScript | Data processing and page logic |
| HTML | Semantic page structure |
| CSS | Volcanic Pop visual identity and responsive design |
| Markdown | Development articles and documentation |
| Astro Content Collections | Article management and content retrieval |
| Zod | Content schema validation |
| Git | Version control |
| GitHub Pages | Static website hosting |
| GitHub Actions | Automated builds and deployment |

The website uses Astro's built-in internationalization capabilities without requiring a client-side translation framework.

## Website Features

The current implementation includes:

- Responsive layout for desktop and mobile devices.
- Custom **Volcanic Pop** visual identity inspired by the Canary Islands.
- Bilingual English and Spanish website navigation.
- English as the default language.
- Dedicated Spanish routes under `/es/`.
- EN / ES language selector.
- Shared components for multilingual pages.
- Homepage displaying the latest development updates.
- Markdown-based articles managed through Astro Content Collections.
- Frontmatter metadata validation using Zod.
- Automatic generation of individual article pages.
- Reusable components for navigation, layouts, and article cards.
- Separate editorial sections for game updates and Developer Notes.
- Project overview and developer profile.
- Development roadmap with milestone statuses and expandable deliverables.
- Responsive article layouts with support for images and code snippets.
- Automated deployment through GitHub Actions.

## Internationalization

The website supports two languages:

| Language | Code | URL structure |
| --- | --- | --- |
| English | `en` | `/guanche-warriors-devlog/` |
| Spanish | `es` | `/guanche-warriors-devlog/es/` |

English is the default language and does not require a language prefix.

Spanish pages use the `/es/` prefix.

Internationalization is configured in `astro.config.mjs`.

### Translation Architecture

Shared interface translations are managed in:

`src/i18n/ui.ts`

Multilingual page components receive a `lang` property and display the appropriate content.

For example:

- `HomePage.astro`
- `AboutPage.astro`
- `RoadmapPage.astro`
- `DevlogPage.astro`

This approach allows both language versions to share the same layout, visual styles, and component structure.

Individual language routes are defined in `src/pages/`.

### Article Language Policy

Development articles are currently written and published in English only.

The Spanish Devlog provides a translated interface while linking to the original English articles.

Article cards indicate when their content is available in English.

This approach keeps the publishing workflow simple and avoids maintaining duplicate versions of technical articles.

## Project Structure

```text
guanche-warriors-devlog/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── AboutPage.astro
│   │   ├── DevlogCard.astro
│   │   ├── DevlogPage.astro
│   │   ├── HomePage.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── RoadmapPage.astro
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   ├── content/
│   │   └── devlog/
│   │       ├── first-steps.md
│   │       ├── character-movement.md
│   │       └── unity-urp-renderer-debugging.md
│   ├── i18n/
│   │   └── ui.ts
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── devlog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── es/
│   │   │   ├── devlog/
│   │   │   │   └── index.astro
│   │   │   ├── about.astro
│   │   │   ├── index.astro
│   │   │   └── roadmap.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── roadmap.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.js
├── astro.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

## Local Development

### Requirements

- Node.js compatible with the installed Astro version.
- npm.
- Git.

### Clone the Repository

```bash
git clone https://github.com/GuancheKing/guanche-warriors-devlog.git
cd guanche-warriors-devlog
```

### Install Dependencies

```bash
npm ci
```

### Start the Development Server

```bash
npm run dev
```

The development website will be available at:

**English:**

http://localhost:4321/guanche-warriors-devlog/

**Spanish:**

http://localhost:4321/guanche-warriors-devlog/es/

On Windows PowerShell, if script execution restrictions prevent npm from running, use `npm.cmd` instead.

For example:

```powershell
npm.cmd run dev
```

### Build for Production

```bash
npm run build
```

Astro generates the static website in the `dist/` directory.

On Windows PowerShell:

```powershell
npm.cmd run build
```

A successful production build should be completed before pushing changes to the deployment branch.

## Content Management

Development articles are stored as Markdown files in:

`src/content/devlog/`

Each article includes Frontmatter metadata defining its:

- Title.
- Description.
- Publication date.
- Category.
- Editorial series.
- Optional cover image.
- Draft status.

Example:

```yaml
---
title: "Bringing the World to Life"
description: "Exploration, movement and interactions in Unity."
pubDate: 2026-11-15
category: "Programming"
series: "guanche-warriors"
cover: "/images/character-movement-cover.webp"
draft: false
---
```

The content schema is defined in `src/content.config.js` and validated using Zod.

Astro Content Collections handles article retrieval, while dynamic routes generate individual pages during the build process.

New articles are automatically included in the relevant editorial sections without requiring changes to the page templates.

Draft articles are excluded from public listings.

### Editorial Series

Articles belong to one of two series:

| Series | Purpose |
| --- | --- |
| `guanche-warriors` | Game development updates and production milestones |
| `developer-notes` | Programming experiments, debugging, and learning experiences |

Articles in both series are available through the Devlog.

### Publishing a New Article

1. Create a Markdown file inside `src/content/devlog/`.
2. Add the required Frontmatter metadata.
3. Write the article using Markdown.
4. Add images to `public/images/` if needed.
5. Run `npm run build` to validate the changes.
6. Commit and push the new content to GitHub.

The article will automatically appear in the appropriate Devlog section after deployment.

## Deployment

The website is hosted on GitHub Pages.

Deployment is automated through GitHub Actions.

Every push to the `main` branch triggers a workflow that:

1. Checks out the repository.
2. Installs the project dependencies.
3. Builds the Astro website.
4. Publishes the generated static website to GitHub Pages.

The deployment workflow is defined in:

`.github/workflows/deploy.yml`

The website is published at:

https://guancheking.github.io/guanche-warriors-devlog/

### Deployment Configuration

The Astro configuration includes:

- The GitHub Pages site URL.
- The repository base path.
- Trailing slash handling.
- English and Spanish localization.

The repository base path must be preserved when generating internal links and asset URLs.

### Deployment Status

Build and deployment results can be checked in the repository's GitHub Actions section:

https://github.com/GuancheKing/guanche-warriors-devlog/actions

## Development Roadmap

The website will continue evolving alongside Guanche Warriors.

Potential future improvements include:

- Integrating original game artwork and development screenshots.
- Expanding the journal with more technical articles.
- Improving article discovery as the content library grows.
- Refining navigation and accessibility.
- Enhancing SEO and social sharing metadata.
- Documenting new development milestones and playable prototypes.

The game's current development progress can be followed through the website's Roadmap page.

## About the Developer

I'm **Pepo Jiménez**, a programmer in the making with a background in digital marketing and audiovisual production.

I'm currently studying programming at **42 Madrid** and developing games with **Unity and C#**.

I also work with Python and have hands-on experience with Godot through game jams and collaborative projects.

Guanche Warriors is both a personal creative project and an opportunity to apply and expand my technical knowledge through practical game development challenges.

### Find Me Online

- **GitHub:** [GuancheKing](https://github.com/GuancheKing)
- **itch.io:** [GuancheKing](https://itch.io/profile/guancheking)
- **Mastodon:** [@guancheking](https://mastodon.social/@guancheking)
- **Bluesky:** [@guancheking.bsky.social](https://bsky.app/profile/guancheking.bsky.social)
- **LinkedIn:** [Pepo Jiménez](https://www.linkedin.com/in/pepo-j-80a33052/)

## Collaboration

Guanche Warriors is a personal project, but development also includes contributions from other developers.

**carpinterzeta** contributes to gameplay features and the ongoing development of the project.

- **GitHub:** [carpinterzeta](https://github.com/carpinterzeta)
- **Mastodon:** [@ak4rp](https://mastodon.social/@ak4rp)

---

*Guanche Warriors — Building a world, one turn at a time.*
