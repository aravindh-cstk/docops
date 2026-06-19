# Contentstack export to cs-docs

This repository contains a Node.js script that exports `docs_article` entries from Contentstack into the local `cs-docs` folder.

## Usage

1. Set the required environment variables:

```bash
export CONTENTSTACK_API_KEY=blt2d43f51baca745a8
export CONTENTSTACK_DELIVERY_TOKEN=cs80888179b9220bd7cea067ff
export CONTENTSTACK_ENV=production
export OUTPUT_ROOT=./cs-docs
```

2. Run the export script:

```bash
npm run export
```

3. The script will create nested folders under `cs-docs` based on each entry's `url` field, and write each entry's `md_content` into a `.md` file.

## Notes

- Existing `.md` files are preserved and not overwritten.
- URL path segments are sanitized for filesystem safety.
- Asset and reference URLs are included in markdown frontmatter metadata.
- The default Contentstack host is `https://cdn.contentstack.io`.
