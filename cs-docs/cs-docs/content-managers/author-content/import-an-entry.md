---
title: "[Author Content] - Import an Entry"
description: Importing an entry in Contentstack by uploading a JSON file, including steps, notes, warnings, and API reference.
url: https://www.contentstack.com/docs/headless-cms/import-an-entry
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Import an Entry

This page explains how to import an entry in Contentstack by uploading a JSON file, including how to import into a new entry or an existing entry. It is intended for content managers and authors who need to migrate content, update entries, or create entries efficiently using JSON import.

## Import an Entry

Importing an entry in Contentstack allows you to add content by uploading a JSON file. This feature simplifies content migration, updates existing entries, or creates new entries efficiently.

To import an entry, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Entries” icon in the left navigation panel or use the shortcut key “E” (for both Windows and Mac users).
- Click the **+ New Entry** button at the top-right corner of the page, select the required [content type](/docs/developers/create-content-types/about-content-types) and click **Proceed**.
- Click the **horizontal ellipses** at the bottom of the entry editor, and select **Import**.
- In the **Import Entry** modal, click **Choose a file**, and select the JSON file from your system.
- Click **Import** to complete the process.

**Note:** Ensure you select the appropriate locale when importing an entry to upload it as a localized entry.

To import content into an existing entry:
- Open the desired entry.
- Click the **horizontal ellipses** at the bottom of the entry editor, and select **Import**.
- Upload the JSON file. This action updates the existing entry and creates a new version automatically.

**Warning:**
- Importing an entry replaces the content of the existing entry with the new content provided in the uploaded JSON file.
- The import process fails if the JSON file references entries or assets outside the current stack or contains incorrect or invalid formatting. Import all referenced entries or assets first.

**Additional Resources:** For details on entry format or schema,, refer to our documentation on [Schema of JSON RTE](/docs/developers/json-rich-text-editor/schema-of-json-rich-text-editor/) and [JSON Schema of Fields](/docs/developers/create-content-types/json-schema-for-creating-a-content-type/#json-schema-of-fields) documentation.

## API Reference

To import an entry via API, refer to the [Import an entry](/docs/developers/apis/content-management-api#import-an-entry) API request.

## Common questions

### Does importing an entry create a new entry or update an existing one?
Importing can be used to create a new entry (by starting with **+ New Entry** and then **Import**) or to update an existing entry (by opening the entry and then using **Import**).

### What happens to the existing content when I import into an existing entry?
Importing an entry replaces the content of the existing entry with the new content provided in the uploaded JSON file.

### Why might the import process fail?
The import process fails if the JSON file references entries or assets outside the current stack or contains incorrect or invalid formatting.

### Do I need to select a locale when importing?
Yes. Ensure you select the appropriate locale when importing an entry to upload it as a localized entry.