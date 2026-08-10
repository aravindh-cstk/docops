---
title: "Edit an Asset"
description: "Edit an Asset"
url: /headless-cms/edit-an-asset
---

# Edit an Asset

## Edit an Asset

Editing assets in Contentstack is quick and seamless. You can update titles, descriptions, tags, or replace files while ensuring version control.

To edit an asset, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Assets” icon in the left navigation panel or use the shortcut key “A” (for both Windows and Mac users).
2.  Navigate to the asset you want to modify and update the **title**, **description**, or **tags** as needed.
3.  To replace the asset, click the **Replace** button on the file preview image. Browse your files and upload the new file to replace the existing one.![Edit-an-Asset.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt01a775483567215d/675048eeef6d5aad69229a0b/Edit-an-Asset.gif)
4.  Click **Save** to confirm your updates. The system will automatically create a new version of the asset, maintaining version history.

**Note:**

-   Updates to published assets automatically reflect in [File](/docs/headless-cms/file) and [JSON RTE](/docs/headless-cms/about-json-rich-text-editor) fields.
-   For [HTML RTE](/docs/headless-cms/rich-text-editor), you need to manually update hardcoded URLs unless the asset was added using the [Embed](/docs/headless-cms/rich-text-editor#embed-entries-or-assets-within-html-based-rich-text-editor) option, which updates automatically.
-   In [Markdown](/docs/headless-cms/markdown), manual updates are required.
-   Use [Permanent URLs](/docs/headless-cms/permanent-asset-urls) to ensure consistent references across updates.

## API Reference

To edit an asset via API, refer to the [Update asset](/docs/developers/apis/content-management-api/assets#update-asset) API request.
