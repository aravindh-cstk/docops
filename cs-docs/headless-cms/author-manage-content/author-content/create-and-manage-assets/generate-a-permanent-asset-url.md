---
title: "Generate a Permanent Asset URL"
description: "Learn how to generate permanent asset URLs in Contentstack for stable references, even after asset updates or replacements."
url: /headless-cms/generate-a-permanent-asset-url
uid: bltb2033e19972bb0cf
---

# Generate a Permanent Asset URL

## Generate a Permanent Asset URL

Contentstack allows you to generate a permanent URL for an [asset](/docs/headless-cms/about-assets), ensuring the URL remains unchanged, even if the asset is updated or replaced. This feature eliminates the need to manually update asset references in entries.

To generate a permanent URL for an asset, log in to your [Contentstack account](https://www.contentstack.com/login/), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the **“Assets”** icon. You can also use the shortcut key “A” (for both Windows OS and Mac OS users) to access the assets menu.
2.  Select the asset for which you want to generate a permanent URL.
3.  In the asset panel, click **Generate permanent URL**.

    **Warning:** You can only generate the permanent URL and update asset details **once**. After this, the permanent URL cannot be changed.

4.  Enter a slug for the permanent URL. This slug will be part of the URL path and should describe the asset appropriately.

    **Note:** The maximum length for the slug is **255 characters**.

5.  Click **Save** to finalize and generate the permanent URL.

## API Reference

To generate a permanent URL for assets and use the permanent URLs to fetch files via the API, refer to the following API requests:

-   [Generate permanent asset URL](/docs/developers/apis/content-management-api/assets#generate-permanent-asset-url)
-   [Download an asset with permanent URL](/docs/developers/apis/content-management-api/assets#download-an-asset-with-permanent-url)
