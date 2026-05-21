# Coreola Docs

This repository contains the public documentation site for Coreola, a production-ready React admin foundation for operational software.

The site is built with Next.js, Nextra, and `nextra-theme-docs`. The source documentation lives in `app/**/*.mdx`; navigation labels and ordering live in the adjacent `_meta.js` files.

## What The Docs Cover

The MDX corpus documents both the Coreola product architecture and the workflows needed to adopt or customize it.

| Area            | Files                       | Coverage                                                                                            |
| --------------- | --------------------------- | --------------------------------------------------------------------------------------------------- |
| Introduction    | `app/page.mdx`              | Product positioning, what Coreola includes, principles, and next steps.                             |
| Getting started | `app/getting-started/*.mdx` | Installation, environment variables, local development, and product project structure.              |
| Overview        | `app/overview/*.mdx`        | What Coreola is, architecture, tech stack, and product philosophy.                                  |
| Design system   | `app/design-system/*.mdx`   | Design principles, typography, colors, spacing, icons, and shared components.                       |
| UI patterns     | `app/ui-patterns/*.mdx`     | Tables, filters, forms, details pages, dashboards, empty states, loading states, and notifications. |
| Modules         | `app/modules/*.mdx`         | Auth, layouts, assessments, customers, accounts, settings, and profile modules.                     |
| Development     | `app/development/*.mdx`     | Routing, state management, API layer, mock backend, testing, Storybook, and coding conventions.     |
| Customization   | `app/customization/*.mdx`   | Theme, navigation, permissions, and adding new modules.                                             |
| Deployment      | `app/deployment/*.mdx`      | Build output, hosting requirements, static deployment concerns, and production checks.              |
| Reference       | `app/reference/*.mdx`       | Hooks, helpers, and scripts.                                                                        |
| Changelog       | `app/changelog/page.mdx`    | Release format, current version notes, and upgrade guidance.                                        |

The content is written as a mix of explanation, how-to guides, and reference material. Keep new pages focused: use explanation for product concepts, how-to guides for task recipes, and reference pages for stable API or file-map details.

## Local Development

Install dependencies:

```bash
npm install
```

Start the docs site:

```bash
npm run dev
```

The dev server runs on:

```text
http://localhost:3002
```

Build the static site:

```bash
npm run build
```

`next.config.mjs` uses `output: 'export'`, so the production build is static. The `postbuild` script runs Pagefind and writes search assets to `out/_pagefind`.

## Project Structure

```text
app/
  layout.jsx                 Root Nextra layout, navbar, metadata, footer
  page.mdx                   Docs home page
  _meta.js                   Top-level navigation
  <section>/
    page.mdx                 Section pages
    _meta.js                 Section navigation labels and order
public/
  favicon.ico
  img/
    logo_filled.svg
    og-card.png
scripts/
  ...                        Documentation-related utility scripts
```

## Writing Guidelines

- Add new documentation as MDX under the relevant `app/<section>/` folder.
- Update the nearest `_meta.js` file when adding, renaming, or reordering pages.
- Prefer short, practical pages over broad catch-all pages.
- Link to related docs in a `Next steps` section when a page belongs to a reading path.
- Keep code snippets aligned with the Coreola product repository, not only with this docs site.
- Use the existing terminology: Coreola is a foundation or reference application, not a UI kit, template, CMS, backend, or low-code platform.

## Scripts

| Command             | Purpose                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `npm run dev`       | Start the Nextra docs dev server on port 3002.                                                          |
| `npm run build`     | Build the static Next.js export and run Pagefind indexing.                                              |
| `npm run start`     | Run the configured Next.js start script. Static deployments should serve the exported `out/` directory. |
| `npm run postbuild` | Generate Pagefind search assets from the built app output.                                              |

## Domains

- Product site: `https://www.coreola.com`
- Documentation site: `https://docs.coreola.com`
- Live demo: `https://demo.coreola.com`
