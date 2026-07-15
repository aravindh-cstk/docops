---
title: "[Author Content] - Generate a Permanent Asset URL"
description: Generate a permanent URL for an asset in Contentstack so the URL remains unchanged even if the asset is updated or replaced.
url: https://www.contentstack.com/docs/headless-cms/generate-a-permanent-asset-url
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: current
last_updated: 2026-03-25
---

# [Author Content] - Generate a Permanent Asset URL

This page explains how Contentstack users can generate a permanent URL for an asset so the URL remains unchanged even if the asset is updated or replaced. Content managers and authors should use this when they want stable asset links without needing to manually update asset references in entries.

## Generate a Permanent Asset URL

Contentstack allows you to generate a permanent URL for an [asset](/docs/content-managers/working-with-assets/about-assets), ensuring the URL remains unchanged, even if the asset is updated or replaced. This feature eliminates the need to manually update asset references in entries.

To generate a permanent URL for an asset, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the **“Assets”** icon in the left navigation panel. You can also use the shortcut key “A” (for both Windows OS and Mac OS users) to access the assets menu.
- Select the asset for which you want to generate a permanent URL.
- In the asset panel, click **Generate permanent URL**.

  **Warning:** You can only generate the permanent URL and update asset details **once**. After this, the permanent URL cannot be changed.
- Enter a slug for the permanent URL. This slug will be part of the URL path and should describe the asset appropriately.

  **Note:** The maximum length for the slug is **255 characters**.
- Click **Save** to finalize and generate the permanent URL.

## API Reference

To generate a permanent URL for assets and use the permanent URLs to fetch files via the API, refer to the following API requests:
- [Generate permanent asset URL](../../../api-docs/api-detail/content-management-api.md#generate-permanent-asset-url)
- [Download an asset with permanent URL](../../../api-docs/api-detail/content-management-api.md#download-an-asset-with-permanent-url)

## Common questions

### Can I change the permanent URL after it’s generated?
No. **Warning:** You can only generate the permanent URL and update asset details **once**. After this, the permanent URL cannot be changed.

### What is the maximum length allowed for the slug?
**Note:** The maximum length for the slug is **255 characters**.

### Where do I generate the permanent URL in the UI?
In your stack, open **Assets**, select the asset, and in the asset panel click **Generate permanent URL**.

### How do I use permanent URLs via the API?
Use the API requests listed under **API Reference**: **Generate permanent asset URL** and **Download an asset with permanent URL**.