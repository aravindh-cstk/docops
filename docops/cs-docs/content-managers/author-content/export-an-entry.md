---
title: "[Author Content] - Export an Entry"
description: Exporting an entry in Contentstack allows you to download its data in JSON format.
url: https://www.contentstack.com/docs/headless-cms/export-an-entry
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Export an Entry

This page explains how to export an existing entry from Contentstack as a JSON file, intended for content managers and authors who need to migrate, back up, or reuse entry data, and should be used when you want to download entry content from the UI or via API.

### Export an Entry

Exporting an entry in Contentstack allows you to download its data in JSON format, making content migration, backup, or reuse seamless.

To export an existing entry, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Entries” icon in the left navigation panel or use the shortcut key “E” (for both Windows and Mac users).
- Select the entry you want to export.
- Click the **horizontal ellipses** at the bottom of the entry editor, and select **Export**.
- You get a JSON file of the entry in your local system. You can modify this file as needed and import it to the stack.
- Alternatively, you can also export the entry from the entry list page.Locate the entry you want to export and click the **vertical ellipsis** in the **Actions** column
- From the dropdown menu, select **Export**.

**Additional Resource: **To export content types or multiple entries, refer to the [Export Content Using the CLI](../../developers/cli/export-content-using-the-cli.md) documentation.

## API Reference
To export an entry via API, refer to the [Export an entry](../../../api-docs/api-detail/content-management-api.md#export-entry) API request.

## Common questions

**How do I export an entry from the entry editor?**  
Click the **horizontal ellipses** at the bottom of the entry editor, and select **Export**.

**How do I export an entry from the entry list page?**  
Locate the entry you want to export and click the **vertical ellipsis** in the **Actions** column, then select **Export**.

**What format is the exported entry downloaded in?**  
You get a JSON file of the entry in your local system.

**Where can I find instructions to export multiple entries or content types?**  
Refer to the [Export Content Using the CLI](../../developers/cli/export-content-using-the-cli.md) documentation.

<!-- filename: author-content-export-an-entry.md -->