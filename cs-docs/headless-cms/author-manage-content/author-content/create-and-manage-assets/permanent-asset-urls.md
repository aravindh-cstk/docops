---
title: "About Permanent Asset URLs"
description: "Learn about permanent asset URLs in Contentstack, ensuring stable references for assets even after updates or replacements."
url: /headless-cms/permanent-asset-urls
uid: blt5307302aed4d91ca
---

# About Permanent Asset URLs

## About Permanent Asset URLs

Contentstack allows you to assign a permanent URL to an [asset](/docs/headless-cms/about-assets), ensuring a stable reference that remains unchanged even when an asset is updated or replaced. With permanent URLs, you don’t need to manually update asset references in entries after making changes to the asset.

When you [generate a permanent URL](/docs/headless-cms/generate-a-permanent-asset-url), you can access the same asset using the following URLs:

-   **Auto-generated asset URL**: The default URL for the asset, which changes every time the asset is replaced or updated.
-   **Permanent asset URL**: A constant, non-editable URL that remains unchanged, regardless of any replacements or updates made to the asset file.

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
