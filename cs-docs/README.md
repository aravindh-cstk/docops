# Contentstack Documentation Export

This folder contains exported documentation from Contentstack stacks, organized by product area.

## Structure

- **cs-docs/** — Product-specific documentation (administration, agent-os, developers, etc.)
- **../api-docs/** — API documentation and request examples (at root level)
- **../backend/** — Export scripts and utilities (at root level)

## Export Scripts

Scripts are located in the `../backend/` directory:

- `export-api-docs.js` — Export API documentation from API stack
- `export-contentstack.js` — Export docs_article entries
- `export-docs-sections.js` — Export additional doc sections
- `rewrite-links.js` — Convert absolute links to relative paths
- `lint-api-docs.js` — Validate exported files against LINTING.md

## Usage

From the `backend/` directory:

```bash
cd ../backend
npm run export
```

Or run specific scripts:

```bash
cd ../backend
node export-api-docs.js
```

## Environment Variables

```bash
export CONTENTSTACK_API_KEY=your_api_key
export CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
export CONTENTSTACK_ENV=production
```

## Notes

- Existing `.md` files are preserved and not overwritten.
- URL path segments are sanitized for filesystem safety.
- All internal links are converted to relative markdown paths.
- The default Contentstack host is `https://cdn.contentstack.io`.
