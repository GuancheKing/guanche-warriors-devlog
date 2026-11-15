# Guanche Warriors — Development Journal

Welcome to the official development journal of **Guanche Warriors**, an independent 2.5D turn-based JRPG inspired by the Canary Islands.

This repository contains the source code for the development journal website, where I document the process of building the game, from early prototypes and programming challenges to game design decisions, artistic development, and future milestones.

The goal is to share not only the results, but also the technical challenges, solutions, and lessons learned throughout development.

## 🌐 Live Website

**[Visit the Guanche Warriors Devlog](https://guancheking.github.io/guanche-warriors-devlog/)**

Follow the development journey, explore technical articles, and discover the progress of the project.

## 🎮 About Guanche Warriors

Guanche Warriors is an indie JRPG developed in Unity, drawing inspiration from the culture, mythology, and landscapes of the Canary Islands.

The game aims to combine classic turn-based RPG mechanics with a distinctive aesthetic and an original fantasy setting.

### Planned Game Features

- Classic turn-based combat with a four-character party.
- Exploration across interconnected physical and spiritual worlds.
- Character transformations and progression systems.
- NPC interactions, dialogue, and environmental exploration.

The game is currently in early development, with the primary objective of creating a playable demo.

## 🛠️ Tech Stack

The development journal is built using:

| Technology     | Purpose                                           |
| -------------- | ------------------------------------------------- |
| Astro          | Static site generation and component architecture |
| JavaScript     | Data processing and page logic                    |
| HTML           | Website structure and semantic markup             |
| CSS            | Styling and responsive design                     |
| Markdown       | Development articles and documentation            |
| Git            | Version control                                   |
| GitHub Pages   | Website hosting                                   |
| GitHub Actions | Automated deployment                              |

## ✨ Website Features

The website currently includes:

- Responsive design for desktop and mobile devices.
- A homepage displaying the latest development updates.
- A development journal powered by Astro Content Collections.
- Markdown-based articles with metadata validation.
- Automatically generated article pages using dynamic routes.
- A project overview page.
- A development roadmap.
- Automated deployment through GitHub Actions.

## 📁 Project Structure

```text
guanche-warriors-devlog/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
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
└── package.json
```

## 💻 Local Development

To run the development journal locally, you will need:

- Node.js (a version supported by the installed Astro release).
- npm.
- Git.

### 1. Clone the repository

```bash
git clone https://github.com/GuancheKing/guanche-warriors-devlog.git
```

### 2. Navigate to the project directory

```bash
cd guanche-warriors-devlog
```

### 3. Install dependencies

```bash
npm ci
```

### 4. Start the development server

```bash
npm run dev
```

Open the local development website:

http://localhost:4321/guanche-warriors-devlog/

On Windows PowerShell, if script execution restrictions prevent `npm` from running, use `npm.cmd` instead.

### 5. Build for production

```bash
npm run build
```

Astro generates the static website in the `dist/` directory.

## 📝 Publishing Development Updates

Development articles are written in Markdown and stored in:

`src/content/devlog/`

Each article contains Frontmatter metadata, including:

- Title.
- Description.
- Publication date.
- Category.
- Optional cover image.
- Draft status.

Astro automatically retrieves the articles, displays them in the development journal, and generates individual pages for published posts.

## 🚀 Deployment

The website is hosted on GitHub Pages and deployed automatically using GitHub Actions.

Every push to the `main` branch triggers the deployment workflow, which builds the Astro project and publishes the generated website.

## 🗺️ Development Roadmap

The website will continue evolving alongside the game.

Future improvements include:

- Integrating original Guanche Warriors artwork and screenshots.
- Expanding the development journal with technical articles.
- Improving the visual identity and user experience.
- Adding further documentation of gameplay systems.
- Showcasing development milestones and playable prototypes.

## 👨‍💻 About me, the Developer

I'm **Pepo Jiménez**, a developer transitioning into the video game industry, with a background in digital marketing and audiovisual production.

I'm currently developing my programming skills through practical projects, game jams, and game development training.

Guanche Warriors represents both a personal creative project and an opportunity to apply and expand my technical knowledge in game development.

**GitHub:** [GuancheKing](https://github.com/GuancheKing)

---

**Guanche Warriors — Building a world, one turn at a time.**
