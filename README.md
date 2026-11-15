
# Guanche Warriors — Development Journal

Guanche Warriors is an independent 2.5D turn-based JRPG inspired by the Canary Islands, currently in development with Unity.

This repository contains the source code for its development journal, a website where I document the process of building the game, from early prototypes and programming challenges to technical decisions, experiments, and production milestones.

The goal is to share the development process, including the problems encountered, the solutions explored, and the lessons learned along the way.

## Live Website

**[Visit the Guanche Warriors Devlog](https://guancheking.github.io/guanche-warriors-devlog/)**

## About Guanche Warriors

Guanche Warriors draws inspiration from the culture, landscapes, and heritage of the Canary Islands.

The project aims to combine the spirit of classic JRPGs with an original fantasy setting and a distinctive visual identity.

Development is currently focused on establishing the core gameplay systems and working towards a playable demo.

## About This Devlog

The website serves as both a development journal for Guanche Warriors and a space to document my broader learning experience as a game programmer.

Content is organized into two main sections:

- **Guanche Warriors Development:** Progress updates, technical challenges, and development decisions related to the game.
- **Developer Notes:** Programming experiments, debugging experiences, and lessons learned while working with game engines and other projects.

The intention is to document how things are built, not just showcase finished results.

## Tech Stack

The website is built with the following technologies:

| Technology | Purpose |
|------------|---------|
| Astro | Static site generation and component architecture |
| JavaScript | Data processing and page logic |
| HTML | Page structure and semantic markup |
| CSS | Styling and responsive design |
| Markdown | Articles and documentation |
| Git | Version control |
| GitHub Pages | Static website hosting |
| GitHub Actions | Automated builds and deployment |

## Website Features

The current implementation includes:

- Responsive layout for desktop and mobile devices.
- Homepage displaying the latest development updates.
- Markdown-based articles managed through Astro Content Collections.
- Metadata validation using Zod.
- Automatic generation of individual article pages.
- Reusable components for navigation, layouts, and article cards.
- Separate editorial sections for game updates and developer notes.
- Project overview and high-level development roadmap.
- Automated deployment through GitHub Actions.

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
│   │   ├── DevlogCard.astro
│   │   ├── SiteFooter.astro
│   │   └── SiteHeader.astro
│   ├── content/
│   │   └── devlog/
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── devlog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── roadmap.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.js
├── astro.config.mjs
├── package.json
└── package-lock.json
```

## Local Development

### Requirements

- Node.js compatible with the installed Astro version.
- npm.
- Git.

### Clone the repository

```bash
git clone https://github.com/GuancheKing/guanche-warriors-devlog.git
cd guanche-warriors-devlog
```

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

The development website will be available at:

http://localhost:4321/guanche-warriors-devlog/

On Windows PowerShell, if script execution restrictions prevent npm from running, use `npm.cmd` instead.

### Build for production

```bash
npm run build
```

Astro generates the static website in the `dist/` directory.

## Content Management

Development articles are stored as Markdown files in:

`src/content/devlog/`

Each article includes Frontmatter metadata defining its title, description, publication date, category, editorial series, optional cover image, and draft status.

The content schema is defined in `src/content.config.js` and validated using Zod.

Astro Content Collections handles article retrieval, while dynamic routes generate individual pages during the build process.

New articles are automatically included in the relevant sections of the website without requiring changes to the page templates.

## Deployment

The website is hosted on GitHub Pages.

Deployment is automated through GitHub Actions. Every push to the `main` branch triggers a workflow that installs the project dependencies, builds the Astro website, and publishes the generated static files.

The deployment workflow is defined in:

`.github/workflows/deploy.yml`

## Development Roadmap

The website will continue evolving alongside Guanche Warriors.

Planned improvements include:

- Integrating original game artwork and development screenshots.
- Refining the visual design and navigation.
- Expanding the development journal with technical articles.
- Improving content organization and discovery.
- Documenting development milestones and future playable prototypes.

## About the Developer

I'm **Pepo Jiménez**, an aspiring game programmer with a background in digital marketing and audiovisual production.

I'm currently focused on game programming, combining formal training with hands-on development, collaborative projects, and game jams.

Guanche Warriors is both a personal creative project and an opportunity to apply and expand my technical knowledge through practical game development challenges.

**GitHub:** [GuancheKing](https://github.com/GuancheKing)

---

*Guanche Warriors — Building a world, one turn at a time.*
