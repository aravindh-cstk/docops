# Backend — Documentation Export Scripts & Configuration

This folder contains export scripts, utilities, and configuration for the Contentstack documentation export pipeline.

## Scripts

| Script | Purpose |
|--------|---------|
| `export-api-docs.js` | Export API documentation (CDA, CMA, GraphQL, etc.) from Contentstack |
| `export-contentstack.js` | Export `docs_article` entries from Contentstack |
| `export-docs-sections.js` | Export additional doc sections (SDKs, sample-apps, visual-builder, etc.) |
| `rewrite-links.js` | Convert absolute documentation links to relative markdown paths |
| `lint-api-docs.js` | Validate exported files against LINTING.md rules |
| `clean-frontmatter.js` | Clean and normalize YAML frontmatter |
| `generate-lint-csv.js` | Generate CSV report of linting issues |

## Configuration & Documentation

| File | Purpose |
|------|---------|
| `package.json` | NPM dependencies and scripts |
| `contentstack.config.example.json` | Example Contentstack configuration template |
| `LINTING.md` | Documentation linting and style rules |
| `CONVENTIONS.md` | Content structure and naming conventions |
| `ddstyle.md` | Documentation syntax and formatting guide |

## Setup

Install dependencies:

```bash
npm install
```

## Usage

### Export API Documentation

```bash
CONTENTSTACK_API_KEY=your_api_key \
CONTENTSTACK_DELIVERY_TOKEN=your_token \
node export-api-docs.js
```

### Export General Documentation

```bash
CONTENTSTACK_API_KEY=your_api_key \
CONTENTSTACK_DELIVERY_TOKEN=your_token \
node export-contentstack.js
```

### Rewrite Links

Convert all absolute Contentstack links to relative paths:

```bash
node rewrite-links.js
```

### Lint Documentation

Validate files against documentation standards:

```bash
node lint-api-docs.js
```

## Output Structure

Scripts output to:
- `../cs-docs/` — General documentation (product areas)
- `../api-docs/` — API documentation
  - `developer-apis/` — API overview pages
  - `{api-name}-api-requests/` — API request examples (13 total)
  - `api-detail/` — API detail landing pages
  - `postman/` — Postman collections

## Environment Variables

- `CONTENTSTACK_API_KEY` — Contentstack API key
- `CONTENTSTACK_DELIVERY_TOKEN` — Contentstack delivery token
- `CONTENTSTACK_ENV` — Environment (default: `production`)
- `CONTENTSTACK_API_HOST` — API host (default: `https://cdn.contentstack.io`)
