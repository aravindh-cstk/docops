---
title: "Understanding Asset URL"
description: "Learn about Contentstack asset URLs, their structure, components, and how to create permanent URLs for consistent asset referencing."
url: /headless-cms/understanding-asset-url
---

# Understanding Asset URL

## Understanding Asset URL

When you upload an asset to Contentstack, a public URL is automatically generated for that asset. This URL follows a predefined structure:

```
https://{base_url}/v3/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename
```

Here's the breakdown of the asset URL:

-   base\_url: Indicates the domain used for your asset. Assets can have either of these base URLs:
    -   assets.contentstack.io: Used for generic assets.
    -   images.contentstack.io: Used for image files specifically.
-   stack\_api\_key: The API key of your stack.
-   asset\_uid: A unique identifier for the asset itself. This remains constant even if the asset is updated or replaced.
-   file\_uid: This identifies the specific file instance of the asset. If you [replace](/docs/headless-cms/edit-an-asset) the asset, the asset\_uid stays the same, but the file\_id changes. This reflects that the underlying file has changed.
-   filename: The name of the file, as uploaded.

**Additional Resource:** For assets that are updated frequently, you can [generate a permanent URL](/docs/headless-cms/permanent-asset-urls), which remains constant even when new versions of the asset are uploaded. This ensures consistent references to the asset.
