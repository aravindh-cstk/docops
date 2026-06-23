---
title: "[Author Content] - Edit an Asset"
description: How to edit an asset in Contentstack, including updating metadata, replacing files, and understanding how updates reflect across fields and editors.
url: https://www.contentstack.com/docs/headless-cms/edit-an-asset
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-26
---

# [Author Content] - Edit an Asset

This page explains how to edit an asset in Contentstack, including updating asset details, replacing the asset file, and understanding how changes propagate across different field types and editors. It is intended for content managers (and developers using the API reference) who need to update assets while maintaining version history.

## Edit an Asset

Editing assets in Contentstack is quick and seamless. You can update titles, descriptions, tags, or replace files while ensuring version control.

To edit an asset, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Assets” icon in the left navigation panel or use the shortcut key “A” (for both Windows and Mac users).
- Navigate to the asset you want to modify and update the **title**, **description**, or **tags** as needed.
- To replace the asset, click the **Replace** button on the file preview image. Browse your files and upload the new file to replace the existing one.
- Click **Save** to confirm your updates. The system will automatically create a new version of the asset, maintaining version history.

**Note:**
- Updates to published assets automatically reflect in [File](../../developers/create-content-types/file.md) and [JSON RTE](../../developers/json-rich-text-editor/about-json-rich-text-editor.md) fields.
- For [HTML RTE](../../developers/create-content-types/rich-text-editor.md), you need to manually update hardcoded URLs unless the asset was added using the [Embed](../../developers/create-content-types/rich-text-editor.md#embed-entries-or-assets-within-html-based-rich-text-editor) option, which updates automatically.
- In [Markdown](../../developers/create-content-types/markdown.md), manual updates are required.
- Use [Permanent URLs](./permanent-asset-urls.md) to ensure consistent references across updates.

## API Reference

To edit an asset via API, refer to the [Update asset](../../../api-docs/api-detail/content-management-api.md#update-asset) API request.

## Common questions

**Q: Does editing a published asset update where it’s used?**  
A: Updates to published assets automatically reflect in [File](../../developers/create-content-types/file.md) and [JSON RTE](../../developers/json-rich-text-editor/about-json-rich-text-editor.md) fields.

**Q: Do I need to update URLs manually in HTML RTE fields?**  
A: For [HTML RTE](../../developers/create-content-types/rich-text-editor.md), you need to manually update hardcoded URLs unless the asset was added using the [Embed](../../developers/create-content-types/rich-text-editor.md#embed-entries-or-assets-within-html-based-rich-text-editor) option, which updates automatically.

**Q: What happens when I replace an asset file?**  
A: Click **Save** to confirm your updates. The system will automatically create a new version of the asset, maintaining version history.

**Q: Where can I find the API to update an asset?**  
A: Refer to the [Update asset](../../../api-docs/api-detail/content-management-api.md#update-asset) API request.