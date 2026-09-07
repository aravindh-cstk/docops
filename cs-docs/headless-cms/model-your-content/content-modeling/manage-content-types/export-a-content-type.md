---
title: "Export a Content Type"
description: "Export Contentstack content type schemas as JSON to back up, share, or reuse models across stacks."
url: /headless-cms/export-a-content-type
uid: blta577eae3aff2020b
---

# Export a Content Type

## Export a Content Type

You can export the JSON schema of any existing [content type](/docs/headless-cms/about-content-types) in your stack.

To export an existing content type, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the "Content Models" icon.
2.  Click the vertical ellipsis in the **Actions** column next to the content type you want to export and select **Export**.

    ![Export_a_Content_Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac165d4a0ba726f5/68dc37aa9355339c46a00901/Export_a_Content_Type.png)


The JSON file downloads to your local system. Changes made to this file are retained when you import it back into Contentstack.

**Note:** Exporting a content type exports only the latest schema version. Version history and comparison data are not included.

Exporting a content type in Contentstack helps you back up schemas, share models across stacks, or reuse configurations in new projects.

## API Reference

To export a content type via API, refer to the [Export a Content Type](/docs/developers/apis/content-management-api/content-types#export-a-content-type) API Request.
