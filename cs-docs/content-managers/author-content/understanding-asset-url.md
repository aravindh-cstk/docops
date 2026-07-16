---
title: "[Author Content] - Understanding Asset URL"
description: "Explains the structure of Contentstack asset URLs and what each part represents."
url: https://www.contentstack.com/docs/headless-cms/understanding-asset-url
product: "Contentstack"
doc_type: "concept"
audience:
  - content-managers
  - developers
version: "v3"
last_updated: 2026-03-25
---

# [Author Content] - Understanding Asset URL

This page explains how Contentstack generates public asset URLs, what each segment of the URL means, and when to use related options like permanent URLs. It is intended for content managers and developers who upload, reference, or replace assets and need to understand how asset links behave over time.

## Understanding Asset URL

When you upload an asset to Contentstack, a public URL is automatically generated for that asset. This URL follows a predefined structure:

```
https://{base_url}/v3/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename
```

Here's the breakdown of the asset URL:

- `base_url`: Indicates the domain used for your asset. Assets can have either of these base URLs:`assets.contentstack.io`: Used for generic assets.
- `images.contentstack.io`: Used for image files specifically.
- `stack_api_key`: The API key of your stack.
- `asset_uid`: A unique identifier for the asset itself. This remains constant even if the asset is updated or replaced.
- `file_uid`: This identifies the specific file instance of the asset. If you [replace](./edit-an-asset.md) the asset, the asset_uid stays the same, but the file_id changes. This reflects that the underlying file has changed.
- `filename`: The name of the file, as uploaded.

**Additional Resource:** For assets that are updated frequently, you can [generate a permanent URL](./permanent-asset-urls.md), which remains constant even when new versions of the asset are uploaded. This ensures consistent references to the asset.

## Common questions

### What changes in the asset URL when I replace an asset?
When you replace the asset, the asset_uid stays the same, but the file_id changes.

### Which base URL should I expect for my asset?
Assets can use `assets.contentstack.io` for generic assets or `images.contentstack.io` for image files specifically.

### How can I keep an asset URL constant across updates?
You can generate a permanent URL, which remains constant even when new versions of the asset are uploaded.

### Where can I learn how to replace an asset?
Use the replace documentation link: `/docs/content-managers/author-content/edit-an-asset`.

