# Portfolio — Adrian Mirabal

Personal portfolio site built with **React** and **Vite**. It includes home, about, skills, and projects sections (data from the **GitHub API**), **client-side routing**, **internationalization** (i18next), and animations (Framer Motion, Animate.css).

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Production build and preview

```bash
npm run build
npm run preview
```

## Deployment

The repo includes `netlify.toml` with an SPA redirect (`/*` → `index.html`) so **React Router** works on **Netlify** and similar hosts.

## Stack

React 18 · Vite 4 · React Router · styled-components · react-i18next · Framer Motion · react-helmet-async
