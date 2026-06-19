---
title: "[Author Content] - About Permanent Asset URLs"
description: About Permanent Asset URLs in Contentstack and how they provide stable references for assets even when updated or replaced.
url: https://www.contentstack.com/docs/headless-cms/permanent-asset-urls
product: Contentstack
doc_type: concept
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Author Content] - About Permanent Asset URLs

This page explains what Permanent Asset URLs are in Contentstack, why they provide a stable reference for assets, and when to use them to avoid updating asset references in entries after asset changes.

## About Permanent Asset URLs

Contentstack allows you to assign a permanent URL to an [asset](/docs/content-managers/working-with-assets/about-assets), ensuring a stable reference that remains unchanged even when an asset is updated or replaced. With permanent URLs, you don’t need to manually update asset references in entries after making changes to the asset.

When you [generate a permanent URL](/docs/content-managers/author-content/generate-a-permanent-asset-url), you can access the same asset using the following URLs:
- **Auto-generated asset URL**: The default URL for the asset, which changes every time the asset is replaced or updated.
- **Permanent asset URL**: A constant, non-editable URL that remains unchanged, regardless of any replacements or updates made to the asset file.

**Warning:** A permanent asset URL can only be generated once and cannot be modified afterward.

For example, suppose you upload an image in Contentstack with the following URL:

```
https://images.contentstack.io/v3/assets/blt95131ce7919c7429/blt293c6dd97376af9f/60b258bg299917402992601b/sample_logo.png
```

If you replace the image, the URL changes to:

```
https://images.contentstack.io/v3/assets/blt95131ce7919c7429/blt293c6dd97376af9f/60b158bf299917401442602e/new_sample_logo.png
```

However, with a permanent URL, the reference remains consistent, regardless of updates to the asset file. The standard format for a permanent URL is:

```
https://{base_url}/v3/assets/{stack_api_key}/{asset_uid}/{slug}
```

In this format, a **slug** is a customizable, unique identifier that describes your asset:

```
https://images.contentstack.io/v3/assets/blt95131ce7919c7429/blt293c6dd97376af9f/sample_logo.png
```

**Note:** The slug for a permanent URL can contain up to **255 characters**.

## Common questions

### What problem do permanent asset URLs solve?
They ensure a stable reference that remains unchanged even when an asset is updated or replaced, so you don’t need to manually update asset references in entries.

### Can a permanent asset URL be changed after it’s generated?
No. **Warning:** A permanent asset URL can only be generated once and cannot be modified afterward.

### What is the difference between an auto-generated asset URL and a permanent asset URL?
An **Auto-generated asset URL** changes every time the asset is replaced or updated, while a **Permanent asset URL** remains unchanged regardless of replacements or updates.

### How long can the slug be in a permanent asset URL?
**Note:** The slug for a permanent URL can contain up to **255 characters**.