---
title: "[Contentstack Command-line Interface (CLI)] - Migrate Selected Content Using the Query Export Plugin"
description: Migrate Selected Content Using the Query Export Plugin
url: https://www.contentstack.com/docs/headless-cms/migrate-selected-content-types-using-the-query-export-plugin
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Contentstack Command-line Interface (CLI)] - Migrate Selected Content Using the Query Export Plugin

This page explains how to use the Contentstack CLI Query Export plugin to export a selected subset of content types from a stack using query criteria, and then import that export into another stack. It is intended for developers who need targeted migrations rather than full stack exports.

## Migrate Selected Content Using the Query Export Plugin

The Query Export plugin (`cm:stacks:export-query`) lets you export selected content types from a stack based on query criteria.

Use it when you need to export a subset of stack content instead of a full stack export.

## Prerequisites

Before running the export, ensure the following:
- **CLI v1.44+** installed and authenticated. Run `csdx auth:login` or use a management token alias.
- **Query Export plugin installed** (one-time)  
  `csdx plugins:install @contentstack/cli-cm-export-query`
- **Management token available** (Delivery tokens are not supported.)
- **Export directory defined**: specify the `-d` path; optionally use `--branch` or `--branch-alias` (default: `main`).

## Export Content Types Using CLI Commands

Use the following examples to export content types based on different query methods.

### Export by Content Type Title

```
csdx cm:stacks:export-query -k  -d ./export --query '{"modules":{"content-types":{"title":{"$in":["Blog","Author"]}}}}'
```

### Export by Content Type UID

```
csdx cm:stacks:export-query -k  -d ./export --query '{"modules":{"content-types":{"uid":{"$in":["blog","author"]}}}}'
```

### Export Using a Query File

```
csdx cm:stacks:export-query -k  -d ./export --query ./my-query.json
```

Example `my-query.json`:

```
{
  "modules": {
    "content-types": {
      "$and": [
        { "uid": { "$in": ["blog_post", "author"] } }
      ]
    }
  }
}
```

### Export from a Specific Branch

```
csdx cm:stacks:export-query -k  -d ./export --branch main --query '{"modules":{"content-types":{"title":{"$in":["Blog"]}}}}'
```

## Query Format

- The top-level key must be `modules`; under it use **content-types** (the only queryable module for this plugin).
- Use Delivery API–style operators (e.g. `$in`, `$regex`, `$gte`).
- The query filters **content types only**. Entries and assets are not directly filtered in the query JSON. All entries under matched content types are exported; only assets referenced by those exported entries are included.

**Additional Resource:** Refer to the Contentstack [Content Delivery API documentation](/docs/developers/apis/content-delivery-api) for the full list of supported operators.

## Export Output Structure

The export generates the same folder structure as a standard stack export:

```
//
```

For example: `./export/main/`

Within this structure, the export creates the following primary directories:
- `content_types/`
- `entries/`
- `assets/`
- `locales/`
- `environments/`

In addition to this directory structure, Query Export automatically includes the following components:
- stack settings
- locales
- environments
- queried content types
- global fields
- extensions
- marketplace apps
- taxonomies
- entries for the matched content types
- referenced assets

## Import the Exported Content into a Stack

Use the export folder (e.g., `./export/main`) as `-d` in import or import-setup.

### Import into an Empty Stack

```
csdx cm:stacks:import -k  -d ./export/main
```

### Import into a Stack with Existing Content

**Step 1: Run import-setup**

This generates a backup and prepares the mapper for entries and their dependencies (assets, extensions, marketplace-apps, taxonomies).

```
csdx cm:stacks:import-setup -k  -d ./export/main --module entries
```

Note the backup path printed in the output (for example, `./_backup_456`).

**Step 2: Import with overwrite**

```
csdx cm:stacks:import -k  -d ./export/main --backup-dir ./_backup_456 --replace-existing --module entries
```

## Common questions

### Does the query filter entries and assets directly?
No. The query filters **content types only**. All entries under matched content types are exported; only assets referenced by those exported entries are included.

### Can I use a Delivery token with this plugin?
No. **Management token available** (Delivery tokens are not supported.)

### What modules can be queried with this plugin?
Under `modules`, use **content-types** (the only queryable module for this plugin).

### Where do I point the import command after exporting?
Use the export folder (e.g., `./export/main`) as `-d` in import or import-setup.