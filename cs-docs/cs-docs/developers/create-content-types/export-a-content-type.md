---
title: "[Create Content Types] - Export a Content Type"
description: Export the JSON schema of an existing content type from a Contentstack stack, including UI steps and API reference.
url: https://www.contentstack.com/docs/headless-cms/export-a-content-type
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-modelers
version: unknown
last_updated: 2026-03-25
---

# [Create Content Types] - Export a Content Type

This page explains how to export the JSON schema for an existing content type in Contentstack. It is intended for developers and content modelers who need to back up, share, or reuse content models across stacks, and should be used when you want to download a content type schema or export it via API.

## Export a Content Type

You can export the JSON schema of any existing [content type](/docs/developers/create-content-types/about-content-types) in your stack.

To export an existing content type, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the "Content Models" icon.
- Click the vertical ellipsis in the **Actions** column next to the content type you want to export and select **Export**.

The JSON file downloads to your local system. Changes made to this file are retained when you import it back into Contentstack.

**Note:** Exporting a content type exports only the latest schema version. Version history and comparison data are not included.

Exporting a content type in Contentstack helps you back up schemas, share models across stacks, or reuse configurations in new projects.

## API Reference

To export a content type via API, refer to the [Export a Content Type](/docs/developers/apis/content-management-api#export-a-content-type) API Request.

## Common questions

### Does exporting a content type include version history?
No. **Note:** Exporting a content type exports only the latest schema version. Version history and comparison data are not included.

### Can I edit the exported JSON and import it back?
Yes. The JSON file downloads to your local system. Changes made to this file are retained when you import it back into Contentstack.

### Where do I export a content type from in the UI?
Go to your stack, open **Content Models**, then use the vertical ellipsis in the **Actions** column next to the content type and select **Export**.

### Is there an API to export a content type?
Yes. Refer to the [Export a Content Type](/docs/developers/apis/content-management-api#export-a-content-type) API Request.