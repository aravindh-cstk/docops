# Docs → Contentstack conventions

Copy `contentstack.config.example.json` to `contentstack.config.json` at the repository root (next to `package.json` after you merge this package) and adjust UIDs to match your `docs_article` content type. Export one real entry from Contentstack and align keys with [fixtures/docs_article.entry.template.json](../fixtures/docs_article.entry.template.json).

## Repository layout

- Markdown sources live under the directory named in `docsRoot` (default `docs`).
- URL path after `/developers` mirrors the relative path inside `docsRoot`, without the `.md` extension, using forward slashes.

Example file:

`docs/contentstack-delivery/dot-net-sdk/get-started-with-dotnet-delivery-sdk.md`

Computed URL (with `urlPrefix` `/developers`):

`/developers/contentstack-delivery/dot-net-sdk/get-started-with-dotnet-delivery-sdk`

## Title and marker

- **Display title** defaults to the first Markdown H1 (`# Title`), otherwise the filename in Title Case.
- **CMS Title** (single line): `[{marker}] - {display title}`.
- **Article heading** (inside group): display title only, without the bracket prefix.

`marker` resolution order:

1. Frontmatter `marker` (string).
2. Frontmatter `product` (string), if `marker` is absent.
3. Config file `defaultMarker` (optional string).
4. Literal `Docs` if nothing else is set.

## Frontmatter (optional YAML)

```yaml
---
title: "Override display title"
marker: ".NET Delivery SDK"
contentstack_entry_uid: bltxxxxxxxxxxxx  # optional; skips URL lookup
breadcrumb:
  - uid: bltbreadcrumbentryuid
    _content_type_uid: breadcrumb
---
```

- `breadcrumb` entries must match Contentstack reference shape. `_content_type_uid` defaults to `breadcrumbReferenceContentTypeUid` from config when omitted.

## Idempotency

1. If `contentstack_entry_uid` is set, update that entry.
2. Else query CMA for an entry whose `url` field equals the computed URL; update if found.
3. Else create a new entry.

## Staging vs production

- The sync CLI publishes only to the environment named in `CONTENTSTACK_STAGING_ENVIRONMENT`.
- Production checks use the Delivery API with `CONTENTSTACK_DELIVERY_TOKEN` and `CONTENTSTACK_PRODUCTION_ENVIRONMENT` so the workflow stays read-only on `main` pushes.
